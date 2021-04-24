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

    const swiper2 = new Swiper('.swiper-container-goods', {
      loop: true,
      slidesPerView: 3,
      slidesPerColumn: 2,
      slidesPerColumnFill: 'row',
      slidesPerGroup: 1,
      spaceBetween: 40,
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

    const swiper3 = new Swiper('.swiper-container-video', {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 30,
    
      navigation: {
        nextEl: '.swiper-button-next-video',
        prevEl: '.swiper-button-prev-video',
      },
    
    });

    const swiper4 = new Swiper('.swiper-container-comments', {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 10,
      grabCursor: true,

      pagination: {
        el: '.swiper-pagination-comments',
        clickable: true,
        dynamicBullets: true,
      },
    
      navigation: {
        nextEl: '.swiper-button-next-comments',
        prevEl: '.swiper-button-prev-comments',
      },
    
  });


    const swiper5 = new Swiper('.swiper-container-works', {
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

    const swiper6 = new Swiper('.swiper-container-trust', {
      loop: true,
      slidesPerView: 3,
      slidesPerColumn: 2,
      slidesPerColumnFill: 'row',
      slidesPerGroup: 1,
      spaceBetween: 20,
      grabCursor: true,

      pagination: {
        el: '.swiper-pagination-trust',
        clickable: true,
        dynamicBullets: true,
      },
    
      navigation: {
        nextEl: '.swiper-button-next-trust',
        prevEl: '.swiper-button-prev-trust',
      },
    
  });

  const swiper7 = new Swiper('.swiper-container-thanks', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    grabCursor: true,
    
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
