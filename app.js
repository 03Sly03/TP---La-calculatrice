'use strict';

function displayOnScreen(event) {
    let equalBtn = document.querySelector(".keyboard__key_equal");
    let acBtn = document.querySelector(".keyboard__key_ac");
    let nope = document.querySelector(".keyboard");
    let currentBtn = event.target;
    let numb = currentBtn.innerText;
    let onScreen = document.querySelector(".display_screen");
    if (currentBtn != nope && currentBtn != acBtn && currentBtn != equalBtn) {
        if (onScreen.innerHTML == "0"){
            onScreen.innerHTML = "";
        }
        onScreen.innerHTML += numb;
    }
}

function cancel(event) {
    let onScreen = document.querySelector(".display_screen");
    let currentBtn = event.target;
    onScreen.innerHTML = "0";
}

function calculate() {
    let calc = document.querySelector(".display");
    console.log(eval(calc.innerText));
    let onScreen = document.querySelector(".display_screen");
    onScreen.innerHTML = eval(calc.innerText);
    console.log(onScreen.innerHTML);
}

let myKeyboard = document.querySelector(".keyboard");
myKeyboard.addEventListener("click", displayOnScreen);

let acBtn = document.querySelector(".keyboard__key_ac");
acBtn.addEventListener("click", cancel);

let btnEqual = document.querySelector(".keyboard__key_equal");
btnEqual.addEventListener("click", calculate);