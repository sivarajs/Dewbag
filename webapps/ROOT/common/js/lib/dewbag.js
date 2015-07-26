
window.onDocReady(function() {
	initGoToTop();
	if (window.location.href.indexOf("/cart") ==  -1)
	   miniCart.init();
	$(window).scroll(function() {
		onScrollGoToTop()
		onScrollCategoryList();

	});
});

function initProductThumbnailPage() {
	initBuyButton();
	lazyLoadImgs();
}

function lazyLoadImgs() {

	$("img.thumbnailProductImage").lazyload({
		effect : "fadeIn"
	});
}

function initBuyButton() {
	
	var bDivs = $('.buyDiv');
	for (var i=0,bDiv; bDiv=bDivs[i++];) {
	  new ProductCartPipe(bDiv);
	}
	return;
}

function suggestProduct() {
	
	var did = "prdSuggestDlg";
	if (!sys.isValid(document.getElementById(did))) {
		eventQueue.subscribe(EventName.saved("ProductSuggestion"), new EventSubscriber("prod_sugg-dlg-saved", function (event) {
			ui.dialog.hideById(this.userObject);
		  }, did));
		urlLoader.loadXHtml("/product/inc/ProductSuggestionDialog.xhtml", document.body, 'A');
    }
	ui.dialog.showById(did);	
}


UI.prototype.init_productGrid = function(node) {
	var sts = $(".stackItems", $(node));
	
	for (var i=0,st; st=sts[i++];) {
		var lis = $("li",$(st));
		for (var j=0,li; li=lis[j++];) {
			li.onclick = function() {
				var prodId = this.getAttribute("pid");
				var cs = $(".stackItem-"+prodId);
				cs.css("display","none");
				document.getElementById(this.getAttribute("tp")).style.display = "";
				$("li", $(this.parentNode)).attr("class","");
				this.className = "sel";
				$("img.thumbnailProductImage", $(this.parentNode.parentNode.parentNode)).lazyload({
			        effect : "fadeIn"
			    });
			}
		}
	}
}

function initGoToTop() {
	var top = document.getElementById("goToTop");
	if (top) {

		top.onclick = function() {
			$('html, body').animate( {
				scrollTop : 0
			}, 'slow');
		}
	}
}

function onScrollGoToTop() {
	var d = $("#goToTop");
	if ($(window).scrollTop() > 0)
		d.fadeIn(500);
	else
		d.fadeOut(500)
}

var subCatListTop;
function onScrollCategoryList() {
	var c = $(".subCategoryList")[0];

	if (c) {
		c = $(c);
		if (!subCatListTop)
			subCatListTop = c.offset().top;
		if ($(window).scrollTop() >= subCatListTop) {
			if (c.height() > $(window).height()) {
				c.css("position", "absolute");
				c.css("left", "0");
			} 
			else {
			  c.css("position", "fixed");
			  c.css("top", "0");
			}
		} else {
			c.css("position", "absolute");
			c.css("left", "0");
		}
	}
}

function addToCart(input) {
	if (sys.isValid(input.value) && sys.isValid(input.getAttribute("rid"))) {
		var resource = entityStore.save("PreSalesOrderLineItem", {id:input.getAttribute("rid"),quantity:input.value});
  	    window.location.reload(true);
	}
}


function clearShoppingCart() {
	if (confirm("Do you really want to clear the shopping bag?")) {
	  webServer.get("/bo/ShoppingCart?clear");
	  window.location.reload(true);
	}
}

var redirectURL = null;

function checkout(e) {

	var count = parseInt($('.cartCount').html());
	if (count == 0)
		ui.messageBox.show("Shopping Cart is empty");
	else if (!loggedIn()) {
		var login = document.getElementById("loginPopup");
		eventSys.preventDefault(e);
		var cpnt = document.getElementById(login.getAttribute(CLINK));
		$("#loginMsg", cpnt).html("Please login to checkout");
		var node = eventSys.getOriginNode(e);

		redirectURL = "/cart/checkout.xhtml";
		ui.popup.show(cpnt, node);
	} else
		window.location = "/cart/checkout.xhtml";
}

