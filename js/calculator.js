var pricesArray = [];
var commissionsArray = [];
var workinprogressArray = [];
var designCharactersRadio;
var style;
var bodyRadio;
var bodyButtons;
var styleShading;
var styleShadingRadio;
var outfit;
var outfitOptions;
var amountCharactersRadio;
var amountEmotesRadio;
var privateRadio;
var lewdRadio;
var skipQueueRadio;

var peopleInQueue = 0;
var peopleSkippingQueue = 0;
var peopleSkippingRushingQueue = 0;
var peopleInQueueNotHold = 0;
var peopleInQueueHold = 0;

var numberDesigningCharacter = 1.0;
var numberStyleShading = 0;
var numberBody = 0;
var numberAmountCharacters = 1.0;
var numberOutfitComplexity = 1.0;
var numberBackground = 0;
var numberPrivate = 1.0;
var numberSkip = 1.0;
var numberLewd = 1.0;
var numberExtras = 0;
var numberOtherFees = 0;

///////////////////small functions///////////////////////////////
function enableBodyButton(i) {
    bodyButtons[i].classList.remove("disabled");
    bodyButtons[i].classList.remove("disabledd");
}

function disableBodyButton(i) {
    bodyButtons[i].classList.add("disabled");
    bodyButtons[i].classList.add("disabledd");
}

function enableAmountCharactersButton(i) {
    amountCharactersButtons[i].classList.remove("disabled");
    amountCharactersButtons[i].classList.remove("disabledd");
}

function disableAmountCharactersButton(i) {
    amountCharactersButtons[i].classList.add("disabled");
    amountCharactersButtons[i].classList.add("disabledd");
}

function checkIfAButtonWasClicked() {
    for (let i = 0; i < bodyRadio.length; i++) {
        if (bodyRadio[i].checked) {
            bodyButtons[i].classList.add("active");
        }
    }
    for (let i = 0; i < amountCharactersRadio.length; i++) {
        if (amountCharactersRadio[i].checked) {
            amountCharactersButtons[i].classList.add("active");
        }
    }

}

function unselectThemAll() {
    for (let i = 0; i < bodyRadio.length; i++) {
        if (bodyRadio[i].checked) {
            bodyButtons[i].classList.remove("active");
            bodyRadio[i].checked = false;
        }
    }
    for (let i = 0; i < amountCharactersRadio.length; i++) {
        if (amountCharactersRadio[i].checked) {
            amountCharactersButtons[i].classList.remove("active");
            amountCharactersRadio[i].checked = false;
        }
    }
}

function checkNumber(number, min, max) {
    if (number > max) {
        return max;
    } else if (number < min) {
        return min;
    } else {
        return number;
    }
}

function giveMePrevElementsNumber(number, length) {
    if (number < 0) {
        return length - 1;
    } else {
        return number;
    }
}

function giveMeNextElementsNumber(number, length) {
    if (number >= length) {
        return 0;
    } else {
        return number;
    }
}

////////////////////////////////////////////////////////////////////


function updateDesignCharactersPrice() {
    let cost = document.getElementById("designCharacter").value;

    numberDesigningCharacter = 1 + (cost / 100);
    updateTotal();

    if (cost == "") {
        document.getElementById("designingCharIDValue").classList.add("d-none");
    } else {
        document.getElementById("designingCharIDValue").classList.remove("d-none");
        document.getElementById("designingCharIDValue").innerText = cost + "%";
    }
}

function showStyleShading() {
    styleShading.classList.remove("d-none");
    let content = "";
    let noCost = "";
    let yesCost = "";
    let cost = 0;

    if (style.value == "doodle") {
        noCost = pricesArray.cheapshading.doodle.dollarOrPercentage + pricesArray.cheapshading.doodle.no;
        yesCost = pricesArray.cheapshading.doodle.dollarOrPercentage + pricesArray.cheapshading.doodle.yes;
    }
    else if (style.value == "scribble") {
        noCost = pricesArray.cheapshading.scribble.dollarOrPercentage + pricesArray.cheapshading.scribble.no;
        yesCost = pricesArray.cheapshading.scribble.dollarOrPercentage + pricesArray.cheapshading.scribble.yes;
    }

    document.getElementById("noStyleShadingRadioText").innerHTML = `(<span class="xiransgreen">${noCost}</span>)`;
    document.getElementById("yesStyleShadingRadioText").innerHTML = `(<span class="xiransgreen">${yesCost}</span>)`;

    document.getElementById("styleShadingIDValue").classList.remove("d-none");

    for (var i = 0; i < styleShadingRadio.length; i++) {
        if (styleShadingRadio[i].checked) {
            if (styleShadingRadio[i].value == "no") {
                content = noCost;
                if (style.value == "doodle") {
                    cost = pricesArray.cheapshading.doodle.no;
                }
                else if (style.value == "scribble") {
                    cost = pricesArray.cheapshading.scribble.no;
                }
            }
            else if (styleShadingRadio[i].value == "yes") {
                content = yesCost;
                if (style.value == "doodle") {
                    cost = pricesArray.cheapshading.doodle.yes;
                }
                else if (style.value == "scribble") {
                    cost = pricesArray.cheapshading.scribble.yes;
                }
            }
        }
    }

    numberStyleShading = Number(cost);
    updateTotal();

    if (content == "") {
        document.getElementById("styleShadingIDValue").classList.add("d-none");
    } else {
        document.getElementById("styleShadingIDValue").classList.remove("d-none");
        document.getElementById("styleShadingIDValue").innerText = content;
    }
}

function hideStyleShading() {
    styleShading.classList.add("d-none");
    document.getElementById("styleShadingIDValue").classList.add("d-none");
}

function updateStyleShowShadingPriceAndCallOtherFunctions(check) {
    styleShading = document.getElementById("styleShadingID");

    if (check == true) {
        unselectThemAll();
    }
    updateBodyButtons();
    updateBodyPrice();
    updateAmountCharactersButtons();
    updateAmountCharactersPrice();
    updateExtrasPrice();
    document.getElementById("howManyEmotesID").classList.add("d-none");
    updateHowManyEmotesText();

    if (style.value == "") {
        hideStyleShading();
    }
    else if (style.value == "cleanColors") {
        hideStyleShading();
    }

    else if (style.value == "hybrid") {
        hideStyleShading();
    }

    else if (style.value == "coloredSketch") {
        hideStyleShading();
    }

    else if (style.value == "emote") {
        hideStyleShading();
        bodyRadio[4].checked = true;
        bodyButtons[4].classList.add("active");
        updateBodyPrice();
        document.getElementById("howManyEmotesID").classList.remove("d-none");
    }

    else if (style.value == "sketch") {
        hideStyleShading();
    }

    else if (style.value == "doodle") {
        showStyleShading();
    }

    else if (style.value == "scribble") {
        showStyleShading();
    }

    else if (style.value == "logo") {
        hideStyleShading();
    }

    else if (style.value == "other") {
        hideStyleShading();
    }
}

