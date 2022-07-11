import Swiper, { Navigation, Pagination, EffectFade, Thumbs } from "swiper";

const sliderSwiper = () => {
  if (document.querySelector(".description-slider-mini__swiper")) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    var descriptionSliderMini = new Swiper(".description-slider-mini__swiper", {
      slidesPerView: 4,
      spaceBetween: 40,
      allowTouchMove: false,
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 4,
          spaceBetween: 20,
          direction: "vertical",
        },
        // when window width is >= 640px
        768: {
          slidesPerView: 4,
          spaceBetween: 30,
          direction: "horizontal",
        },
      },
    });
  }
  if (document.querySelector(".description-slider__swiper")) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper(".description-slider__swiper", {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination, EffectFade, Thumbs],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 30,
      //   autoHeight: true,
      speed: 500,

      //touchRatio: 0,
      //simulateTouch: false,
      loop: true,
      //preloadImages: false,
      //lazy: true,

      // Эффекты
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      thumbs: {
        swiper: descriptionSliderMini,
      },
      //   autoplay: {
      //     delay: 3000,
      //     disableOnInteraction: false,
      //   },

      // Пагинация

      pagination: {
        el: ".description-slider__pagination",
        clickable: true,
      },

      // Скроллбар
      /*
                scrollbar: {
                    el: '.swiper-scrollbar',
                    draggable: true,
                },
                */

      // Кнопки "влево/вправо"
      //   navigation: {
      //     prevEl: ".portfolio-slider__button.portfolio-slider__button--prev",
      //     nextEl: ".portfolio-slider__button.portfolio-slider__button--next",
      //   },

      // Брейкпоинты
      /*
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                        autoHeight: true,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1268: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                },
                */
      // События
      on: {},
    });
  }
};

export default sliderSwiper;
