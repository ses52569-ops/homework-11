person = {
	name: "Eugene",
	age: "20-years old",
	student: true,
};

console.log(person);

const isEmpty = (object) => {
	for (const key in object) {
		return false;
	}
	return true;
};

const test = "test";

console.log(isEmpty(test));

const task = {
	title: "Clean the house",
	description: "Vacuum, mop, and dust all rooms",
	isCompleted: false,
};

const modifications = {
	secondMission: "clean the basement",
	isCompleted: true,
};

function cloneAndModify(object, modifications) {
	const newTask = { ...object, ...modifications };
	return newTask;
}

const newTask = cloneAndModify(task, modifications);

for (const key in newTask) {
	console.log(`${key}: ${newTask[key]}`);
}

const callAllMethods = (obj) => {
	for (const key in obj) {
		if (typeof obj[key] === "function") {
			obj[key]();
		}
	}
};
const myObject = {
	method1() {
		console.log("Метод 1 вызван");
	},
	method2() {
		console.log("Метод 2 вызван");
	},
	property: "Это не метод",
};
callAllMethods(myObject);
