



//инициаллизация и параметры слайдера Swiper (требуется подключение стилей и скрипта слайдера)
const swiper = new Swiper('.swiper', {
    loop: true,
    crossFade: true,
    navigation: {
      nextEl: '.swiper-button-next'
    }
});
/////////////////////////////////////////////////




//анимация кнопки отправки номера телефона при его вводе
const fsinput = document.querySelector('.first-screen__input'),
      Submit = document.querySelector('#submit-phone');

function AnimateCircle(input, circle) {
    fsinput.addEventListener('focus', () => {
        circle.style.animation = "pulse 1s infinite";
    });
    fsinput.addEventListener('focusout', () => {
        circle.style.animation = "pulse 1s";
    });
}

AnimateCircle(fsinput, Submit);
////////////////////////////////////////////////////////




//автоматический шаблон ввода номера (требуется подключение jquery и плагина jquery maskedinput)
jQuery(function($){
	$('.first-screen__input').mask('+7 (999) 999-9999');
});
///////////////////////////////////////////////////////////




//предотвращение обновления и скролла страницы вверх при отправке формы
Submit.addEventListener('click', (e) => {
    e.preventDefault();
})
///////////////////////////////////////////////////////////////////////

var isFocused = false;


//предотвращение перемещения курсора по вводимому номеру телефона
fsinput.addEventListener('keydown', function(e){
    if (e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40 ) {
        e.preventDefault();
    }
});

