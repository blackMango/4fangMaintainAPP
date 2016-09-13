// JavaScript Document
$(function(){
	$("#section li").click(
		function(){
			$(this).addClass("currentstyle").siblings().removeClass("currentstyle");
			$("#section .prebox .pre").eq($(this).index()).show().siblings().hide();
		}
	)

})
