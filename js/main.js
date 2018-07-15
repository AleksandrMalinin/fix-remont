'use strict';

// Блок формы
var submit = document.querySelector('.subscription__submit');
var response = document.querySelector('.response');

submit.addEventListener('click', function(evt) {
  evt.preventDefault();
  response.style.display = 'block';
});

// Слайдер
var slider = document.querySelector('.slider__container');
var slide = slider.querySelectorAll('.slider__item');
var btnLeft = document.querySelector('.slider__btn--left');
var btnRight = document.querySelector('.slider__btn--right');
var slides = Array.from(slide);

btnLeft.addEventListener('click', function() {
    for ( var i = 0; i < slides.length; i++ )
    {
        if ( slides[i].classList.contains('slider__item--active') && i !== 0 )
        {
            slides[i].classList.remove('slider__item--active');
            slides[i].previousElementSibling.classList.add('slider__item--active');

            if ( i === 1 )
            {
                slider.style.transform = 'translate(0px)';
            }
            else
            {
                slider.style.transform = 'translate(-25.4424779%)';
            }
        }
    }
});

btnRight.addEventListener('click', function() {
    for ( var j = slides.length - 1; j >= 0; j-- )
    {
        if ( slides[j].classList.contains('slider__item--active') && j !== 2 )
        {
            slides[j].classList.remove('slider__item--active');
            slides[j].nextElementSibling.classList.add('slider__item--active');

            if ( j === 1 )
            {
                slider.style.transform = 'translate(-50.8849558%)';
            }
            else
            {
                slider.style.transform = 'translate(-25.4424779%)';
            }
        }
    }
});

// Скрипт для появления подписи у непустого инпута
var input = document.querySelectorAll('.subscription__input');

input.forEach(function(item) {
    item.addEventListener('change', function () {
        if ( item.value !== '' )
        {
            this.classList.add('subscription__input--not-empty');
        } else
        {
            this.classList.remove('subscription__input--not-empty');
        }
    });
});
