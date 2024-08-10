const email = document.querySelector("#email");
const ngabers = document.querySelector(".email-error");
const telError = document.querySelector(".tel-error");
const phone = document.querySelector("#phone");
const pwd = document.querySelector("#pwdd");
const pwdError = document.querySelector(".pwd-error");
const pwdConfirm = document.querySelector("#confirmpwd");
const pwdCError = document.querySelector(".pwdC-error");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    ngabers.textContent = "*invalid email";
  } else {
    ngabers.textContent = " ";
  }
});

phone.addEventListener("input", (event) => {
  if (phone.validity.patternMismatch) {
    telError.textContent = "*please enter in a 12 digit phone number";
  } else {
    telError.textContent = " ";
  }
});

pwd.addEventListener("input", (event) => {
  if (pwd.value.length < 8) {
    pwdError.textContent = "*your password must be atleast 8 characters";
  } else {
    pwdError.textContent = " ";
  }
});

pwdConfirm.addEventListener("input", (event) => {
  if (pwd.value != pwdConfirm.value) {
    pwdCError.textContent = "*password do not match";
  } else {
    pwdCError.textContent = " ";
  }
});
