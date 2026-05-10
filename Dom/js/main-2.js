const todos = [];

const errTodoNotFound = (todoId) => `Todo with id ${todoId} not found`;

const todoKeys = {
	id: "id",
	text: "text",
	is_completed: "is_completed",
};

let id = 1;

const getNewTodoId = (todos) => {
	return (
		todos.reduce((maxId, todo) => {
			return Math.max(maxId, todo.id);
		}, 0) + 1
	);
};

const createTodo = (todos, text) => {
	const newTodo = {
		[todoKeys.text]: text,
		[todoKeys.is_completed]: false,
		[todoKeys.id]: getNewTodoId(todos),
	};
	todos.push(newTodo);
	return newTodo;
};

const ChangeStatusTodoById = (todos, todoId) => {
	const todo = todos.find((todo) => todo[todoKeys.id] === todoId);
	if (!todo) {
		console.error(errTodoNotFound(todoId));
		return null;
	}
	[todoKeys.is_completed] = ![todoKeys.is_completed];
	return todo;
};

const changeTextById = (todos, todoId, newText) => {
	const todo = todos.find((todo) => todo[todoKeys.id] === todoId);
	if (!todo) {
		console.error(errTodoNotFound(todoId));
	}
	todo[todoKeys.text] = todo[todoKeys.newText];
	return todo;
};

const deleteTodoById = (todos, todoId) => {
	const todoIndex = todos.findIndex((todo) => todo[todoKeys.id] === todoId);
	if (todoIndex === -1) {
		console.error(errTodoNotFound(todoId));
		return todos;
	}
	todos.splice(todoIndex, 1);
	return todos;
};

const boxes = document.querySelectorAll(".popa");

boxes.forEach((box) => {
	box.addEventListener("click", () => {
		box.classList.toggle("popa-red");
	});
});

const body = document.querySelector("body");

const box = document.createElement("div");
box.classList.add("box");

body.append(box);
