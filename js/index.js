var commissionInfoArray = [];
var pricesArray = [];
var commissionsArray = [];
var workinprogressArray = [];
var completedPreviewArray = [];
var commercialRadio;
var NFTRadio;
var NFTType;
var NFTPayment;
var designCharactersRadio;
var style;
var bodyRadio;
var bodyButtons;
var styleShading;
var styleShadingRadio;
var amountEmotesRadio;
var outfit;
var outfitOptions;
var amountCharactersRadio;
var privateRadio;
var lewdRadio;
var skipQueueRadio;

var carouselElements = [];
var cp2pos = 0;
var cp1pos = 0;
var cnapos = 0;
var cn1pos = 0;
var cn2pos = 0;
var carouselImg = [];
var carouselClickedRecently = false;
var carouselMouseOver = false;
var carouselImgTextElements = [];

var peopleInQueue = 0;
var peopleSkippingQueue = 0;
var peopleSkippingRushingQueue = 0;
var peopleInQueueNotHold = 0;
var peopleInQueueHold = 0;

var numberBaseNFT = 1.0;
var numberNFTFiatorCrypto = 1.0;

var numberDesigningCharacterMin = 1.0;
var numberDesigningCharacterMax = 1.0;
var numberStyleShading = 0;
var numberBody = 0;
var numberAmountCharacters = 1.0;
var numberOutfitComplexity = 1.0;
var numberBackgroundMin = 0;
var numberBackgroundMax = 0;
var numberPrivate = 1.0;
var numberSkip = 1.0;
var numberLewdMin = 1.0;
var numberLewdMax = 1.0;
var numberExtrasMin = 0;
var numberExtrasMax = 0;

var featuredID = "63c9cb1a58fa9001aadf30dd";
var omitID = "63c33f97e803e201c4c53a97"
var cleanColorsID = "5f7cb19ecdabcf46c0010e50";
var hybridID = "5f7cb19ecdabcf46c0010e45";
var coloredSketchID = "5f8b90b3896477188ab0ac58";
var stickerID = "65077c2bde2c50aaa713c1a2";
var emoteID = "5f7cb19ecdabcf46c0010e51";
var sketchID = "5f8b9b49fc20524ea302a6f7";
var doodleID = "5f8b91048c7a20055f4501ef";
var scribbleID = "5f8b9423e0b7921c38e5f058";
var logoID = "63c9d799bb4eeb05f8775f6f";
var otherID = "5f7cb19ecdabcf46c0010e48";

///////////////////small functions///////////////////////////////
function enableBodyButton(i) {
    bodyButtons[i].classList.remove("disabled");
    bodyButtons[i].classList.remove("disabledd");
}

function disableBodyButton(i) {
    bodyButtons[i].classList.add("disabled");
    bodyButtons[i].classList.add("disabledd");
}

