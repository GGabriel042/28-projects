const btnEl = document.getElementById("btn");
const apiKey = "Z9+HaHT/3VuQ/RP2PvrvxQ==JIyor7kjMxEfQRCi";
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"
const jokeEl = document.getElementById("joke");

btnEl.addEventListener("click", getJoke);

async function getJoke() {

  try {
    jokeEl.innerText = "Uploading.....";
  btnEl.disabled = true;
  btnEl.innerText = "Wait for it..."
  const response = await fetch(apiURL, options);
  const data = await response.json();
  btnEl.disabled = false;
  btnEl.innerText = "Tell me a joke";
  jokeEl.innerText = data[0].joke;

  } catch (error) {
    jokeEl.innerText = "An error happpend, try again later.";
    btnEl.innerText = "Tell me a joke";
  }
}