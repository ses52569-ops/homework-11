const users = [
	{ name: "Alex", age: 24, isAdmin: false },
	{ name: "Bob", age: 13, isAdmin: false },
	{ name: "John", age: 31, isAdmin: true },
	{ name: "Jane", age: 20, isAdmin: false },
];

users.push(
	{ name: "Ann", age: 19, isAdmin: false },
	{ name: "Jack", age: 43, isAdmin: true },
);

console.log(users);

const adults = users.filter((user) => {
	return user.age > 30;
});

console.log("Пользователи старше 30:", adults);

function getUserAverageAge(users) {
	let sumAge = 0;

	users.forEach((user) => {
		sumAge += user.age;
	});

	return sumAge / users.length;
}
console.log(getUserAverageAge(users));

function getAllAdmins(users) {
	const admins = [];
	users.forEach((user) => {
		if (user.isAdmin === true) {
			admins.push(user);
		}
	});
	return admins;
}
console.log(getAllAdmins(users));

function first(arr, n = 1) {
	const arrLength = arr.length;
	if (arrLength < n) {
		console.error("${n} не может быть меньше длины массива: ${arrLenght}");
		return;
	}
	const newArr = new Array(n);
	for (let i = 0; i < n; i++) {
		newArr[i] = arr[i];
	}
	return newArr;
}

console.log(first([10, 15, 33, 14]));
