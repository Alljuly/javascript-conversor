let valor = document.getElementById("valor");
let moedas = document.getElementsByName("currency");
let res = document.querySelector(".resultado");

const urlUSD = 'https://economia.awesomeapi.com.br/last/USD-BRL';
const urlEUR = 'https://economia.awesomeapi.com.br/last/EUR-BRL';

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
				res.textContent = cotacao(urlUSD, valorDigitado);
			} else {
				res.textContent = cotacao(urlEUR, valorDigitado);
			}
		}
	});
}

function cotacao(url, dado) {
	fetch(url)
  		.then(response => response.json())
 		.then(data => {
    		const valor = data.url;
    		return valor.bid
  	})
  	.catch(error => `Erro ao pegar a cotação: ${error}`);
}