function checkStatus() {
    let xiStatusText = document.getElementById("xiStatusID");
    let xiStatusDescriptionText = document.getElementById("xiStatusDescriptionID");

    let xiStatus = commissionInfoArray[3].name;
    let xiStatusDescription = commissionInfoArray[3].desc;

    xiStatusDescription = xiStatusDescription.replace("\n", "");
    //xiStatusDescription = xiStatusDescription.replace(">", "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
    xiStatusDescription = xiStatusDescription.replace(">", `<br><p class="ml-4 mb-0">`);
    xiStatusDescription = xiStatusDescription.replace("===", "<br>");
    xiStatusDescription = xiStatusDescription.replace("Board's creation date: Oct 17, 2020", ``);
    
    if (xiStatus.toUpperCase().includes("OPEN")){
        xiStatus = xiStatus.replace("◆ | *** STATUS: ", `◆ | *** STATUS: <span class="xiransgreen">`)
    }
    else if (xiStatus.toUpperCase().includes("CLOSED")){
        xiStatus = xiStatus.replace("◆ | *** STATUS: ", `◆ | *** STATUS: <span class="xiransred">`)
    }
    else{
        xiStatus = xiStatus.replace("◆ | *** STATUS: ", `◆ | *** STATUS: <span class="xiransblue">`)
    }
    xiStatus = xiStatus.replace("*** | ◆", `</span>*** | ◆`)

    xiStatusText.innerHTML = `${(xiStatus)}`;
    xiStatusDescriptionText.innerHTML = `${(xiStatusDescription)}`;



    skipqueueasapText.innerHTML = `+${(pricesArray.skipqueue.rushpriority.value - 100) + pricesArray.skipqueue.rushpriority.increaseValuePerPerson * (peopleInQueue + peopleSkippingQueue) + pricesArray.skipqueue.rushpriority.dollarOrPercentage}`;
    skipIDpeopleInQueue.innerHTML = `${(peopleInQueue)}`;
    skipIDpeopleSkipping.innerHTML = `${(peopleSkippingQueue)}`;
    skipIDpeopleRushing.innerHTML = `${(peopleSkippingRushingQueue)}`;
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

function carouselPrev() {
    carouselElements[cp2pos].classList.remove("carousel-prev2");
    carouselElements[cp1pos].classList.remove("carousel-prev1");
    carouselElements[cnapos].classList.remove("carousel-active");
    carouselElements[cn1pos].classList.remove("carousel-next1");
    carouselElements[cn2pos].classList.remove("carousel-next2");
    cp2pos = giveMePrevElementsNumber(cp2pos - 1, carouselElements.length);
    cp1pos = giveMePrevElementsNumber(cp1pos - 1, carouselElements.length);
    cnapos = giveMePrevElementsNumber(cnapos - 1, carouselElements.length);
    cn1pos = giveMePrevElementsNumber(cn1pos - 1, carouselElements.length);
    cn2pos = giveMePrevElementsNumber(cn2pos - 1, carouselElements.length);
    carouselElements[cp2pos].classList.add("carousel-prev2");
    carouselElements[cp1pos].classList.add("carousel-prev1");
    carouselElements[cnapos].classList.add("carousel-active");
    carouselElements[cn1pos].classList.add("carousel-next1");
    carouselElements[cn2pos].classList.add("carousel-next2");
    carouselClickedRecently = true;
}

function carouselNext() {
    carouselElements[cp2pos].classList.remove("carousel-prev2");
    carouselElements[cp1pos].classList.remove("carousel-prev1");
    carouselElements[cnapos].classList.remove("carousel-active");
    carouselElements[cn1pos].classList.remove("carousel-next1");
    carouselElements[cn2pos].classList.remove("carousel-next2");
    cp2pos = giveMeNextElementsNumber(cp2pos + 1, carouselElements.length);
    cp1pos = giveMeNextElementsNumber(cp1pos + 1, carouselElements.length);
    cnapos = giveMeNextElementsNumber(cnapos + 1, carouselElements.length);
    cn1pos = giveMeNextElementsNumber(cn1pos + 1, carouselElements.length);
    cn2pos = giveMeNextElementsNumber(cn2pos + 1, carouselElements.length);
    carouselElements[cp2pos].classList.add("carousel-prev2");
    carouselElements[cp1pos].classList.add("carousel-prev1");
    carouselElements[cnapos].classList.add("carousel-active");
    carouselElements[cn1pos].classList.add("carousel-next1");
    carouselElements[cn2pos].classList.add("carousel-next2");
    carouselClickedRecently = true;
}
////////////////////////////////////////////////////////////////////

function updateCommercialRadios() {

    for (var i = 0; i < commercialRadio.length; i++) {
        if (commercialRadio[i].checked) {
            if (commercialRadio[i].value == "no") {
                document.getElementById("commercialIDText").classList.add("d-none");
            }
            else if (commercialRadio[i].value == "yes") {
                document.getElementById("commercialIDText").classList.remove("d-none");
            }
        }
    }
}

function updateNFTRadios() {

    for (var i = 0; i < NFTRadio.length; i++) {
        if (NFTRadio[i].checked) {
            if (NFTRadio[i].value == "no") {
                document.getElementById("NFTIDText").classList.add("d-none");

                var NFTType = document.getElementsByName("NFT type");
                var NFTCurrency = document.getElementsByName("NFT fiat or crypto");

                for (var e = 0; e < NFTType.length; e++){
                    NFTType[e].removeAttribute('required', "");
                }
                for (var e = 0; e < NFTCurrency.length; e++){
                    NFTCurrency[e].removeAttribute('required', "");
                }
            }
            else if (NFTRadio[i].value == "yes") {
                document.getElementById("NFTIDText").classList.remove("d-none");

                var NFTType = document.getElementsByName("NFT type");
                var NFTCurrency = document.getElementsByName("NFT fiat or crypto");

                for (var e = 0; e < NFTType.length; e++){
                    NFTType[e].setAttribute('required', "");
                }
                for (var e = 0; e < NFTCurrency.length; e++){
                    NFTCurrency[e].setAttribute('required', "");
                }
            }
        }
    }
}

function updateNFTPrice() {

    let noCost = (pricesArray.designing.no.value - 100) + pricesArray.designing.no.dollarOrPercentage;
    let yesCost = (pricesArray.designing.yes.minValue - 100);
    yesCost += " ~ " + (pricesArray.designing.yes.maxValue - 100) + pricesArray.designing.yes.dollarOrPercentage;

    document.getElementById("noDesignRadioText").innerHTML = `(<span class="xiransgreen">${noCost}</span>)`;
    document.getElementById("yesDesignRadioText").innerHTML = `(<span class="xiransgreen">+${yesCost}</span>)`;

    for (var i = 0; i < NFTType.length; i++) {
        if (NFTType[i].checked) {
            if (NFTType[i].value == "Personal") {
                numberBaseNFT = Number(150 / 100);
            }
            else if (NFTType[i].value == "Generative") {
                numberBaseNFT = Number(100 / 100);
            }
            else if (NFTType[i].value == "Concept") {
                numberBaseNFT = Number(100 / 100);
            }
        }
    }

    for (var i = 0; i < NFTPayment.length; i++) {
        if (NFTPayment[i].checked) {
            if (NFTPayment[i].value == "fiat") {
                numberNFTFiatorCrypto = Number(120 / 100);
            }
            else if (NFTPayment[i].value == "crypto") {
                numberNFTFiatorCrypto = Number(100 / 100);
            }
        }
    }

    updateTotal();
}

function updateDesignCharactersTextAndPrice() {
    let content = "";
    let noCost = (pricesArray.designing.no.value - 100) + pricesArray.designing.no.dollarOrPercentage;
    let yesCost = (pricesArray.designing.yes.minValue - 100);
    yesCost += " ~ " + (pricesArray.designing.yes.maxValue - 100) + pricesArray.designing.yes.dollarOrPercentage;

    document.getElementById("noDesignRadioText").innerHTML = `(<span class="xiransgreen">${noCost}</span>)`;
    document.getElementById("yesDesignRadioText").innerHTML = `(<span class="xiransgreen">+${yesCost}</span>)`;

    for (var i = 0; i < designCharactersRadio.length; i++) {
        if (designCharactersRadio[i].checked) {
            if (designCharactersRadio[i].value == "no") {
                content = noCost;
                numberDesigningCharacterMin = Number(pricesArray.designing.no.value / 100);
                numberDesigningCharacterMax = Number(pricesArray.designing.no.value / 100);
            }
            else if (designCharactersRadio[i].value == "yes") {
                content = yesCost;
                numberDesigningCharacterMin = Number(pricesArray.designing.yes.minValue / 100);
                numberDesigningCharacterMax = Number(pricesArray.designing.yes.maxValue / 100);
            }
        }
    }

    updateTotal();

    if (content == "") {
        document.getElementById("designingCharIDValue").classList.add("d-none");
    } else {
        document.getElementById("designingCharIDValue").classList.remove("d-none");
        document.getElementById("designingCharIDValue").innerText = content;
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

    for (var i = 0; i < styleShadingRadio.length; i++) {
        styleShadingRadio[i].checked = false
    }

    numberStyleShading = 0;
    updateTotal();
    document.getElementById("styleShadingIDValue").innerText = pricesArray.cheapshading.doodle.dollarOrPercentage + pricesArray.cheapshading.doodle.no;
}

function updateStyleShowShadingPriceAndCallOtherFunctions(check) {
    styleShading = document.getElementById("styleShadingID");

    if (check == true) {
        unselectThemAll();
    }

    updateBodyButtons();
    updateHowManyEmotesText();

    if (style.value != "emote") {
        for (var i = 0; i < amountEmotesRadio.length; i++) {
            amountEmotesRadio[i].checked = false;
        }

        updateBodyPrice();
    }
    else if (style.value == "emote"){
        updateBodyPrice();
        updateHowManyEmotesPrice();
    }

    updateAmountCharactersButtons();
    updateAmountCharactersPrice();
    carouselChangeStyle();
    updateExtras();
    document.getElementById("howManyEmotesID").classList.add("d-none");


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

    else if (style.value == "sticker") {
        hideStyleShading();
    }

    else if (style.value == "emote") {
        hideStyleShading();
        bodyRadio[4].checked = true;
        bodyButtons[4].classList.add("active");
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

    else if (style.value == "sticker") {
        if (pricesArray.body.portrait.sticker.isItPossible) {
            portraitText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body.portrait.sticker.dollarOrPercentage + pricesArray.body.portrait.sticker.value}</span>`;
            enableBodyButton(0);
        } else {
            portraitText.innerHTML = ``;
            disableBodyButton(0);
        }

        if (pricesArray.body.halfbody.sticker.isItPossible) {
            halfbodyText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body.halfbody.sticker.dollarOrPercentage + pricesArray.body.halfbody.sticker.value}</span>`;
            enableBodyButton(1);
        } else {
            halfbodyText.innerHTML = ``;
            disableBodyButton(1);
        }

        if (pricesArray.body.thighs.sticker.isItPossible) {
            thighsupText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body.thighs.sticker.dollarOrPercentage + pricesArray.body.thighs.sticker.value}</span>`;
            enableBodyButton(2);
        } else {
            thighsupText.innerHTML = ``;
            disableBodyButton(2);
        }

        if (pricesArray.body.full.sticker.isItPossible) {
            fullbodyText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body.full.sticker.dollarOrPercentage + pricesArray.body.full.sticker.value}</span>`;
            enableBodyButton(3);
        } else {
            fullbodyText.innerHTML = ``;
            disableBodyButton(3);
        }

        if (pricesArray.body.other.sticker.isItPossible) {
            otherText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body.other.sticker.dollarOrPercentage + pricesArray.body.other.sticker.value}</span>`;
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
                } else if (style.value == "sticker") {
                    if (pricesArray.body.portrait.sticker.isItPossible) {
                        bodyContent = pricesArray.body.portrait.sticker.dollarOrPercentage + pricesArray.body.portrait.sticker.value;
                        cost = pricesArray.body.portrait.sticker.value;
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
                } else if (style.value == "sticker") {
                    if (pricesArray.body.halfbody.sticker.isItPossible) {
                        bodyContent = pricesArray.body.halfbody.sticker.dollarOrPercentage + pricesArray.body.halfbody.sticker.value;
                        cost = pricesArray.body.halfbody.sticker.value;
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
                } else if (style.value == "sticker") {
                    if (pricesArray.body.thighs.sticker.isItPossible) {
                        bodyContent = pricesArray.body.thighs.sticker.dollarOrPercentage + pricesArray.body.thighs.sticker.value;
                        cost = pricesArray.body.thighs.sticker.value;
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
                } else if (style.value == "sticker") {
                    if (pricesArray.body.full.sticker.isItPossible) {
                        bodyContent = pricesArray.body.full.sticker.dollarOrPercentage + pricesArray.body.full.sticker.value;
                        cost = pricesArray.body.full.sticker.value;
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
                } else if (style.value == "sticker") {
                    if (pricesArray.body.other.sticker.isItPossible) {
                        bodyContent = pricesArray.body.other.sticker.dollarOrPercentage + pricesArray.body.other.sticker.value;
                        cost = pricesArray.body.other.sticker.value;
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

    else if (style.value == "sticker") {
        if (pricesArray.amountcharacters.one.sticker.isItPossible) {
            oneText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters.one.sticker.value - 100) + pricesArray.amountcharacters.one.sticker.dollarOrPercentage}</span>`;
            enableAmountCharactersButton(0);
        } else {
            oneText.innerHTML = ``;
            disableAmountCharactersButton(0);
        }

        if (pricesArray.amountcharacters.two.sticker.isItPossible) {
            twoText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters.two.sticker.value - 100) + pricesArray.amountcharacters.two.sticker.dollarOrPercentage}</span>`;
            enableAmountCharactersButton(1);
        } else {
            twoText.innerHTML = ``;
            disableAmountCharactersButton(1);
        }

        if (pricesArray.amountcharacters.three.sticker.isItPossible) {
            threeText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters.three.sticker.value - 100) + pricesArray.amountcharacters.three.sticker.dollarOrPercentage}</span>`;
            enableAmountCharactersButton(2);
        } else {
            threeText.innerHTML = ``;
            disableAmountCharactersButton(2);
        }

        if (pricesArray.amountcharacters.four.sticker.isItPossible) {
            fourText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters.four.sticker.value - 100) + pricesArray.amountcharacters.four.sticker.dollarOrPercentage}</span>`;
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
                } else if (style.value == "sticker") {
                    if (pricesArray.amountcharacters.one.sticker.isItPossible) {
                        bodyContent = (pricesArray.amountcharacters.one.sticker.value - 100) + pricesArray.amountcharacters.one.sticker.dollarOrPercentage;
                        cost = pricesArray.amountcharacters.one.sticker.value / 100;
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
                } else if (style.value == "sticker") {
                    if (pricesArray.amountcharacters.two.sticker.isItPossible) {
                        bodyContent = (pricesArray.amountcharacters.two.sticker.value - 100) + pricesArray.amountcharacters.two.sticker.dollarOrPercentage;
                        cost = pricesArray.amountcharacters.two.sticker.value / 100;
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
                } else if (style.value == "sticker") {
                    if (pricesArray.amountcharacters.three.sticker.isItPossible) {
                        bodyContent = (pricesArray.amountcharacters.three.sticker.value - 100) + pricesArray.amountcharacters.three.sticker.dollarOrPercentage;
                        cost = pricesArray.amountcharacters.three.sticker.value / 100;
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
                } else if (style.value == "sticker") {
                    if (pricesArray.amountcharacters.four.sticker.isItPossible) {
                        bodyContent = (pricesArray.amountcharacters.four.sticker.value - 100) + pricesArray.amountcharacters.four.sticker.dollarOrPercentage;
                        cost = pricesArray.amountcharacters.four.sticker.value / 100;
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
        //amountEmotesRadio[i].checked = false;
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
        three.innerHTML = `3 emotes&nbsp;&nbsp;<span class="xiransorange"><s> ${pricesArray.emotesAmount.three.dollarOrPercentage} ${(costForAnEmote*3)}</s></span>&nbsp;&nbsp;<span class="xiransgreen"> ${pricesArray.emotesAmount.three.dollarOrPercentage} ${(costForAnEmote*3)-pricesArray.emotesAmount.three.amount} </span>`;
    }

    if (!pricesArray.emotesAmount.four.discount){
        four.innerHTML = `4 emotes&nbsp;&nbsp;<span class="xiransgreen"> ${pricesArray.emotesAmount.four.dollarOrPercentage} ${costForAnEmote*4}</span>`;
    } else {
        four.innerHTML = `4 emotes&nbsp;&nbsp;<span class="xiransorange"><s> ${pricesArray.emotesAmount.four.dollarOrPercentage} ${(costForAnEmote*4)}</s></span>&nbsp;&nbsp;<span class="xiransgreen"> ${pricesArray.emotesAmount.four.dollarOrPercentage} ${(costForAnEmote*4)-pricesArray.emotesAmount.four.amount} </span>`;
    }

    if (!pricesArray.emotesAmount.five.discount){
        five.innerHTML = `5 emotes&nbsp;&nbsp;<span class="xiransgreen"> ${pricesArray.emotesAmount.five.dollarOrPercentage} ${costForAnEmote*5}</span>`;
    } else {
        five.innerHTML = `5 emotes&nbsp;&nbsp;<span class="xiransorange"><s> ${pricesArray.emotesAmount.five.dollarOrPercentage} ${(costForAnEmote*5)}</s></span>&nbsp;&nbsp;<span class="xiransgreen"> ${pricesArray.emotesAmount.five.dollarOrPercentage} ${(costForAnEmote*5)-pricesArray.emotesAmount.five.amount} </span>`;
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

function updateOutfitOptionsTextAndPrice() {
    var content = "";
    var cost = 1;

    for (var i = 0; i < outfitOptions.length; i++) {
        if (i == 0) {
            outfitOptions[i].innerText = "Very simple (T-shirt + pants) +" + (pricesArray.outfit.verySimple.value - 100) + pricesArray.outfit.verySimple.dollarOrPercentage;
        } else if (i == 1) {
            outfitOptions[i].innerText = "Simple +~" + (pricesArray.outfit.simple.value - 100) + pricesArray.outfit.simple.dollarOrPercentage;
        } else if (i == 2) {
            outfitOptions[i].innerText = "Average +~" + (pricesArray.outfit.average.value - 100) + pricesArray.outfit.average.dollarOrPercentage;
        } else if (i == 3) {
            outfitOptions[i].innerText = "Somewhat complex +~" + (pricesArray.outfit.somewhatComplex.value - 100) + pricesArray.outfit.somewhatComplex.dollarOrPercentage;
        } else if (i == 4) {
            outfitOptions[i].innerText = "Layered clothing +~" + (pricesArray.outfit.layeredClothing.value - 100) + pricesArray.outfit.layeredClothing.dollarOrPercentage;
        } else if (i == 5) {
            outfitOptions[i].innerText = "Very complex (Semi-transparent, lace, embroidered, etc.) +~" + (pricesArray.outfit.veryComplex.value - 100) + pricesArray.outfit.veryComplex.dollarOrPercentage;
        }
    }

    if (outfit.value == "") {
    } else if (outfit.value == "verysimple") {
        content = (pricesArray.outfit.verySimple.value - 100) + pricesArray.outfit.verySimple.dollarOrPercentage;
        cost = pricesArray.outfit.verySimple.value / 100;
    } else if (outfit.value == "simple") {
        content = (pricesArray.outfit.simple.value - 100) + pricesArray.outfit.simple.dollarOrPercentage;
        cost = pricesArray.outfit.simple.value / 100;
    } else if (outfit.value == "average") {
        content = (pricesArray.outfit.average.value - 100) + pricesArray.outfit.average.dollarOrPercentage;
        cost = pricesArray.outfit.average.value / 100;
    } else if (outfit.value == "somewhatcomplex") {
        content = (pricesArray.outfit.somewhatComplex.value - 100) + pricesArray.outfit.somewhatComplex.dollarOrPercentage;
        cost = pricesArray.outfit.somewhatComplex.value / 100;
    } else if (outfit.value == "layeredclothing") {
        content = (pricesArray.outfit.layeredClothing.value - 100) + pricesArray.outfit.layeredClothing.dollarOrPercentage;
        cost = pricesArray.outfit.layeredClothing.value / 100;
    } else if (outfit.value == "verycomplex") {
        content = (pricesArray.outfit.veryComplex.value - 100) + pricesArray.outfit.veryComplex.dollarOrPercentage;
        cost = pricesArray.outfit.veryComplex.value / 100;
    }

    numberOutfitComplexity = Number(cost);
    updateTotal();

    if (content == "") {
        document.getElementById("outfitIDValue").classList.add("d-none");
    } else {
        document.getElementById("outfitIDValue").classList.remove("d-none");
        document.getElementById("outfitIDValue").innerText = content;
    }
}

function updateExtras() {
    var Pets = document.getElementById("extraPetsInput");
    var Props = document.getElementById("extraPropsInput");
    var Weapons = document.getElementById("extraWeaponsInput");
    var numberPets = parseInt(Pets.innerText);
    var numberProps = parseInt(Props.innerText);
    var numberWeapons = parseInt(Weapons.innerText);
    Pets.innerText = checkNumber(numberPets, 0, 10);
    Props.innerText = checkNumber(numberProps, 0, 10);
    Weapons.innerText = checkNumber(numberWeapons, 0, 10);
    var minCost = 0;
    var maxCost = 0;

    var extrasSection = document.getElementById("extrasSection");

    if (style.value == "cleanColors") {
        if (pricesArray.extras.cleanColors.isItPossible) {
            minCost = (numberPets + numberProps + numberWeapons) * pricesArray.extras.cleanColors.minValue;
            maxCost = (numberPets + numberProps + numberWeapons) * pricesArray.extras.cleanColors.maxValue;
            extrasSection.classList.remove("d-none");
        } else {
            numberExtrasMin = 0;
            numberExtrasMax = 0;
            Pets.innerText = 0;
            Props.innerText = 0;
            Weapons.innerText = 0;
            extrasSection.classList.add("d-none");
        }
    }
    else if (style.value == "hybrid") {
        if (pricesArray.extras.hybrid.isItPossible) {
            minCost = (numberPets + numberProps + numberWeapons) * pricesArray.extras.hybrid.minValue;
            maxCost = (numberPets + numberProps + numberWeapons) * pricesArray.extras.hybrid.maxValue;
            extrasSection.classList.remove("d-none");
        } else {
            numberExtrasMin = 0;
            numberExtrasMax = 0;
            Pets.innerText = 0;
            Props.innerText = 0;
            Weapons.innerText = 0;
            extrasSection.classList.add("d-none");
        }
    }
    else if (style.value == "coloredSketch") {
        if (pricesArray.extras.coloredSketch.isItPossible) {
            minCost = (numberPets + numberProps + numberWeapons) * pricesArray.extras.coloredSketch.minValue;
            maxCost = (numberPets + numberProps + numberWeapons) * pricesArray.extras.coloredSketch.maxValue;
            extrasSection.classList.remove("d-none");
        } else {
            numberExtrasMin = 0;
            numberExtrasMax = 0;
            Pets.innerText = 0;
            Props.innerText = 0;
            Weapons.innerText = 0;
            extrasSection.classList.add("d-none");
        }
    }
    else if (style.value == "sticker") {
        if (pricesArray.extras.sticker.isItPossible) {
            minCost = (numberPets + numberProps + numberWeapons) * pricesArray.extras.sticker.minValue;
            maxCost = (numberPets + numberProps + numberWeapons) * pricesArray.extras.sticker.maxValue;
            extrasSection.classList.remove("d-none");
        } else {
            numberExtrasMin = 0;
            numberExtrasMax = 0;
            Pets.innerText = 0;
            Props.innerText = 0;
            Weapons.innerText = 0;
            extrasSection.classList.add("d-none");
        }
    }
    else if (style.value == "emote") {
        if (pricesArray.extras.emote.isItPossible) {
            minCost = (numberPets + numberProps + numberWeapons) * pricesArray.extras.emote.minValue;
            maxCost = (numberPets + numberProps + numberWeapons) * pricesArray.extras.emote.maxValue;
            extrasSection.classList.remove("d-none");
        } else {
            numberExtrasMin = 0;
            numberExtrasMax = 0;
            Pets.innerText = 0;
            Props.innerText = 0;
            Weapons.innerText = 0;
            extrasSection.classList.add("d-none");
        }
    }
    else if (style.value == "sketch") {
        if (pricesArray.extras.sketch.isItPossible) {
            minCost = (numberPets + numberProps + numberWeapons) * pricesArray.extras.sketch.minValue;
            maxCost = (numberPets + numberProps + numberWeapons) * pricesArray.extras.sketch.maxValue;
            extrasSection.classList.remove("d-none");
        } else {
            numberExtrasMin = 0;
            numberExtrasMax = 0;
            Pets.innerText = 0;
            Props.innerText = 0;
            Weapons.innerText = 0;
            extrasSection.classList.add("d-none");
        }
    }
    else if (style.value == "doodle") {
        if (pricesArray.extras.doodle.isItPossible) {
            minCost = (numberPets + numberProps + numberWeapons) * pricesArray.extras.doodle.minValue;
            maxCost = (numberPets + numberProps + numberWeapons) * pricesArray.extras.doodle.maxValue;
            extrasSection.classList.remove("d-none");
        } else {
            numberExtrasMin = 0;
            numberExtrasMax = 0;
            Pets.innerText = 0;
            Props.innerText = 0;
            Weapons.innerText = 0;
            extrasSection.classList.add("d-none");
        }
    }
    else if (style.value == "scribble") {
        if (pricesArray.extras.scribble.isItPossible) {
            minCost = (numberPets + numberProps + numberWeapons) * pricesArray.extras.scribble.minValue;
            maxCost = (numberPets + numberProps + numberWeapons) * pricesArray.extras.scribble.maxValue;
            extrasSection.classList.remove("d-none");
        } else {
            numberExtrasMin = 0;
            numberExtrasMax = 0;
            Pets.innerText = 0;
            Props.innerText = 0;
            Weapons.innerText = 0;
            extrasSection.classList.add("d-none");
        }
    }
    else if (style.value == "logo") {
        if (pricesArray.extras.logo.isItPossible) {
            minCost = (numberPets + numberProps + numberWeapons) * pricesArray.extras.logo.minValue;
            maxCost = (numberPets + numberProps + numberWeapons) * pricesArray.extras.logo.maxValue;
            extrasSection.classList.remove("d-none");
        } else {
            numberExtrasMin = 0;
            numberExtrasMax = 0;
            Pets.innerText = 0;
            Props.innerText = 0;
            Weapons.innerText = 0;
            extrasSection.classList.add("d-none");
        }
    }
    else if (style.value == "other") {
        if (pricesArray.extras.other.isItPossible) {
            minCost = (numberPets + numberProps + numberWeapons) * pricesArray.extras.other.minValue;
            maxCost = (numberPets + numberProps + numberWeapons) * pricesArray.extras.other.maxValue;
            extrasSection.classList.remove("d-none");
        } else {
            numberExtrasMin = 0;
            numberExtrasMax = 0;
            Pets.innerText = 0;
            Props.innerText = 0;
            Weapons.innerText = 0;
            extrasSection.classList.add("d-none");
        }
    }
    numberExtrasMin = minCost;
    numberExtrasMax = maxCost;
    updateTotal();
    document.getElementById("extrasIDValue").classList.remove("d-none");
    document.getElementById("extrasIDValue").innerText = `$${minCost} ~ $${maxCost}`;

    if (style.value == "") {
        document.getElementById("extrasIDValue").classList.add("d-none");
    }

}

function changeScore(type, amount) {
    var Pets = document.getElementById("extraPetsInput");
    var Props = document.getElementById("extraPropsInput");
    var Weapons = document.getElementById("extraWeaponsInput");
    var numberPets = parseInt(Pets.innerText);
    var numberProps = parseInt(Props.innerText);
    var numberWeapons = parseInt(Weapons.innerText);

    if (type == "pets") {
        Pets.innerText = checkNumber(numberPets + amount, 0, 10);
    } else if (type == "props") {
        Props.innerText = checkNumber(numberProps + amount, 0, 10);
    } else if (type == "weapons") {
        Weapons.innerText = checkNumber(numberWeapons + amount, 0, 10);
    }

    updateExtras();
}

function updateBackgroundOptionsTextAndPrice() {
    var content = "";
    var costMin = 0;
    var costMax = 0;

    for (var i = 0; i < backgroundOptions.length; i++) {
        if (i == 0) {
            backgroundOptions[i].innerText = "None (Solid color or transparent) +" + pricesArray.background.none.dollarOrPercentage + pricesArray.background.none.maxValue;
        } else if (i == 1) {
            backgroundOptions[i].innerText = "Simple (Repeating pattern) +" + pricesArray.background.simple.dollarOrPercentage + pricesArray.background.simple.minValue + "~" + pricesArray.background.simple.maxValue;
        } else if (i == 2) {
            backgroundOptions[i].innerText = "Average +" + pricesArray.background.average.dollarOrPercentage + pricesArray.background.average.minValue + "~" + pricesArray.background.average.maxValue;
        } else if (i == 3) {
            backgroundOptions[i].innerText = "Somewhat complex +" + pricesArray.background.somewhatcomplex.dollarOrPercentage + pricesArray.background.somewhatcomplex.minValue + "~" + pricesArray.background.somewhatcomplex.maxValue;
        } else if (i == 4) {
            backgroundOptions[i].innerText = "Very complex (Fully rendered scene integrating the character(s)) +" + pricesArray.background.verycomplex.dollarOrPercentage + pricesArray.background.verycomplex.minValue + "~" + pricesArray.background.verycomplex.maxValue;
        }
    }

    if (inputBackground.value == "choose") {
    } else if (inputBackground.value == "none") {
        content = pricesArray.background.none.dollarOrPercentage + pricesArray.background.none.minValue + "~" + pricesArray.background.none.maxValue;
        costMin = pricesArray.background.none.minValue;
        costMax = pricesArray.background.none.maxValue;
    } else if (inputBackground.value == "simple") {
        content = pricesArray.background.simple.dollarOrPercentage + pricesArray.background.simple.minValue + "~" + pricesArray.background.simple.maxValue;
        costMin = pricesArray.background.simple.minValue;
        costMax = pricesArray.background.simple.maxValue;
    } else if (inputBackground.value == "average") {
        content = pricesArray.background.average.dollarOrPercentage + pricesArray.background.average.minValue + "~" + pricesArray.background.average.maxValue;
        costMin = pricesArray.background.average.minValue;
        costMax = pricesArray.background.average.maxValue;
    } else if (inputBackground.value == "somewhatcomplex") {
        content = pricesArray.background.somewhatcomplex.dollarOrPercentage + pricesArray.background.somewhatcomplex.minValue + "~" + pricesArray.background.somewhatcomplex.maxValue;
        costMin = pricesArray.background.somewhatcomplex.minValue;
        costMax = pricesArray.background.somewhatcomplex.maxValue;
    } else if (inputBackground.value == "verycomplex") {
        content = pricesArray.background.verycomplex.dollarOrPercentage + pricesArray.background.verycomplex.minValue + "~" + pricesArray.background.verycomplex.maxValue;
        costMin = pricesArray.background.verycomplex.minValue;
        costMax = pricesArray.background.verycomplex.maxValue;
    }

    numberBackgroundMin = Number(costMin);
    numberBackgroundMax = Number(costMax);
    updateTotal();

    if (content == "") {
        document.getElementById("backgroundIDValue").classList.add("d-none");
    } else {
        document.getElementById("backgroundIDValue").classList.remove("d-none");
        document.getElementById("backgroundIDValue").innerText = content;
    }
}

function updatePrivateTextAndPrice() {
    let content = "";
    let cost = 1;
    let noCost = (pricesArray.private.no.value - 100) + pricesArray.private.no.dollarOrPercentage;
    let yesCost = (pricesArray.private.yes.value - 100) + pricesArray.private.yes.dollarOrPercentage;

    document.getElementById("noPrivateRadioText").innerHTML = `(<span class="xiransgreen">${noCost}</span>)`;
    document.getElementById("yesPrivateRadioText").innerHTML = `(<span class="xiransgreen">+${yesCost}</span>)`;

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

function updateSkipQueueButtons() {
    let workInProgressPercentText = document.getElementById("workInProgressPercent");
    let queueNotHoldText = document.getElementById("queueNotHold");
    let queueHoldText = document.getElementById("queueHold");
    let addtoqueueText = document.getElementById("addtoqueueText");
    let skipqueueText = document.getElementById("skipqueueText");
    let skipqueueasapText = document.getElementById("skipqueueasapText");
    let skipIDpeopleInQueue = document.getElementById("skipIDpeopleInQueue");
    let skipIDpeopleSkipping = document.getElementById("skipIDpeopleSkipping");
    let skipIDpeopleRushing = document.getElementById("skipIDpeopleRushing");
    peopleInQueue = commissionsArray.length - 3;
    peopleSkippingQueue = 0;
    peopleSkippingRushingQueue = 0;
    peopleInQueueNotHold = peopleInQueue;

    for (var i = 0; i < commissionsArray.length; i++) {
        for (var u = 0; u < commissionsArray[i].idLabels.length; u++) {
            if (commissionsArray[i].idLabels[u] == "602f50f0929b6d86a5354893") {
                peopleSkippingQueue += 1;
            }
            if (commissionsArray[i].idLabels[u] == "5f94fcab5edf3c4d70e9235f") {
                peopleSkippingRushingQueue += 1;
            }
            if (commissionsArray[i].idLabels[u] == "5fa49fc92673770b8d5c087d") {
                peopleInQueueNotHold -= 1;
            }
        }
    }

    peopleInQueueHold = peopleInQueue - peopleInQueueNotHold;

    if (workinprogressArray.length <= 2) {
        workInProgressPercentText.innerHTML = `<span class="xiransgreen">Currently not working on anything OR discussing next client's commission.</span>`
    }
    else if (workinprogressArray.length == 3) {
        let completedPercent = ((workinprogressArray[2].badges.checkItemsChecked / workinprogressArray[2].badges.checkItems) * 100).toFixed(0);

        workInProgressPercentText.innerHTML = `Current work in progress is <span class="xiransgreen font-weight-bold">${completedPercent}%</span> complete.`
    }
    else if (workinprogressArray.length == 4) {
        let completedPercentFirst = ((workinprogressArray[2].badges.checkItemsChecked / workinprogressArray[2].badges.checkItems) * 100).toFixed(0);
        let completedPercentSecond = ((workinprogressArray[3].badges.checkItemsChecked / workinprogressArray[3].badges.checkItems) * 100).toFixed(0);

        workInProgressPercentText.innerHTML = `Currently working on more than 1 commission. They are <span class="xiransgreen font-weight-bold">${completedPercentFirst}%</span> & <span class="xiransgreen font-weight-bold">${completedPercentSecond}%</span> complete.`
    }
    else if (workinprogressArray.length == 5) {
        let completedPercentFirst = ((workinprogressArray[2].badges.checkItemsChecked / workinprogressArray[2].badges.checkItems) * 100).toFixed(0);
        let completedPercentSecond = ((workinprogressArray[3].badges.checkItemsChecked / workinprogressArray[3].badges.checkItems) * 100).toFixed(0);
        let completedPercentThird = ((workinprogressArray[4].badges.checkItemsChecked / workinprogressArray[4].badges.checkItems) * 100).toFixed(0);

        workInProgressPercentText.innerHTML = `Currently working on more than 1 commission. They are <span class="xiransgreen font-weight-bold">${completedPercentFirst}%</span>, <span class="xiransgreen font-weight-bold">${completedPercentSecond}%</span> & <span class="xiransgreen font-weight-bold">${completedPercentThird}%</span> complete.`
    }

    queueNotHoldText.innerText = peopleInQueueNotHold;
    queueHoldText.innerText = peopleInQueueHold;

    for (let i = 0; i < skipQueueRadio.length; i++) {
        if (skipQueueRadio[i].checked) {
            skipQueueButtons[i].classList.add("active");
        }
    }

    addtoqueueText.innerHTML = `+${(pricesArray.skipqueue.addmetoqueue.value - 100) + pricesArray.skipqueue.addmetoqueue.dollarOrPercentage}`;
    if (peopleInQueue == 0){
        skipqueueText.innerHTML = `+${(pricesArray.skipqueue.skipqueue.value - 100) + pricesArray.skipqueue.skipqueue.increaseValuePerPerson * peopleInQueue + pricesArray.skipqueue.skipqueue.dollarOrPercentage}`;
    }
    else if (peopleInQueue > 0){
        skipqueueText.innerHTML = `+${(pricesArray.skipqueue.skipqueue.value - 100) + pricesArray.skipqueue.skipqueue.increaseValuePerPerson * (peopleInQueue + 1) + pricesArray.skipqueue.skipqueue.dollarOrPercentage}`;
    }
    skipqueueasapText.innerHTML = `+${(pricesArray.skipqueue.rushpriority.value - 100) + pricesArray.skipqueue.rushpriority.increaseValuePerPerson * (peopleInQueue + peopleSkippingQueue) + pricesArray.skipqueue.rushpriority.dollarOrPercentage}`;
    skipIDpeopleInQueue.innerHTML = `${(peopleInQueue)}`;
    skipIDpeopleSkipping.innerHTML = `${(peopleSkippingQueue)}`;
    skipIDpeopleRushing.innerHTML = `${(peopleSkippingRushingQueue)}`;
}

