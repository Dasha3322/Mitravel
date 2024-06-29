$(".burger").click(function(){
    $(this).toggleClass('js-active');
    $('.header__menu').toggleClass('js-active');
    $('.header').toggleClass('js-active');
})
let myImageSlider = new Swiper('.image-slider',{
  shortSwipes: false,
  loop: true,
    } 
);
let myTextSlider = new Swiper('.text-slider',{
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'},

  }
);

myImageSlider.controller.control = myTextSlider;
myTextSlider.controller.control = myImageSlider;



new Swiper('.featured-videos-swiper',{
  direction:'horizontal',
  slidesPerView: 1.8,
  // loop: true,
  centeredSlides: true,
  spaceBetween: 30,
  autoplay: true,
  
  breakpoints: {
    320:{
    slidesPerView: 1},
    // when window width is >= 320px
    768: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
      spaceBetween: 25
    },
    // when window width is >= 1200px
    1201: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1920:{
      slidesPerView: 3,
    }
},
});