function confirmCheckout() {
	var spans = document.getElementById("coAddress").getElementsByTagName(
			"span");
	
	var address = "";
	for ( var i = 0, s; s = spans[i++];) {
		var v = $(s).html();
		if (v != "") {
			if (i != 0 && address != "")
				address += ", ";
			address += $(s).html();
		}
	}
	
	$("#dlgSA").html(address);

	$("#dlgDL").html($('#delSlotInfo').html());
	var pm = document.getElementById("payCash");
	if (pm.checked)
		$("#dlgPM").html($("#payCashDesc").html());
	else
		$("#dlgPM").html($("#payCCDesc").html());

	ui.dialog.showById("coConfirmDlg");
	
	return false;
}

function performCheckout() {
	ui.dialog.hideById("coConfirmDlg");
	var form = new UIEntityForm(document.getElementById("poForm"));
	form.submit();
	return false;
}

function changeCheckoutAddress() {
	var did = "shipAddressDlg";
	if (!sys.isValid(document.getElementById(did))) {
		urlLoader.appendXHtml("shop/cart/inc/AddressTableDialog.xhtml", document.body);
		eventQueue.subscribe(EventName.variableChanged("customerAddress.id"), new EventSubscriber("custaddress-dataTable-var-changed", function (event) {
			  if (sys.isValid(event.data)) {
				  ui.dialog.hideById(this.userObject);
				  urlLoader.loadXHtml("shop/cart/inc/CustomerAddress.xhtml?id="+event.data, document.getElementById("coAddressPanel"));
				  document.getElementById('poDelAddr').value = event.data;
			  }
		  }, did)); 
    }
	ui.dialog.showById(did);	
}

function addCheckoutAddress() {
	ui.dialog.hideById("shipAddressDlg");
	var did = "addAddressDlg";
	if (!sys.isValid(document.getElementById(did))) {
		eventQueue.subscribe(EventName.saved("CustomerAddress"), new EventSubscriber("custaddress-dlg-saved", function (event) {
			  if (sys.isValid(event.data)) {
				  ui.dialog.hideById(this.userObject);
				  urlLoader.attachXHtml("shop/cart/inc/CustomerAddress.xhtml?id="+event.data['customerAddress']['id'], document.getElementById("coAddressPanel"));
				  document.getElementById('poDelAddr').value = event.data;
			  }
		  }, did));
		  urlLoader.appendXHtml("shop/cart/inc/CustomerAddressDialog.xhtml", document.body);
    }
	ui.dialog.showById(did);	
}

function postSalesOrderSave(po) {
	po[STATUS_MSG] = NULL;

	if (po['payMode'] && po["payMode"]['id'] == "51") {
		miniCart.clear();
		var orderId = po['orderId'];
		$('#dbContent')
				.html(
						"<h1>Order Confirmation</h1><p style='margin-top:10px'>Your order '"
								+ orderId
								+ "' has been successfully placed.</p> <p>Please refer the order id '"
								+ orderId + "' for further communications.</p>");
	} else {
		try {
			var pf = document.forms["payment"];

			pf.Merchant_Id.value = po['merchantId'];
			var amt = po['salesOrder']['amount'];
			if (amt.indexOf(".") == -1)
				pf.Amount.value = amt + ".0";
			else
				pf.Amount.value = amt;

			pf.Order_Id.value = po['salesOrder']['transId'];
			pf.Redirect_Url.value = po['redirectURL'];
			pf.Checksum.value = po['checksum'];
			var cu = po['salesOrder']['customer'];
			pf.billing_cust_name.value = cu['name'];
			var cuaddr = cu['address'];
			var addr = cuaddr['address1'] + ", ";
			if (cuaddr['address2'])
				addr = addr + cuaddr['address2'] + ", ";
			pf.billing_cust_address.value = addr;
			pf.billing_cust_country.value = cuaddr['country']['name'];
			pf.billing_cust_state.value = cuaddr['state']['name'];
			pf.billing_cust_tel.value = cu['mobile'];
			pf.billing_cust_email.value = cu['email'];
			pf.delivery_cust_name.value = cu['name'];
			pf.delivery_cust_address.value = addr;
			pf.delivery_cust_country.value = cuaddr['country']['name'];
			pf.delivery_cust_state.value = cuaddr['state']['name'];
			pf.delivery_cust_tel.value = cu['mobile'];
			pf.delivery_cust_notes.value = "";
			pf.Merchant_Param.value = "";
			pf.billing_cust_city.value = cuaddr['city']['name'];
			pf.billing_zip_code.value = cuaddr['pin'];
			pf.delivery_cust_city.value = cuaddr['city']['name'];
			pf.delivery_zip_code.value = cuaddr['pin'];
			pf.submit();
		} catch (e) {
			alert("Unable to process your order due to '" + e + "'")
		}
	}
}

