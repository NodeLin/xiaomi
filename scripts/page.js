$(function() {
	/* 搜索框获得,失去焦点动作 */
	var search_input = $(".search-frame-input"),
		txt_value;
	search_input.focus(function() {
		txt_value = $(this).val();
		if(txt_value == this.defaultValue) {
			$(this).val("");
		}
	});
	search_input.blur(function() {
		txt_value = $(this).val();
		if(txt_value == ""){
			$(this).val(this.defaultValue);
		}
	});

	/* 搜索按钮样式 */
	var search_btn = $(".search-frame-btn"),
		search_btnDefault = $(".search-frame-btnDefault"),
		search_btnHover = $(".search-frame-btnHover");
	search_btn.hover(function (){
		search_btnDefault.addClass("none");
		search_btnHover.removeClass("none");
	},function() {
		search_btnDefault.removeClass("none");
		search_btnHover.addClass("none");
	});

	/* 切换语言jQuery */
	var lang = $("#right-menu-lang"),
		langList = $(".right-menu-langList")
	lang.mouseover(function() {
		langList.slideDown();
	});
	langList.hover(function() {
		langList.show();
	},function(){
		langList.hide();
	});

	/* 购物车 */
	var carts = $(".carts"),
		carts_num = $(".carts-num");
	carts.mouseover(function() {
		$(this).addClass('selected');
		carts_num.css("display", "block");
	});
	carts_num.mouseover(function() {
		carts.addClass('selected');
		carts_num.css("display", "block");
	});
	carts.mouseout(function () {
		$(this).removeClass('selected');
		carts_num.css("display", "none");
	});
	carts_num.mouseout(function () {
		carts.removeClass('selected');
		carts_num.css("display", "none");
	});

	/* 导航处小米手机 */
	var xmPhone = $(".xmPhone");
	var xmPhone_list = $(".xmPhone-list");
	xmPhone.hover(function () {
		xmPhone_list.removeClass("none");
	},function() {
		xmPhone_list.addClass("none");
	});

	/* 左侧商品分类 */
	var showList_li = $(".showList ul li");
		showList_li.hover(function (){
			$(this).addClass("selected").children("div").css("display", "block");
		},function() {
			$(this).removeClass("selected").children("div").css("display", "none");
		});

	/* 轮播图 */
	var slide_left = $(".slide-left"),
		slide_right = $(".slide-right"),
		slide_ul = $(".slide-ul");
	slide_left.click(function () {
		if(slide_ul.css("left") == "0px") {
			slide_ul.animate({left: "-1900px"}, 300);
		}
		else if(slide_ul.css("left") < "0px") {
			slide_ul.animate({left: "+=950px"}, 300);
		}
	});
	slide_right.click(function () {	
		if(slide_ul.css("left") > "-1900px") {
			slide_ul.animate({left: "-=950px"}, 300);
		}
		else if(slide_ul.css("left") == "-1900px") {
			
			slide_ul.animate({left: "0px"}, 300);
		}
	});
});

/*
//搜索框获得,失去焦点动作
function inputHover() {
	var search_input = document.getElementsByClassName("search-frame-input")[0];
	search_input.onfocus = function() {
		var txt_value = search_input.innerHTML();
		
	}
}

//切换语言JavaScript
function toggleLang () {
	var lang = document.getElementById("right-menu-lang");
	var langList = document.getElementsByClassName("right-menu-langList")[0];
	lang.onmouseover = function() {
		langList.style.display = "block";
	}
	langList.onmouseover = function() {
		langList.style.display = "block";
	}
	langList.onmouseout = function() {
		langList.style.display = "none";
	}
}
window.onload = toggleLang();
*/