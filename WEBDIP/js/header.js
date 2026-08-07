const header = document.querySelector(".header");

const page = document.querySelector(".page_body");

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
	if (window.scrollY > 50) {
		header.classList.add("header_fixed");
	} else {
		header.classList.remove("header_fixed");
	}
});
