$(function () {
    'use strict';
    
    const swiper1 = new Swiper('.swiper-container-etching', {
        loop: true,
        slidesPerView: 3,
        slidesPerColumn: 2,
        slidesPerColumnFill: 'row',
        slidesPerGroup: 1,
        spaceBetween: 10,
        grabCursor: true,

        pagination: {
          el: '.swiper-pagination-etching',
          clickable: true,
          dynamicBullets: true,
        },
      
        navigation: {
          nextEl: '.swiper-button-next-etching',
          prevEl: '.swiper-button-prev-etching',
        },
      
      });
    const swiper2 = new Swiper('.swiper-container-works', {
      loop: true,
      slidesPerView: 4,
      slidesPerColumn: 2,
      slidesPerColumnFill: 'row',
      slidesPerGroup: 1,
      spaceBetween: 10,
    

      navigation: {
        nextEl: '.swiper-button-next.btn-works-r',
        prevEl: '.swiper-button-prev.btn-works-l',
      },
    });
  const swiper3 = new Swiper('.swiper-container-thanks', {
    loop: true,
    slidesPerView: 3,
    
    pagination: {
      el: '.swiper-pagination-thanks',
      clickable: true,
      dynamicBullets: true,
    },
    
    navigation: {
      nextEl: '.swiper-button-next-thanks',
      prevEl: '.swiper-button-prev-thanks',
    },
  
  });
});
