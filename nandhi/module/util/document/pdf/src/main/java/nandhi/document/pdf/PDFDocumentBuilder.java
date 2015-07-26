package nandhi.document.pdf;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

import nandhi.sys.OS;

import org.apache.pdfbox.exceptions.COSVisitorException;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.edit.PDPageContentStream;
import org.apache.pdfbox.pdmodel.font.PDFont;
import org.apache.pdfbox.pdmodel.font.PDType1Font;
import org.apache.pdfbox.pdmodel.graphics.xobject.PDJpeg;
import org.apache.pdfbox.pdmodel.graphics.xobject.PDXObjectImage;

public class PDFDocumentBuilder {

    private File mPDFFile;
    private PDDocument mPDDocument;
    private PDPage mPDPage;
    private PDPageContentStream mPDPageContentStream;
    private PDFont mPDFont;
    private int mPDFontSize;

    public PDFDocumentBuilder(File pdfFile) throws IOException {
        this(pdfFile,
             PDType1Font.HELVETICA,
             7);
    }

    public PDFDocumentBuilder(File pdfFile,
                              PDFont font,
                              int fontSize) throws IOException {
        mPDFFile = pdfFile;
        mPDFont = font;
        mPDFontSize = fontSize;

        mPDDocument = new PDDocument();

        mPDPage = new PDPage();
        mPDDocument.addPage(mPDPage);
        mPDPageContentStream = new PDPageContentStream(mPDDocument,
                                                       mPDPage,
                                                       true,
                                                       true);
    }

    public void addImage(File imgFile,
                         float x,
                         float y) throws IOException {

        String imgFileName = imgFile.getName()
                                    .toLowerCase();
        PDXObjectImage ximage = null;
        if (imgFileName.endsWith(".jpg")) {
            ximage = new PDJpeg(mPDDocument,
                                new FileInputStream(imgFile));
        }
        else {
            throw new IOException("Image type not supported: " + imgFile);
        }
        mPDPageContentStream.drawImage(ximage,
                                       x,
                                       y);

    }

    public void drawLine(float x, float y) throws IOException {
        mPDPageContentStream.drawLine(x, y, x+1000, y);
    }
    
    public void addString(String text,
                          float x,
                          float y) throws IOException {
        mPDPageContentStream.beginText();
        mPDPageContentStream.setFont(mPDFont,
                                     mPDFontSize);
        mPDPageContentStream.moveTextPositionByAmount(x,
                                                      y);
        mPDPageContentStream.drawString(text);
        mPDPageContentStream.endText();

    }

    public void addString(String text,
                          PDFont font,
                          int size,
                          float x,
                          float y) throws IOException {
        mPDPageContentStream.beginText();
        mPDPageContentStream.setFont(font,
                                     size);
        mPDPageContentStream.moveTextPositionByAmount(x,
                                                      y);
        mPDPageContentStream.drawString(text);
        mPDPageContentStream.endText();

    }

    public void finish() throws IOException {
        mPDPageContentStream.close();

        try {
            mPDDocument.save(mPDFFile);
        } catch (COSVisitorException e) {
            throw new IOException(e);
        }
        mPDDocument.close();
    }

    public static void main(String[] args) throws IOException {
        PDFDocumentBuilder pdfDocumentBuilder = new PDFDocumentBuilder(new File("C:/temp/test.pdf"));
        pdfDocumentBuilder.addString("Invoice",
                                     PDType1Font.HELVETICA_BOLD,
                                     14,
                                     250,
                                     750);
        pdfDocumentBuilder.addImage(new File("C:/application/apache-tomcat-7.0.34/webapps/ROOT/common/img/slogo.jpg"),
                                    10,
                                    675);
        pdfDocumentBuilder.addString("DewBag Retail Private Limited",
                                     150,
                                     720);
        
        pdfDocumentBuilder.addString("138/13 1st Cross, NS Palaya,Bannerghatta Road,Bangalore - 560078. Phone - 2678 0209",
                                     150,
                                     710);
        
        pdfDocumentBuilder.addString("TIN : 29550684384",
                                     150,
                                     700);
        
        pdfDocumentBuilder.drawLine(1, 690);
        
        pdfDocumentBuilder.addString("Invoice No. :",
                                     10,
                                     680);
        
        pdfDocumentBuilder.addString("Invoice Date :",
                                     10,
                                     670);
        pdfDocumentBuilder.addString("Order No. :",
                                     10,
                                     660);
        pdfDocumentBuilder.addString("Delivery Date :",
                                     10,
                                     650);
        pdfDocumentBuilder.addString("Delivery Slot :",
                                     10,
                                     640);
        
        
        pdfDocumentBuilder.addString("Delivery Address :",
                                     PDType1Font.HELVETICA_BOLD,
                                     8,
                                     400,
                                     680);
        
        pdfDocumentBuilder.addString("Address 1 ",
                                     400,
                                     670);
        
        pdfDocumentBuilder.finish();
    }

}
