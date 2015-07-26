package app.store.image;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FilenameFilter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.imageio.ImageIO;

import nandhi.app.exception.AppException;
import nandhi.image.ImageSystem;

public class EntityImageStore<T extends EntityImage> {

    public static final String TN_NAME = "tn.jpg";

    private static final byte BUCKET_SIZE = 100;

    private Class<T> mEntityClass;
    private String mImageRelativeHome;
    private File mImageHome;
    private int mThumbnailWidth;
    private int mThumbnailHeight;

    public EntityImageStore(Class<T> entityClass,
                            String contextRoot,
                            String imageRelativeHome,
                            int thumbnailWidth,
                            int thumbnailHeight) {

        mEntityClass = entityClass;
        mImageRelativeHome = imageRelativeHome;
        mImageHome = new File(contextRoot,
                              imageRelativeHome);
        mImageHome.mkdirs();

        mThumbnailWidth = thumbnailWidth;
        mThumbnailHeight = thumbnailHeight;
    }

    public static int getImageBucket(long entityId) {
        return (int) (entityId % BUCKET_SIZE);
    }

    private File storeImage(File targetFolder,
                            File imageFile,
                            boolean isThumbnail) {

        targetFolder.mkdirs();

        try {

            if (isThumbnail) {
                File tnFile = new File(targetFolder,
                                       TN_NAME);

                if (tnFile.exists()) {
                    tnFile.delete();
                }

                BufferedImage bufferedImage = ImageIO.read(imageFile);

                int width = bufferedImage.getWidth();

                float widthPer = 0F;
                if (width > mThumbnailWidth) {
                    widthPer = (float) mThumbnailWidth / width;
                }

                int height = bufferedImage.getHeight();
                float heightPer = 0F;
                if (height > mThumbnailHeight) {
                    heightPer = (float) mThumbnailHeight / height;
                }

                float percent = 0F;
                if (widthPer == 0F && heightPer == 0F) {
                    percent = 0;
                }

                else if (widthPer == 0F) {
                    percent = heightPer;
                }
                else if (heightPer == 0F) {
                    percent = widthPer;
                }
                else {
                    percent = (widthPer < heightPer) ? widthPer : heightPer;
                }

                if (percent > 0) {

                    width = Math.round(width * percent);
                    height = Math.round(height * percent);

                }

                ImageSystem.resize(imageFile,
                                   tnFile,
                                   width,
                                   height);

            }
            File targetFile = new File(targetFolder,
                                       imageFile.getName());
            imageFile.renameTo(targetFile);
            return targetFile;

        } catch (IOException e) {
            throw new AppException("111",
                                   e);
        }

    }

    public String getEntityImageRelativePath(long entityId) {
        return mImageRelativeHome + getImageBucket(entityId) + "/" + entityId
                        + "/";
    }

    private File getEntityImageFolder(long entityId) {
        int bucket = getImageBucket(entityId);
        File targetFolder = new File(mImageHome,
                                     String.valueOf(bucket));
        targetFolder = new File(targetFolder,
                                String.valueOf(entityId));

        return targetFolder;
    }

    public File storeImage(EntityImage entityImage) {

        File imageFile = new File(entityImage.getImage());
        File targetFolder = getEntityImageFolder(entityImage.getEntityId());

        File targetFile = storeImage(targetFolder,
                                     imageFile,
                                     entityImage.isThumbnail());
        entityImage.setImage(targetFile.getAbsolutePath()
                                       .replace('\\',
                                                '/'));

        String path = targetFile.getAbsolutePath()
                                .replace('\\',
                                         '/');
        path = path.substring(path.indexOf(mImageRelativeHome));
        entityImage.setId(path);
        entityImage.setImage(path);
        return targetFile;
    }

    public String getThumbNailImageRelativePath(long entityId) {
        File imgFolder = getEntityImageFolder(entityId);
        File tnImg = new File(imgFolder,
                              TN_NAME);
        if (tnImg.exists()) {
            return getEntityImageRelativePath(entityId) + TN_NAME;
        }

        return "/imgs/noimage.gif";
    }

    public T getEntityThumbNailImage(long entityId) {
        
        File imgFolder = getEntityImageFolder(entityId);
        File[] imgFiles = imgFolder.listFiles(new FilenameFilter() {
            
            @Override
            public boolean accept(File dir,
                                  String name) {
                return name.equals(TN_NAME);
            }
        });
        if (imgFiles == null || imgFiles.length == 0) {
            return null;
        }
        
        return getEntity(entityId, imgFiles[0]);
    }
    
    public List<T> getEntityImages(long entityId) {

        File imgFolder = getEntityImageFolder(entityId);
        File[] imgFiles = imgFolder.listFiles();

        if (imgFiles == null) {
            return new ArrayList<T>(0);
        }

        List<T> productImages = new ArrayList<T>(imgFiles.length);

        for (File imgFile : imgFiles) {
            String name = imgFile.getName();
            if (imgFile.isFile() && !name.equals(TN_NAME)) {
                productImages.add(getEntity(entityId, imgFile));
            }
        }

        return productImages;
    }
    
    private T getEntity(long entityId, File imgFile) {
        String name = imgFile.getName();
        T entity = null;
        try {
            entity = mEntityClass.newInstance();
        } catch (Exception e) {
            e.printStackTrace();
        }
        entity.setId(entityId + "/" + name);
        entity.setEntityId(entityId);
        entity.setImage(getEntityImageRelativePath(entityId) + name);
        
        return entity;
    }
    
    public void deleteEntityImage(String id) {
        String[] parts = id.split("/");
        File imgDir = getEntityImageFolder(Long.parseLong(parts[0]));
        File imgFile = new File(imgDir,
                                parts[1]);
        imgFile.delete();
    }

}
