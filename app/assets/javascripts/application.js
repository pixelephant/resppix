//= require jquery
//= require jquery_ujs
//= require jquery.easing

$(document).ready(function(){

	$("#mobile-menu").toggle(function(){
		$("#main-nav").stop().animate({
			marginTop: 0
		},300,function(){
			$(this).animate({
				opacity:1
			},300,function(){
				$("#mobile-menu").addClass("active");
			});
		});
		
	},function(){
		$("#mobile-menu").removeClass("active");
		$("#main-nav").stop().animate({
			marginTop:-200
		},300,function(){
			$(this).animate({
				opacity: 0	
			},300,function(){
				
			});
		});
	});

	$(".quote-button").click(function(){
		 $('html, body').animate({scrollTop:0}, 'fast',function(){
		 	$("#contact").animate({
			marginTop: 0
		},500, "easeInOutQuad");
		 });

		return false;
	});

	$(".close").click(function(){
		$("#contact").animate({
			marginTop: -485
		},500, "easeInOutQuad");
		return false;
	});

	$("#contact-options a").click(function(){
		var $this = $(this);
		
		$this.siblings().removeClass("active").end().addClass("active");
		/*var $c = $($this.siblings().attr("href"));
		var $t = $($this.attr("href"));
		$c.slideUp(300,function(){
			$t.slideDown(300);
		});*/
		$('#form-wrap').animate({
         scrollTop: $($this.attr("href")).offset().top
     }, 500, "easeInOutQuad");
		return false;

	});

});