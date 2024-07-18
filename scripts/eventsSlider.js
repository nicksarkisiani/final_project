const swiper = new Swiper('.image-slider', {
    loop: true,
    enabled: true,
    thumbs: {
        swiper: {
            el: '.image-mini-slider',
            slidesPerView: 4,
            spaceBetween: '11px',
            width: null,
        }
    },
});

const responsiveSwiper = new Swiper('.image-slider_responsive', {
    loop: true,
    enabled: true,
    thumbs: {
        swiper: {
            el: '.image-mini-slider_responsive',
            slidesPerView: 4,
            spaceBetween: '11px',
            width: null,
        }
    },
});
