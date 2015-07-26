package dewbag.retail.mdm.catalog.repository;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.imageio.ImageIO;

import nandhi.app.exception.AppException;
import nandhi.image.ImageSystem;
import dewbag.retail.mdm.catalog.resource.ProductImage;
import dewbag.retail.mdm.catalog.resource.ProductLineItemImage;

public class ProductImageRepository {

    public static final String PRODUCT_IMG_ROOT = "/imgs/product/";
    public static final String TN_NAME = "tn.jpg";
    private static final String NO_IMAGE = PRODUCT_IMG_ROOT + "no-image.jpg";

    private static final byte BUCKET_SIZE = 100;

    private File mImageHome;
    private int mThumbnailWidth;
    private int mThumbnailHeight;

    public ProductImageRepository(int thumbnailWidth,
                                  int thumbnailHeight) {

        mImageHome = new File("webapps/" + PRODUCT_IMG_ROOT);
        mImageHome.mkdirs();
        mThumbnailWidth = thumbnailWidth;
        mThumbnailHeight = thumbnailHeight;

    }

    public static final String getNoImage() {
        return NO_IMAGE;
    }

    public static int getImageBucket(long productId) {
        return (int) (productId % BUCKET_SIZE);
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

    public String getProductImageRelativePath(long productId) {
        return PRODUCT_IMG_ROOT + getImageBucket(productId) + "/" + productId
                        + "/";
    }

    public String getProductLineItemImageRelativePath(long productId,
                                                  long productItemId) {
        return getProductImageRelativePath(productId) + productItemId + "/";
    }

    private File getProductImageFolder(long productId) {
        int bucket = getImageBucket(productId);
        File targetFolder = new File(mImageHome,
                                     String.valueOf(bucket));
        targetFolder = new File(targetFolder,
                                String.valueOf(productId));

        return targetFolder;
    }

    private File getProductLineItemImageFolder(long productId,
                                           long productItemId) {
        File productImgFolder = getProductImageFolder(productId);
        File productItemImgFolder = new File(productImgFolder,
                                             String.valueOf(productItemId));
        return productItemImgFolder;
    }

    public File storeImage(ProductImage productImage) {

        File imageFile = new File(productImage.getImage());
        File targetFolder = getProductImageFolder(productImage.getProductId());

        File targetFile = storeImage(targetFolder,
                                     imageFile,
                                     productImage.isThumbnail());
        productImage.setImage(targetFile.getAbsolutePath()
                                        .replace('\\',
                                                 '/'));

        String path = targetFile.getAbsolutePath().replace('\\', '/');
        path = path.substring(path.indexOf(PRODUCT_IMG_ROOT));
        productImage.setId(path);
        productImage.setImage(path);
        return targetFile;
    }

    public File storeImage(ProductLineItemImage productItemImage) {

        File imageFile = new File(productItemImage.getImage());
        File imgFolder = getProductLineItemImageFolder(productItemImage.getProductId(),
                                                   productItemImage.getProductLineItemId());

        File targetFile = storeImage(imgFolder,
                                     imageFile,
                                     productItemImage.isThumbnail());
        productItemImage.setImage(targetFile.getAbsolutePath()
                                            .replace('\\',
                                                     '/'));

        String path = targetFile.getAbsolutePath().replace('\\', '/');
        path = path.substring(path.indexOf(PRODUCT_IMG_ROOT));
        productItemImage.setId(path);
        productItemImage.setImage(path);
        return targetFile;

    }

    public String getThumbNailImageRelativePath(long productId,
                                                long productItemId) {
        File imgFolder = getProductLineItemImageFolder(productId,
                                                   productItemId);
        File tnImg = new File(imgFolder,
                              TN_NAME);
        if (tnImg.exists()) {
            return getProductLineItemImageRelativePath(productId,
                                                   productItemId) + TN_NAME;
        }

        imgFolder = getProductImageFolder(productId);
        tnImg = new File(imgFolder,
                         TN_NAME);
        if (tnImg.exists()) {
            return getProductImageRelativePath(productId) + TN_NAME;
        }

        return "/imgs/noimage.gif";
    }

    public List<ProductImage> getProductImages(long productId) {

        File imgFolder = getProductImageFolder(productId);
        File[] imgFiles = imgFolder.listFiles();

        if (imgFiles == null) {
            return new ArrayList<ProductImage>(0);
        }

        List<ProductImage> productImages = new ArrayList<ProductImage>(imgFiles.length);

        for (File imgFile : imgFiles) {
            String name = imgFile.getName();
            if (imgFile.isFile() && !name.equals(TN_NAME)) {
                productImages.add(new ProductImage(productId + "/" + name,
                                                   productId,
                                                   getProductImageRelativePath(productId)
                                                                   + name));
            }
        }

        return productImages;
    }

    public List<ProductLineItemImage> getProductLineItemImages(long productId,
                                                       long productItemId) {

        File imgFolder = getProductLineItemImageFolder(productId,
                                                   productItemId);
        File[] imgFiles = imgFolder.listFiles();

        if (imgFiles == null) {
            return new ArrayList<ProductLineItemImage>(0);
        }

        List<ProductLineItemImage> productImages = new ArrayList<ProductLineItemImage>(imgFiles.length);

        for (File imgFile : imgFiles) {
            String name = imgFile.getName();
            if (imgFile.isFile() && !name.equals(TN_NAME)) {
                productImages.add(new ProductLineItemImage(productId
                                                                       + "/"
                                                                       + productItemId
                                                                       + "/"
                                                                       + name,
                                                       productId,
                                                       productItemId,
                                                       getProductLineItemImageRelativePath(productId,
                                                                                       productItemId)
                                                                       + name));
            }
        }

        return productImages;
    }

    public void deleteProductImage(String id) {
        String[] parts = id.split("/");
        File imgDir = getProductImageFolder(Long.parseLong(parts[0]));
        File imgFile = new File(imgDir,
                                parts[1]);
        imgFile.delete();
    }

    public void deleteProductLineItemImage(String id) {
        String[] parts = id.split("/");
        File imgDir = getProductLineItemImageFolder(Long.parseLong(parts[0]),
                                                Long.parseLong(parts[1]));
        File imgFile = new File(imgDir,
                                parts[2]);
        imgFile.delete();
    }
}
