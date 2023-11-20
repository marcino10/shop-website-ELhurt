const smallRes = 576;
const mediumRes = 768;
const largeRes = 992;
const XLargeRes = 1200;

const mobileMenu = document.querySelector('.header__nav');
const mobileMenuBtn = document.querySelector('.header__mobile-btn');
let isMobileMenuShow = false;

const mainSlider = document.querySelector('.main__slider');
const mainSliderSlides = document.querySelectorAll('.slider__slide');

const templateOfProduct = document.querySelector('.product');
const ProductSlider = document.querySelector('.products__slider');
const productSliderBtns = document.querySelectorAll('*[data-element="product-slider-btn"]');
let amountInRow = null;
let currentMove = 0;
let maxMove = null;
let isSpecialMove = false;
let lengthSpecialMove = null;

console.log(productSliderBtns);

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
		slide.firstElementChild.classList.toggle('hide');
		slide.lastElementChild.classList.toggle('display-none');
		if (slide.getAttribute('aria-hidden') === 'true') {
			slide.removeAttribudte('aria-hidden');
		} else {
			slide.setAttribute('aria-hidden', 'true');
		}
	});
};

const moveProductSlider = products => {
	if (isSpecialMove && currentMove === maxMove) {
		products.forEach(
			product =>
				(product.style.translate = `calc(${currentMove - 1} * (${-100 * amountInRow}% - ${
					15 * amountInRow
				}px) + (${-100 * lengthSpecialMove}% - ${15 * lengthSpecialMove}px) )`)
		);
	} else {
		products.forEach(
			product =>
				(product.style.translate = `calc(${currentMove} * (${-100 * amountInRow}% - ${15 * amountInRow}px) )`)
		);
	}
};

const rightChangeProductSlider = products => {
	if (currentMove < maxMove) currentMove++;
	else currentMove = 0;
	moveProductSlider(products);
};

const leftChangeProductSlider = products => {
	if (currentMove > 0) currentMove--;
	else currentMove = maxMove;
	moveProductSlider(products);
};

const changeProductSlider = e => {
	const products = document.querySelectorAll('.product');

	if (window.innerWidth < smallRes) {
		amountInRow = 1;
	} else if (window.innerWidth < mediumRes) {
		amountInRow = 2;
	} else if (window.innerWidth < largeRes) {
		amountInRow = 3;
	} else if (window.innerWidth < XLargeRes) {
		amountInRow = 4;
	} else {
		amountInRow = 5;
	}

	if (products.length % amountInRow != 0) {
		isSpecialMove = true;
		lengthSpecialMove = products.length % amountInRow;
	}

	maxMove = Math.ceil(products.length / amountInRow) - 1;

	if (e.currentTarget.classList.contains('btn--left')) {
		leftChangeProductSlider(products);
	} else {
		rightChangeProductSlider(products);
	}
};

const generateProductsInSlider = howMany => {
	for (i = 0; i < howMany; i++) {
		ProductSlider.appendChild(templateOfProduct.cloneNode('true'));
	}
};

generateProductsInSlider(17);

mobileMenuBtn.addEventListener('click', changeVisibilityMobileMenu);

mainSlider.addEventListener('click', changeMainSlider);

productSliderBtns.forEach(btn => btn.addEventListener('click', changeProductSlider));
