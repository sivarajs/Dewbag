package nandhi.app.ui.view.renderer.html.component.menu;

import java.io.IOException;

import nandhi.app.entity.EntityHierarchy.Folder;
import nandhi.app.entity.EntityHierarchy.Item;
import nandhi.app.ui.component.menu.EntityMenu;
import nandhi.app.ui.view.renderer.html.HierarchicalEntityView;
import app.core.bo.HierarchicalEntity;

public class EntityMenuView extends HierarchicalEntityView {

    public EntityMenuView(EntityMenu entityMenu) {
        super(entityMenu.getEntity(),
              entityMenu.getFilter());
    }

    @Override
    protected void postWriteEntity() throws IOException {

        Folder root = mEntityHierarchy.buildFolders();
        addFolder(root);
    }

    private void addFolder(Folder folder) {

        if (!folder.isEmpty()) {

            mHtmlBuilder.startElement("ul");

            for (Item item : folder.getItems()) {

                mHtmlBuilder.startElement("li");

                if (item.hierarchicalEntity instanceof HierarchicalEntity) {
                    String viewUri = ((HierarchicalEntity) item.hierarchicalEntity).getViewUri();
                    if (viewUri != null) {
                        mHtmlBuilder.addAttribute("onclick",
                                                 "loadContent('" + viewUri
                                                                 + "')");
                    }
                }

                mHtmlBuilder.startElement("div")
                           .startElement("div")
                           .addClassAttribute(item.hierarchicalEntity.getKind())

                           .startElement("a")
                           .addAttribute("href",
                                         "javascript:;")
                           .addText(item.label)
                           .endElement()
                           .endElement()
                           .endElement();

                if (item instanceof Folder) {
                    addFolder((Folder) item);
                }

                mHtmlBuilder.endElement();
            }

            mHtmlBuilder.endElement();
        }

    }
}
