package nandhi.app.ui.view.renderer.html;

import java.io.IOException;
import java.util.List;

import nandhi.app.ui.exception.UIException;
import nandhi.app.ui.view.UIView;
import nandhi.app.ui.view.expr.ViewExpressionParser;
import nandhi.el.EL;

public class SingleEntityView extends HtmlView {

    private String mEntityName;
    private String mFilter;
    private boolean mIngoreIfNotAvailable;
    private String mVariable;

    protected HtmlBuilder htmlBuilder;

    public SingleEntityView(String entityName,
                            String filter) {
        this(entityName,
             filter,
             false);
    }

    public SingleEntityView(String entityName,
                            String filter,
                            boolean ingoreIfNotAvailable) {
        mEntityName = entityName;
        mFilter = filter;
        mIngoreIfNotAvailable = ingoreIfNotAvailable;

        mVariable = Character.toLowerCase(entityName.charAt(0))
                        + entityName.substring(1);

        htmlBuilder = new HtmlBuilder();
    }

    @Override
    protected void buildHtml() throws IOException {

        String filter = mFilter;

        if (filter != null && EL.containsBindVariable(filter)) {

            // try {
            filter = ViewExpressionParser.parseText(filter,
                                                    this,
                                                    true);
            // } catch (AppException e) {
            // e.printStackTrace();
            // }
        }

        List<Object> resources = mEntityDataProvider.getEntities(mEntityName,
                                                                 filter);

        Object entity = null;
        if (resources != null && !resources.isEmpty()) {
            entity = resources.get(0);
            setVariable(mVariable,
                        entity);
            // TODO workaround is for entityForm
            if (getParent() != null) {
                getParent().setVariable(mVariable,
                                        entity);
            }

            UIView parentView = getParent();
            while (parentView != null) {
                parentView.setVariable(mVariable, entity);
                parentView = parentView.getParent();
            }
        }
        else {

            if (!mIngoreIfNotAvailable) {
                throw new UIException("111",
                                      "Unable to find '" + mEntityName
                                                      + "' with filter '"
                                                      + filter + "'");
            }
        }

    }
}