function updateSkipQueuePrice() {
    let content = "";
    let cost = 1;

    for (var i = 0; i < skipQueueRadio.length; i++) {
        if (skipQueueRadio[i].checked) {
            if (skipQueueRadio[i].value == "addqueue") {
                content = (pricesArray.skipqueue.addmetoqueue.value - 100) + pricesArray.skipqueue.addmetoqueue.dollarOrPercentage;
                cost = pricesArray.skipqueue.addmetoqueue.value / 100;
            } else if (skipQueueRadio[i].value == "skipqueue") {
                if (peopleInQueue == 0){
                    content = (pricesArray.skipqueue.skipqueue.value - 100) + pricesArray.skipqueue.skipqueue.increaseValuePerPerson * peopleInQueue + pricesArray.skipqueue.skipqueue.dollarOrPercentage;
                    cost = (Number(pricesArray.skipqueue.skipqueue.value) + (pricesArray.skipqueue.skipqueue.increaseValuePerPerson * peopleInQueue)) / 100;
                }
                else if (peopleInQueue > 0){
                    content = (pricesArray.skipqueue.skipqueue.value - 100) + pricesArray.skipqueue.skipqueue.increaseValuePerPerson * (peopleInQueue + 1) + pricesArray.skipqueue.skipqueue.dollarOrPercentage;
                    cost = (Number(pricesArray.skipqueue.skipqueue.value) + (pricesArray.skipqueue.skipqueue.increaseValuePerPerson * (peopleInQueue + 1))) / 100;
                }
                
            } else if (skipQueueRadio[i].value == "skipqueueasap") {
                content = (pricesArray.skipqueue.rushpriority.value - 100) + pricesArray.skipqueue.rushpriority.increaseValuePerPerson * (peopleInQueue + peopleSkippingQueue) + pricesArray.skipqueue.rushpriority.dollarOrPercentage;
                cost = (Number(pricesArray.skipqueue.rushpriority.value) + (pricesArray.skipqueue.rushpriority.increaseValuePerPerson * (peopleInQueue + peopleSkippingQueue))) / 100;
            }
        }
    }

    numberSkip = Number(cost);
    updateTotal();

    if (content == "") {
        document.getElementById("skipIDValue").classList.add("d-none");
    } else {
        document.getElementById("skipIDValue").classList.remove("d-none");
        document.getElementById("skipIDValue").innerText = content;
    }
}

