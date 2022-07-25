$(document).ready(function () {
  const worksSlider = new Swiper(".works-slider", {
    speed: 800,
    effect: "fade",
    centeredSlides: true,
    autoplay: {
      delay: 3000,
    },
    
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      navigation: {
        nextEl: '.works-slider-btns__next',
        prevEl: '.works-slider-btns__prev',
      },

});
const teamSlider = $('.team-slider-container').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  responsive: [

    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 601,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});

});