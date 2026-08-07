const modal = document.querySelector(".modal");
const modalWindow = document.querySelector(".modal__window");
const modal__button__close = document.querySelector(".modal__close");
const modal__button__open = document.querySelector(".modal__open");

function openModal() {
	modal.classList.add("modal--open");
	modalWindow.classList.add("modal__window--open");
	document.body.style.overflow = "hidden";
}

function closeModal() {
	modal.classList.remove("modal--open");
	modalWindow.classList.remove("modal__window--open");
	document.body.style.overflow = "";
}

modal__button__open.addEventListener("click", openModal);

modal__button__close.addEventListener("click", closeModal);

modal.addEventListener("click", function (event) {
	if (event.target === modal) {
		closeModal();
	}
});

document.addEventListener("keydown", function (event) {
	if (event.key === "Escape" && modal.classList.contains("modal--open")) {
		closeModal();
	}
});