function updateLewdTextAndPrice() {
    let content = "";
    let costMin = 1;
    let costMax = 1;
    let noCost = (pricesArray.lewd.no.value - 100) + pricesArray.lewd.no.dollarOrPercentage;
    let yesCost = (pricesArray.lewd.yes.minValue - 100) + "~" + (pricesArray.lewd.yes.maxValue - 100) + pricesArray.lewd.yes.dollarOrPercentage;

    document.getElementById("noLewdRadioText").innerHTML = `(<span class="xiransgreen">${noCost}</span>)`;
    document.getElementById("yesLewdRadioText").innerHTML = `(<span class="xiransgreen">+${yesCost}</span>)`;

    for (var i = 0; i < lewdRadio.length; i++) {
        if (lewdRadio[i].checked) {
            if (lewdRadio[i].value == "no") {
                content = noCost;
                costMin = pricesArray.lewd.no.value / 100;
                costMax = pricesArray.lewd.no.value / 100;
            }
            else if (lewdRadio[i].value == "yes") {
                content = yesCost;
                costMin = pricesArray.lewd.yes.minValue / 100;
                costMax = pricesArray.lewd.yes.maxValue / 100;
            }
        }
    }

    numberLewdMin = Number(costMin);
    numberLewdMax = Number(costMax);
    updateTotal();

    if (content == "") {
        document.getElementById("lewdIDValue").classList.add("d-none");
    } else {
        document.getElementById("lewdIDValue").classList.remove("d-none");
        document.getElementById("lewdIDValue").innerText = content;
    }
}

