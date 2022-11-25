const usernameE1 = document.querySelector("#username");
const passwordE1 = document.querySelector("#password");
const form = document.querySelector("#login");

form.addEventListener("submit", function (e) {
  e.preventDefault(); /*prevent the form from submitting to validate input fields*/

  // validate fields
  let isUsernameValid = checkUsername(),
    isPasswordValid = checkPassword();

  let isFormValid =
    isUsernameValid &&
    isPasswordValid;
    // submit to the server if the form is valid
  if (isFormValid) {
    window.location.href = form.getAttribute("action")
  }
});

const checkUsername = () => {
  let valid = false;
  const min = 3,
    max = 25;
    // trim=removes space which are not needed
  const user_name = usernameE1.value.trim();
  if (!isRequired(user_name)) {
    showError(usernameE1, "Username cannot be blank.");
  } else if (!isBetween(user_name.length, min, max)) {
    showError(
      usernameE1,
      `Username must be between ${min} and ${max} characters.`
    );
  } else {
    showSuccess(usernameE1, "");
    valid = true;
  }
  return valid;
};

const isRequired = (value) => (value === "" ? false : true);

const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;

const showError = (input, message) => {
  const formField = input.parentElement;

  formField.classList.remove("success");
  formField.classList.add("error");

  const error = formField.querySelector("small");
  error.textContent = message;
};

const showSuccess = (input, message) => {
  const formField = input.parentElement;

  formField.classList.remove("error");
  formField.classList.add("success");

  const success = formField.querySelector("small");
  success.textContent = message;
};

const checkPassword = () => {
  let valid = false;
  const password = passwordE1.value.trim();
  if (!isRequired(password)) {
    showError(passwordE1, "Password cannot be blank");
  } else {
    showSuccess(passwordE1);
    valid = true;
  }
  return valid;
};

// if(){
//   window.location.href = form.getAttribute("action")
// }


