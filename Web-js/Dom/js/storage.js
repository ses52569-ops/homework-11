export const getTodosFromLocalStorage = () => {
	return JSON.parse(localStorage.getItem("todos"));
};

export const setTodosLocalStorage = (todos) => {
	localStorage.setItem("todos", JSON.stringify(todos));
};
