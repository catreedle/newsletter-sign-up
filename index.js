const form = document.getElementById("form-newsletter");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const errorMessageElement = document.querySelector(".form__error-message");
const successSection = document.querySelector(".section--success");
const initialSection = document.querySelector(".section--initial");

const formInput = document.querySelector(".form__input");

function validateEmail(email) {
    const isValid = emailRegex.test(email);

    return isValid
}

function handleSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const { email } = Object.fromEntries(formData);

  const isValidEmail = validateEmail(email)

  if (!isValidEmail) {
    // Show the error message
    errorMessageElement.classList.remove("hidden");
    errorMessageElement.classList.add("show");

    // Reset the animation
    errorMessageElement.classList.remove("form__error-message--invalid");
    void errorMessageElement.offsetWidth; // Trigger reflow to restart animation
    errorMessageElement.classList.add("form__error-message--invalid");
  } else {
    initialSection.classList.add("hidden");
    successSection.classList.remove("hidden");
    successSection.classList.add("show");
  }
}

form.addEventListener("submit", handleSubmit);

formInput.addEventListener("input", function(e) {
    const isValidEmail = validateEmail(e.target.value);

    if (isValidEmail) {
        console.log('vaild!');
        errorMessageElement.classList.remove("show")
        errorMessageElement.classList.add("hidden")
        errorMessageElement.classList.remove("form__error-message--invalid")
    }
})

const dismissButton = document.querySelector(".section--success__main__button");

dismissButton.addEventListener("click", function () {
  window.location.reload();
});
