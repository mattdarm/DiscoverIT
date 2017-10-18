$(document).ready(function() {

   /* BURGER MENU ANIMATION */

	// MAIN MENU
	$('#burger-menu-trigger-menu').click(function(){
		$(this).toggleClass('burger-menu--animation');
	});

	// CONTENT DESKTOP
	$('#about-us__trigger-desktop, #services__trigger-desktop, #team__trigger-desktop, #contact__trigger-desktop, #work__trigger-desktop, #support__trigger-desktop').click(function(){
		$(this).toggleClass('burger-menu--animation');

	});

	// CONTENT MOBILE
	$('#about-us__trigger-mobile, #services__trigger-mobile, #team__trigger-mobile, #contact__trigger-mobile, #work__trigger-mobile, #support__trigger-mobile').click(function(){
		$(this).toggleClass('burger-menu--animation');
	});


	/* TRIGGERS FOR MENU */

	// MOBILE MENU IN HEADER
   $("#burger-menu-trigger-menu").click(function(){
      $(".header__menu").toggleClass("header__menu--mobile");
   });

	// DESKTOP MENU
	$('#about-us__trigger-desktop').click(function(){
		$(".about-us .main-content__element--menu-overlay").toggleClass('visible');
	});

	$('#services__trigger-desktop').click(function(){
		$(".services .main-content__element--menu-overlay").toggleClass('visible');
	});

	$('#team__trigger-desktop').click(function(){
		$(".team .main-content__element--menu-overlay").toggleClass('visible');
	});

	$('#contact__trigger-desktop').click(function(){
		$(".contact .main-content__element--menu-overlay").toggleClass('visible');
	});

	$('#work__trigger-desktop').click(function(){
		$(".work .main-content__element--menu-overlay").toggleClass('visible');
	});

	$('#support__trigger-desktop').click(function(){
		$(".support .main-content__element--menu-overlay").toggleClass('visible');
	});

	// MOBILE MENU
	$('#about-us__trigger-mobile').click(function(){
		$(".about-us .main-content__element--menu-overlay").toggleClass('visible');
	});

	$('#services__trigger-mobile').click(function(){
		$(".services .main-content__element--menu-overlay").toggleClass('visible');
	});

	$('#team__trigger-mobile').click(function(){
		$(".team .main-content__element--menu-overlay").toggleClass('visible');
	});

	$('#contact__trigger-mobile').click(function(){
		$(".contact .main-content__element--menu-overlay").toggleClass('visible');
	});

	$('#work__trigger-mobile').click(function(){
		$(".work .main-content__element--menu-overlay").toggleClass('visible');
	});

	$('#support__trigger-mobile').click(function(){
		$(".support .main-content__element--menu-overlay").toggleClass('visible');
	});

});
