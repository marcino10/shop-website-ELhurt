const mainSliderBtns = document.querySelectorAll('.main-slider .slider-btn');
const mainSlidesImages = document.querySelectorAll('.main-slider img');
const mainSlidesText = document.querySelectorAll('.slide-content-wrapper');

const productSliderBtns = document.querySelectorAll('.product-slider-btn');
const productStacks = document.querySelectorAll('.products-stack');
let currentStack = 0;
const numOfStacks = productStacks.length;

const changeMainSlider = () => {
	mainSlidesImages.forEach(slide => slide.classList.toggle('hide'));
	mainSlidesText.forEach(text => text.classList.toggle('display-none'));
};

const rightChangeProductSlider = () => {
	if (currentStack < numOfStacks - 1) {
		productStacks.forEach(stack => (stack.style.translate = `${(currentStack + 1) * -100}%`));
		currentStack++;
	} else {
		productStacks.forEach(stack => (stack.style.translate = '0'));
		currentStack = 0;
	}
};

const leftChangeProductSlider = () => {
	if (currentStack === 0) {
		productStacks.forEach(stack => (stack.style.translate = `${(numOfStacks - 1) * -100}%`));
		currentStack = numOfStacks - 1;
	} else {
		productStacks.forEach(stack => (stack.style.translate = `${(currentStack - 1) * -100}%`));
		currentStack--;
	}
};

const changeProductSlider = e => {
	if (e.currentTarget.classList.contains('slider-left-btn')) {
		leftChangeProductSlider();
	} else {
		rightChangeProductSlider();
	}
};

mainSliderBtns.forEach(btn => btn.addEventListener('click', changeMainSlider));
productSliderBtns.forEach(btn => btn.addEventListener('click', changeProductSlider));
