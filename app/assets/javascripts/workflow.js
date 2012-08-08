//= require jquery.appear.min

$(window).load(function(){

$('.animated').appear(function(){
   		$(this).addClass("bounceIn");
	});

});

$(document).ready(function(){

		$('#testing_enter').click(function() {
		  $('#testing_rocket').animate({
		    top: "-160%"
		  }, 1500,"easeInOutExpo", function() {
		    $("#testing_rocket").fadeOut("fast",function(){
		    	$("#testing_rocket").css("top","30%");
		    	$("#testing_rocket").fadeIn();
		    })
		  });
		});
});