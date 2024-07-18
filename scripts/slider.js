
const swiper = new Swiper('.image-slider', {
    loop: true,
    hashNavigation: true,
    enabled: true,
    thumbs: {
        swiper: {
            el: '.image-mini-slider',
            slidesPerView: 3,
            spaceBetween: '6px',
            breakpoints: {
                950: {
                    slidesPerView: 8,
                    spaceBetween: '12px',
                    width: null,
                }
            }
        }
    },
    centeredSlides: true,
    navigation: {
        nextEl: '',
        prevEl: '',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 3,
    },
    breakpoints: {
        950: {
            pagination: {
                el: ''
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        }
    }
});


