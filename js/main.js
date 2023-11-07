const mainSliderBtns = document.querySelectorAll('.slider-btn');
const mainSlider = document.querySelector('.main-slider');
const mainSlides = document.querySelectorAll('.main-slide');
const mainSlidesText = document.querySelectorAll('.slide-content-wrapper');

console.log(mainSlidesText);

const changeSlider = () => {
	mainSlides.forEach(slide => slide.classList.toggle('hide'));
	mainSlidesText.forEach(text => text.classList.toggle('display-none'));
};

mainSliderBtns.forEach(btn => btn.addEventListener('click', changeSlider));
