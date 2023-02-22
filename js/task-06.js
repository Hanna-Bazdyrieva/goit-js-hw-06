const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", handleBlur);

function handleBlur() {
  const classList = inputEl.classList;
  console.log('classList:', classList)
  
  if (inputEl.value.length === +inputEl.dataset.length) {
    classList.remove("invalid");
    classList.add("valid");
    console.log(classList);
  } else {
    classList.remove("valid");
    classList.add("invalid");
    console.log(classList);
  }
}
