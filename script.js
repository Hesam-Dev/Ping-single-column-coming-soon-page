"use strict";

const input = document.querySelector("input");
const emailErr = document.querySelector(".email__error");
const btnNotify = document.querySelector(".btn__notify");
const invalidEmail =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

btnNotify.addEventListener("click", function () {
  if (input.value.match(invalidEmail)) {
    console.log("yes");
    emailErr.textContent = "Subscribed and Notified";
    emailErr.style.color = "hsl(136, 98%, 33%)";
    emailErr.style.opacity = "1";
  } else {
    emailErr.textContent = "please provide a valid email address";
    emailErr.style.color = "hsl(354, 100%, 66%)";
    emailErr.style.opacity = "1";
  }
});
