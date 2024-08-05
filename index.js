const form = document.getElementById("form-newsletter");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const errorMessageElement = document.querySelector(".form__error-message")
const successSection = document.querySelector(".section--success");
const initialSection = document.querySelector(".section--initial");


function handleSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const { email } = Object.fromEntries(formData);

  isValidEmail = emailRegex.test(email)
  console.log(isValidEmail, errorMessageElement)

  if (!isValidEmail) {
    errorMessageElement.classList.remove("hidden");
    errorMessageElement.classList.add("show")
  } else {
    initialSection.classList.add("hidden")
    successSection.classList.remove("hidden")
    successSection.classList.add("show")
  }
}

form.addEventListener("submit", handleSubmit);

const dismissButton = document.querySelector(".section--success__main__button");

dismissButton.addEventListener('click', function() {
    window.location.reload()
})
