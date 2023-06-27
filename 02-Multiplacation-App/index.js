const formEl = document.getElementById("form");
const scoreEl = document.getElementById("score");
const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input");
const btnEl = document.getElementById("btn");

const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

let result = num1 * num2;
let score = JSON.parse(localStorage.getItem("score")) || 0;
renderScore();

questionEl.textContent = `What is ${num1} multiply by ${num2}?`;


formEl.addEventListener("submit", () => {
  const userAns = +inputEl.value;
  if (userAns === result) {
    score++;
  }else {
    score = 0;
  }
  renderScore();
  updateLocalStorage();
})

function renderScore() {
  scoreEl.innerText = `Score: ${score}`;
}

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}

