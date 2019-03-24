$(document).ready(function() {
  var swiper = new Swiper (".swiper-container", {
    centeredSlides: true,
    speed: 500,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
  });
});