function carouselStart() {
    for (var i = 0; i < carouselElements.length; i++) {
        if (carouselElements[i].classList.contains("carousel-prev2")) {
            cp2pos = i;
        }
        else if (carouselElements[i].classList.contains("carousel-prev1")) {
            cp1pos = i;
        }
        else if (carouselElements[i].classList.contains("carousel-active")) {
            cnapos = i;
        }
        else if (carouselElements[i].classList.contains("carousel-next1")) {
            cn1pos = i;
        }
        else if (carouselElements[i].classList.contains("carousel-next2")) {
            cn2pos = i;
        }
    }
    carouselAutomaticMoving();
}

function carouselAutomaticMoving() {
    // Update the count down every 3 second
    setInterval(function () {
        if (!carouselClickedRecently && !carouselMouseOver) {
            carouselElements[cp2pos].classList.remove("carousel-prev2");
            carouselElements[cp1pos].classList.remove("carousel-prev1");
            carouselElements[cnapos].classList.remove("carousel-active");
            carouselElements[cn1pos].classList.remove("carousel-next1");
            carouselElements[cn2pos].classList.remove("carousel-next2");
            cp2pos = giveMeNextElementsNumber(cp2pos + 1, carouselElements.length);
            cp1pos = giveMeNextElementsNumber(cp1pos + 1, carouselElements.length);
            cnapos = giveMeNextElementsNumber(cnapos + 1, carouselElements.length);
            cn1pos = giveMeNextElementsNumber(cn1pos + 1, carouselElements.length);
            cn2pos = giveMeNextElementsNumber(cn2pos + 1, carouselElements.length);
            carouselElements[cp2pos].classList.add("carousel-prev2");
            carouselElements[cp1pos].classList.add("carousel-prev1");
            carouselElements[cnapos].classList.add("carousel-active");
            carouselElements[cn1pos].classList.add("carousel-next1");
            carouselElements[cn2pos].classList.add("carousel-next2");
        } else {
            carouselClickedRecently = false;
        }
    }, 4000);
}

