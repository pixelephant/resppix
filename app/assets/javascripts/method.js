$(document).ready(function(){


	$("#try img").click(function(){
		var w = $(this).data("width");
		var h = $(window).height();
		window.open (window.location.href,"mywindow","menubar=1,resizable=1,width="+w+",height="+h+"");
		return false;
	})

	$("#test form").submit(function(){
		var w = $(this).find(":checked").data("width");
		var h = $(window).height();
		window.open ($("input[type='url']").val(),"mywindow1","menubar=1,resizable=1,width="+w+",height="+h+"");
		return false;
	})
});