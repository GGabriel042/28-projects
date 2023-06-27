const currencyFirstEl = document.getElementById("currency-first");
const worthFirstEl = document.getElementById("worth-first");
const currencySecondEl = document.getElementById("currency-second");
const worthSecondEl = document.getElementById("worth-second");
const exchangeRateEl = document.getElementById("exchange-rate");



function upadteRate() {
  fetch(`https://v6.exchangerate-api.com/v6/841ba1b4aeb9301dbdb009d3/latest/${currencyFirstEl.value}`)
  .then((res) => res.json())
  .then((data) => {
    const rate = data.conversion_rates[currencySecondEl.value];
    exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${rate + " " + currencySecondEl.value}`;

    worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2);
  });
}


currencyFirstEl.addEventListener("change", upadteRate);
currencySecondEl.addEventListener("change", upadteRate);
worthFirstEl.addEventListener("input", upadteRate);