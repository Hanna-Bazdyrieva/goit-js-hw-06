const counterEl = document.querySelector("#value");
let counterValue = 0;
counterEl.textContent = counterValue;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener("click", () => {
  counterValue--;
  counterEl.textContent = counterValue;
});
incrementBtn.addEventListener("click", () => {
  counterValue++;
  counterEl.textContent = counterValue;
});
