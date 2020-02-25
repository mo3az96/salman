

$(window).on("load", function () {
    $('body,html').scrollTop(0)
    $(".loader").fadeOut(500, function () {
        $('body').css("overflow", "visible");


    });
});
$(document).ready(function () {
    /////////Main Slider/////////
    $('.main-slider').owlCarousel({
        items: 1,
        margin: 30,
        autoplay: true,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        dots: true,
        nav: true,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false,
                autoplay: false,
            },
            768: {
                items: 1,
                dots: true,
                nav: true
            },
        }
    });
    /////////Products Slider/////////
    $('.Product-slider').owlCarousel({
        items: 5,
        autoplay: false,
        margin: 23,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        rewind: true,
        nav: true,
        dots: false,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
        responsive: {
            0: {
                items: 1,
                autoplay: true,
                dots: true,
                nav: false,
            },
            500: {
                items: 3,
                dots: true,
                nav: false,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 5
            }
        }
    });
    /////////Brands Slider/////////
    $('.brand-slider').owlCarousel({
        items: 9,
        stagePadding: 1,
        margin: 31,
        rtl: document.dir == 'rtl' ? true : false,
        loop: false,
        rewind: false,
        autoplay: false,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 2,
                autoplay: true,
                dots: true,
                loop: true,
                rewind: true,
            },
            500: {
                items: 4,
                dots: true,
            },
            992: {
                items: 5,
            },
            1200: {
                items: 9
            }
        }
    });

    if ($(window).width() <= 767) {
        $(".nav-foot-header").addClass("mo-accordion");
        $(".nav-foot").addClass("mo-panel");

        $('.mo-search-icon').click(function () {
            $(".search-form").fadeIn(400);
            $("body").addClass("overflow");
            $('.search-input').focus();
        });
        $('.search-form').click(function () {
            $("body").removeClass("overflow");
            $(".search-form").fadeOut(500);
            $('.search-input').focusOut();
        });
        $('.search-cont').click(function (e) {
            e.stopPropagation();
        });

        $('.mo-menu-icon').click(function () {
            $("nav").fadeIn(400);
            $(".mo-navbar").addClass("nav-in");
            $("body").toggleClass("overflow");
            $('.lang').addClass("lang-in");
        });

        $('nav').click(function () {
            $("nav").fadeOut(400);
            $(".mo-navbar").removeClass("nav-in");
            $(".lang").removeClass("lang-in");
            $("body").toggleClass("overflow");
        });
        $('.mo-navbar').click(function (e) {
            e.stopPropagation();
        });
        $('.close-btn').click(function () {
            $("nav").fadeOut(400);
            $(".mo-navbar").removeClass("nav-in");
            $("body").toggleClass("overflow");
        });
    }


    $('.mo-accordion').click(function () {
        var x = $(this).siblings().prop('scrollHeight') + 12 + "px";
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('max-height') == '0px') {
            $(this).siblings().css('max-height', x);
            $(this).siblings().css('padding-top', "15px");
        } else {
            $(this).siblings().css('max-height', '0');
            $(this).siblings().css('padding-top', "0");
        }

        $(".mo-accordion").not(this).siblings().css('max-height', '0');
        $(".mo-accordion").not(this).siblings().css('padding-top', "0");
    })
});