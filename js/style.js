$(function(){

    $('.order__carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1
          }
          }
        ]

    });

    $('.reviews__wrapper').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false,
        responsive: [
            {
            breakpoint: 1100,
            settings: {
                slidesToShow: 3
            },
        },
        {
            breakpoint: 810,
            settings: {
                slidesToShow: 2
            },
        },
        {
            breakpoint: 555,
            settings: {
                slidesToShow: 1
            },
        },
        ]
    });

    $('.header__btn').on('click', function(){
        $('.header__nav').toggleClass('header__nav--active')
    });

});

