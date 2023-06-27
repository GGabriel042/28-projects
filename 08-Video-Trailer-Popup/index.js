const trailerContainerEl = document.querySelector(".trailer-container");
const watchButtonEl = document.querySelector(".btn");
const closeIconEl = document.querySelector(".close-icon");
const videoEl = document.querySelector("video");


watchButtonEl.addEventListener("click", () => {
  trailerContainerEl.classList.remove("active");
})

closeIconEl.addEventListener("click", () => {
  trailerContainerEl.classList.add("active");
  videoEl.pause();
  videoEl.currentTime = 0;
})

