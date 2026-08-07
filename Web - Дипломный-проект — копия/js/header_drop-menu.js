const Button__open = document.querySelector(".header_menu-button-arrow");
const dropMenu = document.querySelector(".drop__menu");

if (Button__open && dropMenu) {
	const toggleMenu = (event) => {
		event.stopPropagation();
		dropMenu.classList.toggle("active");
		Button__open.classList.toggle("rotated");
	};

	const closeMenuOnOutsideClick = (event) => {
		if (dropMenu.classList.contains("active")) {
			const isClickInsideMenu = dropMenu.contains(event.target);

			if (!isClickInsideMenu) {
				dropMenu.classList.remove("active");
				Button__open.classList.remove("rotated");
			}
		}
	};

	Button__open.addEventListener("click", toggleMenu);
	document.addEventListener("click", closeMenuOnOutsideClick);
}
