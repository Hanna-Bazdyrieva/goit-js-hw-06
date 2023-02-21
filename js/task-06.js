const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", handleBlur);

function handleBlur() {
  const classList = inputEl.classList;
  if (inputEl.value.length >= inputEl.dataset.length) {
    classList.contains("invalid")
      ? classList.replace("invalid", "valid")
      : classList.add("valid");
    console.log(classList);
  } else {
    classList.contains("valid")
      ? classList.replace("valid", "invalid")
      : classList.add("invalid");
    console.log(classList);
  }
}
