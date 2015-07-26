package nandhi.app.ui.view.renderer.html.registry;

import nandhi.app.ui.component.UIComponent;
import nandhi.app.ui.component.Variable;
import nandhi.app.ui.component.dialog.Dialog;
import nandhi.app.ui.component.entity.UIEntity;
import nandhi.app.ui.component.form.EntityForm;
import nandhi.app.ui.component.grid.EntityGrid;
import nandhi.app.ui.component.image.GraphicImage;
import nandhi.app.ui.component.image.Image;
import nandhi.app.ui.component.image.ImageGallery;
import nandhi.app.ui.component.input.InputDate;
import nandhi.app.ui.component.input.InputDecimal;
import nandhi.app.ui.component.input.InputFile;
import nandhi.app.ui.component.input.InputHidden;
import nandhi.app.ui.component.input.InputInt;
import nandhi.app.ui.component.input.InputRuledTextarea;
import nandhi.app.ui.component.input.InputSecret;
import nandhi.app.ui.component.input.InputText;
import nandhi.app.ui.component.input.InputTextarea;
import nandhi.app.ui.component.input.button.CommandButton;
import nandhi.app.ui.component.input.select.SelectBooleanCheckBox;
import nandhi.app.ui.component.input.select.SelectOneEntityMenu;
import nandhi.app.ui.component.menu.EntityMenu;
import nandhi.app.ui.component.message.Message;
import nandhi.app.ui.component.output.OutputLink;
import nandhi.app.ui.component.output.OutputText;
import nandhi.app.ui.component.panel.PanelGrid;
import nandhi.app.ui.component.panel.PanelGridSection;
import nandhi.app.ui.component.panel.PanelGroup;
import nandhi.app.ui.component.popup.Popup;
import nandhi.app.ui.component.popup.PopupLink;
import nandhi.app.ui.component.social.fb.FBComments;
import nandhi.app.ui.component.social.fb.FBLogin;
import nandhi.app.ui.component.social.google.GoogleLogin;
import nandhi.app.ui.component.social.google.GoogleMaps;
import nandhi.app.ui.component.splitpane.SplitPane;
import nandhi.app.ui.component.splitpane.Splitter;
import nandhi.app.ui.component.tab.Tab;
import nandhi.app.ui.component.tab.Tabs;
import nandhi.app.ui.component.table.Column;
import nandhi.app.ui.component.table.Columns;
import nandhi.app.ui.component.table.EntityTable;
import nandhi.app.ui.component.template.Parameter;
import nandhi.app.ui.component.template.Template;
import nandhi.app.ui.component.toolbar.Toolbar;
import nandhi.app.ui.component.toolbar.ToolbarCommand;
import nandhi.app.ui.component.toolbar.ToolbarSeparator;
import nandhi.app.ui.component.tree.EntityTree;
import nandhi.app.ui.component.tree.NavEntityTree;
import nandhi.app.ui.component.widget.TimeSlot;
import nandhi.app.ui.view.renderer.html.component.VariableRenderer;
import nandhi.app.ui.view.renderer.html.component.dialog.HtmlDialogRenderer;
import nandhi.app.ui.view.renderer.html.component.entity.HtmlEntityRenderer;
import nandhi.app.ui.view.renderer.html.component.form.HtmlEntityFormRenderer;
import nandhi.app.ui.view.renderer.html.component.grid.HtmlEntityGridRenderer;
import nandhi.app.ui.view.renderer.html.component.image.HtmlGraphicImageRenderer;
import nandhi.app.ui.view.renderer.html.component.image.HtmlImageGalleryRenderer;
import nandhi.app.ui.view.renderer.html.component.image.HtmlImageRenderer;
import nandhi.app.ui.view.renderer.html.component.input.HtmlInputDateRenderer;
import nandhi.app.ui.view.renderer.html.component.input.HtmlInputDecimalRenderer;
import nandhi.app.ui.view.renderer.html.component.input.HtmlInputFileRenderer;
import nandhi.app.ui.view.renderer.html.component.input.HtmlInputHiddenRenderer;
import nandhi.app.ui.view.renderer.html.component.input.HtmlInputIntRenderer;
import nandhi.app.ui.view.renderer.html.component.input.HtmlInputRuledTextareaRenderer;
import nandhi.app.ui.view.renderer.html.component.input.HtmlInputSecretRenderer;
import nandhi.app.ui.view.renderer.html.component.input.HtmlInputTextRenderer;
import nandhi.app.ui.view.renderer.html.component.input.HtmlInputTextareaRenderer;
import nandhi.app.ui.view.renderer.html.component.input.button.HtmlCommandButtonRenderer;
import nandhi.app.ui.view.renderer.html.component.input.select.HtmlSelectBooleanCheckBoxRenderer;
import nandhi.app.ui.view.renderer.html.component.input.select.HtmlSelectOneEntityMenuRenderer;
import nandhi.app.ui.view.renderer.html.component.menu.HtmlEntityMenuRenderer;
import nandhi.app.ui.view.renderer.html.component.message.HtmlMessageRenderer;
import nandhi.app.ui.view.renderer.html.component.output.HtmlOutputLinkRenderer;
import nandhi.app.ui.view.renderer.html.component.output.HtmlOutputTextRenderer;
import nandhi.app.ui.view.renderer.html.component.panel.HtmlPanelGridRenderer;
import nandhi.app.ui.view.renderer.html.component.panel.HtmlPanelGridSectionRenderer;
import nandhi.app.ui.view.renderer.html.component.panel.HtmlPanelGroupRenderer;
import nandhi.app.ui.view.renderer.html.component.popup.HtmlPopupLinkRenderer;
import nandhi.app.ui.view.renderer.html.component.popup.HtmlPopupRenderer;
import nandhi.app.ui.view.renderer.html.component.social.fb.HtmlFBCommentsRenderer;
import nandhi.app.ui.view.renderer.html.component.social.fb.HtmlFBLoginRenderer;
import nandhi.app.ui.view.renderer.html.component.social.google.HtmlGoogleLoginRenderer;
import nandhi.app.ui.view.renderer.html.component.social.google.HtmlGoogleMapsRenderer;
import nandhi.app.ui.view.renderer.html.component.splitpane.HtmlSplitPaneRenderer;
import nandhi.app.ui.view.renderer.html.component.splitpane.HtmlSplitterRenderer;
import nandhi.app.ui.view.renderer.html.component.tab.HtmlTabRenderer;
import nandhi.app.ui.view.renderer.html.component.tab.HtmlTabsRenderer;
import nandhi.app.ui.view.renderer.html.component.table.HtmlColumnRenderer;
import nandhi.app.ui.view.renderer.html.component.table.HtmlColumnsRenderer;
import nandhi.app.ui.view.renderer.html.component.table.HtmlEntityTableRenderer;
import nandhi.app.ui.view.renderer.html.component.template.HtmlParameterRenderer;
import nandhi.app.ui.view.renderer.html.component.template.HtmlTemplateRenderer;
import nandhi.app.ui.view.renderer.html.component.toolbar.HtmlToolbarCommandRenderer;
import nandhi.app.ui.view.renderer.html.component.toolbar.HtmlToolbarRenderer;
import nandhi.app.ui.view.renderer.html.component.toolbar.HtmlToolbarSeparatorRenderer;
import nandhi.app.ui.view.renderer.html.component.tree.HtmlEntityTreeRenderer;
import nandhi.app.ui.view.renderer.html.component.tree.HtmlNavEntityTreeRenderer;
import nandhi.app.ui.view.renderer.html.component.widget.HtmlTimeSlotRenderer;
import nandhi.app.ui.view.renderer.registry.UIComponentRendererRegistry;
import dewbag.retail.marketing.ui.component.SalesOfferSummary;
import dewbag.retail.marketing.ui.renderer.html.HtmlSalesOfferSummaryRenderer;
import dewbag.retail.mdm.catalog.ui.component.category.CategoryBreadCrumb;
import dewbag.retail.mdm.catalog.ui.component.category.SubCategoryList;
import dewbag.retail.mdm.catalog.ui.component.product.ProductBreadCrumb;
import dewbag.retail.mdm.catalog.ui.component.product.ProductFeatures;
import dewbag.retail.mdm.catalog.ui.component.product.ProductGrid;
import dewbag.retail.mdm.catalog.ui.component.product.ProductImageGallery;
import dewbag.retail.mdm.catalog.ui.component.product.ProductTags;
import dewbag.retail.mdm.catalog.ui.component.product.ThumbnailProductImage;
import dewbag.retail.mdm.catalog.ui.view.renderer.html.category.HtmlCategoryBreadCrumbRenderer;
import dewbag.retail.mdm.catalog.ui.view.renderer.html.category.HtmlSubCategoryListRenderer;
import dewbag.retail.mdm.catalog.ui.view.renderer.html.product.HtmlProductBreadCrumbRenderer;
import dewbag.retail.mdm.catalog.ui.view.renderer.html.product.HtmlProductFeaturesRenderer;
import dewbag.retail.mdm.catalog.ui.view.renderer.html.product.HtmlProductGridRenderer;
import dewbag.retail.mdm.catalog.ui.view.renderer.html.product.HtmlProductImageGalleryRenderer;
import dewbag.retail.mdm.catalog.ui.view.renderer.html.product.HtmlProductTagsRenderer;
import dewbag.retail.mdm.catalog.ui.view.renderer.html.product.HtmlThumbnailProductImageRenderer;
import dewbag.retail.sales.ui.component.order.OrderFooter;
import dewbag.retail.sales.ui.component.order.TaxSummary;
import dewbag.retail.sales.ui.renderer.order.HtmlOrderFooterRenderer;
import dewbag.retail.sales.ui.renderer.order.HtmlTaxSummaryRenderer;
import dewbag.retail.shop.ui.component.cart.CartFooter;
import dewbag.retail.shop.ui.component.cart.CartSummary;
import dewbag.retail.shop.ui.renderer.html.cart.HtmlCartFooterRenderer;
import dewbag.retail.shop.ui.renderer.html.cart.HtmlCartSummaryRenderer;

