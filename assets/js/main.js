/*global $, alert, console */

$(document).ready(function() {


    jQuery(function($) {

        'use strict';
        animateReveal();

    });

    /* ===============================  click on navbar toggler  =============================== */

    $('#nav-icon1').on('click', function() {
        $(this).addClass('open');
        $('.sidebar').addClass("opened");
        $('.overlay_gen').fadeIn().on('click', function() {
            $(this).fadeOut();
            $('#nav-icon1').removeClass('open')
            $('.sidebar').removeClass("opened");
        });
    })


    /* ===============================  search popup  =============================== */

    $('.icon_search').on('click', function(e) {
        e.preventDefault();
        $('.search-popup').addClass('active')
    })

    $('.search-popup').on('click', function() {
        $(this).removeClass('active')
    })

    $('.aws-search-form').on('click', function(e) {
        e.stopPropagation();
    })


    /* ===============================  WOW.js  =============================== */

    new WOW().init();



    /* ===============================  slider section  =============================== */
    $(".header_section .owl-carousel").owlCarousel({
        autoplay: true,
        nav: true,
        dots: false,
        navText: [`<svg xmlns="http://www.w3.org/2000/svg" width="37.852" height="20.02" viewBox="0 0 37.852 20.02">
        <path id="arrow-left" d="M42.19,14.4l-30.509-.064,5.5-5.484a1.674,1.674,0,1,0-2.367-2.367L6.48,14.821a1.723,1.723,0,0,0,0,2.367l8.335,8.335a1.674,1.674,0,1,0,2.367-2.367l-5.5-5.484,30.509.064a1.667,1.667,0,0,0,0-3.334Z" transform="translate(-6.005 -5.996)" fill="#ef4b4d"/>
      </svg>
      `, `<svg xmlns="http://www.w3.org/2000/svg" width="37.852" height="20.02" viewBox="0 0 37.852 20.02">
        <path id="arrow-left" d="M42.19,14.4l-30.509-.064,5.5-5.484a1.674,1.674,0,1,0-2.367-2.367L6.48,14.821a1.723,1.723,0,0,0,0,2.367l8.335,8.335a1.674,1.674,0,1,0,2.367-2.367l-5.5-5.484,30.509.064a1.667,1.667,0,0,0,0-3.334Z" transform="translate(43.857 26.016) rotate(180)" fill="#ef4b4d"/>
      </svg>`],
        loop: true,
        // animateOut: 'fadeOut',
        items: 1
    });


    /* ===============================  categories section  =============================== */
    $(".categories_section .owl-carousel").owlCarousel({
        autoplay: true,
        nav: false,
        dots: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        loop: false,
        responsive: {
            0: { items: 2 },
            768: { items: 3 },
            992: { items: 4 },
            1200: { items: 5 }
        }
    });


    /* ===============================  products section  =============================== */
    $(".products_section .owl-carousel").owlCarousel({
        autoplay: true,
        nav: false,
        dots: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        loop: false,
        responsive: {
            0: { items: 1 },
            576: { items: 2 },
            992: { items: 3 },
            1200: { items: 4 }
        }
    });


    /* ===============================  show mobile menu  =============================== */
    $('.btn_small_list').on('click', function() {
        $('.mobile_menu').addClass('open');
        $('body').addClass('overflow-hidden')
    })

    $('.mobile_menu .close_btn').on('click', function() {
        $('.mobile_menu').removeClass('open');
        $('body').removeClass('overflow-hidden')
    })


    /* ===============================  Animated Reveal  =============================== */

    var animateReveal = function() {

        var controller = new ScrollMagic.Controller();

        var greveal = $('.gsap-reveal');

        // gsap reveal
        $('.gsap-reveal').each(function() {
            $(this).append('<span class="cover"></span>');
        });
        if (greveal.length) {
            var revealNum = 0;
            greveal.each(function() {
                var cover = $(this).find('.cover');

                var tl = new TimelineMax();

                setTimeout(function() {
                    tl
                        .fromTo(cover, 2, { skewX: 0 }, { xPercent: 101, transformOrigin: "0% 100%", ease: Expo.easeInOut })
                }, revealNum * 0);

                var scene = new ScrollMagic.Scene({
                        triggerElement: this,
                        duration: "0%",
                        reverse: false,
                        offset: "-300%",
                    })
                    .setTween(tl)
                    .addTo(controller);

                revealNum++;

            });
        }

        // gsap reveal hero
        $('.gsap-reveal-hero').each(function() {
            var html = $(this).html();
            $(this).html('<span class="reveal-wrap"><span class="cover"></span><span class="reveal-content">' + html + '</span></span>');
        });
        var grevealhero = $('.gsap-reveal-hero');

        if (grevealhero.length) {
            var heroNum = 0;
            grevealhero.each(function() {

                var cover = $(this).find('.cover'),
                    revealContent = $(this).find('.reveal-content');

                var tl2 = new TimelineMax();

                setTimeout(function() {

                    tl2
                        .to(cover, 1, {
                            marginLeft: '0',
                            ease: Expo.easeInOut,
                            onComplete() {
                                tl2.set(revealContent, { x: 0 });
                                tl2.to(cover, 1, { marginLeft: '102%', ease: Expo.easeInOut });
                            }
                        })
                }, heroNum * 0);

                var scene = new ScrollMagic.Scene({
                        triggerElement: this,
                        duration: "0%",
                        reverse: false,
                        offset: "-300%",
                    })
                    .setTween(tl2)
                    .addTo(controller);

                heroNum++;
            });
        }
    }


    /* ===============================  Smooth scroll into second section  =============================== */

    $('.smoothscroll').on('click', function() {

        $('html, body').animate({

            scrollTop: $($(this).attr('href')).offset().top
        }, 1000, 'easeInOutExpo')
    })



    /* ===============================  Button Up  =============================== */

    $(window).scroll(function() {
        if ($(window).scrollTop() >= 1000) {

            $('.up').addClass('fade')
        } else {

            $('.up').removeClass('fade')
        }
    })

    $('.up').on('click', function() {

        $('html, body').animate({
            scrollTop: 0
        }, 1000, 'easeInOutExpo')
    })


    /* ===============================  show password =============================== */
    $(".toggle-password").click(function() {
        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });


    /* ===============================  dropdown  =============================== */

    $('.dropdown-toggle').dropdown()


    /* =============================== Settings of content tabs =============================== */
    $('.profile_page .profile_info .list li').on('click', function() {

        $(this).addClass('active').siblings().removeClass('active');

        var id = $(this).attr('data-content')

        $('.profile_page .box_content[id="' + id + '"]').addClass('active').siblings().removeClass('active')

    })


});