var productPageLoader = {

	loadPage : true,

	init : function() {

		window.onDocReady(function() {

			var pl = $("#itemsDiv")

			var top = pl.offset().top + pl.height();

			if (top > $(window).height()) {
				$("#pageLoader").css("display", "block");
				if ($("#noItemsP").length == 0) {
					$(window).scroll(function() {
						try {
							productPageLoader.loadNextPage();
						} catch (e) {
							alert(e)
						}
					});
				}

			}
		});
	},
	
	loadNextPage : function(url) {
		var pl = $("#pageLoader");
		var url = $("#nextPageLink").attr("href");
		var top = pl.offset().top;
		top = top - $(window).height();
		if (this.loadPage == true && $(window).scrollTop() >= top) {
			this.loadPage = false;
			ui.ajaxLoader.showInNode("ajaxPageLoader");
			var page = pl.attr("page");
			
			if (url.indexOf("?") == -1)
				url = url + "?pageNo=" + page;
			else
				url = url + "&pageNo=" + page;
			page = parseInt(page) + 1;
			
			webServer.get(
							url,
							function(html) {
								
								if (html
										.indexOf("noItemsP") != -1) {
									pl.css("display", "none");
									$(html).appendTo($("#itemsDiv"));
									$('#noItemsP').css("display","none");
								} else {
									
									var id = 'dyna' + urlLoader.seq;
									urlLoader.seq++;
									html = "<div id='" + id + "'>" + html + "</div>";
									
									html = "<hr/>Showing Page "
											+ page
											+ "<hr/>"
											+ html
											+ "<script type='text/javascript'>$(document).ready(function() { productPageLoader.loadPage = true; });</script>";
									$(html).appendTo($("#itemsDiv"));
									
									var g = $(".productGrid");
									var g = g[g.length-1];
									initProductThumbnailPage();
									xhtmlParser.parse(document.getElementById(id));
									pl.attr("page", page);
									miniCart.updatePageQuantities(g);
									
								}
								ui.ajaxLoader.hideInNode("ajaxPageLoader");
							});
		}
	}
	
}