$(document).ready(function(){

	mixpanel_user();

	$("nav#main-nav a").click(function(){
	    mixpanel.track("Main nav", {"location": document.URL, "target": $(this).attr('href')});
	    console.log('target: ' + $(this).attr('href'));
	    return true;
	});

	$("footer nav a").click(function(){
	    mixpanel.track("Footer nav", {"location": document.URL, "target": $(this).attr('href')});
	    return true;
	});

	$("div#main a").click(function(){
	    mixpanel.track("Onpage link", {"location": document.URL, "target": $(this).attr('href')});
	    return true;
	});

	$("section#test form").submit(function(){
		mixpanel.track("Test your site", {"url": $("input#test").val()});
		return true;
	});

	$("#testing_enter").click(function(){
		mixpanel.track("Rocket launch");
		return true;
	});

	$("#contact-options-inner a").click(function(){
	    mixpanel.track("Contact switch", {"location": document.URL, "target": $(this).attr('href')});
	    return true;
	});

	$("select#quote-budget").click(function(){
	    mixpanel.track("Budget switch", {"location": document.URL});
	    return true;
	});

	$("#form-wrap a.close").click(function(){
	    mixpanel.track("Contact form close", {"location": document.URL});
	    return true;
	});	

	$(window).scroll(function(){
		mixpanel.track("Window scroll", {"location": document.URL});
	    return true;
	});

	function mixpanel_user(){
		if($.cookie('pix_mixpanel_user') === undefined){
			var user_id = new Date().getTime();
			$.cookie('pix_mixpanel_user', user_id, { path: '/' });
		}
		mixpanel.identify($.cookie('pix_mixpanel_user'));
	}

});