function pisiPopa(where, answer) {
	if (where === "пися") {
		answer("Хорошо");
	} else {
		answer("Нет");
	}
}

function herPermission(sheSaid) {
	console.log(sheSaid);
}

function herProhibition(sheSaid) {
	console.error(sheSaid);
}

pisiPopa("пися", herPermission);
pisiPopa("попа", herProhibition);
