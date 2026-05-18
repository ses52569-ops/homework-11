"use strict";

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
	button.addEventListener("click", (event) => {
		console.log("Клик на элементе " + event.target.textContent);
	});
});

const wrapper = document.querySelector(".wrapper");

wrapper.addEventListener("click", (event) => {
	if (event.target.tagName === "BUTTON") {
		console.log(event.target.textContent);
	}
});
