package nandhi.app.entity;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import app.core.bo.AppHierarchicalEntity;
import app.core.bo.HierarchicalEntity;

public class EntityHierarchy {

    private Folder mRootFolder;

    private Map<Object, AppHierarchicalEntity> mHierarchicalMap = new LinkedHashMap<Object, AppHierarchicalEntity>();

    public EntityHierarchy() {
        mRootFolder = new Folder(new Root());
    }

    public EntityHierarchy(AppHierarchicalEntity hierarchicalEntity) {
        mRootFolder = new Folder(hierarchicalEntity);
    }

    public void addHierarchicalEntity(AppHierarchicalEntity hierarchicalEntity) {

        mHierarchicalMap.put(hierarchicalEntity.getId(),
                             hierarchicalEntity);
    }

    public Folder buildFolders() {
        buildFolders(mRootFolder,
                     0);
        return mRootFolder;
    }

    private void buildFolders(Folder parentFolder,
                              int depth) {

        for (AppHierarchicalEntity hierarchicalEntity : mHierarchicalMap.values()) {

            Object parentId = hierarchicalEntity.getParentId();

            if ((parentId == null && parentFolder == mRootFolder)
                            || (parentId != null && parentId.equals(parentFolder.id))) {

                Folder childFolder = new Folder(hierarchicalEntity,
                                                depth);
                parentFolder.addItem(childFolder);
                buildFolders(childFolder,
                             depth + 1);
            }
        }
    }

    private class Root extends HierarchicalEntity {

        public Root() {

        }
    }

    public class Folder extends Item {
        private int depth;
        private List<Item> items;

        public Folder(AppHierarchicalEntity hierarchicalEntity) {
            this(hierarchicalEntity,
                 (short) 0);
        }

        public Folder(AppHierarchicalEntity hierarchicalEntity,
                      int depth) {

            super(hierarchicalEntity);
            items = new ArrayList<Item>();
            this.depth = depth;
        }

        public void addItem(Item item) {

            items.add(item);
            item.parent = this;
        }

        public boolean isEmpty() {
            return items.isEmpty();
        }

        public List<Item> getItems() {
            return items;
        }

        public int getDepth() {
            return depth;
        }

        public Folder getFolder(String label) {

            for (Item item : items) {
                if ((item instanceof Folder) && (item.label.equals(label))) {
                    return (Folder) item;
                }

            }

            return null;
        }
    }

    public class Item {
        public Object id;
        public String label;
        public Folder parent;
        public AppHierarchicalEntity hierarchicalEntity;

        public Item(AppHierarchicalEntity hierarchicalEntity) {

            this.id = hierarchicalEntity.getId();
            this.label = hierarchicalEntity.getName();
            this.hierarchicalEntity = hierarchicalEntity;
        }

        public String getQualifiedName() {

            StringBuilder strBuilder = new StringBuilder("/");

            strBuilder.append(hierarchicalEntity.getName());

            Folder parentFolder = parent;

            while (parentFolder != null) {

                if (!parentFolder.label.equals("/")) {
                    strBuilder.insert(0,
                                      parentFolder.label)
                              .insert(0,
                                      "/");
                }

                parentFolder = parentFolder.parent;
            }

            return strBuilder.toString();
        }
    }
}
