//SLADER
$(document).ready(function(){
  $('.slider__items').slick({
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows: false
          }
        }
      ]
  });
});


//BURGER 
const burger = document.querySelector('.burger'),
  menu = document.querySelector('.burger__menu'),
  closeElem = document.querySelector('.burger__menu-close')

  burger.addEventListener('click', () => {
    menu.classList.add('active');
  });

  closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
  });


//SCROLL BAR 
$(document).ready(() => {
  $('.burger').click(function(event) {
    $('body').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('.burger__menu-close').click(function(event) {
    $('body').removeClass('active');
  });
});


//WOW

new WOW().init();
