let valor = document.getElementById("valor");
let moedas = document.getElementsByName("currency");
let res = document.querySelector(".resultado");

const urlUSD = "https://economia.awesomeapi.com.br/last/USD-BRL";
const urlEUR = "https://economia.awesomeapi.com.br/last/EUR-BRL";

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

async function conversao() {
	var valorDigitado = parseFloat(valor.value);

	moedas.forEach(async (moeda) => {
		if (moeda.checked) {
			if (moeda.value === "US") {
				res.textContent = await cotacao(urlUSD, valorDigitado);
			} else {
				res.textContent = await cotacao(urlEUR, valorDigitado);
			}
		}
	});
}

async function cotacao(url, dado) {
	return fetch(url)
		.then((response) => response.json())
		.then((data) => {
			const valor = url.includes("USD-BRL") ? data.USDBRL.bid : data.EURBRL.bid;
			return (valor * dado).toFixed(2);
		})
		.catch((error) => `Erro ao pegar a cotação: ${error} ${valor}`);
}