function updateBodyButtons() {
    let portraitText = document.getElementById("portraitText");
    let halfbodyText = document.getElementById("halfbodyText");
    let thighsupText = document.getElementById("thigh-upText");
    let fullbodyText = document.getElementById("fullbodyText");
    let otherText = document.getElementById("otherText");

    if (style.value == "") {
        portraitText.innerHTML = ``;
        disableBodyButton(0);
        halfbodyText.innerHTML = ``;
        disableBodyButton(1);
        thighsupText.innerHTML = ``;
        disableBodyButton(2);
        fullbodyText.innerHTML = ``;
        disableBodyButton(3);
        otherText.innerHTML = ``;
        disableBodyButton(4);
    }
    else if (style.value == "cleanColors") {
        if (pricesArray.body.portrait.cleanColors.isItPossible) {
            portraitText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body.portrait.cleanColors.dollarOrPercentage + pricesArray.body.portrait.cleanColors.value}</span>`;
            enableBodyButton(0);
        } else {
            portraitText.innerHTML = ``;
            disableBodyButton(0);
        }

        if (pricesArray.body.halfbody.cleanColors.isItPossible) {
            halfbodyText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body.halfbody.cleanColors.dollarOrPercentage + pricesArray.body.halfbody.cleanColors.value}</span>`;
            enableBodyButton(1);
        } else {
            halfbodyText.innerHTML = ``;
            disableBodyButton(1);
        }

        if (pricesArray.body.thighs.cleanColors.isItPossible) {
            thighsupText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body.thighs.cleanColors.dollarOrPercentage + pricesArray.body.thighs.cleanColors.value}</span>`;
            enableBodyButton(2);
        } else {
            thighsupText.innerHTML = ``;
            disableBodyButton(2);
        }

        if (pricesArray.body.full.cleanColors.isItPossible) {
            fullbodyText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body.full.cleanColors.dollarOrPercentage + pricesArray.body.full.cleanColors.value}</span>`;
            enableBodyButton(3);
        } else {
            fullbodyText.innerHTML = ``;
            disableBodyButton(3);
        }

        if (pricesArray.body.other.cleanColors.isItPossible) {
            otherText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body.other.cleanColors.dollarOrPercentage + pricesArray.body.other.cleanColors.value}</span>`;
            enableBodyButton(4);
        } else {
            otherText.innerHTML = ``;
            disableBodyButton(4);
        }
    }

    else if (style.value == "hybrid") {
        if (pricesArray.body.portrait.hybrid.isItPossible) {
            portraitText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body.portrait.hybrid.dollarOrPercentage + pricesArray.body.portrait.hybrid.value}</span>`;
            enableBodyButton(0);
        } else {
            portraitText.innerHTML = ``;
            disableBodyButton(0);
        }

        if (pricesArray.body.halfbody.hybrid.isItPossible) {
            halfbodyText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body.halfbody.hybrid.dollarOrPercentage + pricesArray.body.halfbody.hybrid.value}</span>`;
            enableBodyButton(1);
        } else {
            halfbodyText.innerHTML = ``;
            disableBodyButton(1);
        }

        if (pricesArray.body.thighs.hybrid.isItPossible) {
            thighsupText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body.thighs.hybrid.dollarOrPercentage + pricesArray.body.thighs.hybrid.value}</span>`;
            enableBodyButton(2);
        } else {
            thighsupText.innerHTML = ``;
            disableBodyButton(2);
        }

        if (pricesArray.body.full.hybrid.isItPossible) {
            fullbodyText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body.full.hybrid.dollarOrPercentage + pricesArray.body.full.hybrid.value}</span>`;
            enableBodyButton(3);
        } else {
            fullbodyText.innerHTML = ``;
            disableBodyButton(3);
        }

        if (pricesArray.body.other.hybrid.isItPossible) {
            otherText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body.other.hybrid.dollarOrPercentage + pricesArray.body.other.hybrid.value}</span>`;
            enableBodyButton(4);
        } else {
            otherText.innerHTML = ``;
            disableBodyButton(4);
        }
    }

    else if (style.value == "coloredSketch") {
        if (pricesArray.body.portrait.coloredSketch.isItPossible) {
            portraitText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body.portrait.coloredSketch.dollarOrPercentage + pricesArray.body.portrait.coloredSketch.value}</span>`;
            enableBodyButton(0);
        } else {
            portraitText.innerHTML = ``;
            disableBodyButton(0);
        }

        if (pricesArray.body.halfbody.coloredSketch.isItPossible) {
            halfbodyText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body.halfbody.coloredSketch.dollarOrPercentage + pricesArray.body.halfbody.coloredSketch.value}</span>`;
            enableBodyButton(1);
        } else {
            halfbodyText.innerHTML = ``;
            disableBodyButton(1);
        }

        if (pricesArray.body.thighs.coloredSketch.isItPossible) {
            thighsupText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body.thighs.coloredSketch.dollarOrPercentage + pricesArray.body.thighs.coloredSketch.value}</span>`;
            enableBodyButton(2);
        } else {
            thighsupText.innerHTML = ``;
            disableBodyButton(2);
        }

        if (pricesArray.body.full.coloredSketch.isItPossible) {
            fullbodyText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body.full.coloredSketch.dollarOrPercentage + pricesArray.body.full.coloredSketch.value}</span>`;
            enableBodyButton(3);
        } else {
            fullbodyText.innerHTML = ``;
            disableBodyButton(3);
        }

        if (pricesArray.body.other.coloredSketch.isItPossible) {
            otherText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body.other.coloredSketch.dollarOrPercentage + pricesArray.body.other.coloredSketch.value}</span>`;
            enableBodyButton(4);
        } else {
            otherText.innerHTML = ``;
            disableBodyButton(4);
        }
    }

    else if (style.value == "emote") {
        if (pricesArray.body.portrait.emote.isItPossible) {
            portraitText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body.portrait.emote.dollarOrPercentage + pricesArray.body.portrait.emote.value}</span>`;
            enableBodyButton(0);
        } else {
            portraitText.innerHTML = ``;
            disableBodyButton(0);
        }

        if (pricesArray.body.halfbody.emote.isItPossible) {
            halfbodyText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body.halfbody.emote.dollarOrPercentage + pricesArray.body.halfbody.emote.value}</span>`;
            enableBodyButton(1);
        } else {
            halfbodyText.innerHTML = ``;
            disableBodyButton(1);
        }

        if (pricesArray.body.thighs.emote.isItPossible) {
            thighsupText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body.thighs.emote.dollarOrPercentage + pricesArray.body.thighs.emote.value}</span>`;
            enableBodyButton(2);
        } else {
            thighsupText.innerHTML = ``;
            disableBodyButton(2);
        }

        if (pricesArray.body.full.emote.isItPossible) {
            fullbodyText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body.full.emote.dollarOrPercentage + pricesArray.body.full.emote.value}</span>`;
            enableBodyButton(3);
        } else {
            fullbodyText.innerHTML = ``;
            disableBodyButton(3);
        }

        if (pricesArray.body.other.emote.isItPossible) {
            otherText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body.other.emote.dollarOrPercentage + pricesArray.body.other.emote.value}</span>`;
            enableBodyButton(4);
        } else {
            otherText.innerHTML = ``;
            disableBodyButton(4);
        }
    }

    else if (style.value == "sketch") {
        if (pricesArray.body.portrait.sketch.isItPossible) {
            portraitText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body.portrait.sketch.dollarOrPercentage + pricesArray.body.portrait.sketch.value}</span>`;
            enableBodyButton(0);
        } else {
            portraitText.innerHTML = ``;
            disableBodyButton(0);
        }

        if (pricesArray.body.halfbody.sketch.isItPossible) {
            halfbodyText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body.halfbody.sketch.dollarOrPercentage + pricesArray.body.halfbody.sketch.value}</span>`;
            enableBodyButton(1);
        } else {
            halfbodyText.innerHTML = ``;
            disableBodyButton(1);
        }

        if (pricesArray.body.thighs.sketch.isItPossible) {
            thighsupText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body.thighs.sketch.dollarOrPercentage + pricesArray.body.thighs.sketch.value}</span>`;
            enableBodyButton(2);
        } else {
            thighsupText.innerHTML = ``;
            disableBodyButton(2);
        }

        if (pricesArray.body.full.sketch.isItPossible) {
            fullbodyText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body.full.sketch.dollarOrPercentage + pricesArray.body.full.sketch.value}</span>`;
            enableBodyButton(3);
        } else {
            fullbodyText.innerHTML = ``;
            disableBodyButton(3);
        }

        if (pricesArray.body.other.sketch.isItPossible) {
            otherText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body.other.sketch.dollarOrPercentage + pricesArray.body.other.sketch.value}</span>`;
            enableBodyButton(4);
        } else {
            otherText.innerHTML = ``;
            disableBodyButton(4);
        }
    }

    else if (style.value == "doodle") {
        if (pricesArray.body.portrait.doodle.isItPossible) {
            portraitText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body.portrait.doodle.dollarOrPercentage + pricesArray.body.portrait.doodle.value}</span>`;
            enableBodyButton(0);
        } else {
            portraitText.innerHTML = ``;
            disableBodyButton(0);
        }

        if (pricesArray.body.halfbody.doodle.isItPossible) {
            halfbodyText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body.halfbody.doodle.dollarOrPercentage + pricesArray.body.halfbody.doodle.value}</span>`;
            enableBodyButton(1);
        } else {
            halfbodyText.innerHTML = ``;
            disableBodyButton(1);
        }

        if (pricesArray.body.thighs.doodle.isItPossible) {
            thighsupText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body.thighs.doodle.dollarOrPercentage + pricesArray.body.thighs.doodle.value}</span>`;
            enableBodyButton(2);
        } else {
            thighsupText.innerHTML = ``;
            disableBodyButton(2);
        }

        if (pricesArray.body.full.doodle.isItPossible) {
            fullbodyText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body.full.doodle.dollarOrPercentage + pricesArray.body.full.doodle.value}</span>`;
            enableBodyButton(3);
        } else {
            fullbodyText.innerHTML = ``;
            disableBodyButton(3);
        }

        if (pricesArray.body.other.doodle.isItPossible) {
            otherText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body.other.doodle.dollarOrPercentage + pricesArray.body.other.doodle.value}</span>`;
            enableBodyButton(4);
        } else {
            otherText.innerHTML = ``;
            disableBodyButton(4);
        }
    }

    else if (style.value == "scribble") {
        if (pricesArray.body.portrait.scribble.isItPossible) {
            portraitText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body.portrait.scribble.dollarOrPercentage + pricesArray.body.portrait.scribble.value}</span>`;
            enableBodyButton(0);
        } else {
            portraitText.innerHTML = ``;
            disableBodyButton(0);
        }

        if (pricesArray.body.halfbody.scribble.isItPossible) {
            halfbodyText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body.halfbody.scribble.dollarOrPercentage + pricesArray.body.halfbody.scribble.value}</span>`;
            enableBodyButton(1);
        } else {
            halfbodyText.innerHTML = ``;
            disableBodyButton(1);
        }

        if (pricesArray.body.thighs.scribble.isItPossible) {
            thighsupText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body.thighs.scribble.dollarOrPercentage + pricesArray.body.thighs.scribble.value}</span>`;
            enableBodyButton(2);
        } else {
            thighsupText.innerHTML = ``;
            disableBodyButton(2);
        }

        if (pricesArray.body.full.scribble.isItPossible) {
            fullbodyText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body.full.scribble.dollarOrPercentage + pricesArray.body.full.scribble.value}</span>`;
            enableBodyButton(3);
        } else {
            fullbodyText.innerHTML = ``;
            disableBodyButton(3);
        }

        if (pricesArray.body.other.scribble.isItPossible) {
            otherText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body.other.scribble.dollarOrPercentage + pricesArray.body.other.scribble.value}</span>`;
            enableBodyButton(4);
        } else {
            otherText.innerHTML = ``;
            disableBodyButton(4);
        }
    }

    else if (style.value == "logo") {
        if (pricesArray.body.portrait.logo.isItPossible) {
            portraitText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body.portrait.logo.dollarOrPercentage + pricesArray.body.portrait.logo.value}</span>`;
            enableBodyButton(0);
        } else {
            portraitText.innerHTML = ``;
            disableBodyButton(0);
        }

        if (pricesArray.body.halfbody.logo.isItPossible) {
            halfbodyText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body.halfbody.logo.dollarOrPercentage + pricesArray.body.halfbody.logo.value}</span>`;
            enableBodyButton(1);
        } else {
            halfbodyText.innerHTML = ``;
            disableBodyButton(1);
        }

        if (pricesArray.body.thighs.logo.isItPossible) {
            thighsupText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body.thighs.logo.dollarOrPercentage + pricesArray.body.thighs.logo.value}</span>`;
            enableBodyButton(2);
        } else {
            thighsupText.innerHTML = ``;
            disableBodyButton(2);
        }

        if (pricesArray.body.full.logo.isItPossible) {
            fullbodyText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body.full.logo.dollarOrPercentage + pricesArray.body.full.logo.value}</span>`;
            enableBodyButton(3);
        } else {
            fullbodyText.innerHTML = ``;
            disableBodyButton(3);
        }

        if (pricesArray.body.other.logo.isItPossible) {
            otherText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body.other.logo.dollarOrPercentage + pricesArray.body.other.logo.value}</span>`;
            enableBodyButton(4);
        } else {
            otherText.innerHTML = ``;
            disableBodyButton(4);
        }
    }

    else if (style.value == "other") {
        if (pricesArray.body.portrait.other.isItPossible) {
            portraitText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body.portrait.other.dollarOrPercentage + pricesArray.body.portrait.other.value}</span>`;
            enableBodyButton(0);
        } else {
            portraitText.innerHTML = ``;
            disableBodyButton(0);
        }

        if (pricesArray.body.halfbody.other.isItPossible) {
            halfbodyText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body.halfbody.other.dollarOrPercentage + pricesArray.body.halfbody.other.value}</span>`;
            enableBodyButton(1);
        } else {
            halfbodyText.innerHTML = ``;
            disableBodyButton(1);
        }

        if (pricesArray.body.thighs.other.isItPossible) {
            thighsupText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body.thighs.other.dollarOrPercentage + pricesArray.body.thighs.other.value}</span>`;
            enableBodyButton(2);
        } else {
            thighsupText.innerHTML = ``;
            disableBodyButton(2);
        }

        if (pricesArray.body.full.other.isItPossible) {
            fullbodyText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body.full.other.dollarOrPercentage + pricesArray.body.full.other.value}</span>`;
            enableBodyButton(3);
        } else {
            fullbodyText.innerHTML = ``;
            disableBodyButton(3);
        }

        if (pricesArray.body.other.other.isItPossible) {
            otherText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body.other.other.dollarOrPercentage + pricesArray.body.other.other.value}</span>`;
            enableBodyButton(4);
        } else {
            otherText.innerHTML = ``;
            disableBodyButton(4);
        }
    }
}

function updateBodyPrice() {
    let bodyContent = "";
    let cost = 0;

    for (var i = 0; i < bodyRadio.length; i++) {
        if (bodyRadio[i].checked) {
            if (bodyRadio[i].value == "portrait") {
                if (style.value == "cleanColors") {
                    if (pricesArray.body.portrait.cleanColors.isItPossible) {
                        bodyContent = pricesArray.body.portrait.cleanColors.dollarOrPercentage + pricesArray.body.portrait.cleanColors.value;
                        cost = pricesArray.body.portrait.cleanColors.value;
                    }
                } else if (style.value == "hybrid") {
                    if (pricesArray.body.portrait.hybrid.isItPossible) {
                        bodyContent = pricesArray.body.portrait.hybrid.dollarOrPercentage + pricesArray.body.portrait.hybrid.value;
                        cost = pricesArray.body.portrait.hybrid.value;
                    }
                } else if (style.value == "coloredSketch") {
                    if (pricesArray.body.portrait.coloredSketch.isItPossible) {
                        bodyContent = pricesArray.body.portrait.coloredSketch.dollarOrPercentage + pricesArray.body.portrait.coloredSketch.value;
                        cost = pricesArray.body.portrait.coloredSketch.value;
                    }
                } else if (style.value == "emote") {
                    if (pricesArray.body.portrait.emote.isItPossible) {
                        bodyContent = pricesArray.body.portrait.emote.dollarOrPercentage + pricesArray.body.portrait.emote.value;
                        cost = pricesArray.body.portrait.emote.value;
                    }
                } else if (style.value == "sketch") {
                    if (pricesArray.body.portrait.sketch.isItPossible) {
                        bodyContent = pricesArray.body.portrait.sketch.dollarOrPercentage + pricesArray.body.portrait.sketch.value;
                        cost = pricesArray.body.portrait.sketch.value;
                    }
                } else if (style.value == "doodle") {
                    if (pricesArray.body.portrait.doodle.isItPossible) {
                        bodyContent = pricesArray.body.portrait.doodle.dollarOrPercentage + pricesArray.body.portrait.doodle.value;
                        cost = pricesArray.body.portrait.doodle.value;
                    }
                } else if (style.value == "scribble") {
                    if (pricesArray.body.portrait.scribble.isItPossible) {
                        bodyContent = pricesArray.body.portrait.scribble.dollarOrPercentage + pricesArray.body.portrait.scribble.value;
                        cost = pricesArray.body.portrait.scribble.value;
                    }
                } else if (style.value == "logo") {
                    if (pricesArray.body.portrait.logo.isItPossible) {
                        bodyContent = pricesArray.body.portrait.logo.dollarOrPercentage + pricesArray.body.portrait.logo.value;
                        cost = pricesArray.body.portrait.logo.value;
                    }
                } else if (style.value == "other") {
                    if (pricesArray.body.portrait.other.isItPossible) {
                        bodyContent = pricesArray.body.portrait.other.dollarOrPercentage + pricesArray.body.portrait.other.value;
                        cost = pricesArray.body.portrait.other.value;
                    }
                }
            }
            else if (bodyRadio[i].value == "halfbody") {
                if (style.value == "cleanColors") {
                    if (pricesArray.body.halfbody.cleanColors.isItPossible) {
                        bodyContent = pricesArray.body.halfbody.cleanColors.dollarOrPercentage + pricesArray.body.halfbody.cleanColors.value;
                        cost = pricesArray.body.halfbody.cleanColors.value;
                    }
                } else if (style.value == "hybrid") {
                    if (pricesArray.body.halfbody.hybrid.isItPossible) {
                        bodyContent = pricesArray.body.halfbody.hybrid.dollarOrPercentage + pricesArray.body.halfbody.hybrid.value;
                        cost = pricesArray.body.halfbody.hybrid.value;
                    }
                } else if (style.value == "coloredSketch") {
                    if (pricesArray.body.halfbody.coloredSketch.isItPossible) {
                        bodyContent = pricesArray.body.halfbody.coloredSketch.dollarOrPercentage + pricesArray.body.halfbody.coloredSketch.value;
                        cost = pricesArray.body.halfbody.coloredSketch.value;
                    }
                } else if (style.value == "emote") {
                    if (pricesArray.body.halfbody.emote.isItPossible) {
                        bodyContent = pricesArray.body.halfbody.emote.dollarOrPercentage + pricesArray.body.halfbody.emote.value;
                        cost = pricesArray.body.halfbody.emote.value;
                    }
                } else if (style.value == "sketch") {
                    if (pricesArray.body.halfbody.sketch.isItPossible) {
                        bodyContent = pricesArray.body.halfbody.sketch.dollarOrPercentage + pricesArray.body.halfbody.sketch.value;
                        cost = pricesArray.body.halfbody.sketch.value;
                    }
                } else if (style.value == "doodle") {
                    if (pricesArray.body.halfbody.doodle.isItPossible) {
                        bodyContent = pricesArray.body.halfbody.doodle.dollarOrPercentage + pricesArray.body.halfbody.doodle.value;
                        cost = pricesArray.body.halfbody.doodle.value;
                    }
                } else if (style.value == "scribble") {
                    if (pricesArray.body.halfbody.scribble.isItPossible) {
                        bodyContent = pricesArray.body.halfbody.scribble.dollarOrPercentage + pricesArray.body.halfbody.scribble.value;
                        cost = pricesArray.body.halfbody.scribble.value;
                    }
                } else if (style.value == "logo") {
                    if (pricesArray.body.halfbody.logo.isItPossible) {
                        bodyContent = pricesArray.body.halfbody.logo.dollarOrPercentage + pricesArray.body.halfbody.logo.value;
                        cost = pricesArray.body.halfbody.logo.value;
                    }
                } else if (style.value == "other") {
                    if (pricesArray.body.halfbody.other.isItPossible) {
                        bodyContent = pricesArray.body.halfbody.other.dollarOrPercentage + pricesArray.body.halfbody.other.value;
                        cost = pricesArray.body.halfbody.other.value;
                    }
                }
            }
            else if (bodyRadio[i].value == "thighs") {
                if (style.value == "cleanColors") {
                    if (pricesArray.body.thighs.cleanColors.isItPossible) {
                        bodyContent = pricesArray.body.thighs.cleanColors.dollarOrPercentage + pricesArray.body.thighs.cleanColors.value;
                        cost = pricesArray.body.thighs.cleanColors.value;
                    }
                } else if (style.value == "hybrid") {
                    if (pricesArray.body.thighs.hybrid.isItPossible) {
                        bodyContent = pricesArray.body.thighs.hybrid.dollarOrPercentage + pricesArray.body.thighs.hybrid.value;
                        cost = pricesArray.body.thighs.hybrid.value;
                    }
                } else if (style.value == "coloredSketch") {
                    if (pricesArray.body.thighs.coloredSketch.isItPossible) {
                        bodyContent = pricesArray.body.thighs.coloredSketch.dollarOrPercentage + pricesArray.body.thighs.coloredSketch.value;
                        cost = pricesArray.body.thighs.coloredSketch.value;
                    }
                } else if (style.value == "emote") {
                    if (pricesArray.body.thighs.emote.isItPossible) {
                        bodyContent = pricesArray.body.thighs.emote.dollarOrPercentage + pricesArray.body.thighs.emote.value;
                        cost = pricesArray.body.thighs.emote.value;
                    }
                } else if (style.value == "sketch") {
                    if (pricesArray.body.thighs.sketch.isItPossible) {
                        bodyContent = pricesArray.body.thighs.sketch.dollarOrPercentage + pricesArray.body.thighs.sketch.value;
                        cost = pricesArray.body.thighs.sketch.value;
                    }
                } else if (style.value == "doodle") {
                    if (pricesArray.body.thighs.doodle.isItPossible) {
                        bodyContent = pricesArray.body.thighs.doodle.dollarOrPercentage + pricesArray.body.thighs.doodle.value;
                        cost = pricesArray.body.thighs.doodle.value;
                    }
                } else if (style.value == "scribble") {
                    if (pricesArray.body.thighs.scribble.isItPossible) {
                        bodyContent = pricesArray.body.thighs.scribble.dollarOrPercentage + pricesArray.body.thighs.scribble.value;
                        cost = pricesArray.body.thighs.scribble.value;
                    }
                } else if (style.value == "logo") {
                    if (pricesArray.body.thighs.logo.isItPossible) {
                        bodyContent = pricesArray.body.thighs.logo.dollarOrPercentage + pricesArray.body.thighs.logo.value;
                        cost = pricesArray.body.thighs.logo.value;
                    }
                } else if (style.value == "other") {
                    if (pricesArray.body.thighs.other.isItPossible) {
                        bodyContent = pricesArray.body.thighs.other.dollarOrPercentage + pricesArray.body.thighs.other.value;
                        cost = pricesArray.body.thighs.other.value;
                    }
                }
            }
            else if (bodyRadio[i].value == "fullbody") {
                if (style.value == "cleanColors") {
                    if (pricesArray.body.full.cleanColors.isItPossible) {
                        bodyContent = pricesArray.body.full.cleanColors.dollarOrPercentage + pricesArray.body.full.cleanColors.value;
                        cost = pricesArray.body.full.cleanColors.value;
                    }
                } else if (style.value == "hybrid") {
                    if (pricesArray.body.full.hybrid.isItPossible) {
                        bodyContent = pricesArray.body.full.hybrid.dollarOrPercentage + pricesArray.body.full.hybrid.value;
                        cost = pricesArray.body.full.hybrid.value;
                    }
                } else if (style.value == "coloredSketch") {
                    if (pricesArray.body.full.coloredSketch.isItPossible) {
                        bodyContent = pricesArray.body.full.coloredSketch.dollarOrPercentage + pricesArray.body.full.coloredSketch.value;
                        cost = pricesArray.body.full.coloredSketch.value;
                    }
                } else if (style.value == "emote") {
                    if (pricesArray.body.full.emote.isItPossible) {
                        bodyContent = pricesArray.body.full.emote.dollarOrPercentage + pricesArray.body.full.emote.value;
                        cost = pricesArray.body.full.emote.value;
                    }
                } else if (style.value == "sketch") {
                    if (pricesArray.body.full.sketch.isItPossible) {
                        bodyContent = pricesArray.body.full.sketch.dollarOrPercentage + pricesArray.body.full.sketch.value;
                        cost = pricesArray.body.full.sketch.value;
                    }
                } else if (style.value == "doodle") {
                    if (pricesArray.body.full.doodle.isItPossible) {
                        bodyContent = pricesArray.body.full.doodle.dollarOrPercentage + pricesArray.body.full.doodle.value;
                        cost = pricesArray.body.full.doodle.value;
                    }
                } else if (style.value == "scribble") {
                    if (pricesArray.body.full.scribble.isItPossible) {
                        bodyContent = pricesArray.body.full.scribble.dollarOrPercentage + pricesArray.body.full.scribble.value;
                        cost = pricesArray.body.full.scribble.value;
                    }
                } else if (style.value == "logo") {
                    if (pricesArray.body.full.logo.isItPossible) {
                        bodyContent = pricesArray.body.full.logo.dollarOrPercentage + pricesArray.body.full.logo.value;
                        cost = pricesArray.body.full.logo.value;
                    }
                } else if (style.value == "other") {
                    if (pricesArray.body.full.other.isItPossible) {
                        bodyContent = pricesArray.body.full.other.dollarOrPercentage + pricesArray.body.full.other.value;
                        cost = pricesArray.body.full.other.value;
                    }
                }
            }
            else if (bodyRadio[i].value == "other") {
                if (style.value == "cleanColors") {
                    if (pricesArray.body.other.cleanColors.isItPossible) {
                        bodyContent = pricesArray.body.other.cleanColors.dollarOrPercentage + pricesArray.body.other.cleanColors.value;
                        cost = pricesArray.body.other.cleanColors.value;
                    }
                } else if (style.value == "hybrid") {
                    if (pricesArray.body.other.hybrid.isItPossible) {
                        bodyContent = pricesArray.body.other.hybrid.dollarOrPercentage + pricesArray.body.other.hybrid.value;
                        cost = pricesArray.body.other.hybrid.value;
                    }
                } else if (style.value == "coloredSketch") {
                    if (pricesArray.body.other.coloredSketch.isItPossible) {
                        bodyContent = pricesArray.body.other.coloredSketch.dollarOrPercentage + pricesArray.body.other.coloredSketch.value;
                        cost = pricesArray.body.other.coloredSketch.value;
                    }
                } else if (style.value == "emote") {
                    if (pricesArray.body.other.emote.isItPossible) {
                        bodyContent = pricesArray.body.other.emote.dollarOrPercentage + pricesArray.body.other.emote.value;
                        cost = pricesArray.body.other.emote.value;
                    }
                } else if (style.value == "sketch") {
                    if (pricesArray.body.other.sketch.isItPossible) {
                        bodyContent = pricesArray.body.other.sketch.dollarOrPercentage + pricesArray.body.other.sketch.value;
                        cost = pricesArray.body.other.sketch.value;
                    }
                } else if (style.value == "doodle") {
                    if (pricesArray.body.other.doodle.isItPossible) {
                        bodyContent = pricesArray.body.other.doodle.dollarOrPercentage + pricesArray.body.other.doodle.value;
                        cost = pricesArray.body.other.doodle.value;
                    }
                } else if (style.value == "scribble") {
                    if (pricesArray.body.other.scribble.isItPossible) {
                        bodyContent = pricesArray.body.other.scribble.dollarOrPercentage + pricesArray.body.other.scribble.value;
                        cost = pricesArray.body.other.scribble.value;
                    }
                } else if (style.value == "logo") {
                    if (pricesArray.body.other.logo.isItPossible) {
                        bodyContent = pricesArray.body.other.logo.dollarOrPercentage + pricesArray.body.other.logo.value;
                        cost = pricesArray.body.other.logo.value;
                    }
                } else if (style.value == "other") {
                    if (pricesArray.body.other.other.isItPossible) {
                        bodyContent = pricesArray.body.other.other.dollarOrPercentage + pricesArray.body.other.other.value;
                        cost = pricesArray.body.other.other.value;
                    }
                }
            }
        }
    }

    numberBody = Number(cost);
    updateTotal();

    if (bodyContent == "") {
        document.getElementById("bodyIDValue").classList.add("d-none");
    } else {
        document.getElementById("bodyIDValue").classList.remove("d-none");
        document.getElementById("bodyIDValue").innerText = bodyContent;
    }
}

function updateAmountCharactersButtons() {
    let oneText = document.getElementById("oneText");
    let twoText = document.getElementById("twoText");
    let threeText = document.getElementById("threeText");
    let fourText = document.getElementById("fourText");

    if (style.value == "") {
        oneText.innerHTML = ``;
        disableAmountCharactersButton(0);
        twoText.innerHTML = ``;
        disableAmountCharactersButton(1);
        threeText.innerHTML = ``;
        disableAmountCharactersButton(2);
        fourText.innerHTML = ``;
        disableAmountCharactersButton(3);
    }
    else if (style.value == "cleanColors") {
        if (pricesArray.amountcharacters.one.cleanColors.isItPossible) {
            oneText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters.one.cleanColors.value - 100) + pricesArray.amountcharacters.one.cleanColors.dollarOrPercentage}</span>`;
            enableAmountCharactersButton(0);
        } else {
            oneText.innerHTML = ``;
            disableAmountCharactersButton(0);
        }

        if (pricesArray.amountcharacters.two.cleanColors.isItPossible) {
            twoText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters.two.cleanColors.value - 100) + pricesArray.amountcharacters.two.cleanColors.dollarOrPercentage}</span>`;
            enableAmountCharactersButton(1);
        } else {
            twoText.innerHTML = ``;
            disableAmountCharactersButton(1);
        }

        if (pricesArray.amountcharacters.three.cleanColors.isItPossible) {
            threeText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters.three.cleanColors.value - 100) + pricesArray.amountcharacters.three.cleanColors.dollarOrPercentage}</span>`;
            enableAmountCharactersButton(2);
        } else {
            threeText.innerHTML = ``;
            disableAmountCharactersButton(2);
        }

        if (pricesArray.amountcharacters.four.cleanColors.isItPossible) {
            fourText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters.four.cleanColors.value - 100) + pricesArray.amountcharacters.four.cleanColors.dollarOrPercentage}</span>`;
            enableAmountCharactersButton(3);
        } else {
            fourText.innerHTML = ``;
            disableAmountCharactersButton(3);
        }
    }

    else if (style.value == "hybrid") {
        if (pricesArray.amountcharacters.one.hybrid.isItPossible) {
            oneText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters.one.hybrid.value - 100) + pricesArray.amountcharacters.one.hybrid.dollarOrPercentage}</span>`;
            enableAmountCharactersButton(0);
        } else {
            oneText.innerHTML = ``;
            disableAmountCharactersButton(0);
        }

        if (pricesArray.amountcharacters.two.hybrid.isItPossible) {
            twoText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters.two.hybrid.value - 100) + pricesArray.amountcharacters.two.hybrid.dollarOrPercentage}</span>`;
            enableAmountCharactersButton(1);
        } else {
            twoText.innerHTML = ``;
            disableAmountCharactersButton(1);
        }

        if (pricesArray.amountcharacters.three.hybrid.isItPossible) {
            threeText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters.three.hybrid.value - 100) + pricesArray.amountcharacters.three.hybrid.dollarOrPercentage}</span>`;
            enableAmountCharactersButton(2);
        } else {
            threeText.innerHTML = ``;
            disableAmountCharactersButton(2);
        }

        if (pricesArray.amountcharacters.four.hybrid.isItPossible) {
            fourText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters.four.hybrid.value - 100) + pricesArray.amountcharacters.four.hybrid.dollarOrPercentage}</span>`;
            enableAmountCharactersButton(3);
        } else {
            fourText.innerHTML = ``;
            disableAmountCharactersButton(3);
        }
    }

    else if (style.value == "coloredSketch") {
        if (pricesArray.amountcharacters.one.coloredSketch.isItPossible) {
            oneText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters.one.coloredSketch.value - 100) + pricesArray.amountcharacters.one.coloredSketch.dollarOrPercentage}</span>`;
            enableAmountCharactersButton(0);
        } else {
            oneText.innerHTML = ``;
            disableAmountCharactersButton(0);
        }

        if (pricesArray.amountcharacters.two.coloredSketch.isItPossible) {
            twoText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters.two.coloredSketch.value - 100) + pricesArray.amountcharacters.two.coloredSketch.dollarOrPercentage}</span>`;
            enableAmountCharactersButton(1);
        } else {
            twoText.innerHTML = ``;
            disableAmountCharactersButton(1);
        }

        if (pricesArray.amountcharacters.three.coloredSketch.isItPossible) {
            threeText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters.three.coloredSketch.value - 100) + pricesArray.amountcharacters.three.coloredSketch.dollarOrPercentage}</span>`;
            enableAmountCharactersButton(2);
        } else {
            threeText.innerHTML = ``;
            disableAmountCharactersButton(2);
        }

        if (pricesArray.amountcharacters.four.coloredSketch.isItPossible) {
            fourText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters.four.coloredSketch.value - 100) + pricesArray.amountcharacters.four.coloredSketch.dollarOrPercentage}</span>`;
            enableAmountCharactersButton(3);
        } else {
            fourText.innerHTML = ``;
            disableAmountCharactersButton(3);
        }
    }

    else if (style.value == "emote") {
        if (pricesArray.amountcharacters.one.emote.isItPossible) {
            oneText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters.one.emote.value - 100) + pricesArray.amountcharacters.one.emote.dollarOrPercentage}</span>`;
            enableAmountCharactersButton(0);
        } else {
            oneText.innerHTML = ``;
            disableAmountCharactersButton(0);
        }

        if (pricesArray.amountcharacters.two.emote.isItPossible) {
            twoText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters.two.emote.value - 100) + pricesArray.amountcharacters.two.emote.dollarOrPercentage}</span>`;
            enableAmountCharactersButton(1);
        } else {
            twoText.innerHTML = ``;
            disableAmountCharactersButton(1);
        }

        if (pricesArray.amountcharacters.three.emote.isItPossible) {
            threeText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters.three.emote.value - 100) + pricesArray.amountcharacters.three.emote.dollarOrPercentage}</span>`;
            enableAmountCharactersButton(2);
        } else {
            threeText.innerHTML = ``;
            disableAmountCharactersButton(2);
        }

        if (pricesArray.amountcharacters.four.emote.isItPossible) {
            fourText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters.four.emote.value - 100) + pricesArray.amountcharacters.four.emote.dollarOrPercentage}</span>`;
            enableAmountCharactersButton(3);
        } else {
            fourText.innerHTML = ``;
            disableAmountCharactersButton(3);
        }
    }

    else if (style.value == "sketch") {
        if (pricesArray.amountcharacters.one.sketch.isItPossible) {
            oneText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters.one.sketch.value - 100) + pricesArray.amountcharacters.one.sketch.dollarOrPercentage}</span>`;
            enableAmountCharactersButton(0);
        } else {
            oneText.innerHTML = ``;
            disableAmountCharactersButton(0);
        }

        if (pricesArray.amountcharacters.two.sketch.isItPossible) {
            twoText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters.two.sketch.value - 100) + pricesArray.amountcharacters.two.sketch.dollarOrPercentage}</span>`;
            enableAmountCharactersButton(1);
        } else {
            twoText.innerHTML = ``;
            disableAmountCharactersButton(1);
        }

        if (pricesArray.amountcharacters.three.sketch.isItPossible) {
            threeText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters.three.sketch.value - 100) + pricesArray.amountcharacters.three.sketch.dollarOrPercentage}</span>`;
            enableAmountCharactersButton(2);
        } else {
            threeText.innerHTML = ``;
            disableAmountCharactersButton(2);
        }

        if (pricesArray.amountcharacters.four.sketch.isItPossible) {
            fourText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters.four.sketch.value - 100) + pricesArray.amountcharacters.four.sketch.dollarOrPercentage}</span>`;
            enableAmountCharactersButton(3);
        } else {
            fourText.innerHTML = ``;
            disableAmountCharactersButton(3);
        }
    }

    else if (style.value == "doodle") {
        if (pricesArray.amountcharacters.one.doodle.isItPossible) {
            oneText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters.one.doodle.value - 100) + pricesArray.amountcharacters.one.doodle.dollarOrPercentage}</span>`;
            enableAmountCharactersButton(0);
        } else {
            oneText.innerHTML = ``;
            disableAmountCharactersButton(0);
        }

        if (pricesArray.amountcharacters.two.doodle.isItPossible) {
            twoText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters.two.doodle.value - 100) + pricesArray.amountcharacters.two.doodle.dollarOrPercentage}</span>`;
            enableAmountCharactersButton(1);
        } else {
            twoText.innerHTML = ``;
            disableAmountCharactersButton(1);
        }

        if (pricesArray.amountcharacters.three.doodle.isItPossible) {
            threeText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters.three.doodle.value - 100) + pricesArray.amountcharacters.three.doodle.dollarOrPercentage}</span>`;
            enableAmountCharactersButton(2);
        } else {
            threeText.innerHTML = ``;
            disableAmountCharactersButton(2);
        }

        if (pricesArray.amountcharacters.four.doodle.isItPossible) {
            fourText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters.four.doodle.value - 100) + pricesArray.amountcharacters.four.doodle.dollarOrPercentage}</span>`;
            enableAmountCharactersButton(3);
        } else {
            fourText.innerHTML = ``;
            disableAmountCharactersButton(3);
        }
    }

    else if (style.value == "scribble") {
        if (pricesArray.amountcharacters.one.scribble.isItPossible) {
            oneText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters.one.scribble.value - 100) + pricesArray.amountcharacters.one.scribble.dollarOrPercentage}</span>`;
            enableAmountCharactersButton(0);
        } else {
            oneText.innerHTML = ``;
            disableAmountCharactersButton(0);
        }

        if (pricesArray.amountcharacters.two.scribble.isItPossible) {
            twoText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters.two.scribble.value - 100) + pricesArray.amountcharacters.two.scribble.dollarOrPercentage}</span>`;
            enableAmountCharactersButton(1);
        } else {
            twoText.innerHTML = ``;
            disableAmountCharactersButton(1);
        }

        if (pricesArray.amountcharacters.three.scribble.isItPossible) {
            threeText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters.three.scribble.value - 100) + pricesArray.amountcharacters.three.scribble.dollarOrPercentage}</span>`;
            enableAmountCharactersButton(2);
        } else {
            threeText.innerHTML = ``;
            disableAmountCharactersButton(2);
        }

        if (pricesArray.amountcharacters.four.scribble.isItPossible) {
            fourText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters.four.scribble.value - 100) + pricesArray.amountcharacters.four.scribble.dollarOrPercentage}</span>`;
            enableAmountCharactersButton(3);
        } else {
            fourText.innerHTML = ``;
            disableAmountCharactersButton(3);
        }
    }

    else if (style.value == "logo") {
        if (pricesArray.amountcharacters.one.logo.isItPossible) {
            oneText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters.one.logo.value - 100) + pricesArray.amountcharacters.one.logo.dollarOrPercentage}</span>`;
            enableAmountCharactersButton(0);
        } else {
            oneText.innerHTML = ``;
            disableAmountCharactersButton(0);
        }

        if (pricesArray.amountcharacters.two.logo.isItPossible) {
            twoText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters.two.logo.value - 100) + pricesArray.amountcharacters.two.logo.dollarOrPercentage}</span>`;
            enableAmountCharactersButton(1);
        } else {
            twoText.innerHTML = ``;
            disableAmountCharactersButton(1);
        }

        if (pricesArray.amountcharacters.three.logo.isItPossible) {
            threeText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters.three.logo.value - 100) + pricesArray.amountcharacters.three.logo.dollarOrPercentage}</span>`;
            enableAmountCharactersButton(2);
        } else {
            threeText.innerHTML = ``;
            disableAmountCharactersButton(2);
        }

        if (pricesArray.amountcharacters.four.logo.isItPossible) {
            fourText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters.four.logo.value - 100) + pricesArray.amountcharacters.four.logo.dollarOrPercentage}</span>`;
            enableAmountCharactersButton(3);
        } else {
            fourText.innerHTML = ``;
            disableAmountCharactersButton(3);
        }
    }

    else if (style.value == "other") {
        if (pricesArray.amountcharacters.one.other.isItPossible) {
            oneText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters.one.other.value - 100) + pricesArray.amountcharacters.one.other.dollarOrPercentage}</span>`;
            enableAmountCharactersButton(0);
        } else {
            oneText.innerHTML = ``;
            disableAmountCharactersButton(0);
        }

        if (pricesArray.amountcharacters.two.other.isItPossible) {
            twoText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters.two.other.value - 100) + pricesArray.amountcharacters.two.other.dollarOrPercentage}</span>`;
            enableAmountCharactersButton(1);
        } else {
            twoText.innerHTML = ``;
            disableAmountCharactersButton(1);
        }

        if (pricesArray.amountcharacters.three.other.isItPossible) {
            threeText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters.three.other.value - 100) + pricesArray.amountcharacters.three.other.dollarOrPercentage}</span>`;
            enableAmountCharactersButton(2);
        } else {
            threeText.innerHTML = ``;
            disableAmountCharactersButton(2);
        }

        if (pricesArray.amountcharacters.four.other.isItPossible) {
            fourText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters.four.other.value - 100) + pricesArray.amountcharacters.four.other.dollarOrPercentage}</span>`;
            enableAmountCharactersButton(3);
        } else {
            fourText.innerHTML = ``;
            disableAmountCharactersButton(3);
        }
    }
}

function updateAmountCharactersPrice() {
    let bodyContent = "";
    let cost = 1;

    for (var i = 0; i < amountCharactersRadio.length; i++) {
        if (amountCharactersRadio[i].checked) {
            if (amountCharactersRadio[i].value == "one") {
                if (style.value == "cleanColors") {
                    if (pricesArray.amountcharacters.one.cleanColors.isItPossible) {
                        bodyContent = (pricesArray.amountcharacters.one.cleanColors.value - 100) + pricesArray.amountcharacters.one.cleanColors.dollarOrPercentage;
                        cost = pricesArray.amountcharacters.one.cleanColors.value / 100;
                    }
                } else if (style.value == "hybrid") {
                    if (pricesArray.amountcharacters.one.hybrid.isItPossible) {
                        bodyContent = (pricesArray.amountcharacters.one.hybrid.value - 100) + pricesArray.amountcharacters.one.hybrid.dollarOrPercentage;
                        cost = pricesArray.amountcharacters.one.hybrid.value / 100;
                    }
                } else if (style.value == "coloredSketch") {
                    if (pricesArray.amountcharacters.one.coloredSketch.isItPossible) {
                        bodyContent = (pricesArray.amountcharacters.one.coloredSketch.value - 100) + pricesArray.amountcharacters.one.coloredSketch.dollarOrPercentage;
                        cost = pricesArray.amountcharacters.one.coloredSketch.value / 100;
                    }
                } else if (style.value == "emote") {
                    if (pricesArray.amountcharacters.one.emote.isItPossible) {
                        bodyContent = (pricesArray.amountcharacters.one.emote.value - 100) + pricesArray.amountcharacters.one.emote.dollarOrPercentage;
                        cost = pricesArray.amountcharacters.one.emote.value / 100;
                    }
                } else if (style.value == "sketch") {
                    if (pricesArray.amountcharacters.one.sketch.isItPossible) {
                        bodyContent = (pricesArray.amountcharacters.one.sketch.value - 100) + pricesArray.amountcharacters.one.sketch.dollarOrPercentage;
                        cost = pricesArray.amountcharacters.one.sketch.value / 100;
                    }
                } else if (style.value == "doodle") {
                    if (pricesArray.amountcharacters.one.doodle.isItPossible) {
                        bodyContent = (pricesArray.amountcharacters.one.doodle.value - 100) + pricesArray.amountcharacters.one.doodle.dollarOrPercentage;
                        cost = pricesArray.amountcharacters.one.doodle.value / 100;
                    }
                } else if (style.value == "scribble") {
                    if (pricesArray.amountcharacters.one.scribble.isItPossible) {
                        bodyContent = (pricesArray.amountcharacters.one.scribble.value - 100) + pricesArray.amountcharacters.one.scribble.dollarOrPercentage;
                        cost = pricesArray.amountcharacters.one.scribble.value / 100;
                    }
                } else if (style.value == "logo") {
                    if (pricesArray.amountcharacters.one.logo.isItPossible) {
                        bodyContent = (pricesArray.amountcharacters.one.logo.value - 100) + pricesArray.amountcharacters.one.logo.dollarOrPercentage;
                        cost = pricesArray.amountcharacters.one.logo.value / 100;
                    }
                } else if (style.value == "other") {
                    if (pricesArray.amountcharacters.one.other.isItPossible) {
                        bodyContent = (pricesArray.amountcharacters.one.other.value - 100) + pricesArray.amountcharacters.one.other.dollarOrPercentage;
                        cost = pricesArray.amountcharacters.one.other.value / 100;
                    }
                }
            }
            else if (amountCharactersRadio[i].value == "two") {
                if (style.value == "cleanColors") {
                    if (pricesArray.amountcharacters.two.cleanColors.isItPossible) {
                        bodyContent = (pricesArray.amountcharacters.two.cleanColors.value - 100) + pricesArray.amountcharacters.two.cleanColors.dollarOrPercentage;
                        cost = pricesArray.amountcharacters.two.cleanColors.value / 100;
                    }
                } else if (style.value == "hybrid") {
                    if (pricesArray.amountcharacters.two.hybrid.isItPossible) {
                        bodyContent = (pricesArray.amountcharacters.two.hybrid.value - 100) + pricesArray.amountcharacters.two.hybrid.dollarOrPercentage;
                        cost = pricesArray.amountcharacters.two.hybrid.value / 100;
                    }
                } else if (style.value == "coloredSketch") {
                    if (pricesArray.amountcharacters.two.coloredSketch.isItPossible) {
                        bodyContent = (pricesArray.amountcharacters.two.coloredSketch.value - 100) + pricesArray.amountcharacters.two.coloredSketch.dollarOrPercentage;
                        cost = pricesArray.amountcharacters.two.coloredSketch.value / 100;
                    }
                } else if (style.value == "emote") {
                    if (pricesArray.amountcharacters.two.emote.isItPossible) {
                        bodyContent = (pricesArray.amountcharacters.two.emote.value - 100) + pricesArray.amountcharacters.two.emote.dollarOrPercentage;
                        cost = pricesArray.amountcharacters.two.emote.value / 100;
                    }
                } else if (style.value == "sketch") {
                    if (pricesArray.amountcharacters.two.sketch.isItPossible) {
                        bodyContent = (pricesArray.amountcharacters.two.sketch.value - 100) + pricesArray.amountcharacters.two.sketch.dollarOrPercentage;
                        cost = pricesArray.amountcharacters.two.sketch.value / 100;
                    }
                } else if (style.value == "doodle") {
                    if (pricesArray.amountcharacters.two.doodle.isItPossible) {
                        bodyContent = (pricesArray.amountcharacters.two.doodle.value - 100) + pricesArray.amountcharacters.two.doodle.dollarOrPercentage;
                        cost = pricesArray.amountcharacters.two.doodle.value / 100;
                    }
                } else if (style.value == "scribble") {
                    if (pricesArray.amountcharacters.two.scribble.isItPossible) {
                        bodyContent = (pricesArray.amountcharacters.two.scribble.value - 100) + pricesArray.amountcharacters.two.scribble.dollarOrPercentage;
                        cost = pricesArray.amountcharacters.two.scribble.value / 100;
                    }
                } else if (style.value == "logo") {
                    if (pricesArray.amountcharacters.two.logo.isItPossible) {
                        bodyContent = (pricesArray.amountcharacters.two.logo.value - 100) + pricesArray.amountcharacters.two.logo.dollarOrPercentage;
                        cost = pricesArray.amountcharacters.two.logo.value / 100;
                    }
                } else if (style.value == "other") {
                    if (pricesArray.amountcharacters.two.other.isItPossible) {
                        bodyContent = (pricesArray.amountcharacters.two.other.value - 100) + pricesArray.amountcharacters.two.other.dollarOrPercentage;
                        cost = pricesArray.amountcharacters.two.other.value / 100;
                    }
                }
            }
            else if (amountCharactersRadio[i].value == "three") {
                if (style.value == "cleanColors") {
                    if (pricesArray.amountcharacters.three.cleanColors.isItPossible) {
                        bodyContent = (pricesArray.amountcharacters.three.cleanColors.value - 100) + pricesArray.amountcharacters.three.cleanColors.dollarOrPercentage;
                        cost = pricesArray.amountcharacters.three.cleanColors.value / 100;
                    }
                } else if (style.value == "hybrid") {
                    if (pricesArray.amountcharacters.three.hybrid.isItPossible) {
                        bodyContent = (pricesArray.amountcharacters.three.hybrid.value - 100) + pricesArray.amountcharacters.three.hybrid.dollarOrPercentage;
                        cost = pricesArray.amountcharacters.three.hybrid.value / 100;
                    }
                } else if (style.value == "coloredSketch") {
                    if (pricesArray.amountcharacters.three.coloredSketch.isItPossible) {
                        bodyContent = (pricesArray.amountcharacters.three.coloredSketch.value - 100) + pricesArray.amountcharacters.three.coloredSketch.dollarOrPercentage;
                        cost = pricesArray.amountcharacters.three.coloredSketch.value / 100;
                    }
                } else if (style.value == "emote") {
                    if (pricesArray.amountcharacters.three.emote.isItPossible) {
                        bodyContent = (pricesArray.amountcharacters.three.emote.value - 100) + pricesArray.amountcharacters.three.emote.dollarOrPercentage;
                        cost = pricesArray.amountcharacters.three.emote.value / 100;
                    }
                } else if (style.value == "sketch") {
                    if (pricesArray.amountcharacters.three.sketch.isItPossible) {
                        bodyContent = (pricesArray.amountcharacters.three.sketch.value - 100) + pricesArray.amountcharacters.three.sketch.dollarOrPercentage;
                        cost = pricesArray.amountcharacters.three.sketch.value / 100;
                    }
                } else if (style.value == "doodle") {
                    if (pricesArray.amountcharacters.three.doodle.isItPossible) {
                        bodyContent = (pricesArray.amountcharacters.three.doodle.value - 100) + pricesArray.amountcharacters.three.doodle.dollarOrPercentage;
                        cost = pricesArray.amountcharacters.three.doodle.value / 100;
                    }
                } else if (style.value == "scribble") {
                    if (pricesArray.amountcharacters.three.scribble.isItPossible) {
                        bodyContent = (pricesArray.amountcharacters.three.scribble.value - 100) + pricesArray.amountcharacters.three.scribble.dollarOrPercentage;
                        cost = pricesArray.amountcharacters.three.scribble.value / 100;
                    }
                } else if (style.value == "logo") {
                    if (pricesArray.amountcharacters.three.logo.isItPossible) {
                        bodyContent = (pricesArray.amountcharacters.three.logo.value - 100) + pricesArray.amountcharacters.three.logo.dollarOrPercentage;
                        cost = pricesArray.amountcharacters.three.logo.value / 100;
                    }
                } else if (style.value == "other") {
                    if (pricesArray.amountcharacters.three.other.isItPossible) {
                        bodyContent = (pricesArray.amountcharacters.three.other.value - 100) + pricesArray.amountcharacters.three.other.dollarOrPercentage;
                        cost = pricesArray.amountcharacters.three.other.value / 100;
                    }
                }
            }
            else if (amountCharactersRadio[i].value == "four") {
                if (style.value == "cleanColors") {
                    if (pricesArray.amountcharacters.four.cleanColors.isItPossible) {
                        bodyContent = (pricesArray.amountcharacters.four.cleanColors.value - 100) + pricesArray.amountcharacters.four.cleanColors.dollarOrPercentage;
                        cost = pricesArray.amountcharacters.four.cleanColors.value / 100;
                    }
                } else if (style.value == "hybrid") {
                    if (pricesArray.amountcharacters.four.hybrid.isItPossible) {
                        bodyContent = (pricesArray.amountcharacters.four.hybrid.value - 100) + pricesArray.amountcharacters.four.hybrid.dollarOrPercentage;
                        cost = pricesArray.amountcharacters.four.hybrid.value / 100;
                    }
                } else if (style.value == "coloredSketch") {
                    if (pricesArray.amountcharacters.four.coloredSketch.isItPossible) {
                        bodyContent = (pricesArray.amountcharacters.four.coloredSketch.value - 100) + pricesArray.amountcharacters.four.coloredSketch.dollarOrPercentage;
                        cost = pricesArray.amountcharacters.four.coloredSketch.value / 100;
                    }
                } else if (style.value == "emote") {
                    if (pricesArray.amountcharacters.four.emote.isItPossible) {
                        bodyContent = (pricesArray.amountcharacters.four.emote.value - 100) + pricesArray.amountcharacters.four.emote.dollarOrPercentage;
                        cost = pricesArray.amountcharacters.four.emote.value / 100;
                    }
                } else if (style.value == "sketch") {
                    if (pricesArray.amountcharacters.four.sketch.isItPossible) {
                        bodyContent = (pricesArray.amountcharacters.four.sketch.value - 100) + pricesArray.amountcharacters.four.sketch.dollarOrPercentage;
                        cost = pricesArray.amountcharacters.four.sketch.value / 100;
                    }
                } else if (style.value == "doodle") {
                    if (pricesArray.amountcharacters.four.doodle.isItPossible) {
                        bodyContent = (pricesArray.amountcharacters.four.doodle.value - 100) + pricesArray.amountcharacters.four.doodle.dollarOrPercentage;
                        cost = pricesArray.amountcharacters.four.doodle.value / 100;
                    }
                } else if (style.value == "scribble") {
                    if (pricesArray.amountcharacters.four.scribble.isItPossible) {
                        bodyContent = (pricesArray.amountcharacters.four.scribble.value - 100) + pricesArray.amountcharacters.four.scribble.dollarOrPercentage;
                        cost = pricesArray.amountcharacters.four.scribble.value / 100;
                    }
                } else if (style.value == "logo") {
                    if (pricesArray.amountcharacters.four.logo.isItPossible) {
                        bodyContent = (pricesArray.amountcharacters.four.logo.value - 100) + pricesArray.amountcharacters.four.logo.dollarOrPercentage;
                        cost = pricesArray.amountcharacters.four.logo.value / 100;
                    }
                } else if (style.value == "other") {
                    if (pricesArray.amountcharacters.four.other.isItPossible) {
                        bodyContent = (pricesArray.amountcharacters.four.other.value - 100) + pricesArray.amountcharacters.four.other.dollarOrPercentage;
                        cost = pricesArray.amountcharacters.four.other.value / 100;
                    }
                }
            }
        }
    }

    numberAmountCharacters = Number(cost);
    updateTotal();

    if (bodyContent == "") {
        document.getElementById("amountcharactersIDValue").classList.add("d-none");
    } else {
        document.getElementById("amountcharactersIDValue").classList.remove("d-none");
        document.getElementById("amountcharactersIDValue").innerText = bodyContent;
    }
}

function updateHowManyEmotesText(){
    for (var i = 0; i < amountEmotesRadio.length; i++) {
        amountEmotesRadio[i].checked = false;
    }
    document.getElementById("howManyEmotesIDValue").classList.add("d-none");

    var one = document.getElementById("oneEmoteText");
    var two = document.getElementById("twoEmoteText");
    var three = document.getElementById("threeEmoteText");
    var four = document.getElementById("fourEmoteText");
    var five = document.getElementById("fiveEmoteText");
    var costForAnEmote = pricesArray.body.other.emote.value;

    if (!pricesArray.emotesAmount.one.discount){
        one.innerHTML = `1 emote&nbsp;&nbsp;<span class="xiransgreen"> ${pricesArray.emotesAmount.one.dollarOrPercentage} ${costForAnEmote*1}</span>`;
    } else {
        one.innerHTML = `1 emote&nbsp;&nbsp;<span class="xiransgreen"> ${pricesArray.emotesAmount.one.dollarOrPercentage} ${(costForAnEmote*1)-pricesArray.emotesAmount.one.amount}</span>&nbsp;&nbsp;<span class="xiransorange"> ${pricesArray.emotesAmount.one.dollarOrPercentage} ${pricesArray.emotesAmount.one.amount} OFF!</span>`;
    }
    if (!pricesArray.emotesAmount.two.discount){
        two.innerHTML = `2 emotes&nbsp;&nbsp;<span class="xiransgreen"> ${pricesArray.emotesAmount.two.dollarOrPercentage} ${costForAnEmote*2}</span>`;
    } else {
        two.innerHTML = `2 emotes&nbsp;&nbsp;<span class="xiransgreen"> ${pricesArray.emotesAmount.two.dollarOrPercentage} ${(costForAnEmote*2)-pricesArray.emotesAmount.two.amount}</span>&nbsp;&nbsp;<span class="xiransorange"> ${pricesArray.emotesAmount.two.dollarOrPercentage} ${pricesArray.emotesAmount.two.amount} OFF!</span>`;
    }
    if (!pricesArray.emotesAmount.three.discount){
        three.innerHTML = `3 emotes&nbsp;&nbsp;<span class="xiransgreen"> ${pricesArray.emotesAmount.three.dollarOrPercentage} ${costForAnEmote*3}</span>`;
    } else {
        three.innerHTML = `3 emotes&nbsp;&nbsp;<span class="xiransgreen"> ${pricesArray.emotesAmount.three.dollarOrPercentage} ${(costForAnEmote*3)-pricesArray.emotesAmount.three.amount}</span>&nbsp;&nbsp;<span class="xiransorange"> ${pricesArray.emotesAmount.three.dollarOrPercentage} ${pricesArray.emotesAmount.three.amount} OFF!</span>`;
    }
    if (!pricesArray.emotesAmount.four.discount){
        four.innerHTML = `4 emotes&nbsp;&nbsp;<span class="xiransgreen"> ${pricesArray.emotesAmount.four.dollarOrPercentage} ${costForAnEmote*4}</span>`;
    } else {
        four.innerHTML = `4 emotes&nbsp;&nbsp;<span class="xiransgreen"> ${pricesArray.emotesAmount.four.dollarOrPercentage} ${(costForAnEmote*4)-pricesArray.emotesAmount.four.amount}</span>&nbsp;&nbsp;<span class="xiransorange"> ${pricesArray.emotesAmount.four.dollarOrPercentage} ${pricesArray.emotesAmount.four.amount} OFF!</span>`;
    }
    if (!pricesArray.emotesAmount.five.discount){
        five.innerHTML = `5 emotes&nbsp;&nbsp;<span class="xiransgreen"> ${pricesArray.emotesAmount.five.dollarOrPercentage} ${costForAnEmote*5}</span>`;
    } else {
        five.innerHTML = `5 emotes&nbsp;&nbsp;<span class="xiransgreen"> ${pricesArray.emotesAmount.five.dollarOrPercentage} ${(costForAnEmote*5)-pricesArray.emotesAmount.five.amount}</span>&nbsp;&nbsp;<span class="xiransorange"> ${pricesArray.emotesAmount.five.dollarOrPercentage} ${pricesArray.emotesAmount.five.amount} OFF!</span>`;
    }
    

}

function updateHowManyEmotesPrice(){
    var costForAnEmote = pricesArray.body.other.emote.value;
    var content = 0;

    for (var i = 0; i < amountEmotesRadio.length; i++) {
        if (amountEmotesRadio[i].checked) {
            if (amountEmotesRadio[i].value == "oneEmote") {
                content = (costForAnEmote*1)-pricesArray.emotesAmount.one.amount;
            } else if (amountEmotesRadio[i].value == "twoEmote") {
                content = (costForAnEmote*2)-pricesArray.emotesAmount.two.amount;
            } else if (amountEmotesRadio[i].value == "threeEmote") {
                content = (costForAnEmote*3)-pricesArray.emotesAmount.three.amount;
            } else if (amountEmotesRadio[i].value == "fourEmote") {
                content = (costForAnEmote*4)-pricesArray.emotesAmount.four.amount;
            } else if (amountEmotesRadio[i].value == "fiveEmote") {
                content = (costForAnEmote*5)-pricesArray.emotesAmount.five.amount;
            }
        }
    }

    numberBody = content;

    updateTotal();

    if (content == "") {
        document.getElementById("howManyEmotesIDValue").classList.add("d-none");
    } else {
        document.getElementById("howManyEmotesIDValue").classList.remove("d-none");
        document.getElementById("howManyEmotesIDValue").innerText = "$" + content;
    }
}

function updateOutfitOptionsPrice() {
    let cost = document.getElementById("outfitComplexity").value;

    numberOutfitComplexity = 1 + (cost / 100);
    updateTotal();

    if (cost == "") {
        document.getElementById("outfitIDValue").classList.add("d-none");
    } else {
        document.getElementById("outfitIDValue").classList.remove("d-none");
        document.getElementById("outfitIDValue").innerText = cost + "%";
    }
}

function updateExtrasPrice() {
    let costPets = Number(document.getElementById("extrasPets").value);
    let costProps = Number(document.getElementById("extrasProps").value);
    let costWeapons = Number(document.getElementById("extrasWeapons").value);
    let cost = costPets + costProps + costWeapons;

    numberExtras = cost;
    updateTotal();

    if (cost == "") {
        document.getElementById("extrasIDValue").classList.add("d-none");
    } else {
        document.getElementById("extrasIDValue").classList.remove("d-none");
        document.getElementById("extrasIDValue").innerText = "$" + cost;
    }
}

function updateBackgroundPrice() {
    let cost = Number(document.getElementById("background").value);

    numberBackground = cost;
    updateTotal();

    if (cost == "") {
        document.getElementById("backgroundIDValue").classList.add("d-none");
    } else {
        document.getElementById("backgroundIDValue").classList.remove("d-none");
        document.getElementById("backgroundIDValue").innerText = "$" + cost;
    }
}

function updatePrivatePrice() {
    let content = "";
    let cost = 1;
    let noCost = (pricesArray.private.no.value - 100) + pricesArray.private.no.dollarOrPercentage;
    let yesCost = (pricesArray.private.yes.value - 100) + pricesArray.private.yes.dollarOrPercentage;

    for (var i = 0; i < privateRadio.length; i++) {
        if (privateRadio[i].checked) {
            if (privateRadio[i].value == "no") {
                content = noCost;
                cost = pricesArray.private.no.value / 100;
            }
            else if (privateRadio[i].value == "yes") {
                content = yesCost;
                cost = pricesArray.private.yes.value / 100;
            }
        }
    }

    numberPrivate = Number(cost);
    updateTotal();

    if (content == "") {
        document.getElementById("privateIDValue").classList.add("d-none");
    } else {
        document.getElementById("privateIDValue").classList.remove("d-none");
        document.getElementById("privateIDValue").innerText = content;
    }
}

function updateSkipQueuePrice() {
    let cost = Number(document.getElementById("skipqueue").value);

    numberSkip = 1 + (cost / 100);
    updateTotal();

    if (cost == "") {
        document.getElementById("skipIDValue").classList.add("d-none");
    } else {
        document.getElementById("skipIDValue").classList.remove("d-none");
        document.getElementById("skipIDValue").innerText = cost + "%";
    }
}

function updateLewdPrice() {
    let cost = document.getElementById("lewd").value;

    numberLewd = 1 + (cost / 100);
    updateTotal();

    if (cost == "") {
        document.getElementById("lewdIDValue").classList.add("d-none");
    } else {
        document.getElementById("lewdIDValue").classList.remove("d-none");
        document.getElementById("lewdIDValue").innerText = cost + "%";
    }
}

function updateOtherFeesPrice() {
    let cost = Number(document.getElementById("otherfees").value);

    numberOtherFees = cost;
    updateTotal();

    if (cost == "") {
        document.getElementById("otherFeesIDValue").classList.add("d-none");
    } else {
        document.getElementById("otherFeesIDValue").classList.remove("d-none");
        document.getElementById("otherFeesIDValue").innerText = "$" + cost;
    }
}

function updateTotal() {
    var total = 0;

    total = ((((((((numberBody + numberStyleShading) * (numberOutfitComplexity + numberDesigningCharacter - 1)) * numberAmountCharacters) + numberExtras) * numberLewd) + numberBackground) * numberSkip) * numberPrivate) + numberOtherFees;

    document.getElementById("totalIDValue").innerText = `$${total.toFixed(2)}`;
}

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(AMOUNT_OF_COMMISSIONS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            commissionsArray = resultObj.data;

            getJSONData(WORK_IN_PROGRESS_URL).then(function (resultObj) {
                if (resultObj.status === "ok") {
                    workinprogressArray = resultObj.data;

                    getJSONData(PRICES_URL).then(function (resultObj) {
                        if (resultObj.status === "ok") {
                            pricesArray = resultObj.data;

                            style = document.getElementById("inputStyle");
                            styleShadingRadio = document.getElementsByName("Doodle/Scribble Shading");

                            bodyRadio = document.getElementsByName("Body Amount");
                            bodyButtons = document.getElementsByName("buttonBody");

                            amountCharactersRadio = document.getElementsByName("How many characters");
                            amountCharactersButtons = document.getElementsByName("buttonAmountCharacters");

                            amountEmotesRadio = document.getElementsByName("How many emotes?");

                            privateRadio = document.getElementsByName("Private?");

                            updateOtherFeesPrice();
                            updateDesignCharactersPrice();
                            updateStyleShowShadingPriceAndCallOtherFunctions(false);
                            checkIfAButtonWasClicked();
                            updateBodyPrice();
                            updateAmountCharactersPrice();
                            updateHowManyEmotesPrice();
                            updateOutfitOptionsPrice();
                            updateExtrasPrice();
                            updateBackgroundPrice();
                            updatePrivatePrice();
                            updateSkipQueuePrice();
                            updateLewdPrice();
                            

                            updateTotal();
                        }
                    });
                }
            });
        }
    });
});