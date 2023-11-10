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
    $(".testimonials__slider").slick({
        slidesToShow: 1,
        arrows: false,
        dots: false,
    });

    $(".hm1_hero_slider").slick({
        autoplay: true,
        autoplaySpeed: 300,
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


    $(document).ready(function(){
        //8. preloader
        $(".preloader").fadeOut();

        //9. init Isotope
        var $grid_1 = $('.grid_1').isotope({
            masonry: {
                columnWidth: 1
            }
        });

        //10. filter items on button click
        $('.vr-filter-btns').on( 'click', 'button', function() {
            var filterValue_1 = $(this).attr('data-filter');
            $grid_1.isotope({ filter: filterValue_1 });
        });

        $(".vr-filter-btns button").each(function(){
            $(this).on("click", function(){
                $(this).parents(".vr-filter-btns").find("button.active").removeClass("active");
                $(this).addClass("active");
            });
        });


        //11. Isotop Grid 2
        var $grid = $('.hm2-grid').isotope({
            
        });

        // filter items on button click
        $('.hm2-filter-btn-group').on( 'click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });

        $(".hm2-filter-btn-group button").each(function(){
            $(this).on("click", function(){
                $(this).parents(".hm2-filter-btn-group").find("button.active").removeClass("active");
                $(this).addClass("active");
            });
        });

        var $grid3 = $('.grid_3').isotope({
            masonry: {
                columnWidth: 1
            }
        });

        // filter items on button click
        $('.vr6-filter-btns').on( 'click', 'button', function() {
            var filterValue3 = $(this).attr('data-filter');
            $grid3.isotope({ filter: filterValue3 });
        });

        $(".vr6-filter-btns button").each(function(){
            $(this).on("click", function(){
                $(this).parents(".vr6-filter-btns").find("button.active").removeClass("active");
                $(this).addClass("active");
            });
        });

        var $grid4 = $('.vr4_grid').isotope({
            masonry: {
                columnWidth: 1
            }
        });

        // filter items on button click
        $('.vr4-filter-nav').on( 'click', 'button', function() {
            var filterValue4 = $(this).attr('data-filter');
            $grid4.isotope({ filter: filterValue4 });
        });

        $(".vr4-filter-nav button").each(function(){
            $(this).on("click", function(){
                $(this).parents(".vr6-filter-btns").find("button.active").removeClass("active");
                $(this).addClass("active");
            });
        });


        //12. video popup 
        Fancybox.bind("[data-fancybox]", {
            
        });

        //13. zoom on hover 
        $('.zoom-on-hover').zoom({
            magnify: 1.2

        });


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

    $(".km_blog__slider").slick({
        slidesToShow: 1,
        arrows: true,
        slidesToScroll: 1,
        prevArrow: '<button class="prev-arrow"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button class="next-arrow"><i class="fas fa-arrow-right"></i></button>',
    });





    $('.km__main__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.bottom__slider'
      });
      $('.bottom__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        asNavFor: '.km__main__slider',
        prevArrow: '<button class="prev-arrow"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button class="next-arrow"><i class="fas fa-arrow-right"></i></button>',
      });
















    //nice select
    $('.nice_select').niceSelect();








})(jQuery);












