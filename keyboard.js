"use strict";
const keyEl = document.querySelectorAll(".key");
const insertEl = document.getElementById("insert");
const [first, second, third, fourth] = keyEl;
document.addEventListener(`keypress`, function (event) {
  console.log(event);
  second.textContent = event.key;
  third.textContent = event.code;
  fourth.textContent = event.keyCode;

  console.log(event.second);
  console.log(event.third);
  console.log(event.fourth);
});

console.log("test");
