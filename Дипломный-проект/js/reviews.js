export const reviews = () => {
	const reviewsList = document.querySelector('[data-reviews="list"]');
	const reviewsButtons = document.querySelectorAll('[data-reviews="button"]');

	const handleReviewsClick = (event) => {
		const target = event.target;

		if (!target?.classList.contains("reviews__slider-button")) return;

		reviewsButtons.forEach((button) =>
			button.classList.remove("reviews__slider-button--active"),
		);
		target.classList.add("reviews__slider-button--active");
	};

	reviewsList.addEventListener("click", handleReviewsClick);
};
