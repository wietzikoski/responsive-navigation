//********SIDEBAR********

//Add custom tooltip on hover when menu is not expanded or in mobile.
$(".side-nav a").hover(
	function() {
		var $text = $(this).text();
		var $tooltip = $("<div></div>");
		$tooltip.attr('class', 'nav-tooltip');
		$tooltip.text($text);
		$(this).append($tooltip);
		$tooltip.toggle('fade');
			
		if ($(".side-nav").hasClass('expanded') || $("nav").hasClass('mobile-nav')) {
			$tooltip.css('display', 'none');
		};
	},
	function() {
		$('.nav-tooltip').remove();
	}
);

//Expand navigation on click
$(".side-nav").stop().click(function() {
	var $div = $(this);
	var $title = $(".side-nav span");
	var $content = $(".content");
	$div.removeClass('contracted');
	$div.toggleClass('expanded', 200, "easeOutSine");
	$title.toggleClass('hidden', 200, "easeOutSine").css("paddingLeft", 70).toggleClass('inline-block');
	$content.toggleClass('content-expanded', 200, "easeOutSine");
});


//********MOBILE-MENU********
//I want to click the mobile icon, then hide icon and show mobile version of menu
	//on click, remove class side-nav, add class mobile-nav



$(".menu-icon").click(function() {
	$(this).toggle();
	$(".side-nav").removeClass('hide-mobile');
	$("#side-nav").switchClass("side-nav", "mobile-nav", 200, "easeOutSine");
	$("nav a").addClass("mobile-link", 200, "easeOutSine");
	$("span").removeClass('hidden', 200, "easeOutSine");
});



