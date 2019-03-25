$(document).ready(function() {
  /**
   * Progress
   */
  $(window).on("scroll", function() {
    var scrollTop = $(window).scrollTop(),
        documentHeight = $(document).height(),
        windowHeight = $(window).height();
        scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
    var progressValue = scrollPercentage;
    $("progress").attr("value", progressValue);
  });

  /**
   * Swiper v4.5.0
   */
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
