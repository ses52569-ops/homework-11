import { getTodosFromLocalStorage } from "./storage.js";
import { renderTodos, initTodoHandlers } from "./DOM.js";

const todos = getTodosFromLocalStorage() || [];

document.addEventListener("DOMContentLoaded", () => {
	renderTodos(todos);
	initTodoHandlers(todos);
});
