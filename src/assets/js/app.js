$(function () {
    'use strict';
    
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 3,
        slidesPerColumn: 2,
        slidesPerColumnFill: 'row',
        slidesPerGroup: 1,
        spaceBetween: 10,
        grabCursor: true,

        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true,
        },
      
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
      });
});

$(function () {
  'use strict';
  
  const swiper = new Swiper('.swiper-container-works', {
      loop: true,
      slidesPerView: 4,
      slidesPerColumn: 2,
      slidesPerColumnFill: 'row',
      slidesPerGroup: 1,
      spaceBetween: 10,
      
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },

      navigation: {
        nextEl: '.swiper-button-next.btn-works-r',
        prevEl: '.swiper-button-prev.btn-works-l',
      },
    
    });
});

$(function () {
  'use strict';
  
  const swiper = new Swiper('.swiper-container-thanks', {
      loop: true,
      slidesPerView: 3,
      
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
      
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
    });
});