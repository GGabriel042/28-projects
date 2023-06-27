const buttonJoinEl = document.querySelector(".btn");
const buttonCloseEl = document.querySelector(".close-icon");
const containerEl = document.querySelector(".container");
const popupContainerEl = document.querySelector(".popup-container");

buttonJoinEl.addEventListener("click", () => {
  containerEl.classList.add("active");
  popupContainerEl.classList.remove("active");
})

buttonCloseEl.addEventListener("click", () => {
  containerEl.classList.remove("active");
  popupContainerEl.classList.add("active");
})