/* Ham Icon  */

const hamIcon = document.querySelector(".hamIcon");
const navMenu = document.querySelector(".navMenu");
hamIcon.addEventListener("click", (event) => {
  navMenu.style.display = "flex";
});

const close = document.querySelector(".closeIcon");
close.addEventListener("click", (event) => {
  navMenu.style.display = "none";
});

/* Link underline hover */
const listLink = document.querySelectorAll(".listNum");
listLink.forEach((link) => {
  link.style.paddingRight = "8px";
  link.style.fontWeight = "1000";
});
 