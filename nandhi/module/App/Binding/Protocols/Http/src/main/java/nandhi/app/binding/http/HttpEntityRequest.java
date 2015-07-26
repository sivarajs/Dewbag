package nandhi.app.binding.http;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import nandhi.app.mediatype.DataMediaType;
import nandhi.app.mediatype.MediaTypeFactory;
import nandhi.lang.JavaClass;
import nandhi.sys.FileSystem;

import org.apache.commons.fileupload.FileItemIterator;
import org.apache.commons.fileupload.FileItemStream;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.apache.commons.fileupload.util.Streams;

public class HttpEntityRequest extends HttpAppRequest {

    static final String RESOURCE_URL_PATH = "/bo/";

    private static final File mTempFolder = new File("webapps/imgs/TEMP/");

    private String mEntityName;
    private Object mEntityId;

    static {
        mTempFolder.mkdirs();
    }

    public HttpEntityRequest(HttpServletRequest request,
                             HttpServletResponse response) throws UnsupportedEncodingException {

        super(request.getRequestURI(),
              request,
              response);

        parse(request.getPathInfo());
    }

    public String getEntityName() {

        return this.mEntityName;
    }

    public Object getEntityId() {

        return this.mEntityId;
    }

    public Object getEntity(Class<?> entityClass) throws IOException {

        Object resource = null;

        if (ServletFileUpload.isMultipartContent(mRequest)) {

            ServletFileUpload fileUpload = new ServletFileUpload();

            try {
                resource = entityClass.newInstance();

                FileItemIterator iter = fileUpload.getItemIterator(mRequest);
                while (iter.hasNext()) {

                    FileItemStream item = iter.next();
                    String paramName = item.getFieldName();
                    String paramValue = null;

                    InputStream inputStream = null;

                    try {
                        inputStream = item.openStream();
                        if (item.isFormField()) {
                            paramValue = Streams.asString(inputStream);
                        }
                        else {

                            String imageFile = item.getName();
                            int index = imageFile.indexOf(".");

                            if (index >= 0) {

                                File file = new File(mTempFolder,
                                                     imageFile);
                                FileSystem.transfer(inputStream,
                                                    file);

                                paramValue = file.getAbsolutePath();
                            }
                        }
                    } finally {
                        FileSystem.close(inputStream);
                    }

                    paramName = paramName.substring(paramName.indexOf('.') + 1);

                    JavaClass.setFieldValue(resource,
                                            paramName,
                                            paramValue,
                                            true);

                }
            } catch (Exception e) {
                throw new IOException(e);
            }
        }
        else {

            String data = FileSystem.read(mRequest.getInputStream());

            System.out.println("Posted Data : " + data);

            if (data == null || data.trim()
                                    .length() == 0) {
                throw new RuntimeException("No data provided to post");
            }

            DataMediaType mediaType = MediaTypeFactory.getMediaType(mRequest.getContentType());
            resource = mediaType.decode(data,
                                        entityClass);
        }

        return resource;

    }

    private void parse(String path) {

        if (path == null || path.trim()
                                .length() == 0) {
            throw new IllegalArgumentException("Invalid resource path : "
                            + path);
        }

        path = path.substring(1);
        int index = path.indexOf("/");

        if (index >= 0) {

            mEntityName = path.substring(0,
                                         index);
            String id = path.substring(index + 1);

            try {
                mEntityId = new Long(id);
            } catch (Exception ex) {
                mEntityId = id;
            }

        }
        else {
            mEntityName = path;
        }
    }
}
