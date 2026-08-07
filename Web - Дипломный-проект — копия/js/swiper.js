const swiper = new Swiper(".reviews__slider", {
	slidesPerView: 3.5,
	spaceBetween: 20,
	slidesOffsetBefore: 20,
	navigation: {
		nextEl: ".reviews__slider-button--next",
		prevEl: ".reviews__slider-button--prev",
	},
	mousewheel: true,

	breakpoints: {
		0: {
			slidesPerView: 1.15,
			spaceBetween: 10,
			slidesOffsetBefore: 10,
		},
		527: {
			slidesPerView: 1.5,
			spaceBetween: 15,
			slidesOffsetBefore: 15,
		},
		600: {
			slidesPerView: 2,
		},
		1200: {
			slidesPerView: 3.5,
		},
	},
});