function mouseOverImgCarousel(value) {
    carouselMouseOver = value;
}

function updatePricesArrayImg() {
    var amountOfStyles = 10;

    var foundFeaturedCleanColors = false;
    var foundFeaturedHybrid = false;
    var foundFeaturedColoredSketch = false;
    var foundFeaturedSticker = false;
    var foundFeaturedEmote = false;
    var foundFeaturedSketch = false;
    var foundFeaturedDoodle = false;
    var foundFeaturedScribble = false;
    var foundFeaturedLogo = false;
    var foundFeaturedOther = false;

    var cleanColorsFound = 0;
    var hybridFound = 0;
    var coloredSketchFound = 0;
    var stickerFound = 0;
    var emoteFound = 0;
    var sketchFound = 0;
    var doodleFound = 0;
    var scribbleFound = 0;
    var logoFound = 0;
    var otherFound = 0;

    for (var i = 2; i < completedPreviewArray.length; i++){
        var featured = false;
        var style = "";
        var ignore = false;

        var current = completedPreviewArray[i];

        firstID = completedPreviewArray[i].id;
        secondID = completedPreviewArray[i].idAttachmentCover;
        var currentLink = `https://trello.com/1/cards/${firstID}/attachments/${secondID}/download/`;

        for (var u = 0; u < current.idLabels.length; u++){

            currentLabel = current.idLabels[u];

            if (currentLabel == omitID){
                ignore = true;
            }
            else{
                if (!ignore){
                    if (currentLabel == featuredID){
                        featured = true;
                    }
                    if (currentLabel == cleanColorsID){
                        style = "cleanColors";
                    }
                    else if (currentLabel == hybridID){
                        style = "hybrid";
                    }
                    else if (currentLabel == coloredSketchID){
                        style = "coloredSketch";
                    }
                    else if (currentLabel == stickerID){
                        style = "sticker";
                    }
                    else if (currentLabel == emoteID){
                        style = "emote";
                    }
                    else if (currentLabel == sketchID){
                        style = "sketch";
                    }
                    else if (currentLabel == doodleID){
                        style = "doodle";
                    }
                    else if (currentLabel == scribbleID){
                        style = "scribble";
                    }
                    else if (currentLabel == logoID){
                        style = "logo";
                    }
                    else if (currentLabel == otherID){
                        style = "other";
                    }
                }
            }
        }

        if (!ignore){
            if (style == "cleanColors"){
                if (featured){
                    if (!foundFeaturedCleanColors){
                        pricesArray.carousel.featured[0] = currentLink;
                        foundFeaturedCleanColors = true;
                    }
                }
                if (cleanColorsFound < amountOfStyles){
                    pricesArray.carousel.cleanColors[cleanColorsFound] = currentLink;
                    cleanColorsFound++;
                }
            }
            if (style == "hybrid"){
                if (featured){
                    if (!foundFeaturedHybrid){
                        pricesArray.carousel.featured[1] = currentLink;
                        foundFeaturedHybrid = true;
                    }
                }
                if (hybridFound < amountOfStyles){
                    pricesArray.carousel.hybrid[hybridFound] = currentLink;
                    hybridFound++;
                }
            }
            if (style == "coloredSketch"){
                if (featured){
                    if (!foundFeaturedColoredSketch){
                        pricesArray.carousel.featured[2] = currentLink;
                        foundFeaturedColoredSketch = true;
                    }
                }
                if (coloredSketchFound < amountOfStyles){
                    pricesArray.carousel.coloredSketch[coloredSketchFound] = currentLink;
                    coloredSketchFound++;
                }
            }
            if (style == "sticker"){
                if (featured){
                    if (!foundFeaturedSticker){
                        pricesArray.carousel.featured[3] = currentLink;
                        foundFeaturedSticker = true;
                    }
                }
                if (stickerFound < amountOfStyles){
                    pricesArray.carousel.sticker[stickerFound] = currentLink;
                    stickerFound++;
                }
            }
            if (style == "emote"){
                if (featured){
                    if (!foundFeaturedEmote){
                        pricesArray.carousel.featured[4] = currentLink;
                        foundFeaturedEmote = true;
                    }
                }
                if (emoteFound < amountOfStyles){
                    pricesArray.carousel.emote[emoteFound] = currentLink;
                    emoteFound++;
                }
            }
            if (style == "sketch"){
                if (featured){
                    if (!foundFeaturedSketch){
                        pricesArray.carousel.featured[5] = currentLink;
                        foundFeaturedSketch = true;
                    }
                }
                if (sketchFound < amountOfStyles){
                    pricesArray.carousel.sketch[sketchFound] = currentLink;
                    sketchFound++;
                }
            }
            if (style == "doodle"){
                if (featured){
                    if (!foundFeaturedDoodle){
                        pricesArray.carousel.featured[6] = currentLink;
                        foundFeaturedDoodle = true;
                    }
                }
                if (doodleFound < amountOfStyles){
                    pricesArray.carousel.doodle[doodleFound] = currentLink;
                    doodleFound++;
                }
            }
            if (style == "scribble"){
                if (featured){
                    if (!foundFeaturedScribble){
                        pricesArray.carousel.featured[7] = currentLink;
                        foundFeaturedScribble = true;
                    }
                }
                if (scribbleFound < amountOfStyles){
                    pricesArray.carousel.scribble[scribbleFound] = currentLink;
                    scribbleFound++;
                }
            }
            if (style == "logo"){
                if (featured){
                    if (!foundFeaturedLogo){
                        pricesArray.carousel.featured[8] = currentLink;
                        foundFeaturedLogo = true;
                    }
                }
                if (logoFound < amountOfStyles){
                    pricesArray.carousel.logo[logoFound] = currentLink;
                    logoFound++;
                }
            }
            if (style == "other"){
                if (featured){
                    if (!foundFeaturedOther){
                        pricesArray.carousel.featured[9] = currentLink;
                        foundFeaturedOther = true;
                    }
                }
                if (otherFound < amountOfStyles){
                    pricesArray.carousel.other[otherFound] = currentLink;
                    otherFound++;
                }
            }
        }
    }
}

