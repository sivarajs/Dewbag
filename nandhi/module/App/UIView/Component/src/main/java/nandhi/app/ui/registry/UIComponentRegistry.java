package nandhi.app.ui.registry;

import java.util.HashMap;
import java.util.Map;

import nandhi.app.ui.component.UIComponent;
import nandhi.app.ui.component.Variable;
import nandhi.app.ui.component.dialog.Dialog;
import nandhi.app.ui.component.entity.UIEntity;
import nandhi.app.ui.component.form.EntityForm;
import nandhi.app.ui.component.grid.EntityGrid;
import nandhi.app.ui.component.grid.StackedGrid;
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
import nandhi.app.ui.component.table.EntityFilter;
import nandhi.app.ui.component.table.EntityFilters;
import nandhi.app.ui.component.table.EntityTable;
import nandhi.app.ui.component.template.Parameter;
import nandhi.app.ui.component.template.Template;
import nandhi.app.ui.component.toolbar.Toolbar;
import nandhi.app.ui.component.toolbar.ToolbarCommand;
import nandhi.app.ui.component.toolbar.ToolbarSeparator;
import nandhi.app.ui.component.tree.EntityTree;
import nandhi.app.ui.component.tree.NavEntityTree;
import nandhi.app.ui.component.widget.TimeSlot;
import dewbag.retail.marketing.ui.component.SalesOfferSummary;
import dewbag.retail.mdm.catalog.ui.component.category.CategoryBreadCrumb;
import dewbag.retail.mdm.catalog.ui.component.category.SubCategoryList;
import dewbag.retail.mdm.catalog.ui.component.product.ProductBreadCrumb;
import dewbag.retail.mdm.catalog.ui.component.product.ProductFeatures;
import dewbag.retail.mdm.catalog.ui.component.product.ProductGrid;
import dewbag.retail.mdm.catalog.ui.component.product.ProductImageGallery;
import dewbag.retail.mdm.catalog.ui.component.product.ProductTags;
import dewbag.retail.mdm.catalog.ui.component.product.ThumbnailProductImage;
import dewbag.retail.sales.ui.component.order.OrderFooter;
import dewbag.retail.sales.ui.component.order.TaxSummary;
import dewbag.retail.shop.ui.component.cart.CartFooter;
import dewbag.retail.shop.ui.component.cart.CartSummary;

public class UIComponentRegistry {

    protected String mNamespace;
    protected Map<String, Class<?>> mComponents = new HashMap<String, Class<?>>();

    public UIComponentRegistry(String namespace) {
        mNamespace = namespace;
    }

