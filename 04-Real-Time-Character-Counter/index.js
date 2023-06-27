const textAreaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remaningCounterEl = document.getElementById("remaning-counter");

updateCounter();

textAreaEl.addEventListener("keyup", () => {
  updateCounter();
});

function updateCounter() {
  totalCounterEl.innerText = textAreaEl.value.length;

  remaningCounterEl.innerText = textAreaEl.getAttribute("maxLength") - textAreaEl.value.length;
}