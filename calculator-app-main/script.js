//Define functions
const display = document.querySelector(".display");
let currentInput = "";
function appendNum(num) {
  display.value += num;
}
function del() {
  display.value = display.value.slice(0, -1);
}
function reset() {
  display.value = "";
}
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

/* New knowledge
- to stack numbers in a calculator, u need to do sth call
concatonation. U basically append the assigned number to 
the display by accessing its value plus the appended num
*/
/* Review
- split() is used to split a string of character
 into an array by the specified ending. 
 e.g: split(".") this will divide the string
  using . as a break point
- RegEx:  [] means match any in the bracket. so /[abcd]/ means match a b c or d is all good.
*/
/* My tasks: 
- how to make dot only appear once
- how to make sure only one op of the same op can appear
- how to reset the display
- how to delete those digits
- how to convert string to number if possible
- how to handle multiple operators
- slice method?

- it's actually very simple. use try and catch block to catch error and display it so user cant input anymore if there's error.
no need to prevent anything. that's it. fuck!
 */
