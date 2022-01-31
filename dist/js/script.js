const swiper = new Swiper('.swiper', {
    loop: true,
    crossFade: true,
    navigation: {
      nextEl: '.swiper-button-next'
    }
});


const fsinput= document.querySelector('.first-screen__input'),
      Submit = document.querySelector('#submit-phone');

fsinput.addEventListener('focus', () => {
    Submit.style.animation = "pulse 1s infinite";
});
fsinput.addEventListener('focusout', () => {
    Submit.style.animation = "pulse 1s";
});
jQuery(function($){
	$('.first-screen__input').mask('(999) 999-9999');
});


Submit.addEventListener('click', (e) => {
    e.preventDefault();
})



