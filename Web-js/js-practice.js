let username = prompt("Имя пользователя", "user");
let password = prompt("Пароль", "000000");
if (username === "admin" || ("user" && password === "123456")) {
	console.log("Доступ разрешён");
} else {
	console.log("Доступ запрещён");
}

let divisible = 22;
let divisor = 2;
if ((username === "admin" || username === "user") && password === "123456") {
	if (divisible % divisor === 0) {
		console.log("Число чётное");
	} else {
		console.log("Число нечётное");
	}
} else {
	console.log("");
}

let age = 19;
let discount = age < 18 ? 10 : age >= 18 && age <= 65 ? 20 : 30;

if ((username === "admin" || username === "user") && password === "123456") {
	console.log(discount);
}

switch (true) {
	case age < 18:
		discount = 10;
		break;
	case age >= 18 && age <= 65:
		discount = 20;
		break;
	case age > 65:
		discount = 30;
		break;
	default:
		discount = 0;
		console.log("Не удалось определить скидку для данного возраста.");
		break;
}
if ((username === "admin" || username === "user") && password === "123456") {
	console.log(discount);
}

let weightOfPackage = parseFloat(prompt("Вес посылки (в килограммах)", "0"));
let typeOfPackage = prompt(
	"Тип посылки: Стандарт, Экспресс или Премиум",
	"Стандарт",
);

let priceOfDelivery;
let ratio;

switch (true) {
	case weightOfPackage < 1:
		priceOfDelivery = 5;
		break;
	case weightOfPackage >= 1 && weightOfPackage <= 5:
		priceOfDelivery = 10;
		break;
	case weightOfPackage > 5:
		priceOfDelivery = 15;
		break;
	default:
		alert("Некорректный вес посылки. Пожалуйста, введите числовое значение.");
		break;
}

switch (true) {
	case typeOfPackage === "Стандарт":
		ratio = 1;
		break;
	case typeOfPackage === "Экспресс":
		ratio = 1.5;
		break;
	case typeOfPackage === "Премиум":
		ratio = 2;
		break;
	default:
		alert(
			"Неверный тип доставки. Укажите 'Стандарт', 'Экспресс' или 'Премиум'.",
		);
		break;
}

let finalPrice;

if (
	priceOfDelivery > 0 &&
	ratio > 0 &&
	(username === "admin" || username === "user") &&
	password === "123456"
) {
	finalPrice = priceOfDelivery * ratio;
	alert("Финальная стоимость доставки: " + finalPrice + "$");
} else {
	alert("Неверные данные");
}

for (let number = 1; number <= 20; number++) {
	if (number % 4 === 0) {
		continue;
	}
	console.log(number);
}

const number = prompt("Введите число для вычисления факториала:");

if (isNaN(number) || number < 0) {
	console.log("Пожалуйста, введите допустимое неотрицательное число.");
} else {
	let factorial = 1;
	for (let i = 1; i <= number; i++) {
		factorial = factorial * i;
	}
	console.log(`Факториал числа ${number} равен ${factorial}`);
}

let board = 8;

for (let row = "#"; row < boardSize; row++) {
	for (let col = "#"; col < boardSize; col++) {
		board = row;
	}
	console.log(board);
}
