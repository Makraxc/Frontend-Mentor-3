"use strict";
//Validate Form
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const dayValue = document.querySelector(".day input").value;
  const monthValue = document.querySelector(".month input").value;
  const yearValue = document.querySelector(".year input").value;
  const now = new Date();
  //Check Empty input
  function checkEmpty(value, dataCollection) {
    const collections = document.querySelectorAll(dataCollection); // label inputBorder warning
    if (!value) {
      collections[0].style.color = "red";
      collections[1].style.border = "1px solid red";
      collections[2].style.display = "block";
      console.log(collections[2]);
    } else {
      collections[0].style.color = "";
      collections[1].style.border = "";
      collections[2].style.display = "";
    }
  }
  checkEmpty(dayValue, ".day label, .day input, .day .warning");
  checkEmpty(monthValue, ".month label, .month input, .month .warning");
  checkEmpty(yearValue, ".year label, .year input, .year .warning");
  //check year input
  function validateYear() {
    let correctYear;
    if (yearValue > now.getFullYear()) {
      document.querySelector(".year label").style.color = "red";
      document.querySelector(".year input").style.border = "1px solid red";
      document.querySelector(".year .warning").style.display = "block";
      correctYear = null;
    } else {
      document.querySelector(".year .warning").style.display = "none";
      document.querySelector(".year label").style.color = "";
      document.querySelector(".year input").style.border = "";
      correctYear = yearValue;
    }
    return correctYear;
  }

  //Done validate year: this is the year if it's valid
  let correctYear;
  if (yearValue) {
    correctYear = validateYear();
  }

  //check month input
  function validateMonth() {
    let correctMonth;
    if (monthValue > 12 || monthValue < 1) {
      document.querySelector(".month label").style.color = "red";
      document.querySelector(".month input").style.border = "1px solid red";
      document.querySelector(".month .warning").style.display = "block";
      correctMonth = null;
    } else {
      document.querySelector(".month .warning").style.display = "none";
      document.querySelector(".month label").style.color = "";
      document.querySelector(".month input").style.border = "";
      correctMonth = monthValue;
    }
    return correctMonth;
  }
  //validated month:
  let correctMonth;
  if (monthValue) {
    correctMonth = validateMonth();
  }

  //check day input: a little tricky
  function validateDay() {
    const lastDayofEachMonth = new Date(correctYear, correctMonth, 0).getDate();
    let correctDay;
    if (dayValue > lastDayofEachMonth) {
      document.querySelector(".day label").style.color = "red";
      document.querySelector(".day input").style.border = "1px solid red";
      document.querySelector(".day .warning").style.display = "block";
      correctDay = null;
    } else {
      document.querySelector(".day .warning").style.display = "none";
      document.querySelector(".day label").style.color = "";
      document.querySelector(".day input").style.border = "";
      correctDay = dayValue;
    }
    return correctDay;
  }
  //Validated Day value:
  let correctDay;
  if (dayValue) {
    correctDay = validateDay();
  }

  //init age calculation
  function initAgeCalculation() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; //+1 cuz js is 0-based
    let day = now.getDate();
    document.querySelector(".yearPlaceholder").textContent = year - correctYear;
    document.querySelector(".monthPlaceholder").textContent =
      month - correctMonth;
    //if ur month is not here yet
    let kvasMonth = 0; // Declare kvasMonth outside the if-else block
    if (correctMonth > month) {
      document.querySelector(".monthPlaceholder").textContent =
        month - correctMonth + 12;
      document.querySelector(".yearPlaceholder").textContent =
        year - correctYear - 1;
      kvasMonth = correctMonth - month;
    }

    //if ur day not here yet
    if (correctDay >= day) {
      if (correctMonth > month) {
        document.querySelector(".monthPlaceholder").textContent =
          month - correctMonth + 11;
      } else {
        document.querySelector(".monthPlaceholder").textContent =
          month - correctMonth - 1;
      }
      //if birth day is later than now
      const lastDayofThisMonth = new Date(year, month, 0).getDate();
      document.querySelector(".dayPlaceholder").textContent =
        lastDayofThisMonth + day - correctDay;
    } else {
      document.querySelector(".dayPlaceholder").textContent = correctDay;
    }
  }

  //Only init calculation when all values are validated
  if (correctYear && correctDay && correctMonth) {
    initAgeCalculation();
  }
});

/* 
New knowledge: 
- Js has built in date object. Date() is a constructor used to get actual calendar date. various method can be used. it can accept parameter to set a new timestamp for the new object.
- getMonth() is 0-based so if u want a numeral month used by human, u add 1 to that month
*/
