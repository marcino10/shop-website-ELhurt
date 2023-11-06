const mainSliderLeftBtn = document.querySelector('.main-slider .slider-left-btn');
const mainSliderRightBtn = document.querySelector('.main-slider .slider-right-btn');
const mainSlider = document.querySelector('.main-slider');
const firstSlide = document.querySelector('.first-slide');
const secondSlide = document.querySelector('.second-slide');

let currentPhoto = 0;

const changeSliderImage = () => {
	firstSlide.classList.toggle('hide');
	secondSlide.classList.toggle('hide');
};

mainSliderLeftBtn.addEventListener('click', changeSliderImage);
mainSliderRightBtn.addEventListener('click', changeSliderImage);
