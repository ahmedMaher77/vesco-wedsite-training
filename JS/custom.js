/*===========================================================
					SERVICES 
======================================================*/

$(function () {
	//animate on scroll
	new WOW().init();
});

/*===========================================================
					WORK
======================================================*/

$(function () {

	$("#work").magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery: {
			enabled: true
		}
	});

});
/*===========================================================
					TEAM
======================================================*/


$(function () {
	$("#team-members").owlCarousel({
		items: 3,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true,
		responsive : {
					//breakepoint from 0 up 
				0 : {
					items: 1
				},
						//breakepoint from 480 up 
				480 : {
					items: 2
				},
			  		//breakepoint from 768 up 
				768 : {
					items: 3
				}
		}
	});
});
/*===========================================================
					TESTIMONIALS
======================================================*/


$(function () {
	$("#customers-testimonials").owlCarousel({
		items: 1,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true
	});
});
/*===========================================================
					STATS
======================================================*/
$(function () {
	$('.counter').counterUp({
		delay: 10,
		time: 2000
	});

});
/*===========================================================
					CLIENTS
======================================================*/
$(function () {
	$("#clients-list").owlCarousel({
		items: 6,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true,
		responsive : {
					//breakepoint from 0 up 
				0 : {
					items: 1
				},
						//breakepoint from 480 up 
				480 : {
					items: 3
				},
			  		//breakepoint from 768 up 
				768 : {
					items: 4
				},
			  		//breakepoint from 992 up 
				992 : {
					items: 6
				}
		}
	});
});
/*===========================================================
					NAVIGATION
======================================================*/
$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() < 50) {
			//hide nav
			$("nav").removeClass("proja-top-nav");
			$("#back-to-top").fadeOut();
		} else {
			//show nav
			$("nav").addClass("proja-top-nav");
			$("#back-to-top").fadeIn();
		}
	});

});
//smooth scrolling 
$(function () {
	$("a.smooth-scroll").click(function (event) {
		event.preventDefault();

		// get/return id like #home ,#team ...

		var section = $(this).attr("href");

		$('html, body').animate({
			scrollTop: $(section).offset().top - 64
		}, 1250, "easeInOutExpo");
	});
});
//  close the menu on selecting an item automatically
$(function() {
	$("ul.navbar-nav li a").on("click touch",function(){
		$(".navbar-toggle").click();
	});
});


