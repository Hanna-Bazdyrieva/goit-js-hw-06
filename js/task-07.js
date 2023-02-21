const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("span#text");

spanEl.style.fontSize = inputEl.value + "px";

inputEl.addEventListener(
  "change",
  () => (spanEl.style.fontSize = inputEl.value + "px")
);
