const regex = /^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
const input = document.querySelector(".email");
const emailValue = input.value;
const isValid = regex.test(emailValue);
const formSubmission = document.querySelector(".formSubmission");
const successState = document.querySelector(".successState");
const activeState = document.querySelector(".active-state");
const warning = document.querySelector(".trigger-warning");
const emailPlaceholder = document.querySelector(".user-email");
//Validate input
input.addEventListener("input", (event) => {
  event.preventDefault();
  const emailValue = input.value;
  const isValid = regex.test(emailValue);
  if (!isValid && emailValue.length) {
    warning.style.opacity = "1";
    input.classList.add("invalid");
  } else {
    warning.style.opacity = "0";
    input.classList.remove("invalid");
  }
});

//Submission State
formSubmission.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailValue = input.value;
  const isValid = regex.test(emailValue);
  if (!isValid && emailValue.length) {
    warning.style.opacity = "1";
    input.classList.add("invalid");
  } else {
    successState.style.display = "block";
    emailPlaceholder.textContent = emailValue;
    emailPlaceholder.style.fontWeight = "bold";
    warning.style.opacity = "0";
    input.classList.remove("invalid");
    activeState.style.display = "none";
  }
});

//Dismiss Button
document.querySelector(".dismiss").addEventListener("click", (event) => {
  successState.style.display = "none";
  input.value = "";
});
