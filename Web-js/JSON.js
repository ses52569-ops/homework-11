"use strict";

const user = {
	name: "John",
	age: 102,
};

const jsonUser = JSON.stringify(user);
console.log(user);
console.log(jsonUser);
const newOldUser = JSON.parse(jsonUser);

console.log(newOldUser);

localStorage.setItem(newOldUser, "dark");

const theme = localStorage.getItem("newOldUser", jsonUser);
console.log(theme);
