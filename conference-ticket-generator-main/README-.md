# Frontend Mentor - Conference ticket generator solution

This is a solution to the [Conference ticket generator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/conference-ticket-generator-oq5gFIU12w). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Complete the form with their details
- Receive form validation messages if:
  - Any field is missed
  - The email address is not formatted correctly
  - The avatar upload is too big or the wrong image format
- Complete the form only using their keyboard
- Have inputs, form field hints, and error messages announced on their screen reader
- See the generated conference ticket when they successfully submit the form
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

### How im going to tackle this:

- write html for both states, form and ticket.
- style it for responsiveness across devices(phone, tablet, laptop)
- Responsiveness: ticket is in fixed dimensions
- validate form input (file size uploaded, email address)
- generate unique ticket based on user input(unique id, avatar)

### What I learned

#### Media Submission Form

Use file type input with accept attr:
`<input type="file" accept id="label-for"`

To make label part of input, nest the input within the label and match its id and for:

```<label for="upload" class="drag-and-drop">
            <input type="file" accept id="upload" class="upload" />
            <img src="assets/images/icon-upload.svg" alt="cloud" />
            <p class="upload-description"></p>
          </label>
```

This input doesn't support drag and drop by default, it needs javascript

### HTML Hierachy

- there's no bigger or smaller between article and section, they're peers, serve different purpose but section can be nested inside of article to divide it into logical block

### CSS

- I learned a new property: `background-image: width height;`. if there's more image: `background-image: size1, size 2,...`
- If you want something to stay at the bottom or top or fixed, just use position fixed, dont go with absolute positioning
- #### New Property: 
- `pointer-events: none` prevent an element (eg: say a button) from being clickable. Useful when u dont want a button to no longer clickable and transfer it to somewherelse
### Gradient Text

- use webkit property cuz it's not widely available yet

```
  background-image: linear-gradient(to right, hsl(7, 86%, 67%), hsl(0, 0%, 100%));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
```

- what does `background-clip: text` do?

### JavaScript

- `eventListener("change")` is for selecting file using file inpt `<input type="file" accept>`

- in an eventListener using normal function, we use `this` to target the element itself whil in arrow function, we use `event.target` with event as a parameter

#### **_New Property:_**

- `.files` access the fileList(object) of selected files in case user selected multiple files. `.files` has length. it returns an object that behaves like an array. so `.files[0]` refers to the first element or file of that object.
- `.size` used to get the size of a file. it's usually in bytes (1MB = 1024KB)
- ````Example:
  /* Validate File size */
  upload.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      //it says: if there's file uploaded, we'll do:
      const maxSize = 500 * 1024;
      const uploadedFile = file.size;
      if (uploadedFile > maxSize) {
        alert("File is too large");
      }
    }
  })```
  ````
  - hahaha

#### New Syntax: Image Preview from input

```upload.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    const maxSize = 500 * 1024;
    const uploadedFile = file.size;
    if (uploadedFile > maxSize) {
      alert("File is too large");
    } else {
      // Create image preview
      const reader = new FileReader();
      reader.onload = function(e) {
        // Show preview in upload area
        const cloudIcon = document.querySelector(".cloud-icon");
        cloudIcon.src = e.target.result;
        cloudIcon.style.width = "80px";
        cloudIcon.style.height = "80px";
        cloudIcon.style.borderRadius = "50%";

        // Replace profile image in ticket
        const profileImg = document.querySelector(".profileImagePlaceholder img");
        profileImg.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
});
```

- so, u create a new object based on `FileReader()` constructor
- `result` is another built in prperty in js, specifically, in FileReader object. it contains the result of the parsed file done by `reader.onload`
- `readAsDataURL()` calls the above proccess into action, without it, js won't read the file. also.
-```const invalidInfo = document.querySelector(".info-error");
const normalInfo = document.querySelector(".info-normal");
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
        cloudIcon.style.width = "55px";
        cloudIcon.style.height = "55px";
        cloudIcon.style.padding = "0";
        cloudIcon.style.backgroundColor = "transparent";
      };
      reader.readAsDataURL(file);
    }
  }
})```
 - Explain: this code activates when file is true, meaning there's files uploaded. then it compare it to the max size set by us. if it's not valid, i'll throw an error to the client side. if it is, it removes the error, then js proceeds to read that file via `reader.onload`. this is an asynchronous code, so it takes some time. then it returns an object, contianing many data include url of the file in the `result` property. from there u can access its url and display it on client side.
 - `event.preventDefault()` is not just to stop page from reloading when submit the form, it can prevent all sort of browser default behavior like when dragging file into a page, it'll preview that file. so it's useful when u try to implement drag-and-drop
 - `.click()` method simulates a mouseclick on an element it's attached to in js.
 eg. `upload.click()`

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**

```

```
