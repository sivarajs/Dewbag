package nandhi.app.ui.view.renderer.html;

import java.io.IOException;
import java.util.List;

import nandhi.app.exception.AppException;
import nandhi.app.ui.view.expr.ViewExpressionParser;

public abstract class ForEachEntityView<T> extends HtmlView {

    protected String mEntityName;
    protected String mFilter;

    private String mVariable;

    public ForEachEntityView(String entityName,
                             String filter) {
        mEntityName = entityName;
        mFilter = filter;

        mVariable = Character.toLowerCase(entityName.charAt(0))
                        + entityName.substring(1);
    }

    protected void buildHtmlView() throws IOException {
        super.buildHtml();
    }

    @SuppressWarnings("unchecked")
    @Override
    protected void buildHtml() throws IOException {

        preFetchEntity();
        
        String filter = null;
        if (mFilter != null) {

            try {
                filter = ViewExpressionParser.parseText(mFilter,
                                                        this,
                                                        true);
            } catch (AppException e) {
                e.printStackTrace();
            }
        }

        List<Object> resources = mEntityDataProvider.getEntities(mEntityName,
                                                                 filter);

        preWriteEntity();
        if (resources == null || resources.isEmpty()) {
            writeNoEntity();
        }
        else {
            for (Object resource : resources) {
                setVariable(mVariable,
                            resource);
                writeEntity((T) resource);
            }
        }

        postWriteEntity();
    }

    protected abstract void writeNoEntity() throws IOException;

    protected abstract void writeEntity(T entity) throws IOException;

    protected void preFetchEntity() throws IOException {

    }
    
    protected void preWriteEntity() throws IOException {

    }

    protected void postWriteEntity() throws IOException {

    }
}
