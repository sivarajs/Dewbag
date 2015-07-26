package nandhi.app.ui.view.renderer.html.component.table;

import java.io.IOException;

import nandhi.app.ui.component.table.Column;
import nandhi.app.ui.component.table.EntityTable;
import nandhi.app.ui.view.expr.ObjectFieldExpressionParser;
import nandhi.app.ui.view.expr.ViewExpressionParser;
import nandhi.app.ui.view.renderer.html.ForEachEntityView;
import nandhi.el.EL;
import nandhi.lang.JavaClass;

public class EntityTableView extends ForEachEntityView<Object> {

    private static final String NO_RESOURCES_MSG = "No items found";

    private EntityTable mEntityTable;
    private boolean mIsEven;
    private int mIndex;

    public EntityTableView(EntityTable entityTable) {
        super(entityTable.getEntity(),
              entityTable.getFilter());

        mEntityTable = entityTable;
    }

    @Override
    protected void writeNoEntity() throws IOException {
        mHtmlBuilder.addHtmlText("<tr height='100' valign='middle' class='noItems'><td align='center'><div style='line-height:100px;text-align:center'> -- "
                        + NO_RESOURCES_MSG
                        + " -- </div></td></tr></tbody></table>");
    }

    @Override
    protected void writeEntity(Object resource) throws IOException {

        mHtmlBuilder.startElement("tr")
                    .addAttribute("valign",
                                  "middle");

        if (mIsEven) {
            mHtmlBuilder.addAttribute("class",
                                      "even");
        }

        Object pid = JavaClass.getFieldValue(resource,
                                             "id");
        mHtmlBuilder.addAttribute("rid",
                                  pid);

        for (Column column : mEntityTable.getColumns()) {

            mHtmlBuilder.startElement("td");

            if (column.isNumberable()) {
                mHtmlBuilder.addAttribute("width",
                                          "20")
                            .startElement("div")
                            .addAttribute("class",
                                          "numberable")
                            .addText(String.valueOf(++mIndex));
            }

            else if (column.isRemoveable()) {
                mHtmlBuilder.addAttribute("width",
                                          "20")
                            .startElement("div")
                            .addAttribute("class",
                                          "removeable");
            }
            else {
                mHtmlBuilder.addAttribute("width",
                                          column.getWidth())
                            .startElement("div")
                            .addAttribute("style",
                                          "width:" + column.getWidth()
                                                          + "px;text-align:"
                                                          + column.getAlign());

                String value = column.getValue();
                if (value != null) {
                    value = ViewExpressionParser.parseText(value,
                                                           this);

                    String href = column.getHref();
                    if (href != null) {

                        mHtmlBuilder.startElement("a")
                                    .addText(" href='",
                                             false);

                        if (EL.containsBindVariable(href)) {

                            EL.parseText(href,
                                         new ObjectFieldExpressionParser(mHtmlBuilder,
                                                                         resource));
                        }

                        mHtmlBuilder.addText("'",
                                             false)
                                    .addText(value)
                                    .endElement();
                    }
                    else {

                        if (column.isEditable()) {
                            String width = column.getWidth();
                            if (width == null) {
                                width = "20";
                            }

                            String onchange = column.getOnInputChange();

                            if (onchange != null) {
                                onchange += "(this);";
                            }

                            mHtmlBuilder.startElement("input")
                                        .addClassAttribute("editable")
                                        .addAttribute("rid",
                                                      pid)
                                        .addAttribute("onchange",
                                                      onchange)
                                        .addAttribute("value",
                                                      value);
                        }
                        else {
                            mHtmlBuilder.addText(value);
                        }
                    }
                }

            }
            mHtmlBuilder.endElement();
        }

        mHtmlBuilder.endElement();
        mIsEven = !mIsEven;

    }
}
