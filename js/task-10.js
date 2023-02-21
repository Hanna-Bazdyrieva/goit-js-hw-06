const inputEl = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const divBoxesEl = document.querySelector("#boxes");
let number = 0;
inputEl.addEventListener("blur", () => (number = +inputEl.value));

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  const iterable = Array(number).fill(0);
  const newString = iterable
    .reduce((newBoxes, item, i) => {
      const size = 30 + i * 10;
      newBoxes.push(
        `<div style="border: solid 1px #000; display:inline-block; width:${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`
      );
      return newBoxes;
    }, [])
    .join("");
  divBoxesEl.insertAdjacentHTML("afterbegin", newString);
}

function destroyBoxes() {
  divBoxesEl.innerHTML = "";
  inputEl.value = 0;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
