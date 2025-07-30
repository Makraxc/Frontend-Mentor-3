# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

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

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I Learned

- I guess i'll be stuck at how to make an image slider
- And it was right.
- so the logic is to place all the images horizontally and use overflow hidden to show just one photo at a time. then utilizing js index to control next and previous image.
- I regret not thinking about accessibility. u basically need to use button element at anywhere clickable except links. it's so that users can just use TAB to move between buttons
- wait until all the dom content load, u can call a function

#### iMAGE SLIDER LOGIC

- first theres a function to show images based on current index(which can be changed later by user by clicking on prev and next icon)
- there's functions for prev and next that will decrement or increment index and then we have a show slide function that will remove previous className that show that image(remove all of them), then add that same class to new current index
- in consclusion, init function is just like its name, it just init the logic by adding className in the first place. the main logical function is actually in show slide function
- in function, it's not always about passing parameter, the core concept is to make reusable blocks of code. in this case, u dont need to pass param cuz we are essentially passing the entire block into the function and the decremented index will be used there directly without passing.
- If u pass a param, its value only exist in one function, it can't be used outside so u can't make the slider work properly
- as for transition, we can use animation property

#### NUMBER SPINNERS

- u can't style them beside hiding it. u can replicate its function using js. see? js is everything
- use event listener on the button, and call stepUp() and stepDown() function on the input

#### Problem I ran into

- when u keep clicking on previous icon, index will eventually become negative. in nodes collection, it doesnt support negative indexing. How i dealt with that? just reset the index to 0 or to the last index, that's it
- why did it not slide all the images? cuz i didnt modify the global variable, even if i did, i didnt use it in the functions but local variable `:)`

### Continued development

- i hope to learn more about js functions. there's countless possiblities to use with but i just havent fully grasped it yet
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
