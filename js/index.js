// JavaScript Document
$(function(){
	$("#section .brand .brandbox").eq(0).show().siblings().hide();
	$("#section .model .currentmodel .modelbox").eq(0).show().siblings().hide();
	$("#section p").click(
		function(){
			$(this).addClass("currentstyle").siblings().removeClass("currentstyle");
		}
	);
	$("#section .product p").click(
		function(){
			$("#section .brand .brandbox").eq($(this).index()).show().siblings().hide();
			$("#section .model .modelbigbox").eq($(this).index()).addClass("currentmodel").siblings().removeClass("currentmodel");
			$("#section .model .currentmodel .modelbox").eq(0).show().siblings().hide();
		}
	);
	$("#section .brand .brandbox p").click(
		function(){
			$("#section .model .currentmodel .modelbox").eq($(this).index()).show().siblings().hide();
		}
	);

})
