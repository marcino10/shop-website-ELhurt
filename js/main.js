const mainSliderBtns = document.querySelectorAll('.main-slider-btn');
const mainSlides = document.querySelectorAll('.main-slide');
const mainSlidesText = document.querySelectorAll('.slide-content-wrapper');

const productSliderBtns = document.querySelectorAll('.product-slider-btn');
const productStacks = document.querySelectorAll('.products-stack');
let currentStack = 0;
const numOfStacks = productStacks.length;

const changeMainSlider = () => {
	mainSlides.forEach(slide => slide.classList.toggle('hide'));
	mainSlidesText.forEach(text => text.classList.toggle('display-none'));
};

const rightChangeProductSlider = () => {
	console.log('right');
	console.log(currentStack);
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
		console.log('here');
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

console.log(numOfStacks);

mainSliderBtns.forEach(btn => btn.addEventListener('click', changeMainSlider));
productSliderBtns.forEach(btn => btn.addEventListener('click', changeProductSlider));
