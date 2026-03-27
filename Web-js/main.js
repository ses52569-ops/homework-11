let firstName = "Джусси";
let surName = "Пукман";
let isStudent = true;

let age = 19;
let resentYear = 2026;
let birthday = resentYear - age;
console.log(
	`Меня зовут ${firstName} ${surName}, мне ${age} лет. Я студент: ${isStudent}.`,
);

let a = "123";
let b = +456;
let c = Number(789);
let d = Boolean(0);
let e = Boolean(" ");
let result = Number(a) + b + c + d + e;

console.log(result);
