let justCalculated = false;
let lastCalc = '';

function displayOnScreen(event: Event) {
    let equalBtn = document.querySelector(".keyboard__key_equal");
    let acBtn = document.querySelector(".keyboard__key_ac");
    let nope = document.querySelector(".keyboard");
    let currentBtn = event.target as HTMLTextAreaElement;
    let numb = currentBtn.innerText.length === 1 ? currentBtn.innerText : '';
    let onScreen = document.querySelector(".display_screen") as HTMLTextAreaElement;

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

function cancel(event: Event) {
    let onScreen = document.querySelector(".display_screen") as HTMLTextAreaElement;
    lastCalc = '';
    onScreen.innerHTML = "0";
}

function calculate() {
    let onScreen = document.querySelector(".display_screen") as HTMLTextAreaElement;
    let calc = document.querySelector(".display") as HTMLTextAreaElement;
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


let myKeyboard = document.querySelector(".keyboard")  as HTMLTextAreaElement;
myKeyboard.addEventListener("click", displayOnScreen);

let acBtn = document.querySelector(".keyboard__key_ac") as HTMLTextAreaElement;
acBtn.addEventListener("click", cancel);

let btnEqual = document.querySelector(".keyboard__key_equal") as HTMLTextAreaElement;
btnEqual.addEventListener("click", calculate);