public class HtmlComponentRendererRegistry extends UIComponentRendererRegistry {

    public HtmlComponentRendererRegistry() {
        super(UIComponent.COMPONENT_NAMESPACE);

        mBuilders.put(Variable.NAME,
                      VariableRenderer.class);

        mBuilders.put(InputDate.NAME,
                      HtmlInputDateRenderer.class);
        mBuilders.put(InputFile.NAME,
                      HtmlInputFileRenderer.class);
        mBuilders.put(InputHidden.NAME,
                      HtmlInputHiddenRenderer.class);
        mBuilders.put(InputInt.NAME,
                      HtmlInputIntRenderer.class);
        mBuilders.put(InputDecimal.NAME,
                      HtmlInputDecimalRenderer.class);
        mBuilders.put(InputSecret.NAME,
                      HtmlInputSecretRenderer.class);
        mBuilders.put(InputText.NAME,
                      HtmlInputTextRenderer.class);
        mBuilders.put(InputTextarea.NAME,
                      HtmlInputTextareaRenderer.class);
        mBuilders.put(InputRuledTextarea.NAME,
                      HtmlInputRuledTextareaRenderer.class);

        mBuilders.put(SelectOneEntityMenu.NAME,
                      HtmlSelectOneEntityMenuRenderer.class);
        mBuilders.put(SelectBooleanCheckBox.NAME,
                      HtmlSelectBooleanCheckBoxRenderer.class);

        mBuilders.put(CommandButton.NAME,
                      HtmlCommandButtonRenderer.class);

        mBuilders.put(OutputText.NAME,
                      HtmlOutputTextRenderer.class);
        mBuilders.put(OutputLink.NAME,
                      HtmlOutputLinkRenderer.class);

        mBuilders.put(Template.NAME,
                      HtmlTemplateRenderer.class);
        mBuilders.put(Parameter.NAME,
                      HtmlParameterRenderer.class);

        mBuilders.put(UIEntity.NAME,
                      HtmlEntityRenderer.class);
        mBuilders.put(EntityForm.NAME,
                      HtmlEntityFormRenderer.class);

        mBuilders.put(SplitPane.NAME,
                      HtmlSplitPaneRenderer.class);
        mBuilders.put(Splitter.NAME,
                      HtmlSplitterRenderer.class);

        mBuilders.put(Tab.NAME,
                      HtmlTabRenderer.class);
        mBuilders.put(Tabs.NAME,
                      HtmlTabsRenderer.class);

        mBuilders.put(EntityTree.NAME,
                      HtmlEntityTreeRenderer.class);
        mBuilders.put(NavEntityTree.NAME,
                      HtmlNavEntityTreeRenderer.class);

        mBuilders.put(EntityTable.NAME,
                      HtmlEntityTableRenderer.class);
        mBuilders.put(Columns.NAME,
                      HtmlColumnsRenderer.class);
        mBuilders.put(Column.NAME,
                      HtmlColumnRenderer.class);

        mBuilders.put(EntityMenu.NAME,
                      HtmlEntityMenuRenderer.class);

        mBuilders.put(EntityGrid.NAME,
                      HtmlEntityGridRenderer.class);

        mBuilders.put(Dialog.NAME,
                      HtmlDialogRenderer.class);
        mBuilders.put(Popup.NAME,
                      HtmlPopupRenderer.class);
        mBuilders.put(PopupLink.NAME,
                      HtmlPopupLinkRenderer.class);

        mBuilders.put(PanelGroup.NAME,
                      HtmlPanelGroupRenderer.class);
        mBuilders.put(PanelGrid.NAME,
                      HtmlPanelGridRenderer.class);
        mBuilders.put(PanelGridSection.NAME,
                      HtmlPanelGridSectionRenderer.class);

        mBuilders.put(Toolbar.NAME,
                      HtmlToolbarRenderer.class);
        mBuilders.put(ToolbarCommand.NAME,
                      HtmlToolbarCommandRenderer.class);
        mBuilders.put(ToolbarSeparator.NAME,
                      HtmlToolbarSeparatorRenderer.class);

        mBuilders.put(Message.NAME,
                      HtmlMessageRenderer.class);
        
        mBuilders.put(Image.NAME,
                      HtmlImageRenderer.class);
        mBuilders.put(GraphicImage.NAME,
                      HtmlGraphicImageRenderer.class);
        mBuilders.put(ImageGallery.NAME,
                      HtmlImageGalleryRenderer.class);
        
        mBuilders.put(TimeSlot.NAME,
                      HtmlTimeSlotRenderer.class);
        
        mBuilders.put(FBLogin.NAME,
                      HtmlFBLoginRenderer.class);
        mBuilders.put(FBComments.NAME,
                      HtmlFBCommentsRenderer.class);
        mBuilders.put(GoogleLogin.NAME,
                      HtmlGoogleLoginRenderer.class);

        mBuilders.put(GoogleMaps.NAME,
                      HtmlGoogleMapsRenderer.class);

        
        // TODO move this

        mBuilders.put(ProductGrid.NAME,
                      HtmlProductGridRenderer.class);
        mBuilders.put(CategoryBreadCrumb.NAME,
                      HtmlCategoryBreadCrumbRenderer.class);
        mBuilders.put(SubCategoryList.NAME,
                      HtmlSubCategoryListRenderer.class);
        mBuilders.put(ThumbnailProductImage.NAME,
                      HtmlThumbnailProductImageRenderer.class);
        
        mBuilders.put(CartSummary.NAME,
                      HtmlCartSummaryRenderer.class);
        mBuilders.put(CartFooter.NAME,
                      HtmlCartFooterRenderer.class);
        
        mBuilders.put(OrderFooter.NAME,
                      HtmlOrderFooterRenderer.class);
        mBuilders.put(SalesOfferSummary.NAME,
                      HtmlSalesOfferSummaryRenderer.class);
        
        mBuilders.put(TaxSummary.NAME,
                      HtmlTaxSummaryRenderer.class);
        
        mBuilders.put(ProductBreadCrumb.NAME,
                      HtmlProductBreadCrumbRenderer.class);
        mBuilders.put(ProductFeatures.NAME,
                      HtmlProductFeaturesRenderer.class);
        mBuilders.put(ProductImageGallery.NAME,
                      HtmlProductImageGalleryRenderer.class);
        mBuilders.put(ProductTags.NAME,
                      HtmlProductTagsRenderer.class);
    }

}
