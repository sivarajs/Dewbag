function ProductCartPipe(buyDiv) {
	this.bDiv = $(buyDiv);
	this.pId = $($('.buyProdId', this.bDiv)[0]).html();
	this.qtyInp = $('.qty', this.bDiv)[0];
	this.plusBut = $('.addCart', this.bDiv)[0];
	this.rmBut = $('.removeCart', this.bDiv)[0];
    this.queue = [];
    this.count = 0;
	buyDiv.pipe = this;

	this.onPlusClick = function(e) {

		var p = this.parentNode.pipe;
		var qty = p.validQty();
		if (qty != null) {
			if (sys.isTrue(p.inputChanged)) p.inputChanged = false;
			else p.qtyInp.value = qty + 1;
			p.flow('F', e);
			if (qty == 0)
				$(p.rmBut).fadeIn(500);
		}
		this.parentNode.pipe.removeHandlers();

	}

	this.onRmClick = function(e) {
		var p = this.parentNode.pipe;
		var qty = p.validQty();
		if (qty != null && qty > 0) {
			p.qtyInp.value = qty - 1;
			p.flow('R', e);

			if (qty == 1) {
				p.qtyInp.value = "";
				$(p.rmBut).fadeOut(500);
			}
		}
		this.parentNode.pipe.removeHandlers();
	}

	this.qtyInp.onkeyup = function() {
		//var p = this.parentNode.parentNode.pipe;
		//p.removeHandlers();
	}

	this.qtyInp.onchange = function(e) {
		var p = this.parentNode.parentNode.pipe;
		//p.flow('F', e);
		p.inputChanged = true;
	}

	this.plusBut.onclick = this.onPlusClick;
	this.rmBut.onclick = this.onRmClick;
}

ProductCartPipe.prototype.validQty = function() {
	var qty;
	if (this.qtyInp.value == "") {
		this.qtyInp.value = "0";
	}

	try {
		qty = parseInt(this.qtyInp.value);
	} catch (e) {
		alert("Please provide a valid value");
		return null;
	}
	if (qty < 0) {
		alert("Please provide a valid value");
		return null;
	}
	return qty;
}

ProductCartPipe.prototype.flow = function(dir, e) {

	if (!sys.isValid(this.pId)) 
		return;
	
	var pQty = this.validQty();
	if (!sys.isValid(pQty))
		return;

	var pTNImg = $(".pTNImg", this.bDiv.parent());
	
	if (pTNImg.length == 0) {
		pTNImg = $(".productTNImage");
		
	}
	
	var os = pTNImg.offset();
	var pX = os.left;
	var pY = os.top;
	var prod = miniCart.getProduct(this.pId);

	var gX = 0;
	var gY = 0;
	var src;
	if (dir == 'F') {
		gX = prod.x - pX;
		gY = prod.y - pY;
		src = $("a", pTNImg);
		//For Detail page
		if (src.length == 0) src = $("div", pTNImg);
	} else {
		gX = -pX;
		gY = -pY;
		src = prod.p;
	}

	var img = $("img", pTNImg);
	
	var fImgW = img.width() / 3;
	var fImgH = img.height() / 3;

	var cq = img.clone();

	cq[0].pId = this.pId;
	cq[0].pQty = pQty;
	cq[0].pipe = this;
	cq[0].dr = dir;
	if (dir == 'R') {
		miniCart.updateCart(this.pId, pQty);
	} else {
		
		cq.prependTo(src).css( {
			'position' : 'absolute',
			'z-index' : '10'
		}).animate( {
			opacity : 0.4
		}, 100).animate( {
			opacity : 0.1,
			marginLeft : gX,
			marginTop : gY,
			width : fImgW,
			height : fImgH
		}, 1200, function() {
			$(this).remove();
//			console.log(">>>>"+ this+"  "+this.pId+"#"+this.pQty);
			if (sys.isValid(this.pId) && sys.isValid(this.pQty)) {
			  miniCart.updateCart(this.pId, this.pQty);
			  this.pipe.attachHandlers();
			}
		});
	}
}

ProductCartPipe.prototype.attachHandlers = function() {
	this.plusBut.onclick = this.onPlusClick;
	this.rmBut.onclick = this.onRmClick;
}

ProductCartPipe.prototype.removeHandlers = function() {
	this.plusBut.onclick = "";
	this.rmBut.onclick = "";
}