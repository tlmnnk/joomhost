//= ../../../node_modules/slick-carousel/slick/slick.js

$(function(){

    $('.reviews__slider').slick({
        infinite: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        dots: true
        });

    $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle();
    });
});
