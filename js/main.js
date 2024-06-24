$(".burger").click(function(){
    $(this).toggleClass('js-active');
    $('.header__menu').toggleClass('js-active');
    $('.header').toggleClass('js-active');
})
let myImageSlider = new Swiper('.image-slider',{
  shortSwipes: false,
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'},
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