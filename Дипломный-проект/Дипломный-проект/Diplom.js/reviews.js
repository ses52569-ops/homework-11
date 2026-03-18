export const sizes = () => {
	const sizesList = document.querySelector('[data-sizes="list"]');
	const sizesButtons = document.querySelectorAll('[data-sizes="button"]');

	const handleSizeClick = (event) => {
		const target = event.target;

		if (!target?.classList.contains("reviews__sizes-button")) return;

		sizesButtons.forEach((button) =>
			button.classList.remove("reviews__sizes-button--active"),
		);
		target.classList.add("reviews__sizes-button--active");
	};

	sizesList.addEventListener("click", handleSizeClick);
};
