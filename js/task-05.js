const inputEl = document.querySelector("#name-input");
const outputSpanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", handleInput);

function handleInput(event) {
  event.currentTarget.value === ""
    ? (outputSpanEl.textContent = "Anonymus")
    : (outputSpanEl.textContent = event.currentTarget.value);
}
