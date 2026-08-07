const burger__menu = document.querySelector(".burger__menu");

const burger_button = document.querySelector(".header__burger");

const main = document.querySelector(".main");

const cross = document.querySelector(".Burger-cross");

const header = document.querySelector(".header");

function closeMenu() {
	burger__menu.classList.add("close");
	main.classList.remove("blur");
}

burger_button.addEventListener("click", () => {
	burger__menu.classList.toggle("close");
});

burger_button.addEventListener("click", () => {
	main.classList.toggle("blur");
});

cross.addEventListener("click", () => {
	burger__menu.classList.add("close");
});

cross.addEventListener("click", () => {
	main.classList.toggle("blur");
});

main.addEventListener("click", closeMenu);
