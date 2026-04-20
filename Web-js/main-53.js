"use strict";

const users = [
	{ name: "Alex", age: 24, isAdmin: false },
	{ name: "Bob", age: 13, isAdmin: false },
	{ name: "John", age: 31, isAdmin: true },
	{ name: "Jane", age: 20, isAdmin: false },
];

const countOfUsers = users.reduce((acc, user) => {
	return acc + user.age;
}, 0);

console.log(countOfUsers);

//const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//const sum = numbers.reduce(function (acc, number) {
//	return acc + number;
//}, 0);

//console.log(sum);

const names = ["John", "Bob", "Alex", "Ann"];

console.log(
	users.sort((a, b) => {
		return a.age - b.age;
	}),
);
