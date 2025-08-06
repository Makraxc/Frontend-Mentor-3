"use strict";

const extItems = document.querySelectorAll(".extItem");
const radio = document.querySelectorAll(".radio");
const label = document.querySelectorAll(".toggle");
/* Defualt bg color */
if (radio[0].checked) {
  label[0].style.backgroundColor = "var(--RED-500)";
  label[0].style.color = "white";
}
/* When user change */
radio.forEach((radio) => {
  radio.addEventListener("change", () => {
    /* When radio is altered, remove all bg color from all label */
    label.forEach((label) => {
      label.style.backgroundColor = "";
      label.style.color = "";
    });
    /* Then add bg to the closest .toggle class of the radio that being altered */
    radio.closest(".toggle").style.backgroundColor = "var(--RED-500)";

    radio.closest(".toggle").style.color = "white";
  });
});
/* toggle style */
const toggleContainer = document.querySelectorAll(".toggle-container");
const confirmationPanel = document.querySelector("#confirmationPanel");
const removeBtn = document.querySelectorAll(".remove");

//Becomes red when toggle
toggleContainer.forEach((item) => {
  item.addEventListener("change", (event) => {
    item.classList.toggle("active");
    item.closest(".extItem").classList.toggle("activeExt");
  });
});

//Trigger confirmation panel for all extensions
function confirmRemoval(event) {
  document.querySelector("#confirmationPanel").style.display = "flex";
  event.target.classList.add("canRemove");
  document.querySelector(".dimWrapper").style.display = "block";
}
//When click 'No'
function dismiss() {
  document.querySelector("#confirmationPanel").style.display = "none";
  document.querySelector(".dimWrapper").style.display = "none";
}
//When click 'Yes'
function remove() {
  document.querySelector(".canRemove").closest(".extItem").remove();
  confirmationPanel.style.display = "none";
  document.querySelector(".dimWrapper").style.display = "none";
}

/* 
So i use onClick() event listener and pass it a 
parameter so that i can locate its location. Then i 
select the closest element with the class of 
"extIem" and remove it. so that's how i can remove 
an extension with remove button
*/

/* Filtering  */
//use "all()" didnt work so i used "allExt()" instead
function allExt() {
  extItems.forEach((item) => {
    item.style.display = "flex";
  });
}

function active() {
  extItems.forEach((item) => {
    item.style.display = "none";
    if (item.classList.contains("activeExt")) {
      item.style.display = "flex";
    }
  });
}
function inactive() {
  extItems.forEach((item) => {
    item.style.display = "none";
    if (!item.classList.contains("activeExt")) {
      item.style.display = "flex";
    }
  });
}

/* Dark Mode */
function darkMode() {
  const body = document.querySelector("body");
  body.classList.toggle("darkMode");
  if (body.classList.contains("darkMode")) {
    document.querySelector(".darkToggle img").src =
      " assets/images/icon-sun.svg";
    document.querySelector(".appName img").src = "assets/images/logo-dark.svg";
  } else {
    document.querySelector(".darkToggle img").src =
      " assets/images/icon-moon.svg";
    document.querySelector(".appName img").src = "assets/images/logo.svg";
  }
}
