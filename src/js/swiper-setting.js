import Swiper from 'swiper/swiper-bundle.esm.js';

// https://codepen.io/emranweb/pen/wVaWNN  - анимация в слайдере

const commandDirectionsSwiper = new Swiper('.command-directions__swiper', {
    // direction: 'vertical',
    // loop: true,
    // speed: 1000,
    spaceBetween: 10,

    // If we need pagination
    // pagination: {
    //     el: '.swiper-pagination',
    // },

    // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    navigation: {
        nextEl: '.command-directions__arrow-next',
        prevEl: '.command-directions__arrow-prev',
    },


    // // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    // }
});