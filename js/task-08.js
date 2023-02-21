const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = form;
  if (email.value === "" || password.value === "") {
    alert("ERROR... Please fill all empty fields.");
  }
  const loginObject = { email: email.value, password: password.value };

  console.log(loginObject);

  event.currentTarget.reset();
}