function carouselChangeStyle() {
    if (style.value == "") {
        for (var i = 0; i < carouselImg.length; i++) {
            carouselImg[i].src = pricesArray.carousel.featured[i];
        }
        carouselImgTextElements[0].innerHTML = "Clean Colors";
        carouselImgTextElements[1].innerHTML = "Hybrid";
        carouselImgTextElements[2].innerHTML = "Colored Sketch";
        carouselImgTextElements[3].innerHTML = "Sticker";
        carouselImgTextElements[4].innerHTML = "Emote";
        carouselImgTextElements[5].innerHTML = "Sketch";
        carouselImgTextElements[6].innerHTML = "Doodle";
        carouselImgTextElements[7].innerHTML = "Scribble";
        carouselImgTextElements[8].innerHTML = "Logo";
        carouselImgTextElements[9].innerHTML = "Other";
    }
    else if (style.value == "cleanColors") {
        for (var i = 0; i < carouselImg.length; i++) {
            carouselImg[i].src = pricesArray.carousel.cleanColors[i];
            carouselImgTextElements[i].innerHTML = "Clean Colors";
        }
    }
    else if (style.value == "hybrid") {
        for (var i = 0; i < carouselImg.length; i++) {
            carouselImg[i].src = pricesArray.carousel.hybrid[i];
            carouselImgTextElements[i].innerHTML = "Hybrid";
        }
    }
    else if (style.value == "coloredSketch") {
        for (var i = 0; i < carouselImg.length; i++) {
            carouselImg[i].src = pricesArray.carousel.coloredSketch[i];
            carouselImgTextElements[i].innerHTML = "Colored Sketch";
        }
    }
    else if (style.value == "sticker") {
        for (var i = 0; i < carouselImg.length; i++) {
            carouselImg[i].src = pricesArray.carousel.sticker[i];
            carouselImgTextElements[i].innerHTML = "Sticker";
        }
    }
    else if (style.value == "emote") {
        for (var i = 0; i < carouselImg.length; i++) {
            carouselImg[i].src = pricesArray.carousel.emote[i];
            carouselImgTextElements[i].innerHTML = "Emote";
        }
    }
    else if (style.value == "sketch") {
        for (var i = 0; i < carouselImg.length; i++) {
            carouselImg[i].src = pricesArray.carousel.sketch[i];
            carouselImgTextElements[i].innerHTML = "Sketch";
        }
    }
    else if (style.value == "doodle") {
        for (var i = 0; i < carouselImg.length; i++) {
            carouselImg[i].src = pricesArray.carousel.doodle[i];
            carouselImgTextElements[i].innerHTML = "Doodle";
        }
    }
    else if (style.value == "scribble") {
        for (var i = 0; i < carouselImg.length; i++) {
            carouselImg[i].src = pricesArray.carousel.scribble[i];
            carouselImgTextElements[i].innerHTML = "Scribble";
        }
    }
    else if (style.value == "logo") {
        for (var i = 0; i < carouselImg.length; i++) {
            carouselImg[i].src = pricesArray.carousel.logo[i];
            carouselImgTextElements[i].innerHTML = "Logo";
        }
    }
    else if (style.value == "other") {
        for (var i = 0; i < carouselImg.length; i++) {
            carouselImg[i].src = pricesArray.carousel.other[i];
            carouselImgTextElements[i].innerHTML = "Other";
        }
    }

}

