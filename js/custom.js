$(document).ready(function(){
    $(".menu-toggle").click(function(){
      $("body").addClass("toggle");
      $(".closed-menu").click(function(){
        $("body").removeClass("toggle");
      });
    });
  
  });

  
// Testimonials Swiper
if (typeof Swiper !== 'undefined') {
  var testimonialsEl = document.querySelector('.testimonials-slider');
  if (testimonialsEl) {
    new Swiper(testimonialsEl, {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      navigation: {
        nextEl: '.testimonials .swiper-button-next',
        prevEl: '.testimonials .swiper-button-prev'
      },
      breakpoints: {
        575: { slidesPerView: 1 },
        768: { slidesPerView: 2.2 },
        1200: { slidesPerView: 2.5 }
      }
    });
  }
}

// Meditations Swiper
if (typeof Swiper !== 'undefined') {
  var meditationsEl = document.querySelector('.meditations-slider');
  if (meditationsEl) {
    new Swiper(meditationsEl, {
      slidesPerView: 1.1,
      spaceBetween: 24,
      loop: true,
      navigation: {
        nextEl: '.meditations-next',
        prevEl: '.meditations-prev'
      },
      breakpoints: {
        576: { slidesPerView: 1.2 },
        768: { slidesPerView: 2 },
        1200: { slidesPerView: 2.2 }
      }
    });
  }
}

// YouTube videos Swiper
if (typeof Swiper !== 'undefined') {
  var youtubeSliderEl = document.querySelector(".youtube-slider");
  if (youtubeSliderEl) {
    var youtubeSlider = new Swiper(youtubeSliderEl, {
      spaceBetween: 24,
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: ".youtube-swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".youtube-swiper-next",
        prevEl: ".youtube-swiper-prev",
      },
      breakpoints: {
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      },
    });
  }
}