function createShoppingCart(rName, rId) {
	try {
		var po = entityStore.get(rName,rId,"addToCart");
		ui.messageBox.show("All items have been added to your shopping bag");
		miniCart.load();
	} catch (e) { 
		ui.messageBox.show("The items have already been added to your shopping cart or an internal error occurred");
	}
}


function registerChart() {
	eventQueue.subscribe(EventName.variableChanged("salesOrder.id"),
			new EventSubscriber("purchaseOrderId-changed", function(event) {
                
				if (sys.isValid(event.data)) {
					var report = entityStore.getFirst("SalesOrderReport",
							"orderId=" + event.data);
					var r = report['data'];
					var reportData = new Array();

					for ( var i = 0; i < r.length; i++) {
						reportData[i] = [ r[i]['label'],
								parseInt(r[i]['value']) ];
					}

					drawPie("oGraph", reportData);
				}
			}, null));
	
}

function generateDateRangeReport() {
	    var sDate = document.getElementById("rsDate").value;
	    var eDate = document.getElementById("reDate").value;
	    
		var report = entityStore.getFirst("SalesOrderReport",
				"startDate=[>]" + sDate+"&endDate=[<]"+eDate);
		var reportData = new Array();
		if (sys.isValid(report)) {
		  var r = report['data'];

		  for ( var i = 0; i < r.length; i++) {
			  reportData[i] = [ r[i]['label'],
					      parseInt(r[i]['value']) ];
		  }
		}
		else ui.messageBox.show("No matching orders found");
		$("#dGraph").show();
		drawPie("dGraph",reportData);
}

function drawPie(graphId, data) {
	// var data = new Array(['Sector 1', 2], ['Sector 2', 1], ['Sector 3', 3],
	// ['Sector 4', 6], ['Sector 5', 8.5], ['Sector 6', 10]);

	// var colors = ['#FACC00', '#FB9900', '#FB6600', '#FB4800', '#CB0A0A',
	// '#F8F933'];
	var chart = new JSChart(graphId, 'pie');
	chart.setDataArray(data);
	// chart.colorizePie(colors);
	// chart.setTitleColor('#857D7D');
	// chart.setPieUnitsColor('#9B9B9B');
	// chart.setPieValuesColor('#6A0000');
	chart.draw();
}

var action = {
		
		makeAddressPrimary : function(id) {
		  var r = webServer.get("bo/CustomerAddress/"+id+"?makePrimary");
		  window.location.reload();
	    }	
};


function subscribeCustomerAddress() {
	eventQueue.subscribe(EventName.entity("Address"),
			new EventSubscriber(EventName.entity("Address") + "-1",
					function(event) {
				        $("form[entity='Customer']")[0]["customer.address.latlng"].value = event.data.latlng;
						$("form[entity='Customer']")[0]["customer.address.pin"].value = event.data.pin;
					}, this));

}


function postCustomerSave(cust, formName) {
	
	if (sys.isValid(formName)) {
		cust[STATUS_MSG] = NULL;
		if (formName ==  "CustomerCheckout") window.location = "/cart/checkout.xhtml";
		else if (formName == "BillerCheckout") window.location = "/cart/checkout.xhtml?cid="+cust['id'];
	}
}