    public UIComponentRegistry() {
        mNamespace = UIComponent.COMPONENT_NAMESPACE;
        mComponents.put(InputDate.NAME,
                        InputDate.class);
        mComponents.put(InputFile.NAME,
                        InputFile.class);
        mComponents.put(InputHidden.NAME,
                        InputHidden.class);
        mComponents.put(InputInt.NAME,
                        InputInt.class);
        mComponents.put(InputDecimal.NAME,
                        InputDecimal.class);
        mComponents.put(InputSecret.NAME,
                        InputSecret.class);
        mComponents.put(InputText.NAME,
                        InputText.class);
        mComponents.put(InputTextarea.NAME,
                        InputTextarea.class);
        mComponents.put(InputRuledTextarea.NAME,
                        InputRuledTextarea.class);

        mComponents.put(CommandButton.NAME,
                        CommandButton.class);

        mComponents.put(SelectOneEntityMenu.NAME,
                        SelectOneEntityMenu.class);
        mComponents.put(SelectBooleanCheckBox.NAME,
                        SelectBooleanCheckBox.class);

        mComponents.put(OutputText.NAME,
                        OutputText.class);
        mComponents.put(OutputLink.NAME,
                        OutputLink.class);

        mComponents.put(Template.NAME,
                        Template.class);
        mComponents.put(Parameter.NAME,
                        Parameter.class);
        mComponents.put(Variable.NAME,
                        Variable.class);

        mComponents.put(UIEntity.NAME,
                        UIEntity.class);

        mComponents.put(EntityForm.NAME,
                        EntityForm.class);

        mComponents.put(SplitPane.NAME,
                        SplitPane.class);
        mComponents.put(Splitter.NAME,
                        Splitter.class);

        mComponents.put(Tab.NAME,
                        Tab.class);
        mComponents.put(Tabs.NAME,
                        Tabs.class);

        mComponents.put(EntityTree.NAME,
                        EntityTree.class);
        mComponents.put(NavEntityTree.NAME,
                        NavEntityTree.class);

        mComponents.put(EntityMenu.NAME,
                        EntityMenu.class);

        mComponents.put(Dialog.NAME,
                        Dialog.class);
        mComponents.put(Popup.NAME,
                        Popup.class);
        mComponents.put(PopupLink.NAME,
                        PopupLink.class);

        mComponents.put(EntityTable.NAME,
                        EntityTable.class);
        mComponents.put(Columns.NAME,
                        Columns.class);
        mComponents.put(Column.NAME,
                        Column.class);
        mComponents.put(EntityFilters.NAME,
                        EntityFilters.class);
        mComponents.put(EntityFilter.NAME,
                        EntityFilter.class);

        mComponents.put(EntityGrid.NAME,
                        EntityGrid.class);
        mComponents.put(StackedGrid.NAME,
                        StackedGrid.class);

        mComponents.put(Toolbar.NAME,
                        Toolbar.class);
        mComponents.put(ToolbarCommand.NAME,
                        ToolbarCommand.class);
        mComponents.put(ToolbarSeparator.NAME,
                        ToolbarSeparator.class);

        mComponents.put(PanelGroup.NAME,
                        PanelGroup.class);
        mComponents.put(PanelGrid.NAME,
                        PanelGrid.class);
        mComponents.put(PanelGridSection.NAME,
                        PanelGridSection.class);

        mComponents.put(Message.NAME,
                        Message.class);

        mComponents.put(Image.NAME,
                        Image.class);
        mComponents.put(GraphicImage.NAME,
                        GraphicImage.class);
        mComponents.put(ImageGallery.NAME,
                        ImageGallery.class);

        mComponents.put(TimeSlot.NAME,
                        TimeSlot.class);

        mComponents.put(FBComments.NAME,
                        FBComments.class);

        mComponents.put(FBLogin.NAME,
                        FBLogin.class);
        mComponents.put(GoogleLogin.NAME,
                        GoogleLogin.class);
        mComponents.put(GoogleMaps.NAME,
                        GoogleMaps.class);

        // TODO move

        mComponents.put(ProductGrid.NAME,
                        ProductGrid.class);
        mComponents.put(CategoryBreadCrumb.NAME,
                        CategoryBreadCrumb.class);
        mComponents.put(SubCategoryList.NAME,
                        SubCategoryList.class);

        mComponents.put(ThumbnailProductImage.NAME,
                        ThumbnailProductImage.class);

        mComponents.put(CartSummary.NAME,
                        CartSummary.class);
        mComponents.put(CartFooter.NAME,
                        CartFooter.class);
        mComponents.put(OrderFooter.NAME,
                        OrderFooter.class);
        mComponents.put(SalesOfferSummary.NAME,
                        SalesOfferSummary.class);

        mComponents.put(TaxSummary.NAME,
                        TaxSummary.class);

        mComponents.put(ProductBreadCrumb.NAME,
                        ProductBreadCrumb.class);
        mComponents.put(ProductFeatures.NAME,
                        ProductFeatures.class);
        mComponents.put(ProductImageGallery.NAME,
                        ProductImageGallery.class);
        mComponents.put(ProductTags.NAME,
                        ProductTags.class);
    }

    public String getNamespace() {

        return mNamespace;
    }

    public UIComponent getComponent(String name) {

        Class<?> component = mComponents.get(name);

        if (component == null) {
            throw new RuntimeException("Unknown component : {" + mNamespace
                            + "} " + name);
        }

        try {
            return (UIComponent) component.newInstance();

        } catch (Exception e) {
            throw new RuntimeException(e);
        }

    }

}
