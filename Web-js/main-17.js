function calculateFinalPrice(Price, discountPercentage, taxRate) {
	const discount = Price * (discountPercentage / 100);

	const priceAfterDiscount = Price - discount;

	const tax = priceAfterDiscount * taxRate;

	const finalPrice = priceAfterDiscount + tax;

	return priceAfterDiscount + tax;
}

console.log(calculateFinalPrice(300, 32, 0.5));

function checkAccess(userName, password) {
	let access;
	if (userName === "admin" && password === 123456) {
		accessMessage = "Доступ разрешён";
	} else {
		accessMessage = "Доступ запрещён";
	}

	return accessMessage;
}

console.log(checkAccess("admin", 123456));

// Задача 3.
// Напишите функцию getTimeOfDay, которая принимает текущее время (число от 0 до 23) и возвращает строку:
// "Ночь" (с 0 до 5 часов),
// "Утро" (с 6 до 11 часов),
// "День" (с 12 до 17 часов),
// "Вечер" (с 18 до 23 часов).
// Если введённое значение не попадает в этот диапазон, возвращайте `"Некорректное время"`.

function getTimeDay(time) {
	let result;
	if (time >= 0 && time <= 5) {
		result = "Ночь";
	} else if (time >= 6 && time <= 11) {
		result = "утро";
	} else if (time >= 12 && time <= 17) {
		result = "День";
	} else if (time >= 118 && time <= 23) {
		result = "вечер";
	} else {
		result = "Неккоректное время";
	}

	return result;
}

console.log(getTimeDay(5));

const findFirstEven = (start, end) => {
	if (start > end) return "Некорректный диапазон";

	const firstEven = start % 2 === 0 ? start : start + 1;

	return firstEven <= end ? firstEven : "Чётких чисел нет";
};

console.log(findFirstEven(11, 22));
