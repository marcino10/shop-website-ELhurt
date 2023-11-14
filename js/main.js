const mobileMenu = document.querySelector('.header__nav');
const mobileMenuBtn = document.querySelector('.header__mobile-btn');
let isMobileMenuShow = false;

const mainSlider = document.querySelector('.main__slider');
const mainSliderSlides = document.querySelectorAll('.slider__slide');

const productSliderBtns = document.querySelectorAll('.product-slider-btn');
const productStacks = document.querySelectorAll('.products-stack');
let currentStack = 0;
const numOfStacks = productStacks.length;

const changeVisibilityMobileMenu = () => {
	const widthOfMenu = mobileMenu.clientWidth;

	if (isMobileMenuShow) {
		mobileMenu.style.transform = `translateX(${widthOfMenu}px)`;
		mobileMenuBtn.style.transform = 'translateX(0)';
	} else {
		mobileMenu.style.transform = 'translateX(0)';
		mobileMenuBtn.style.transform = `translateX(-${widthOfMenu}px)`;
	}

	mobileMenuBtn.firstElementChild.classList.toggle('ti-menu-2');
	mobileMenuBtn.firstElementChild.classList.toggle('ti-x');

	isMobileMenuShow = !isMobileMenuShow;
};

const changeMainSlider = () => {
	mainSliderSlides.forEach(slide => {
		slide.classList.toggle('hide');
		if (slide.getAttribute('aria-hidden') === 'true') {
			slide.removeAttribute('aria-hidden');
		} else {
			slide.setAttribute('aria-hidden', 'true');
		}
	});
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

mobileMenuBtn.addEventListener('click', changeVisibilityMobileMenu);

mainSlider.addEventListener('click', changeMainSlider);

productSliderBtns.forEach(btn => btn.addEventListener('click', changeProductSlider));
