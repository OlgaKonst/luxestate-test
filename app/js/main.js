$(function() {
    $('.agents-slider').slick({
        infinite: true,
        // autoplay: true,
        // autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [{
                breakpoint: 1110,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

        ]
    })

    $('.menu-btn').on('click', function() {
        $('.menu-btn').toggleClass('menu-btn--active');
        $('.header-menu__list').toggleClass('header-menu__list--active');
    });

    let a = 0;
    $(window).scroll(function() {
        var oTop = $('.home__counters').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.counter-value').each(function() {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                    }
                });
            });
            a = 1;
        }
    });


    // $('#fullpage').fullpage({
    //     autoScrolling: true,
    //     scrollHorizontally: true,
    //     sectionSelector: '.section',
    // });

});