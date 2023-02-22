const buttonEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");
const bodyEl = document.body;

buttonEl.addEventListener("click", () => {
  let color = getRandomHexColor();
  spanEl.textContent = color;
  bodyEl.style.backgroundColor = color;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
