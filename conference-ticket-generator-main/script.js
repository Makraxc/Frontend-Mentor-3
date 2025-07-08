/* Final Styling */

const outerBorder = document.querySelector(".outterBorder");
const upload = document.querySelector(".upload");
upload.addEventListener("focus", (event) => {
  outerBorder.style.outline = "2px solid hsl(245, 15%, 58%)";
});
document
  .querySelector(".drag-and-drop")
  .addEventListener("mouseenter", (event) => {
    event.target.style.backgroundColor = "rgba(255, 255, 255, 0.18)";
  });
document
  .querySelector(".drag-and-drop")
  .addEventListener("mouseleave", (event) => {
    event.target.style.backgroundColor = "hsla(245, 19%, 35%, 0.316)";
  });
document.querySelector(".inputField").addEventListener("focus", (event) => {
  outerBorder.style.outline = "none";
});

/* Functionality */

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const gitHubInput = document.querySelector("#gitHub");
const namePlaceholder = document.querySelector(".namePlaceholder");
const emailPlaceholder = document.querySelector(".emailPlaceholder");
const gitHubUserNamePlaceholder = document.querySelector(
  ".gitHubUserNamePlaceholder"
);
const profileImagePlaceholder = document.querySelector(
  ".profileImagePlaceholder"
);
const cloudIcon = document.querySelector(".cloud-icon");
const userName = document.querySelector(".userName");

/* Replace name placeholder */

nameInput.addEventListener("input", (event) => {
  event.preventDefault();
  const nameString = nameInput.value;
  userName.textContent = nameString;
  namePlaceholder.textContent = nameString;
});

/* Replace email placeholder */

emailInput.addEventListener("input", (event) => {
  event.preventDefault();
  const emailString = emailInput.value;
  emailPlaceholder.textContent = emailString;
});

/* Replace GitHub username placeholder */

gitHubInput.addEventListener("input", (event) => {
  event.preventDefault();
  const gitHubString = gitHubInput.value;
  gitHubUserNamePlaceholder.textContent = gitHubString;
});

/* Validate File size and upload avatar*/

const invalidInfo = document.querySelector(".info-error");
const normalInfo = document.querySelector(".info-normal");
const userProfileImage = document.querySelector(".profileImagePlaceholder");
upload.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    //it says: if there's file uploaded, we'll do:
    const maxSize = 500 * 1024;
    const uploadedFile = file.size;
    if (uploadedFile > maxSize) {
      invalidInfo.style.display = "flex";
      normalInfo.style.display = "none";
    } else {
      invalidInfo.style.display = "none";
      normalInfo.style.display = "flex";
      /* Now preview and show it in the cloud icon. first we need to preview*/
      /* create a new object from FileReader constructor */
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageURL = reader.result;
        cloudIcon.src = imageURL;
        profileImagePlaceholder.src = imageURL;
        cloudIcon.style.width = "55px";
        cloudIcon.style.height = "55px";
        cloudIcon.style.padding = "0";
        cloudIcon.style.backgroundColor = "transparent";
        document.querySelector(".upload-description").style.display = "none";
        document.querySelector(".fileOptions").style.display = "flex";
      };
      reader.readAsDataURL(file);
    }
  }
});

/* Drag and drop feature */
const dragArea = document.querySelector(".dragArea");
dragArea.addEventListener("dragover", (event) => {
  event.preventDefault();
});
dragArea.addEventListener("drop", (event) => {
  event.preventDefault();
  const files = event.dataTransfer.files;
  const file = files[0];
  if (file) {
    //it says: if there's file uploaded, we'll do:
    const maxSize = 500 * 1024;
    const uploadedFile = file.size;
    if (uploadedFile > maxSize) {
      invalidInfo.style.display = "flex";
      normalInfo.style.display = "none";
    } else {
      invalidInfo.style.display = "none";
      normalInfo.style.display = "flex";
      /* Now preview and show it in the cloud icon. first we need to preview*/
      /* create a new object from FileReader constructor */
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageURL = reader.result;
        cloudIcon.src = imageURL;
        profileImagePlaceholder.src = imageURL;
        cloudIcon.style.width = "55px";
        cloudIcon.style.height = "55px";
        cloudIcon.style.padding = "0";
        cloudIcon.style.backgroundColor = "transparent";

        document.querySelector(".upload-description").style.display = "none";
        document.querySelector(".fileOptions").style.display = "flex";
      };
      reader.readAsDataURL(file);
    }
  }
});

/* File Options */

dragArea.addEventListener("dragenter", (event) => {
  document.querySelector(".drag-and-drop").classList.add("dragFeedback");
});
dragArea.addEventListener("dragleave", (event) => {
  document.querySelector(".drag-and-drop").classList.remove("dragFeedback");
});

/* Change */

const change = document.querySelector(".change");
change.addEventListener("click", (event) => {
  event.preventDefault();

  upload.click();
});

/* Remove */
const remove = document.querySelector(".remove");
remove.addEventListener("click", (event) => {
  cloudIcon.src = "assets/images/icon-upload.svg";
  cloudIcon.style.width = "41px";
  cloudIcon.style.height = "41px";
  cloudIcon.style.padding = "0.3rem";
  cloudIcon.style.backgroundColor = "hsla(245, 19%, 35%, 0.585)";
  document.querySelector(".upload-description").style.display = "flex";
  document.querySelector(".fileOptions").style.display = "none";
});

/* Validate email */
const regex = /^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
document.querySelector(".emailInput").addEventListener("input", (event) => {
  event.preventDefault();
  const emailInput = event.target.value;
  const isValid = regex.test(emailInput);
  const invalid = document.querySelector(".invalid");
  const redBorder = document.querySelector(".error");
  if (!isValid && emailInput.length) {
    redBorder.style.outline = "2px solid red";
    redBorder.style.outlineOffset = "2px";
    invalid.style.display = "flex";
  } else {
    redBorder.style.outline = "none";
    invalid.style.display = "none";
  }
});

/* Generating ticket */
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector(".ticket").style.display = "flex";
  document.querySelector(".form").style.display = "none";
});
const newDIv = "Hiiii";