function updateTotal() {
    var totalMin = 0;
    var totalMax = 0;
    totalMin = (((((((((numberBody + numberStyleShading) * (numberOutfitComplexity + numberDesigningCharacterMin - 1)) * numberAmountCharacters) + numberExtrasMin) * numberLewdMin) + numberBackgroundMin) * numberSkip) * numberPrivate) * (numberBaseNFT + numberNFTFiatorCrypto - 1));
    totalMax = (((((((((numberBody + numberStyleShading) * (numberOutfitComplexity + numberDesigningCharacterMax - 1)) * numberAmountCharacters) + numberExtrasMax) * numberLewdMax) + numberBackgroundMax) * numberSkip) * numberPrivate) * (numberBaseNFT + numberNFTFiatorCrypto - 1));

    document.getElementById("totalIDValue").innerText = `$${totalMin.toFixed(2)}~${totalMax.toFixed(2)}`;
}

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(COMMISSION_INFORMATION_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            commissionInfoArray = resultObj.data;

            getJSONData(AMOUNT_OF_COMMISSIONS_URL).then(function (resultObj) {
                if (resultObj.status === "ok") {
                    commissionsArray = resultObj.data;

                    getJSONData(WORK_IN_PROGRESS_URL).then(function (resultObj) {
                        if (resultObj.status === "ok") {
                            workinprogressArray = resultObj.data;

                            getJSONData(COMPLETED_URL).then(function (resultObj) {
                                if (resultObj.status === "ok") {
                                    completedPreviewArray = resultObj.data;
                                    
                                    getJSONData(PRICES_URL).then(function (resultObj) {
                                        if (resultObj.status === "ok") {
                                            pricesArray = resultObj.data;

                                            updatePricesArrayImg();

                                            checkStatus();

                                            commercialRadio = document.getElementsByName("Is Commercial");
                                            updateCommercialRadios();

                                            NFTRadio = document.getElementsByName("Is NFT");
                                            NFTType = document.getElementsByName("NFT type");
                                            NFTPayment = document.getElementsByName("NFT fiat or crypto");
                                            updateNFTRadios();

                                            carouselElements = document.getElementsByName("carouselElement");
                                            carouselImg = document.getElementsByName("carouselImg");
                                            carouselImgTextElements = document.getElementsByName("carousel-img-text");

                                            designCharactersRadio = document.getElementsByName("Design Character?");
                                            updateDesignCharactersTextAndPrice();

                                            style = document.getElementById("inputStyle");
                                            styleShadingRadio = document.getElementsByName("Doodle/Scribble Shading");

                                            bodyRadio = document.getElementsByName("Body Amount");
                                            bodyButtons = document.getElementsByName("buttonBody");

                                            amountCharactersRadio = document.getElementsByName("How many characters");
                                            amountCharactersButtons = document.getElementsByName("buttonAmountCharacters");

                                            amountEmotesRadio = document.getElementsByName("How many emotes?");

                                            updateStyleShowShadingPriceAndCallOtherFunctions(false);
                                            checkIfAButtonWasClicked();
                                            //updateBodyPrice();
                                            //updateAmountCharactersPrice();
                                            //updateHowManyEmotesPrice();

                                            outfit = document.getElementById("inputOutfit");
                                            outfitOptions = document.getElementsByName("outfitOptions");
                                            updateOutfitOptionsTextAndPrice();

                                            inputBackground = document.getElementById("inputBackground");
                                            backgroundOptions = document.getElementsByName("backgroundOptions");
                                            updateBackgroundOptionsTextAndPrice();

                                            privateRadio = document.getElementsByName("Private?");
                                            updatePrivateTextAndPrice();

                                            lewdRadio = document.getElementsByName("Lewd?");
                                            updateLewdTextAndPrice();

                                            skipQueueRadio = document.getElementsByName("RUSH/Skip Queue/Add Queue");
                                            skipQueueButtons = document.getElementsByName("skipQueueButtons");
                                            updateSkipQueueButtons();
                                            updateSkipQueuePrice();

                                            updateExtras();

                                            carouselStart();
                                            carouselChangeStyle();

                                            updateTotal();
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
    });
    document.getElementById("btnPetsMinus").addEventListener("click", function () {
        changeScore("pets", -1)
    }, false);
    document.getElementById("btnPetsPlus").addEventListener("click", function () {
        changeScore("pets", 1)
    }, false);
    document.getElementById("btnPropsMinus").addEventListener("click", function () {
        changeScore("props", -1)
    }, false);
    document.getElementById("btnPropsPlus").addEventListener("click", function () {
        changeScore("props", 1)
    }, false);
    document.getElementById("btnWeaponsMinus").addEventListener("click", function () {
        changeScore("weapons", -1)
    }, false);
    document.getElementById("btnWeaponsPlus").addEventListener("click", function () {
        changeScore("weapons", 1)
    }, false);
});