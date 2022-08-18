'use strict';

let justCalculated = false;
let lastCalc = '';

function displayOnScreen(event) {
    let equalBtn = document.querySelector(".keyboard__key_equal");
    let acBtn = document.querySelector(".keyboard__key_ac");
    let nope = document.querySelector(".keyboard");
    let currentBtn = event.target;
    let numb = currentBtn.innerText.length === 1 ? currentBtn.innerText : '';
    let onScreen = document.querySelector(".display_screen");

    if (currentBtn != nope && currentBtn != acBtn && currentBtn != equalBtn) {
        if (justCalculated) {
            onScreen.innerText = "";
            justCalculated = false;
        }
        if (onScreen.innerHTML == "0") {
            onScreen.innerHTML = "";
        }
        onScreen.innerHTML += numb;
    }
}

function cancel(event) {
    let onScreen = document.querySelector(".display_screen");
    lastCalc = '';
    onScreen.innerHTML = "0";
}

function calculate() {
    let onScreen = document.querySelector(".display_screen");
    let calc = document.querySelector(".display");
    let theResult = '';
    try {
        calc.innerText[0]?.match(/[-*+/]/)?
            theResult = eval(lastCalc + calc.innerText)
            :
            theResult = eval(calc.innerText);
    } catch (error) {
        console.log(error);
        theResult = '3RR0R';
    }
    onScreen.innerHTML = theResult;
    justCalculated = true;
    lastCalc = theResult;
}


let myKeyboard = document.querySelector(".keyboard");
myKeyboard.addEventListener("click", displayOnScreen);

let acBtn = document.querySelector(".keyboard__key_ac");
acBtn.addEventListener("click", cancel);

let btnEqual = document.querySelector(".keyboard__key_equal");
btnEqual.addEventListener("click", calculate);