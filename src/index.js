//valor de entrada
let valor = document.getElementById("valor");

//qual tipo de conversao
let moedas = document.getElementsByName("moeda");

//saida
let res = document.querySelector(".resultado");

moedas.forEach((moeda) => {
	moeda.addEventListener("click", conversao);
});

valor.addEventListener("input", conversao);

function conversao() {
	let valorDigitado = parseFloat(valor.value);
	moedas.forEach((moeda) => {
		if (moeda.checked) {
			if (moeda.value === "US") {
				res.textContent = dolar(valorDigitado);
			} else {
				res.textContent = euro(valorDigitado);
			}
		}
	});
}

function dolar(dado) {
	return dado * 4.83;
}

function euro(dado) {
	return dado * 5.83;
} 