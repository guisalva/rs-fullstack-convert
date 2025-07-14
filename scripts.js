// Cotação do dia
const USD = 4.9;
const EUR = 5.1;
const GBP = 6.2;

// Obtendo os elementos do DOM
const form = document.querySelector("form");
const amount = document.querySelector("#amount");
const currency = document.querySelector("#currency");
const footer = document.querySelector("main footer");
const description = document.querySelector("#description");
const result = document.querySelector("#result");

// Manipulando o input "amount" para receber apenas números
amount.addEventListener("input", () => {
  const hasCharacterRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharacterRegex, "");

  console.log(amount.value);
});

// Captura do envio do formulário
form.onsubmit = (event) => {
  event.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
  }
};

// Função para converter o valor
function convertCurrency(amount, price, symbol) {
  try {
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;

    let total = amount * price;

    if (isNaN(total)) {
      return alert("Por favor, insira um valor numérico.");
    }

    total = formatCurrencyBRL(total).replace("R$", "");

    result.textContent = `${formatCurrencyBRL(total)} Reais`;

    footer.classList.add("show-result");
  } catch (error) {
    footer.classList.remove("show-result");

    console.log(error);
    alert("Não foi possível converter o valor.");
  }
}

// Formata para utilizar o Real brasileiro
function formatCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
