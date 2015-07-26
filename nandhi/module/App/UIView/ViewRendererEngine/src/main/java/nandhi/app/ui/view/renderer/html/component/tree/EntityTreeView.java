package nandhi.app.ui.view.renderer.html.component.tree;

import java.io.IOException;

import nandhi.app.entity.EntityHierarchy.Folder;
import nandhi.app.entity.EntityHierarchy.Item;
import nandhi.app.ui.component.tree.EntityTree;
import nandhi.app.ui.view.renderer.html.HierarchicalEntityView;
import nandhi.el.EL;

public class EntityTreeView extends HierarchicalEntityView {

    private String mOnClick;

    public EntityTreeView(EntityTree entityTree) {
        super("/",
              entityTree.getEntity(),
              entityTree.getFilter());

        mOnClick = "loadContentRight('" + entityTree.getContentURL() + "')";
    }

    @Override
    protected void postWriteEntity() throws IOException {

        Folder root = mEntityHierarchy.buildFolders();
        mHtmlBuilder.startElement("ul");
        addItem(root);
        mHtmlBuilder.endElement();
    }

    private void addFolder(Folder folder) {

        if (!folder.isEmpty()) {

            mHtmlBuilder.startElement("ul");
            for (Item item : folder.getItems()) {

                addItem(item);
            }

            mHtmlBuilder.endElement();
        }

    }

    private void addItem(Item item) {

        boolean isFolder = (item instanceof Folder);

        mHtmlBuilder.startElement("li");

        mHtmlBuilder.startElement("div")
                    .addAttribute("href",
                                  EL.parseText(mOnClick,
                                               item.hierarchicalEntity));
        if (isFolder) {
            mHtmlBuilder.addClassAttribute("treeNode folder collapsed");
        }
        else {
            mHtmlBuilder.addClassAttribute("treeNode");
        }

        mHtmlBuilder.startElement("div")
                    .addClassAttribute(item.hierarchicalEntity.getKind())

                    .startElement("a")
                    .addAttribute("href",
                                  "javascript:;")
                    .addText(item.label)
                    .endElement()
                    .endElement()
                    .endElement();

        if (isFolder) {
            addFolder((Folder) item);
        }

        mHtmlBuilder.endElement();
    }
}
