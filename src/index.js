let valor = document.getElementById("valor");
let moedas = document.getElementsByName("currency");
let res = document.querySelector(".resultado");

moedas.forEach((moeda) => {
	moeda.addEventListener("change", conversao);
});

valor.addEventListener("input", conversao);

valor.addEventListener("focus", function () {
	if (valor.value === "0.00") {
		valor.value = "";
	}
	conversao;
});
valor.addEventListener("blur", function () {
	if (valor.value === "") {
		valor.value = "0.00";
	} else {
		valor.value = parseFloat(valor.value).toFixed(2);
	}
	conversao();
});

function conversao() {
	var valorDigitado = parseFloat(valor.value);

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
	return (dado * 4.83).toFixed(2);
}

function euro(dado) {
	return (dado * 5.83).toFixed(2);
}
