package app.store.image;

public class EntityImage {

    private String id;
    private long entityId;
    private String image;
    private String isThumbnail;

    public EntityImage() {

    }

    public EntityImage(String id,
                       long entityId,
                       String image) {
        this.id = id;
        this.entityId = entityId;
        this.image = image;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public long getEntityId() {
        return entityId;
    }

    public void setEntityId(long entityId) {
        this.entityId = entityId;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public boolean isThumbnail() {
        return "Y".equalsIgnoreCase(isThumbnail);
    }

    public void setIsThumbnail(boolean isThumbnail) {
        this.isThumbnail = isThumbnail ? "Y" : "N";
    }
}
