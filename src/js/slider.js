
  // const swiper = new Swiper('.mySwiper', {
  //     // Optional parameters
  //     direction: 'horizontal',
  //     loop: true,

  //     // If we need pagination
  //     pagination: {
  //       el: '.swiper-pagination',
  //     },

  //     // Navigation arrows
  //     navigation: {
  //       nextEl: '.swiper-button-next',
  //       prevEl: '.swiper-button-prev',
  //     },


  //   });


var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  breakpoints: {
    // when window width is >= 640px
    768: {
      slidesPerView: 7,
      spaceBetween: 35
    }
  },
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});