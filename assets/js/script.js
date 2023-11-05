(function ($) {

    /*
        1. Data Background Function
        2. Scroll top button
        3. Offcanvus toggle
        4. Theme Slider Functions
        5. Pricing Range Slider
        6. Nice Select
        7. Checkout Toggle
        8. Header Sticky
        9. Mobile Menu
        10. Header Search 
        11. Preloader
        12. Fancybox
        13. Countdown
        14. Cart Drawer
        15. Wow Js
        16. Count Down
        17. Accordion Boxs
    */
    //fancy box video popup 
    Fancybox.bind("[data-fancybox]", {
    });

    // counter UP
    $(document).ready(function () {
        $('.count').counterUp({
            delay: 10,
            time: 5000
        });
    });

    // this is for back to top
    var btn = $('#button');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });


    $(".campaign_slider").slick({
        slidesToShow: 2,
        arrows: false,
        dots: true,
        customPaging: function (slider, i) {
            return '<span></span>';
        },
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $(".testi_slider").slick({
        slidesToShow: 3,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 765,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $(".hm1_hero_slider").slick({
        slidesToShow: 1,
        prevArrow: '<button class="prev-arrow"><i class="fa-solid fa-chevron-left"></i></button>',
        nextArrow: '<button class="next-arrow"><i class="fa-solid fa-chevron-right"></i></button>',
        // speed: 2000,
        autoplay: false,
        // fade: true,
    });


    $(".gallary_slider").slick({
        slidesToShow: 3,
        arrows: false,
        dots: true,
        customPaging: function (slider, i) {
            return '<span></span>';
        },
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $(".cam_detail_slider").slick({
        slidesToShow: 2,
        arrows: false,
        dots: true,
        customPaging: function (slider, i) {
            return '<span></span>';
        },
        responsive: [
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $(".testimonials__slider").slick({
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
    });
    $(".sub_slider").slick({
        slidesToShow: 1,
        autoplay: true,
        arrows: true,
        prevArrow: '<button class="prev-arrow"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button class="next-arrow"><i class="fas fa-arrow-right"></i></button>',
    });


    $(".contact__slider").slick({
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
    });


    $(".user__Slider").slick({
        slidesToShow: 2,
        arrows: false,
        slidesToScroll: 1,
    });

    //nice select
    $('select').niceSelect();













})(jQuery);












