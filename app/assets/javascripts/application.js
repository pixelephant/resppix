//= require jquery.easing


/*! A fix for the iOS orientationchange zoom bug. Script by @scottjehl, rebound by @wilto.MIT / GPLv2 License.*/(function(a){function m(){d.setAttribute("content",g),h=!0}function n(){d.setAttribute("content",f),h=!1}function o(b){l=b.accelerationIncludingGravity,i=Math.abs(l.x),j=Math.abs(l.y),k=Math.abs(l.z),(!a.orientation||a.orientation===180)&&(i>7||(k>6&&j<8||k<8&&j>6)&&i>5)?h&&n():h||m()}var b=navigator.userAgent;if(!(/iPhone|iPad|iPod/.test(navigator.platform)&&/OS [1-5]_[0-9_]* like Mac OS X/i.test(b)&&b.indexOf("AppleWebKit")>-1))return;var c=a.document;if(!c.querySelector)return;var d=c.querySelector("meta[name=viewport]"),e=d&&d.getAttribute("content"),f=e+",maximum-scale=1",g=e+",maximum-scale=10",h=!0,i,j,k,l;if(!d)return;a.addEventListener("orientationchange",m,!1),a.addEventListener("devicemotion",o,!1)})(this); 

var topos;

$(window).load(function(){
	 topos = $("#main-nav").offset().top;
		$("#logo img").load(function(){
			topos = $("#main-nav").offset().top;
		});
});

$(document).ready(function(){

	$(window).scroll(function (event) {
	    var y = $(window).scrollTop();

	    if (y >= topos){
	      $('#main-nav').addClass('fixed').next().addClass("xpad");
	    } else {
	      $('#main-nav').removeClass('fixed').next().removeClass("xpad");
	    }
	  });

	$(document).keyup(function(e) {
  		if (e.keyCode == 27) { $(".close").trigger("click"); }
	});

/*
	$("#contact-form,#quote-form").submit(function(){

		$(".close").eq(0).trigger("click");
		$("#thank-you").animate({
			marginTop: 0,
			zIndex: 3
		},500, "easeInOutQuad");

		return false;
	});
*/
	

	
	$("#mobile-menu").toggle(function(){
		$("#main-nav").addClass("opened");
		$("#mobile-nav").addClass("nobo");
		$(this).addClass("active");
		return false;
	},function(){
		$("#main-nav").removeClass("opened");
		$("#mobile-nav").removeClass("nobo");
		$(this).removeClass("active");
		return false;
	});


//EZ KELL HA NEM TÁMOGATOTT A CSS TRANSITION

	/*$("#mobile-menu").toggle(function(){
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
			marginTop:-240
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
			marginTop: -535
		},500, "easeInOutQuad");
		return false;
	});

*/

	$(".quote-button").click(function(){
		 $('html, body').animate({scrollTop:0}, 'fast',function(){
		 	$("#contact").addClass("opened");
		 });
		return false;
	});
	
	$(".close").click(function(){
		$("#contact").removeClass("opened");
		return false;
	});

	$("#contact-options a").click(function(){
		var $this = $(this);
		if(!$this.hasClass("active")){
			$this.siblings().removeClass("active").end().addClass("active");
		/*var $c = $($this.siblings().attr("href"));
		var $t = $($this.attr("href"));
		$c.slideUp(300,function(){
			$t.slideDown(300);
		});*/
		$('#form-wrap').animate({
         scrollTop: $($this.attr("href")).offset().top
     }, 500, "easeInOutQuad");
		
		}
		return false;
	});

	$("#quote-form").submit(function(){
		$(this).find("input[type='submit']").val("Küldés ...").attr("disabled","disabled");
		$.ajax({
      type: 'POST',
      url: "/ajax/inquery",
      data: {
      	name : $("#quote-name").val(),
      	email : $("#quote-email").val(),
      	phone : $("#quote-phone").val(),
      	brief : $("#quote-brief").val(),
      	budget : $("#quote-budget").val()
      },
      success: function(resp){
        if(resp.error == 'none'){
          $(".close").eq(0).trigger("click");
          /* HA NINCS TRANSITION
					$("#thank-you").animate({
						marginTop: 0,
						zIndex: 3
					},500, "easeInOutQuad");*/
          $("#thank-you").addClass("opened");
        }
    }});
		$(this).find("input[type='submit']").val("Küldés").removeAttr("disabled");

		return false;
	});

	$("#contact-form").submit(function(){
		$(this).find("input[type='submit']").val("Küldés ...").attr("disabled","disabled");
		$.ajax({
      type: 'POST',
      url: "/ajax/contact",
      data: {
      	name : $("#contact-name").val(),
      	email : $("#contact-email").val(),
      	phone : $("#contact-phone").val(),
      	brief : $("#contact-brief").val()
      },
      success: function(resp){
        if(resp.error == 'none'){
          $(".close").eq(0).trigger("click");
          $("#thank-you").addClass("opened");
          /* HA NINCS TRANSITION
					$("#thank-you").animate({
						marginTop: 0,
						zIndex: 3
					},500, "easeInOutQuad");*/
        }
    }});
		$(this).find("input[type='submit']").val("Küldés").removeAttr("disabled");
		return false;
	});

});
