"use strict";
/* Nav Menu toggle */
document.querySelector(".navIcon").addEventListener("click", (event) => {
  document.querySelector(".navMenu").style.display = "flex";
  document.querySelector(".overlay").style.display = "block";
});
document.querySelector(".closeIcon").addEventListener("click", (event) => {
  document.querySelector(".navMenu").style.display = "none";
  document.querySelector(".overlay").style.display = "none";
});

/* Toggle cart */
document.querySelector(".cart").addEventListener("click", (event) => {
  document.querySelector(".cartInfo").classList.toggle("toggle");
});

/* Image Slide */
const slides = document.querySelectorAll(".productImage");
const thumbnails = document.querySelectorAll(".imageProductNav img");
let index = 0;
let intervalID = null;

document.addEventListener("DOMContentLoaded", (event) => {
  initSlides(index);
  initThumbnails();
});

function initSlides(index) {
  if (slides.length > 0) {
    slides[index].classList.add("displaySlide");
  }
  intervalID = setInterval(nextSlide, 5000);
}

function initThumbnails() {
  // Set first thumbnail as active
  if (thumbnails.length > 0) {
    thumbnails[0].classList.add("active");
  }

  // Add click event listeners to thumbnails
  thumbnails.forEach((thumbnail, i) => {
    thumbnail.addEventListener("click", () => {
      // Remove active class from all thumbnails
      thumbnails.forEach((thumb) => thumb.classList.remove("active"));
      // Add active class to clicked thumbnail
      thumbnail.classList.add("active");
      // Show corresponding slide
      showSlide(i);
    });
  });
}

function showSlides() {
  //dont need index too, it needs to pass a global variable
  if (index >= slides.length) {
    index = 0;
  } else if (index < 0) {
    index = slides.length - 1;
  }
  slides.forEach((Element) => {
    Element.classList.remove("displaySlide");
  });
  slides[index].classList.add("displaySlide");

  // Update thumbnail active state
  thumbnails.forEach((thumb, i) => {
    thumb.classList.remove("active");
    if (i === index) {
      thumb.classList.add("active");
    }
  });
}

function showSlide(slideIndex) {
  // Hide all slides
  slides.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });

  // Show selected slide
  if (slides[slideIndex]) {
    slides[slideIndex].classList.add("displaySlide");
  }

  // Update global index
  index = slideIndex;
}

function prevSlide() {
  //dont need param cuz we have to use modified global variable. the same goes to nextIcon
  index--;
  showSlides();
}
function nextSlide() {
  index++;
  showSlides();
}
document.querySelector(".prevousIcon").addEventListener("click", (event) => {
  prevSlide();
  clearInterval(intervalID);
});
document.querySelector(".nextIcon").addEventListener("click", (event) => {
  nextSlide();
  clearInterval(intervalID);
});

/* MODIFY SPINNERS */
document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".quantityInput");
  const submitBtn = document.querySelector(".submitBtn");

  // Function to update button state
  function updateButtonState() {
    const quantity = parseInt(input.value) || 0;
    if (quantity <= 0) {
      submitBtn.disabled = true;
      submitBtn.style.opacity = "0.5";
      submitBtn.style.cursor = "not-allowed";
    } else {
      submitBtn.disabled = false;
      submitBtn.style.opacity = "1";
      submitBtn.style.cursor = "pointer";
    }
  }

  // Initial button state
  updateButtonState();

  document.querySelector(".plus").addEventListener("click", () => {
    input.stepUp();
    updateButtonState();
  });
  document.querySelector(".minus").addEventListener("click", () => {
    input.stepDown();
    updateButtonState();
  });

  // Update button state when input changes
  input.addEventListener("input", updateButtonState);
});

//next up, there's still 3 more logic to work with, set quantity to the cart upon clicking "Add to cart". and create initial state of cart, showing nothing until u click on form submit button
document.querySelector(".quantityInput").addEventListener("submit", (event) => {
  event.target.preventDefault();
  console.log(event.target.value);
});

/* Note: preventDefualt doesnt work on input field but a full form */

/* Add to cart */
/* Cloning item template: experimenting */
const oringinalPrice = 250.0;
const discount = 0.5;
let cartItemCount = 0;

// Function to update cart notification
function updateCartNotification() {
  const notification = document.querySelector(".cart-notification");
  if (cartItemCount > 0) {
    notification.textContent = cartItemCount;
    notification.classList.remove("hidden");
  } else {
    notification.classList.add("hidden");
  }
}

// Function to update cart visibility
function updateCartVisibility() {
  const emptyMessage = document.querySelector(".messageSaysNone");
  const checkoutButton = document.querySelector(".checkout");

  if (cartItemCount > 0) {
    // Hide empty message, show checkout button
    emptyMessage.style.display = "none";
    checkoutButton.style.display = "block";
  } else {
    // Show empty message, hide checkout button
    emptyMessage.style.display = "flex";
    checkoutButton.style.display = "none";
  }
}

document.querySelector(".addToCart").addEventListener("submit", (event) => {
  event.preventDefault();

  let quantity = document.querySelector(".quantityInput").value;

  // Check if quantity is 0 or invalid
  if (quantity <= 0 || quantity === "") {
    alert("Please select a quantity greater than 0");
    return;
  }

  /* Added Successfully */
  alert("Success!");

  /* Some variables */
  const template = document.querySelector(".itemData");
  const itemTemplate = template.cloneNode(true);
  const currentPrice = oringinalPrice * discount;
  const clonesNodes = itemTemplate.querySelectorAll(".itemData");

  /* Append clone */
  document.querySelector(".item").append(itemTemplate);

  /* Replacing text */
  itemTemplate.querySelector(".currentPrice").textContent = `$` + currentPrice;
  itemTemplate.querySelector(".quantity").textContent = quantity;
  itemTemplate.querySelector(".total").textContent =
    `$` + currentPrice * quantity;

  /* Update cart count */
  cartItemCount += parseInt(quantity);
  updateCartNotification();
  updateCartVisibility();

  /* Delete Cart Items */
  itemTemplate.querySelector(".deleteBtn").addEventListener("click", () => {
    itemTemplate.style.display = "none";

    /* Update cart count when item is deleted */
    const deletedQuantity = parseInt(
      itemTemplate.querySelector(".quantity").textContent
    );
    cartItemCount -= deletedQuantity;
    updateCartNotification();
    updateCartVisibility();
  });
});
