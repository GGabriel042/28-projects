const btnEl = document.getElementById("btn");
const apiURL = "https://api.quotable.io/random";
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

async function getQuote() {

  try {
    quoteEl.innerText = "Searching for quote";
    authorEl.style.display = "none";
    btnEl.disabled = true;
    btnEl.innerText = "Loading..."
    const response = await fetch(apiURL)
    const data = await response.json();
    const quoteContent = data.content;
    const quoteAuthor = data.author;
    quoteEl.innerText = quoteContent;
    authorEl.style.display = "inline-flex"
    authorEl.innerText = "~ " + quoteAuthor;
    btnEl.disabled = false;
    btnEl.innerText = "Get a quote"
  } catch (error) {
    quoteEl.innerText = `An error happened, try again later`;
    authorEl.style.display = "none";
  }
}

getQuote();


btnEl.addEventListener("click", getQuote);