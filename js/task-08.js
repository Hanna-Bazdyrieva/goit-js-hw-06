const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = form;
  if (email.value !== "" || password.value !== "") {
    console.log({ email: email.value, password: password.value });
  } else {
    alert("ERROR... Please fill all empty fields.");
  }
  event.currentTarget.reset();
}
