(function($) {
    "use strict";

    // meanmenu
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991"
    });

    // One Page Nav
    var top_offset = $('.header-area').height() - 10;
    $('.main-menu nav ul').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset,
    });


    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 145) {
            $(".header-sticky").removeClass("is-sticky");
        } else {
            $(".header-sticky").addClass("is-sticky");
        }
    });



    // mainSlider
    function mainSlider() {
        var BasicSlider = $('.slider-active');
        BasicSlider.on('init', function(e, slick) {
            var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: true,
            autoplaySpeed: 5000,
            dots: false,
            fade: false,
            arrows: false,
            prevArrow: '<button type="button" class="slick-prev"><i class="ti-shift-left"></i> </button>',
            nextArrow: '<button type="button" class="slick-next"><i class="ti-shift-right"></i> </button>',
            responsive: [{
                breakpoint: 767,
                settings: {
                    dots: false,
                    arrows: false
                }
            }]
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function() {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function() {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();




    $('.Description-2-active').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        fade: false,
        arrows: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="ti-shift-left"></i> </button>',
        nextArrow: '<button type="button" class="slick-next"><i class="ti-shift-right"></i> </button>',
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 280,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',

                    slidesToShow: 1
                }
            }
        ]
    });

    // owlCarousel
    $('.slider-active3').owlCarousel({

        items: 1,
        loop: true,
        margin: 30,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });


    /* magnificPopup img view */
    $('.popup-image').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    /* magnificPopup video view */
    $('.popup-video').magnificPopup({
        type: 'iframe'
    });


    // isotop
    $('.grid').imagesLoaded(function() {
        // init Isotope
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid-item',
            }
        });


        // filter items on button click
        $('.portfolio-menu').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });


        $('select').niceSelect();
        //for menu active class
        // $('.mainmenu ul li').on('click', function(event) {
        //     $(this).siblings('.active').removeClass('active');
        //     $(this).addClass('active');
        //     event.preventDefault();
        // });

    });


    // $('.mainmenu ul li').on('click', function(event) {
    //     $(this).siblings('.active').removeClass('active');
    //     $(this).addClass('active');
    //     event.preventDefault();
    // });

    // counterUp
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    // scrollToTop
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<i class="icofont icofont-long-arrow-up"></i>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

    // WOW active
    new WOW().init();


})(jQuery);