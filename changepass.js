const passE1 = document.querySelector("#oldPassword");
const passwordE1 = document.querySelector("#password");
const confirmPasswordE1 = document.querySelector("#confirm-password");
const form = document.querySelector("#signup");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isoldPassValid = checkoldPass(),
    isPasswordValid = checkPassword(),
    isConfirmPasswordValid = checkConfirmPassword();
  let isFormValid = isoldPassValid && isPasswordValid && isConfirmPasswordValid;
  if (isFormValid) {
    window.location.href = form.getAttribute("action");
  }
});

let isRequired = (value) => (value === "" ? false : true);

const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;

let showError = (input, message) => {
  let formField = input.parentElement;
  formField.classList.remove("success");
  formField.classList.add("error");

  const error = formField.querySelector("small");
  error.textContent = message;
};

const showSuccess = (input) => {
  const formField = input.parentElement;
  formField.classList.remove("error");
  formField.classList.add("success");

  formField.querySelector("small").textContent = "";
};

function checkoldPass() {
  let valid = false;
  const old = passE1.value.trim();
  if (!isRequired(old)) {
    showError(passE1, "Please enter your old password.");
  } else {
    showSuccess(passE1);
    valid = true;
  }
  return valid;
}
const isPasswordValid = (password) => {
  const re = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  return re.test(password);
};

function checkPassword() {
  let valid = false;

  const password = passwordE1.value.trim();
  if (!isRequired(password)) {
    showError(passwordE1, "Password cannot be empty");
  } else if (!isPasswordValid(password)) {
    showError(
      passwordE1,
      "Password must be at least 8 characters with some numbers"
    );
  } else {
    showSuccess(passwordE1);
    valid = true;
  }
  return valid;
}

function checkConfirmPassword() {
  let valid = false;
  const passwordCheck = confirmPasswordE1.value.trim();
  if (!isRequired(passwordCheck)) {
    showError(confirmPasswordE1, "You will have to confirm to proceed");
  } else if (!passwordMatch()) {
    showError(confirmPasswordE1, "Password doesnot match");
  } else {
    showSuccess(confirmPasswordE1);
    valid = true;
  }
  return valid;
}
const passwordMatch = () => {
  if (passwordE1.value == confirmPasswordE1.value) {
    return true;
  }
};
