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


    //1. Data Background Set
    $('[data-background]').each(function () {
        $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
    });

    //2. Scroll top button
    $(window).on("scroll", function () {
        var scrollBar = $(this).scrollTop();
        if (scrollBar > 150) {
            $(".scroll-top-btn").fadeIn();
        } else {
            $(".scroll-top-btn").fadeOut();
        }
    })
    $(".scroll-top-btn").on("click", function () {
        $("body,html").animate({
            scrollTop: 0
        });
    });


    //3. Offcanvus toggle
    $(".cart-open").on("click", function () {
        $(".cart-drawer").addClass("active");
    });

    $(".cart-drawer .drawer-close").on("click", function () {
        $(".cart-drawer").removeClass("active");
    });

    $(document).on("mouseup", function (e) {
        var cart_drawer = $(".cart-drawer");

        if (!cart_drawer.is(e.target) && cart_drawer.has(e.target).length === 0) {
            $(".cart-drawer").removeClass("active");
        }
    });

    //team card social
    $(".member-social").each(function () {
        var plus_btn = $(this).find(".plus-btn");

        plus_btn.on("click", function () {
            $(this).parents(".member-social").toggleClass("active");
        });
    });


    $(".feature-product-slider").slick({
        slidesToShow: 1,
        arrows: false,
        asNavFor: '.feature-product-thumbnail-slider',

    });

    $(".feature-product-thumbnail-slider").slick({
        slidesToShow: 3,
        prevArrow: '<button class="prev-arrow"><i class="fa-solid fa-arrow-left"></i></button>',
        nextArrow: '<button class="next-arrow"><i class="fa-solid fa-arrow-right"></i></button>',
        focusOnSelect: true,
        asNavFor: '.feature-product-slider'
    });

    $(".category-slider").slick({
        slidesToShow: 4,
        prevArrow: '<button class="prev-arrow"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button class="next-arrow"><i class="fas fa-arrow-right"></i></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }

        ]
    });

    $(".cl-product-slider").slick({
        slidesToShow: 3,
        prevArrow: '<button class="prev-arrow"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button class="next-arrow"><i class="fas fa-arrow-right"></i></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }

        ]
    });

    $(".brands-slider").slick({
        slidesToShow: 5,
        autoplay: true,
        speed: 700,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    });


    $(window).on("load", function () {

        var $grid_1 = $('.grid_1').isotope({
        });

        // filter items on button click
        $('.filter-btn-groups').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid_1.isotope({ filter: filterValue });
        });
    });

    $(".best-selling-slider").slick({
        slidesToShow: 3,
        prevArrow: '<button class="prev-arrow"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button class="next-arrow"><i class="fas fa-arrow-right"></i></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $(".gallery-slider").slick({
        slidesToShow: 5,
        arrows: false,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $(".sale-product-slider").slick({
        slidesToShow: 1,
        prevArrow: '<button class="prev-arrow"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button class="next-arrow"><i class="fas fa-arrow-right"></i></button>',

    });

    $(".team-card-slider").slick({
        slidesToShow: 3,
        prevArrow: '<button class="prev-arrow"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button class="next-arrow"><i class="fas fa-arrow-right"></i></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ],

    });

    $(".feedback-card-slider").slick({
        slidesToShow: 3,
        prevArrow: '<button class="prev-arrow"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button class="next-arrow"><i class="fas fa-arrow-right"></i></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $(".blog-card-slider").slick({
        slidesToShow: 3,
        prevArrow: '<button class="prev-arrow"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button class="next-arrow"><i class="fas fa-arrow-right"></i></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $(".freedback-sliders").slick({
        slidesToShow: 3,
        prevArrow: '<button class="prev-arrow"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button class="next-arrow"><i class="fas fa-arrow-right"></i></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    // product details page left side product image slider
    $(".product_catalog_slider").slick({
        slidesToShow: 3,
        prevArrow: '<button class="prev-arrow"><i class="fa-solid fa-angles-left"></i></button>',
        nextArrow: '<button class="next-arrow"><i class="fa-solid fa-angles-right"></i></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 603,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 442,
                settings: {
                    slidesToShow: 1,
                }
            }
        ],

    });

    $(".product_small_slider").slick({
        slidesToShow: 5,
        vertical: true,
        verticalSwiping: true,
        focusOnSelect: true,
        arrows: false,
        asNavFor: ".single_product_slider",
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    vertical: false,
                    slidesToShow: 3,
                    verticalSwiping: false,
                }
            }
        ]
    });

    $(".single_product_slider").slick({
        slidesToShow: 1,
        asNavFor: ".product_small_slider",
        arrows: true,
        prevArrow: '<button class="prev-arrow"><i class="fa-solid fa-angles-left"></i></button>',
        nextArrow: '<button class="next-arrow"><i class="fa-solid fa-angles-right"></i></button>',
    });

    $(".top_catagory").slick({
        slidesToShow: 3,
        prevArrow: '<button class="prev-arrow"><i class="fa-solid fa-angle-left"></i></button>',
        nextArrow: '<button class="next-arrow"><i class="fa-solid fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $(".trusted_brand_wrap").slick({
        slidesToShow: 5,
        prevArrow: '<button class="prev-arrow"><i class="fa-solid fa-angle-left"></i></button>',
        nextArrow: '<button class="next-arrow"><i class="fa-solid fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $(".testimonial_wrap").slick({
        centerMode: true,
        slidesToShow: 5,
        centerPadding: '10px',
        prevArrow: '<button class="prev-arrow"><i class="fa-solid fa-angle-left"></i></button>',
        nextArrow: '<button class="next-arrow"><i class="fa-solid fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    var $gird = $('.trending-item-homethere-active').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
    })

    $('.ex-tr-filter-button').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $gird.isotope({ filter: filterValue });
        $grid.isotope({ filter: '.transition' });
    })


    $(".flash_selling_slider").slick({
        slidesToShow: 1,
        prevArrow: '<button class="prev-arrow"><i class="fa-solid fa-chevron-left"></i></button>',
        nextArrow: '<button class="next-arrow"><i class="fa-solid fa-chevron-right"></i></button>',
    });


    let countDown = document.getElementsByClassName('countdown');
    if (countDown.length) {
        $(document).ready(function () {
            const targetDate = new Date("2023-12-31T23:59:59").getTime();

            function updateCountdown() {
                const now = new Date().getTime();
                const timeLeft = targetDate - now;

                const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

                document.getElementById("days").textContent = days < 10 ? "0" + days : days;
                document.getElementById("hours").textContent = hours < 10 ? "0" + hours : hours;
                document.getElementById("minutes").textContent = minutes < 10 ? "0" + minutes : minutes;
                document.getElementById("seconds").textContent = seconds < 10 ? "0" + seconds : seconds;
            }

            updateCountdown();
            setInterval(updateCountdown, 1000);
        })
    }


    $(".hm3_exclusive_top").slick({
        slidesToShow: 3,
        prevArrow: '<button class="prev-arrow"><i class="fa-solid fa-angle-left"></i></button>',
        nextArrow: '<button class="next-arrow"><i class="fa-solid fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });


    $(".hm3_deal_of_week").slick({
        slidesToShow: 3,
        prevArrow: '<button class="prev-arrow"><i class="fa-solid fa-angle-left"></i></button>',
        nextArrow: '<button class="next-arrow"><i class="fa-solid fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });


    $(".hm3_customer_feedback").slick({
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '10px',
        prevArrow: '<button class="prev-arrow"><i class="fa-solid fa-angle-left"></i></button>',
        nextArrow: '<button class="next-arrow"><i class="fa-solid fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });


    $(".recent_review_slider").slick({
        slidesToShow: 3,
        prevArrow: '<button class="prev-arrow"><i class="fa-solid fa-angle-left"></i></button>',
        nextArrow: '<button class="next-arrow"><i class="fa-solid fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });


    $(".hm3_latest_news").slick({
        slidesToShow: 3,
        prevArrow: '<button class="prev-arrow"><i class="fa-solid fa-angle-left"></i></button>',
        nextArrow: '<button class="next-arrow"><i class="fa-solid fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 1231,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 805,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });


    $(".follow_tiktok_slider").slick({
        slidesToShow: 3,
        autoplay: false,
        prevArrow: '<button class="prev-arrow"><i class="fa-solid fa-angle-left"></i></button>',
        nextArrow: '<button class="next-arrow"><i class="fa-solid fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });


    //collection slider 
    $(".hm4-collection-slider").slick({
        slidesToShow: 3,
        prevArrow: '<button class="prev-arrow"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button class="next-arrow"><i class="fas fa-angle-right"></i></button>',
    })

    //collection slider 
    $(".hm2-collection-slider").slick({
        slidesToShow: 3,
        prevArrow: '<button class="prev-arrow"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button class="next-arrow"><i class="fas fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
        ],
    });
    //deal__section__slider
    $(".deal__section__slider").slick({
        slidesToShow: 3,
        prevArrow: '<button class="prev-arrow"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button class="next-arrow"><i class="fas fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
        ],
    });
    //recommend__product-slider
    $(".recommend__product-slider").slick({
        slidesToShow: 3,
        prevArrow: '<button class="prev-arrow"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button class="next-arrow"><i class="fas fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
        ],
    });
    //hm2__blog_slider
    $(".hm2__blog_slider").slick({
        slidesToShow: 3,
        prevArrow: '<button class="prev-arrow"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button class="next-arrow"><i class="fas fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
        ],
    });
    //hm2__instragram__slider
    $(".hm2__instragram__slider").slick({
        slidesToShow: 4,
        prevArrow: '<button class="prev-arrow"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button class="next-arrow"><i class="fas fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
        ],
    });

    $(".cn__collection__slider").slick({
        slidesToShow: 3,
        prevArrow: '<button class="prev-arrow"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button class="next-arrow"><i class="fas fa-arrow-right"></i></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    $(".brand_slider_wrap").slick({
        slidesToShow: 5,
        nextArrow: false,
        prevArrow: false,
        responsive: [
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });


    Fancybox.bind("[data-fancybox]", {});

    //product details page left side image facny
    $("a#single_image").fancybox({
        'hideOnContentClick': true
    });


    $(".hm4-collection-slider").slick({
        slidesToShow: 3,
        prevArrow: '<button class="prev-arrow"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button class="next-arrow"><i class="fas fa-arrow-right"></i></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    $(".hm4_deal_this_week").slick({
        slidesToShow: 3,
        prevArrow: '<button class="prev-arrow"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button class="next-arrow"><i class="fas fa-arrow-right"></i></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    $(".hm4_meet_team_slider").slick({
        slidesToShow: 3,
        prevArrow: '<button class="prev-arrow"><i class="fa-solid fa-angle-left"></i></button>',
        nextArrow: '<button class="next-arrow"><i class="fa-solid fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });


    $(".hm4_customer_feedback").slick({
        slidesToShow: 3,
        prevArrow: '<button class="prev-arrow"><i class="fa-solid fa-angle-left"></i></button>',
        nextArrow: '<button class="next-arrow"><i class="fa-solid fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });


    $(".hm4_blog_news").slick({
        slidesToShow: 3,
        prevArrow: '<button class="prev-arrow"><i class="fa-solid fa-angle-left"></i></button>',
        nextArrow: '<button class="next-arrow"><i class="fa-solid fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });


})(jQuery);












