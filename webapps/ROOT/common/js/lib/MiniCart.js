function loadMiniCart(rs) {
  miniCart.loadItems(rs);	
}

var miniCart = {

	cart : null,
	bag:{},
	items : {},
	size : 0,

	init : function() {
		this.cart = $('#miniCart');
		//this.cart.draggable();
		this.load();

	},

	clear : function() {
		$("#mcItems").html("<tr><td>Shopping cart is empty</td></tr>");
		$('.cartCount').html(0);
	},

	load : function() {
		entityStore.get("ShoppingBag", "1", null, loadMiniCart);
	},
	
	loadItems: function(rs) {
		
		if (!rs) return;
		this.bag = rs;
		var items = rs['lineItems'];

		if (items.length > 0) {
			for ( var i = 0, item; item = items[i++];)
				this.displayItem(item);
			this.updateTotalPrice(rs);
			this.cart.fadeIn(500);
		} else
			this.cart.fadeOut(500);

		this.updateProductQuantity();
	},

	updateCart : function(pid, qty) {
		
		if (!sys.isValid(pid) || !sys.isValid(qty)) {
			alert("Unable to process the request #"+pid+"#"+qty);
			return;
		} 
		
		ui.ajaxLoader.showInNode("ajaxMCLoader");
		this.cart.fadeIn(500);
		try {
			var object = {};
			object["productLineItem"] = {};
			object["productLineItem"]["id"] = pid;
			object["quantity"] = ""+qty;
			var resource = entityStore.save("ShoppingCartLineItem", object);

			if (!sys.isValid(resource)) {
				ui.messageBox
						.show("Unable to add/update the item to the cart.");
				return;
			}

			var cd = resource['code'];
			if (sys.isValid(cd)) {
				resource = resource['entity'];
			}
			if (cd == "Deleted") {
				var etr = $('#mcpid' + pid);
				if (etr.length > 0) {
					etr.remove();
				}
				this.updateCount();
			} else {
				resource['cartItem']['state'] = 'N';
				this.displayItem(resource['cartItem']);
			}
			this.updateTotalPrice(resource['shoppingBag']);
			ui.ajaxLoader.hideInNode("ajaxMCLoader");
			
			if (!sys.isValid(resource['message'])) resource['message'] = ""; 
			$('#mcMsg').html(resource['message']);
			
			
			return resource;
		} catch (e) {
			ui.ajaxLoader.hideInNode("ajaxMCLoader");
			alert(e);
		}
	},

	updateCount : function(t) {
		var trs = $(".seq", $("#mcItems"));
		var i;
		for (i = 0; tr = trs[i++];)
			$(tr).html(i);
		if (i > 0)
			i--;
		$("#mcartCount").html(i);
		$(".cartCount").html(i);
	},

	getProduct : function(pId) {
		var p, cX, cY, cpId = $("#mcpid" + pId);
		this.cart.fadeIn(500);
		var citems = $("#mcItems tr:first");
		if (citems.offset().left != 0) {

			if (cpId.length > 0) {
				cX = $(cpId[0]).offset().left;
				cY = $(cpId[0]).offset().top;
			} else {
				cX = citems.offset().left;
				cY = citems.offset().top-100;
			}
			p = cpId;
		} else {
			cX = this.cart.offset().left;
			cY = this.cart.offset().top;
			p = this.cart;
		}

		return {
			p : p,
			x : cX,
			y : cY
		};
	},

	updateTotalPrice : function(itemSummary) {
		if (itemSummary) {
		  $("#mcTotalPrice").html(itemSummary['grandTotal']);
		  $("#mcSavings").html(itemSummary['savings']);
		}
		else {
			$("#mcTotalPrice").html("0");
			  $("#mcSavings").html("0");
		}
	},

	displayItem : function(cartItem) {

		var prodItem = cartItem['productLineItem'];
//		var qty = $("input", "#pi-" + prodItem['id']);
//		if (qty.length > 0) {
//			qty[0].value = cartItem.quantity;
//			$(".removeCart", $(qty[0].parentNode.parentNode)).css("display",
//					"block");
//		}
		if (cartItem['state'] != 'N')
		  $("input", "#pi-" + prodItem['id']).val(cartItem.quantity);

		var pid = "mcpid" + prodItem['id'];
		var etr = $('#' + pid);
		var tr;
			if (etr.length > 0)
			tr = etr;
		else
			tr = $("#mcItems tr:first");
		
			
		this.items[pid] = cartItem;

		var qty = parseInt(cartItem['quantity']);
		var savings = qty * parseFloat(prodItem["savings"]);
		savings = savings + "";

		if (savings.indexOf(".") >= 0) {
			savings = savings.substring(0, savings.indexOf(".") + 3);
		}

		var html = "<tr id='" + pid + "'><td class='mtd seq'>" + 0 + "</td>";
		html += "<td class='itd'>" + prodItem["product"]["name"] + " "
				+ prodItem["quantity"] + " "
				+ prodItem["unitOfMeasure"]["value"] + "</td>";
		html += "<td class='mtd'>" + qty + "</td>";
		html += "<td class='rtd'>" + cartItem['totalPrice'] + "</td>";
		html += "<td class='rtd'>" + savings + "</td></tr>";

		tr.before(html);
		if (etr.length > 0)
			etr.remove();
		var tr = $('#' + pid);
		tr.hide();
		tr.show(); 
		this.updateCount(); 
	},

	updatePageQuantities : function(node) {
		for ( var key in this.items) {
			var item = this.items[key];
			var pid = item['id'];//item['productLineItem']['id'];
			var pDiv = $("#pi-" + pid, $(node));
			if (pDiv.length > 0) {
				var qty = $("input", pDiv);
				if (qty.length > 0) {
					//qty[0].value = item.quantity;
					$(".removeCart", pDiv).css("display", "block");
				}
			}
		}
	},

	updateProductQuantity : function() {
		
		for ( var key in this.items) {
			var item = this.items[key];
			var pid = item['productLineItem']['id'];
			var pInfo = $("#productInfo-"+pid);
			
			if (pInfo.length == 1 && item.quantity > 0) {
				var qty = $("input", pInfo);
				//qty[0].value = item.quantity;
				$(".removeCart", pInfo).css("display", "block");
			}
		}
	}
}
