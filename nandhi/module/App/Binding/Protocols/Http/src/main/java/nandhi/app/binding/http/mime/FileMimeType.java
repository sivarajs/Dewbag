package nandhi.app.binding.http.mime;

import java.io.File;
import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import nandhi.sys.FileSystem;

public class FileMimeType extends MimeType<File> {

    private String mContentType;

    public FileMimeType(String contentType) {
        mContentType = contentType;
    }

    public void reply(HttpServletResponse response,
                      File file) throws IOException {
        response.setContentType(mContentType);
        response.setHeader("content-disposition",
                           "filename=" + file.getName());
        response.setHeader("pragma",
                           "public");
        FileSystem.transfer(file,
                            response.getOutputStream());

        response.flushBuffer();

    }
}
