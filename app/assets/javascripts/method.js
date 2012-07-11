$(document).ready(function(){


	$("#main a").click(function(){
		var w = $(this).html();
		var h = $(window).height();
		window.open (window.location.href,"mywindow","menubar=1,resizable=1,width="+w+",height="+h+"");
		return false;
	})

});