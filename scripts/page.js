$(function() {
	//搜索框获得,失去焦点动作
	var search_input = $(".search-frame-input");
	search_input.focus(function() {
		var txt_value = $(this).val();
		if(txt_value == this.defaultValue) {
			$(this).val("");
		}
	});
	search_input.blur(function() {
		var txt_value = $(this).val();
		if(txt_value == ""){
			$(this).val(this.defaultValue);
		}
	});
	//切换语言jQuery
	var lang = $("#right-menu-lang");
	var langList = $(".right-menu-langList")
	lang.mouseover(function() {
		langList.slideDown();
	});
	langList.hover(function() {
		langList.show();
	},function(){
		langList.hide();
	});
	//购物车
	var carts = $(".carts");
	var carts_num = $(".carts-num");
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