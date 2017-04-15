$(function() {
 
	var $page = $('html, body'),
        $menuButton = $('.js-menu-btn'),
		$slidingMenu = $('.js-menu'),
        $scrollToTop = $('.js-scroll-top');

	// Menu button
	$menuButton.on('click', function() {
        // Move the button position when menu is open/closed
        $(this).toggleClass('menu-is-open-move-btn');
        // Show/hide sliding menu
        $slidingMenu.toggleClass('menu-show');
        // Add and remove class when menu is open/close
        $(this).toggleClass('menu-is-open');
  	});

    // Scroll to top of the page
    $scrollToTop.click(function() {
        $page.animate({ scrollTop: 0 }, 'slow');
        return false;
    });

    // Sliding image gallery
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,       // Number of images within viewport
                nav: false      // Prev/next navigation
            },
            600: {
                items: 3,       // Number of images within viewport
                nav: false      // Prev/next navigation
            },
            1000: {
                items: 3,       // Number of images within viewport
                nav: false,     // Prev/next navigation
                loop: false
            }
        }
    });

});