const swiper = new Swiper('.image-slider', {
    loop: true,
    hashNavigation: true,
    thumbs: {
        swiper: {
            el: '.image-mini-slider',
            slidesPerView: 8,
            spaceBetween: '12px'
        }
    },
    centeredSlides: true,
});

