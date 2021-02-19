var pricesArray = [];
var commissionsArray = [];
var designCharacters;
var style;
var bodyRadio;
var bodyButtons;
var styleShading;
var styleShadingRadio;
var outfit;
var outfitOptions;
var amountCharactersRadio;
var backgroundRadio;
var privateRadio;
var lewdRadio;
var skipQueueRadio;

var numberDesigningCharacterMin = 1.0;
var numberDesigningCharacterMax = 1.0;
var numberStyleShading = 0;
var numberBody = 88;
var numberAmountCharacters = 1.0;
var numberOutfitComplexity = 1.681818;
var numberBackgroundMin = 1.0;
var numberBackgroundMax = 1.0;
var numberPrivate = 1.0;
var numberSkip = 1.0;
var numberLewdMin = 1.0;
var numberLewdMax = 1.0;



function updateDesignCharactersTextAndPrice() {
    let content = "";
    let noCost = (pricesArray.designing[0].no[0].value - 100) + pricesArray.designing[0].no[0].dollarOrPercentage;
    let yesCost = pricesArray.designing[0].yes[0].minValue;
    yesCost += " ~ " + pricesArray.designing[0].yes[0].maxValue + pricesArray.designing[0].yes[0].dollarOrPercentage;

    document.getElementById("noDesignRadioText").innerHTML = `(<span class="xiransgreen">${noCost}</span>)`;
    document.getElementById("yesDesignRadioText").innerHTML = `(<span class="xiransgreen">+${yesCost}</span>)`;

    for (var i = 0; i < designCharacters.length; i++) {
        if (designCharacters[i].checked) {
            if (designCharacters[i].value == "no") {
                content = noCost;
            }
            else if (designCharacters[i].value == "yes") {
                content = yesCost;
            }
        }
    }

    if (content == "") {
        document.getElementById("designingCharIDValue").classList.add("d-none");
    } else {
        document.getElementById("designingCharIDValue").classList.remove("d-none");
        document.getElementById("designingCharIDValue").innerText = content;
    }
}

function showStyleShading(){
    styleShading.classList.remove("d-none");
    let content = "";
    let noCost = "";
    let yesCost = "";

    if (style.value == "doodle"){
        noCost = pricesArray.cheapshading[0].doodle[0].dollarOrPercentage + pricesArray.cheapshading[0].doodle[0].no;
        yesCost = pricesArray.cheapshading[0].doodle[0].dollarOrPercentage + pricesArray.cheapshading[0].doodle[0].yes;
    } 
    else if (style.value == "scribble"){
        noCost = pricesArray.cheapshading[0].scribble[0].dollarOrPercentage + pricesArray.cheapshading[0].scribble[0].no;
        yesCost = pricesArray.cheapshading[0].scribble[0].dollarOrPercentage + pricesArray.cheapshading[0].scribble[0].yes;
    }

    document.getElementById("noStyleShadingRadioText").innerHTML = `(<span class="xiransgreen">${noCost}</span>)`;
    document.getElementById("yesStyleShadingRadioText").innerHTML = `(<span class="xiransgreen">${yesCost}</span>)`;

    document.getElementById("styleShadingIDValue").classList.remove("d-none");

    for (var i = 0; i < styleShadingRadio.length; i++) {
        if (styleShadingRadio[i].checked) {
            if (styleShadingRadio[i].value == "no") {
                content = noCost;
            }
            else if (styleShadingRadio[i].value == "yes") {
                content = yesCost;
            }
        }
    }

    if (content == "") {
        document.getElementById("styleShadingIDValue").classList.add("d-none");
    } else {
        document.getElementById("styleShadingIDValue").classList.remove("d-none");
        document.getElementById("styleShadingIDValue").innerText = content;
    }
}

function hideStyleShading(){
    styleShading.classList.add("d-none");
    document.getElementById("styleShadingIDValue").classList.add("d-none");
}

function updateStyleShowShadingPriceAndCallOtherFunctions() {
    styleShading = document.getElementById("styleShadingID");

    updateBodyButtons();
    updateBodyPrice();
    updateAmountCharactersButtons();
    updateAmountCharactersPrice();

    if (style.value == "choose") {
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

function enableBodyButton(i){
    bodyButtons[i].classList.remove("disabled");
    bodyButtons[i].classList.remove("disabledd");
}

function disableBodyButton(i){
    bodyButtons[i].classList.add("disabled");
    bodyButtons[i].classList.add("disabledd");
}

function updateBodyButtons() {
    let portraitText = document.getElementById("portraitText");
    let halfbodyText = document.getElementById("halfbodyText");
    let thighsupText = document.getElementById("thigh-upText");
    let fullbodyText = document.getElementById("fullbodyText");
    let otherText = document.getElementById("otherText");

    for (let i=0;i<bodyRadio.length;i++){
        if (bodyRadio[i].checked){
            bodyButtons[i].classList.add("active");
        }
    }

    if (style.value == "choose") {
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
        if (pricesArray.body[0].portrait[0].cleanColors[0].isItPossible) {
            portraitText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body[0].portrait[0].cleanColors[0].dollarOrPercentage + pricesArray.body[0].portrait[0].cleanColors[0].value}</span>`;
            enableBodyButton(0);
        } else {
            portraitText.innerHTML = ``;
            disableBodyButton(0);
        }

        if (pricesArray.body[0].halfbody[0].cleanColors[0].isItPossible) {
            halfbodyText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body[0].halfbody[0].cleanColors[0].dollarOrPercentage + pricesArray.body[0].halfbody[0].cleanColors[0].value}</span>`;
            enableBodyButton(1);
        } else {
            halfbodyText.innerHTML = ``;
            disableBodyButton(1);
        }

        if (pricesArray.body[0].thighs[0].cleanColors[0].isItPossible) {
            thighsupText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body[0].thighs[0].cleanColors[0].dollarOrPercentage + pricesArray.body[0].thighs[0].cleanColors[0].value}</span>`;
            enableBodyButton(2);
        } else {
            thighsupText.innerHTML = ``;
            disableBodyButton(2);
        }

        if (pricesArray.body[0].full[0].cleanColors[0].isItPossible) {
            fullbodyText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body[0].full[0].cleanColors[0].dollarOrPercentage + pricesArray.body[0].full[0].cleanColors[0].value}</span>`;
            enableBodyButton(3);
        } else {
            fullbodyText.innerHTML = ``;
            disableBodyButton(3);
        }

        if (pricesArray.body[0].other[0].cleanColors[0].isItPossible) {
            otherText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body[0].other[0].cleanColors[0].dollarOrPercentage + pricesArray.body[0].other[0].cleanColors[0].value}</span>`;
            enableBodyButton(4);
        } else {
            otherText.innerHTML = ``;
            disableBodyButton(4);
        }
    } 
    
    else if (style.value == "hybrid") {
        if (pricesArray.body[0].portrait[0].hybrid[0].isItPossible) {
            portraitText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body[0].portrait[0].hybrid[0].dollarOrPercentage + pricesArray.body[0].portrait[0].hybrid[0].value}</span>`;
            enableBodyButton(0);
        } else {
            portraitText.innerHTML = ``;
            disableBodyButton(0);
        }

        if (pricesArray.body[0].halfbody[0].hybrid[0].isItPossible) {
            halfbodyText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body[0].halfbody[0].hybrid[0].dollarOrPercentage + pricesArray.body[0].halfbody[0].hybrid[0].value}</span>`;
            enableBodyButton(1);
        } else {
            halfbodyText.innerHTML = ``;
            disableBodyButton(1);
        }

        if (pricesArray.body[0].thighs[0].hybrid[0].isItPossible) {
            thighsupText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body[0].thighs[0].hybrid[0].dollarOrPercentage + pricesArray.body[0].thighs[0].hybrid[0].value}</span>`;
            enableBodyButton(2);
        } else {
            thighsupText.innerHTML = ``;
            disableBodyButton(2);
        }

        if (pricesArray.body[0].full[0].hybrid[0].isItPossible) {
            fullbodyText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body[0].full[0].hybrid[0].dollarOrPercentage + pricesArray.body[0].full[0].hybrid[0].value}</span>`;
            enableBodyButton(3);
        } else {
            fullbodyText.innerHTML = ``;
            disableBodyButton(3);
        }

        if (pricesArray.body[0].other[0].hybrid[0].isItPossible) {
            otherText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body[0].other[0].hybrid[0].dollarOrPercentage + pricesArray.body[0].other[0].hybrid[0].value}</span>`;
            enableBodyButton(4);
        } else {
            otherText.innerHTML = ``;
            disableBodyButton(4);
        }
    } 
    
    else if (style.value == "coloredSketch") {
        if (pricesArray.body[0].portrait[0].coloredSketch[0].isItPossible) {
            portraitText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body[0].portrait[0].coloredSketch[0].dollarOrPercentage + pricesArray.body[0].portrait[0].coloredSketch[0].value}</span>`;
            enableBodyButton(0);
        } else {
            portraitText.innerHTML = ``;
            disableBodyButton(0);
        }

        if (pricesArray.body[0].halfbody[0].coloredSketch[0].isItPossible) {
            halfbodyText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body[0].halfbody[0].coloredSketch[0].dollarOrPercentage + pricesArray.body[0].halfbody[0].coloredSketch[0].value}</span>`;
            enableBodyButton(1);
        } else {
            halfbodyText.innerHTML = ``;
            disableBodyButton(1);
        }

        if (pricesArray.body[0].thighs[0].coloredSketch[0].isItPossible) {
            thighsupText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body[0].thighs[0].coloredSketch[0].dollarOrPercentage + pricesArray.body[0].thighs[0].coloredSketch[0].value}</span>`;
            enableBodyButton(2);
        } else {
            thighsupText.innerHTML = ``;
            disableBodyButton(2);
        }

        if (pricesArray.body[0].full[0].coloredSketch[0].isItPossible) {
            fullbodyText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body[0].full[0].coloredSketch[0].dollarOrPercentage + pricesArray.body[0].full[0].coloredSketch[0].value}</span>`;
            enableBodyButton(3);
        } else {
            fullbodyText.innerHTML = ``;
            disableBodyButton(3);
        }

        if (pricesArray.body[0].other[0].coloredSketch[0].isItPossible) {
            otherText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body[0].other[0].coloredSketch[0].dollarOrPercentage + pricesArray.body[0].other[0].coloredSketch[0].value}</span>`;
            enableBodyButton(4);
        } else {
            otherText.innerHTML = ``;
            disableBodyButton(4);
        }
    } 
    
    else if (style.value == "emote") {
        if (pricesArray.body[0].portrait[0].emote[0].isItPossible) {
            portraitText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body[0].portrait[0].emote[0].dollarOrPercentage + pricesArray.body[0].portrait[0].emote[0].value}</span>`;
            enableBodyButton(0);
        } else {
            portraitText.innerHTML = ``;
            disableBodyButton(0);
        }

        if (pricesArray.body[0].halfbody[0].emote[0].isItPossible) {
            halfbodyText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body[0].halfbody[0].emote[0].dollarOrPercentage + pricesArray.body[0].halfbody[0].emote[0].value}</span>`;
            enableBodyButton(1);
        } else {
            halfbodyText.innerHTML = ``;
            disableBodyButton(1);
        }

        if (pricesArray.body[0].thighs[0].emote[0].isItPossible) {
            thighsupText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body[0].thighs[0].emote[0].dollarOrPercentage + pricesArray.body[0].thighs[0].emote[0].value}</span>`;
            enableBodyButton(2);
        } else {
            thighsupText.innerHTML = ``;
            disableBodyButton(2);
        }

        if (pricesArray.body[0].full[0].emote[0].isItPossible) {
            fullbodyText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body[0].full[0].emote[0].dollarOrPercentage + pricesArray.body[0].full[0].emote[0].value}</span>`;
            enableBodyButton(3);
        } else {
            fullbodyText.innerHTML = ``;
            disableBodyButton(3);
        }

        if (pricesArray.body[0].other[0].emote[0].isItPossible) {
            otherText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body[0].other[0].emote[0].dollarOrPercentage + pricesArray.body[0].other[0].emote[0].value}</span>`;
            enableBodyButton(4);
        } else {
            otherText.innerHTML = ``;
            disableBodyButton(4);
        }
    } 
    
    else if (style.value == "sketch") {
        if (pricesArray.body[0].portrait[0].sketch[0].isItPossible) {
            portraitText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body[0].portrait[0].sketch[0].dollarOrPercentage + pricesArray.body[0].portrait[0].sketch[0].value}</span>`;
            enableBodyButton(0);
        } else {
            portraitText.innerHTML = ``;
            disableBodyButton(0);
        }

        if (pricesArray.body[0].halfbody[0].sketch[0].isItPossible) {
            halfbodyText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body[0].halfbody[0].sketch[0].dollarOrPercentage + pricesArray.body[0].halfbody[0].sketch[0].value}</span>`;
            enableBodyButton(1);
        } else {
            halfbodyText.innerHTML = ``;
            disableBodyButton(1);
        }

        if (pricesArray.body[0].thighs[0].sketch[0].isItPossible) {
            thighsupText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body[0].thighs[0].sketch[0].dollarOrPercentage + pricesArray.body[0].thighs[0].sketch[0].value}</span>`;
            enableBodyButton(2);
        } else {
            thighsupText.innerHTML = ``;
            disableBodyButton(2);
        }

        if (pricesArray.body[0].full[0].sketch[0].isItPossible) {
            fullbodyText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body[0].full[0].sketch[0].dollarOrPercentage + pricesArray.body[0].full[0].sketch[0].value}</span>`;
            enableBodyButton(3);
        } else {
            fullbodyText.innerHTML = ``;
            disableBodyButton(3);
        }

        if (pricesArray.body[0].other[0].sketch[0].isItPossible) {
            otherText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body[0].other[0].sketch[0].dollarOrPercentage + pricesArray.body[0].other[0].sketch[0].value}</span>`;
            enableBodyButton(4);
        } else {
            otherText.innerHTML = ``;
            disableBodyButton(4);
        }
    } 
    
    else if (style.value == "doodle") {
        if (pricesArray.body[0].portrait[0].doodle[0].isItPossible) {
            portraitText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body[0].portrait[0].doodle[0].dollarOrPercentage + pricesArray.body[0].portrait[0].doodle[0].value}</span>`;
            enableBodyButton(0);
        } else {
            portraitText.innerHTML = ``;
            disableBodyButton(0);
        }

        if (pricesArray.body[0].halfbody[0].doodle[0].isItPossible) {
            halfbodyText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body[0].halfbody[0].doodle[0].dollarOrPercentage + pricesArray.body[0].halfbody[0].doodle[0].value}</span>`;
            enableBodyButton(1);
        } else {
            halfbodyText.innerHTML = ``;
            disableBodyButton(1);
        }

        if (pricesArray.body[0].thighs[0].doodle[0].isItPossible) {
            thighsupText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body[0].thighs[0].doodle[0].dollarOrPercentage + pricesArray.body[0].thighs[0].doodle[0].value}</span>`;
            enableBodyButton(2);
        } else {
            thighsupText.innerHTML = ``;
            disableBodyButton(2);
        }

        if (pricesArray.body[0].full[0].doodle[0].isItPossible) {
            fullbodyText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body[0].full[0].doodle[0].dollarOrPercentage + pricesArray.body[0].full[0].doodle[0].value}</span>`;
            enableBodyButton(3);
        } else {
            fullbodyText.innerHTML = ``;
            disableBodyButton(3);
        }

        if (pricesArray.body[0].other[0].doodle[0].isItPossible) {
            otherText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body[0].other[0].doodle[0].dollarOrPercentage + pricesArray.body[0].other[0].doodle[0].value}</span>`;
            enableBodyButton(4);
        } else {
            otherText.innerHTML = ``;
            disableBodyButton(4);
        }
    } 
    
    else if (style.value == "scribble") {
        if (pricesArray.body[0].portrait[0].scribble[0].isItPossible) {
            portraitText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body[0].portrait[0].scribble[0].dollarOrPercentage + pricesArray.body[0].portrait[0].scribble[0].value}</span>`;
            enableBodyButton(0);
        } else {
            portraitText.innerHTML = ``;
            disableBodyButton(0);
        }

        if (pricesArray.body[0].halfbody[0].scribble[0].isItPossible) {
            halfbodyText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body[0].halfbody[0].scribble[0].dollarOrPercentage + pricesArray.body[0].halfbody[0].scribble[0].value}</span>`;
            enableBodyButton(1);
        } else {
            halfbodyText.innerHTML = ``;
            disableBodyButton(1);
        }

        if (pricesArray.body[0].thighs[0].scribble[0].isItPossible) {
            thighsupText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body[0].thighs[0].scribble[0].dollarOrPercentage + pricesArray.body[0].thighs[0].scribble[0].value}</span>`;
            enableBodyButton(2);
        } else {
            thighsupText.innerHTML = ``;
            disableBodyButton(2);
        }

        if (pricesArray.body[0].full[0].scribble[0].isItPossible) {
            fullbodyText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body[0].full[0].scribble[0].dollarOrPercentage + pricesArray.body[0].full[0].scribble[0].value}</span>`;
            enableBodyButton(3);
        } else {
            fullbodyText.innerHTML = ``;
            disableBodyButton(3);
        }

        if (pricesArray.body[0].other[0].scribble[0].isItPossible) {
            otherText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body[0].other[0].scribble[0].dollarOrPercentage + pricesArray.body[0].other[0].scribble[0].value}</span>`;
            enableBodyButton(4);
        } else {
            otherText.innerHTML = ``;
            disableBodyButton(4);
        }
    } 
    
    else if (style.value == "logo") {
        if (pricesArray.body[0].portrait[0].logo[0].isItPossible) {
            portraitText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body[0].portrait[0].logo[0].dollarOrPercentage + pricesArray.body[0].portrait[0].logo[0].value}</span>`;
            enableBodyButton(0);
        } else {
            portraitText.innerHTML = ``;
            disableBodyButton(0);
        }

        if (pricesArray.body[0].halfbody[0].logo[0].isItPossible) {
            halfbodyText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body[0].halfbody[0].logo[0].dollarOrPercentage + pricesArray.body[0].halfbody[0].logo[0].value}</span>`;
            enableBodyButton(1);
        } else {
            halfbodyText.innerHTML = ``;
            disableBodyButton(1);
        }

        if (pricesArray.body[0].thighs[0].logo[0].isItPossible) {
            thighsupText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body[0].thighs[0].logo[0].dollarOrPercentage + pricesArray.body[0].thighs[0].logo[0].value}</span>`;
            enableBodyButton(2);
        } else {
            thighsupText.innerHTML = ``;
            disableBodyButton(2);
        }

        if (pricesArray.body[0].full[0].logo[0].isItPossible) {
            fullbodyText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body[0].full[0].logo[0].dollarOrPercentage + pricesArray.body[0].full[0].logo[0].value}</span>`;
            enableBodyButton(3);
        } else {
            fullbodyText.innerHTML = ``;
            disableBodyButton(3);
        }

        if (pricesArray.body[0].other[0].logo[0].isItPossible) {
            otherText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body[0].other[0].logo[0].dollarOrPercentage + pricesArray.body[0].other[0].logo[0].value}</span>`;
            enableBodyButton(4);
        } else {
            otherText.innerHTML = ``;
            disableBodyButton(4);
        }
    } 
    
    else if (style.value == "other") {
        if (pricesArray.body[0].portrait[0].other[0].isItPossible) {
            portraitText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body[0].portrait[0].other[0].dollarOrPercentage + pricesArray.body[0].portrait[0].other[0].value}</span>`;
            enableBodyButton(0);
        } else {
            portraitText.innerHTML = ``;
            disableBodyButton(0);
        }

        if (pricesArray.body[0].halfbody[0].other[0].isItPossible) {
            halfbodyText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body[0].halfbody[0].other[0].dollarOrPercentage + pricesArray.body[0].halfbody[0].other[0].value}</span>`;
            enableBodyButton(1);
        } else {
            halfbodyText.innerHTML = ``;
            disableBodyButton(1);
        }

        if (pricesArray.body[0].thighs[0].other[0].isItPossible) {
            thighsupText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body[0].thighs[0].other[0].dollarOrPercentage + pricesArray.body[0].thighs[0].other[0].value}</span>`;
            enableBodyButton(2);
        } else {
            thighsupText.innerHTML = ``;
            disableBodyButton(2);
        }

        if (pricesArray.body[0].full[0].other[0].isItPossible) {
            fullbodyText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body[0].full[0].other[0].dollarOrPercentage + pricesArray.body[0].full[0].other[0].value}</span>`;
            enableBodyButton(3);
        } else {
            fullbodyText.innerHTML = ``;
            disableBodyButton(3);
        }

        if (pricesArray.body[0].other[0].other[0].isItPossible) {
            otherText.innerHTML = `<br><span class="xiransgreen">${pricesArray.body[0].other[0].other[0].dollarOrPercentage + pricesArray.body[0].other[0].other[0].value}</span>`;
            enableBodyButton(4);
        } else {
            otherText.innerHTML = ``;
            disableBodyButton(4);
        }
    }
}

function updateBodyPrice() {
    let bodyContent = "";

    for (var i = 0; i < bodyRadio.length; i++) {
        if (bodyRadio[i].checked) {
            if (bodyRadio[i].value == "portrait") {
                if (style.value == "cleanColors") {
                    if (pricesArray.body[0].portrait[0].cleanColors[0].isItPossible){
                        bodyContent = pricesArray.body[0].portrait[0].cleanColors[0].dollarOrPercentage + pricesArray.body[0].portrait[0].cleanColors[0].value;
                    }
                } else if (style.value == "hybrid") {
                    if (pricesArray.body[0].portrait[0].hybrid[0].isItPossible){
                        bodyContent = pricesArray.body[0].portrait[0].hybrid[0].dollarOrPercentage + pricesArray.body[0].portrait[0].hybrid[0].value;
                    }
                } else if (style.value == "coloredSketch") {
                    if (pricesArray.body[0].portrait[0].coloredSketch[0].isItPossible){
                        bodyContent = pricesArray.body[0].portrait[0].coloredSketch[0].dollarOrPercentage + pricesArray.body[0].portrait[0].coloredSketch[0].value;
                    }
                } else if (style.value == "emote") {
                    if (pricesArray.body[0].portrait[0].emote[0].isItPossible){
                        bodyContent = pricesArray.body[0].portrait[0].emote[0].dollarOrPercentage + pricesArray.body[0].portrait[0].emote[0].value;
                    }
                } else if (style.value == "sketch") {
                    if (pricesArray.body[0].portrait[0].sketch[0].isItPossible){
                        bodyContent = pricesArray.body[0].portrait[0].sketch[0].dollarOrPercentage + pricesArray.body[0].portrait[0].sketch[0].value;
                    }
                } else if (style.value == "doodle") {
                    if (pricesArray.body[0].portrait[0].doodle[0].isItPossible){
                        bodyContent = pricesArray.body[0].portrait[0].doodle[0].dollarOrPercentage + pricesArray.body[0].portrait[0].doodle[0].value;
                    }
                } else if (style.value == "scribble") {
                    if (pricesArray.body[0].portrait[0].scribble[0].isItPossible){
                        bodyContent = pricesArray.body[0].portrait[0].scribble[0].dollarOrPercentage + pricesArray.body[0].portrait[0].scribble[0].value;
                    }
                } else if (style.value == "logo") {
                    if (pricesArray.body[0].portrait[0].logo[0].isItPossible){
                        bodyContent = pricesArray.body[0].portrait[0].logo[0].dollarOrPercentage + pricesArray.body[0].portrait[0].logo[0].value;
                    }
                } else if (style.value == "other") {
                    if (pricesArray.body[0].portrait[0].other[0].isItPossible){
                        bodyContent = pricesArray.body[0].portrait[0].other[0].dollarOrPercentage + pricesArray.body[0].portrait[0].other[0].value;
                    }
                }
            }
            else if (bodyRadio[i].value == "halfbody") {
                if (style.value == "cleanColors") {
                    if (pricesArray.body[0].halfbody[0].cleanColors[0].isItPossible){
                        bodyContent = pricesArray.body[0].halfbody[0].cleanColors[0].dollarOrPercentage + pricesArray.body[0].halfbody[0].cleanColors[0].value;
                    }
                } else if (style.value == "hybrid") {
                    if (pricesArray.body[0].halfbody[0].hybrid[0].isItPossible){
                        bodyContent = pricesArray.body[0].halfbody[0].hybrid[0].dollarOrPercentage + pricesArray.body[0].halfbody[0].hybrid[0].value;
                    }
                } else if (style.value == "coloredSketch") {
                    if (pricesArray.body[0].halfbody[0].coloredSketch[0].isItPossible){
                        bodyContent = pricesArray.body[0].halfbody[0].coloredSketch[0].dollarOrPercentage + pricesArray.body[0].halfbody[0].coloredSketch[0].value;
                    }
                } else if (style.value == "emote") {
                    if (pricesArray.body[0].halfbody[0].emote[0].isItPossible){
                        bodyContent = pricesArray.body[0].halfbody[0].emote[0].dollarOrPercentage + pricesArray.body[0].halfbody[0].emote[0].value;
                    }
                } else if (style.value == "sketch") {
                    if (pricesArray.body[0].halfbody[0].sketch[0].isItPossible){
                        bodyContent = pricesArray.body[0].halfbody[0].sketch[0].dollarOrPercentage + pricesArray.body[0].halfbody[0].sketch[0].value;
                    }
                } else if (style.value == "doodle") {
                    if (pricesArray.body[0].halfbody[0].doodle[0].isItPossible){
                        bodyContent = pricesArray.body[0].halfbody[0].doodle[0].dollarOrPercentage + pricesArray.body[0].halfbody[0].doodle[0].value;
                    }
                } else if (style.value == "scribble") {
                    if (pricesArray.body[0].halfbody[0].scribble[0].isItPossible){
                        bodyContent = pricesArray.body[0].halfbody[0].scribble[0].dollarOrPercentage + pricesArray.body[0].halfbody[0].scribble[0].value;
                    }
                } else if (style.value == "logo") {
                    if (pricesArray.body[0].halfbody[0].logo[0].isItPossible){
                        bodyContent = pricesArray.body[0].halfbody[0].logo[0].dollarOrPercentage + pricesArray.body[0].halfbody[0].logo[0].value;
                    }
                } else if (style.value == "other") {
                    if (pricesArray.body[0].halfbody[0].other[0].isItPossible){
                        bodyContent = pricesArray.body[0].halfbody[0].other[0].dollarOrPercentage + pricesArray.body[0].halfbody[0].other[0].value;
                    }
                }
            }
            else if (bodyRadio[i].value == "thighs") {
                if (style.value == "cleanColors") {
                    if (pricesArray.body[0].thighs[0].cleanColors[0].isItPossible){
                        bodyContent = pricesArray.body[0].thighs[0].cleanColors[0].dollarOrPercentage + pricesArray.body[0].thighs[0].cleanColors[0].value;
                    }
                } else if (style.value == "hybrid") {
                    if (pricesArray.body[0].thighs[0].hybrid[0].isItPossible){
                        bodyContent = pricesArray.body[0].thighs[0].hybrid[0].dollarOrPercentage + pricesArray.body[0].thighs[0].hybrid[0].value;
                    }
                } else if (style.value == "coloredSketch") {
                    if (pricesArray.body[0].thighs[0].coloredSketch[0].isItPossible){
                        bodyContent = pricesArray.body[0].thighs[0].coloredSketch[0].dollarOrPercentage + pricesArray.body[0].thighs[0].coloredSketch[0].value;
                    }
                } else if (style.value == "emote") {
                    if (pricesArray.body[0].thighs[0].emote[0].isItPossible){
                        bodyContent = pricesArray.body[0].thighs[0].emote[0].dollarOrPercentage + pricesArray.body[0].thighs[0].emote[0].value;
                    }
                } else if (style.value == "sketch") {
                    if (pricesArray.body[0].thighs[0].sketch[0].isItPossible){
                        bodyContent = pricesArray.body[0].thighs[0].sketch[0].dollarOrPercentage + pricesArray.body[0].thighs[0].sketch[0].value;
                    }
                } else if (style.value == "doodle") {
                    if (pricesArray.body[0].thighs[0].doodle[0].isItPossible){
                        bodyContent = pricesArray.body[0].thighs[0].doodle[0].dollarOrPercentage + pricesArray.body[0].thighs[0].doodle[0].value;
                    }
                } else if (style.value == "scribble") {
                    if (pricesArray.body[0].thighs[0].scribble[0].isItPossible){
                        bodyContent = pricesArray.body[0].thighs[0].scribble[0].dollarOrPercentage + pricesArray.body[0].thighs[0].scribble[0].value;
                    }
                } else if (style.value == "logo") {
                    if (pricesArray.body[0].thighs[0].logo[0].isItPossible){
                        bodyContent = pricesArray.body[0].thighs[0].logo[0].dollarOrPercentage + pricesArray.body[0].thighs[0].logo[0].value;
                    }
                } else if (style.value == "other") {
                    if (pricesArray.body[0].thighs[0].other[0].isItPossible){
                        bodyContent = pricesArray.body[0].thighs[0].other[0].dollarOrPercentage + pricesArray.body[0].thighs[0].other[0].value;
                    }
                }
            }
            else if (bodyRadio[i].value == "fullbody") {
                if (style.value == "cleanColors") {
                    if (pricesArray.body[0].full[0].cleanColors[0].isItPossible){
                        bodyContent = pricesArray.body[0].full[0].cleanColors[0].dollarOrPercentage + pricesArray.body[0].full[0].cleanColors[0].value;
                    }
                } else if (style.value == "hybrid") {
                    if (pricesArray.body[0].full[0].hybrid[0].isItPossible){
                        bodyContent = pricesArray.body[0].full[0].hybrid[0].dollarOrPercentage + pricesArray.body[0].full[0].hybrid[0].value;
                    }
                } else if (style.value == "coloredSketch") {
                    if (pricesArray.body[0].full[0].coloredSketch[0].isItPossible){
                        bodyContent = pricesArray.body[0].full[0].coloredSketch[0].dollarOrPercentage + pricesArray.body[0].full[0].coloredSketch[0].value;
                    }
                } else if (style.value == "emote") {
                    if (pricesArray.body[0].full[0].emote[0].isItPossible){
                        bodyContent = pricesArray.body[0].full[0].emote[0].dollarOrPercentage + pricesArray.body[0].full[0].emote[0].value;
                    }
                } else if (style.value == "sketch") {
                    if (pricesArray.body[0].full[0].sketch[0].isItPossible){
                        bodyContent = pricesArray.body[0].full[0].sketch[0].dollarOrPercentage + pricesArray.body[0].full[0].sketch[0].value;
                    }
                } else if (style.value == "doodle") {
                    if (pricesArray.body[0].full[0].doodle[0].isItPossible){
                        bodyContent = pricesArray.body[0].full[0].doodle[0].dollarOrPercentage + pricesArray.body[0].full[0].doodle[0].value;
                    }
                } else if (style.value == "scribble") {
                    if (pricesArray.body[0].full[0].scribble[0].isItPossible){
                        bodyContent = pricesArray.body[0].full[0].scribble[0].dollarOrPercentage + pricesArray.body[0].full[0].scribble[0].value;
                    }
                } else if (style.value == "logo") {
                    if (pricesArray.body[0].full[0].logo[0].isItPossible){
                        bodyContent = pricesArray.body[0].full[0].logo[0].dollarOrPercentage + pricesArray.body[0].full[0].logo[0].value;
                    }
                } else if (style.value == "other") {
                    if (pricesArray.body[0].full[0].other[0].isItPossible){
                        bodyContent = pricesArray.body[0].full[0].other[0].dollarOrPercentage + pricesArray.body[0].full[0].other[0].value;
                    }
                }
            }
            else if (bodyRadio[i].value == "other") {
                if (style.value == "cleanColors") {
                    if (pricesArray.body[0].other[0].cleanColors[0].isItPossible){
                        bodyContent = pricesArray.body[0].other[0].cleanColors[0].dollarOrPercentage + pricesArray.body[0].other[0].cleanColors[0].value;
                    }
                } else if (style.value == "hybrid") {
                    if (pricesArray.body[0].other[0].hybrid[0].isItPossible){
                        bodyContent = pricesArray.body[0].other[0].hybrid[0].dollarOrPercentage + pricesArray.body[0].other[0].hybrid[0].value;
                    }
                } else if (style.value == "coloredSketch") {
                    if (pricesArray.body[0].other[0].coloredSketch[0].isItPossible){
                        bodyContent = pricesArray.body[0].other[0].coloredSketch[0].dollarOrPercentage + pricesArray.body[0].other[0].coloredSketch[0].value;
                    }
                } else if (style.value == "emote") {
                    if (pricesArray.body[0].other[0].emote[0].isItPossible){
                        bodyContent = pricesArray.body[0].other[0].emote[0].dollarOrPercentage + pricesArray.body[0].other[0].emote[0].value;
                    }
                } else if (style.value == "sketch") {
                    if (pricesArray.body[0].other[0].sketch[0].isItPossible){
                        bodyContent = pricesArray.body[0].other[0].sketch[0].dollarOrPercentage + pricesArray.body[0].other[0].sketch[0].value;
                    }
                } else if (style.value == "doodle") {
                    if (pricesArray.body[0].other[0].doodle[0].isItPossible){
                        bodyContent = pricesArray.body[0].other[0].doodle[0].dollarOrPercentage + pricesArray.body[0].other[0].doodle[0].value;
                    }
                } else if (style.value == "scribble") {
                    if (pricesArray.body[0].other[0].scribble[0].isItPossible){
                        bodyContent = pricesArray.body[0].other[0].scribble[0].dollarOrPercentage + pricesArray.body[0].other[0].scribble[0].value;
                    }
                } else if (style.value == "logo") {
                    if (pricesArray.body[0].other[0].logo[0].isItPossible){
                        bodyContent = pricesArray.body[0].other[0].logo[0].dollarOrPercentage + pricesArray.body[0].other[0].logo[0].value;
                    }
                } else if (style.value == "other") {
                    if (pricesArray.body[0].other[0].other[0].isItPossible){
                        bodyContent = pricesArray.body[0].other[0].other[0].dollarOrPercentage + pricesArray.body[0].other[0].other[0].value;
                    }
                }
            }
        }
    }

    if (bodyContent == "") {
        document.getElementById("bodyIDValue").classList.add("d-none");
    } else {
        document.getElementById("bodyIDValue").classList.remove("d-none");
        document.getElementById("bodyIDValue").innerText = bodyContent;
    }
}

function enableAmountCharactersButton(i){
    amountCharactersButtons[i].classList.remove("disabled");
    amountCharactersButtons[i].classList.remove("disabledd");
}

function disableAmountCharactersButton(i){
    amountCharactersButtons[i].classList.add("disabled");
    amountCharactersButtons[i].classList.add("disabledd");
}

function updateAmountCharactersButtons() {
    let oneText = document.getElementById("oneText");
    let twoText = document.getElementById("twoText");
    let threeText = document.getElementById("threeText");
    let fourText = document.getElementById("fourText");

    for (let i=0;i<amountCharactersRadio.length;i++){
        if (amountCharactersRadio[i].checked){
            amountCharactersButtons[i].classList.add("active");
        }
    }

    if (style.value == "choose") {
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
        if (pricesArray.amountcharacters[0].one[0].cleanColors[0].isItPossible) {
            oneText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters[0].one[0].cleanColors[0].value - 100) + pricesArray.amountcharacters[0].one[0].cleanColors[0].dollarOrPercentage}</span>`;
            enableAmountCharactersButton(0);
        } else {
            oneText.innerHTML = ``;
            disableAmountCharactersButton(0);
        }

        if (pricesArray.amountcharacters[0].two[0].cleanColors[0].isItPossible) {
            twoText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters[0].two[0].cleanColors[0].value - 100) + pricesArray.amountcharacters[0].two[0].cleanColors[0].dollarOrPercentage}</span>`;
            enableAmountCharactersButton(1);
        } else {
            twoText.innerHTML = ``;
            disableAmountCharactersButton(1);
        }

        if (pricesArray.amountcharacters[0].three[0].cleanColors[0].isItPossible) {
            threeText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters[0].three[0].cleanColors[0].value - 100) + pricesArray.amountcharacters[0].three[0].cleanColors[0].dollarOrPercentage}</span>`;
            enableAmountCharactersButton(2);
        } else {
            threeText.innerHTML = ``;
            disableAmountCharactersButton(2);
        }

        if (pricesArray.amountcharacters[0].four[0].cleanColors[0].isItPossible) {
            fourText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters[0].four[0].cleanColors[0].value - 100) + pricesArray.amountcharacters[0].four[0].cleanColors[0].dollarOrPercentage}</span>`;
            enableAmountCharactersButton(3);
        } else {
            fourText.innerHTML = ``;
            disableAmountCharactersButton(3);
        }
    } 
    
    else if (style.value == "hybrid") {
        if (pricesArray.amountcharacters[0].one[0].hybrid[0].isItPossible) {
            oneText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters[0].one[0].hybrid[0].value - 100) + pricesArray.amountcharacters[0].one[0].hybrid[0].dollarOrPercentage}</span>`;
            enableAmountCharactersButton(0);
        } else {
            oneText.innerHTML = ``;
            disableAmountCharactersButton(0);
        }

        if (pricesArray.amountcharacters[0].two[0].hybrid[0].isItPossible) {
            twoText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters[0].two[0].hybrid[0].value - 100) + pricesArray.amountcharacters[0].two[0].hybrid[0].dollarOrPercentage}</span>`;
            enableAmountCharactersButton(1);
        } else {
            twoText.innerHTML = ``;
            disableAmountCharactersButton(1);
        }

        if (pricesArray.amountcharacters[0].three[0].hybrid[0].isItPossible) {
            threeText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters[0].three[0].hybrid[0].value - 100) + pricesArray.amountcharacters[0].three[0].hybrid[0].dollarOrPercentage}</span>`;
            enableAmountCharactersButton(2);
        } else {
            threeText.innerHTML = ``;
            disableAmountCharactersButton(2);
        }

        if (pricesArray.amountcharacters[0].four[0].hybrid[0].isItPossible) {
            fourText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters[0].four[0].hybrid[0].value - 100) + pricesArray.amountcharacters[0].four[0].hybrid[0].dollarOrPercentage}</span>`;
            enableAmountCharactersButton(3);
        } else {
            fourText.innerHTML = ``;
            disableAmountCharactersButton(3);
        }
    } 
    
    else if (style.value == "coloredSketch") {
        if (pricesArray.amountcharacters[0].one[0].coloredSketch[0].isItPossible) {
            oneText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters[0].one[0].coloredSketch[0].value - 100) + pricesArray.amountcharacters[0].one[0].coloredSketch[0].dollarOrPercentage}</span>`;
            enableAmountCharactersButton(0);
        } else {
            oneText.innerHTML = ``;
            disableAmountCharactersButton(0);
        }

        if (pricesArray.amountcharacters[0].two[0].coloredSketch[0].isItPossible) {
            twoText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters[0].two[0].coloredSketch[0].value - 100) + pricesArray.amountcharacters[0].two[0].coloredSketch[0].dollarOrPercentage}</span>`;
            enableAmountCharactersButton(1);
        } else {
            twoText.innerHTML = ``;
            disableAmountCharactersButton(1);
        }

        if (pricesArray.amountcharacters[0].three[0].coloredSketch[0].isItPossible) {
            threeText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters[0].three[0].coloredSketch[0].value - 100) + pricesArray.amountcharacters[0].three[0].coloredSketch[0].dollarOrPercentage}</span>`;
            enableAmountCharactersButton(2);
        } else {
            threeText.innerHTML = ``;
            disableAmountCharactersButton(2);
        }

        if (pricesArray.amountcharacters[0].four[0].coloredSketch[0].isItPossible) {
            fourText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters[0].four[0].coloredSketch[0].value - 100) + pricesArray.amountcharacters[0].four[0].coloredSketch[0].dollarOrPercentage}</span>`;
            enableAmountCharactersButton(3);
        } else {
            fourText.innerHTML = ``;
            disableAmountCharactersButton(3);
        }
    } 
    
    else if (style.value == "emote") {
        if (pricesArray.amountcharacters[0].one[0].emote[0].isItPossible) {
            oneText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters[0].one[0].emote[0].value - 100) + pricesArray.amountcharacters[0].one[0].emote[0].dollarOrPercentage}</span>`;
            enableAmountCharactersButton(0);
        } else {
            oneText.innerHTML = ``;
            disableAmountCharactersButton(0);
        }

        if (pricesArray.amountcharacters[0].two[0].emote[0].isItPossible) {
            twoText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters[0].two[0].emote[0].value - 100) + pricesArray.amountcharacters[0].two[0].emote[0].dollarOrPercentage}</span>`;
            enableAmountCharactersButton(1);
        } else {
            twoText.innerHTML = ``;
            disableAmountCharactersButton(1);
        }

        if (pricesArray.amountcharacters[0].three[0].emote[0].isItPossible) {
            threeText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters[0].three[0].emote[0].value - 100) + pricesArray.amountcharacters[0].three[0].emote[0].dollarOrPercentage}</span>`;
            enableAmountCharactersButton(2);
        } else {
            threeText.innerHTML = ``;
            disableAmountCharactersButton(2);
        }

        if (pricesArray.amountcharacters[0].four[0].emote[0].isItPossible) {
            fourText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters[0].four[0].emote[0].value - 100) + pricesArray.amountcharacters[0].four[0].emote[0].dollarOrPercentage}</span>`;
            enableAmountCharactersButton(3);
        } else {
            fourText.innerHTML = ``;
            disableAmountCharactersButton(3);
        }
    } 
    
    else if (style.value == "sketch") {
        if (pricesArray.amountcharacters[0].one[0].sketch[0].isItPossible) {
            oneText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters[0].one[0].sketch[0].value - 100) + pricesArray.amountcharacters[0].one[0].sketch[0].dollarOrPercentage}</span>`;
            enableAmountCharactersButton(0);
        } else {
            oneText.innerHTML = ``;
            disableAmountCharactersButton(0);
        }

        if (pricesArray.amountcharacters[0].two[0].sketch[0].isItPossible) {
            twoText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters[0].two[0].sketch[0].value - 100) + pricesArray.amountcharacters[0].two[0].sketch[0].dollarOrPercentage}</span>`;
            enableAmountCharactersButton(1);
        } else {
            twoText.innerHTML = ``;
            disableAmountCharactersButton(1);
        }

        if (pricesArray.amountcharacters[0].three[0].sketch[0].isItPossible) {
            threeText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters[0].three[0].sketch[0].value - 100) + pricesArray.amountcharacters[0].three[0].sketch[0].dollarOrPercentage}</span>`;
            enableAmountCharactersButton(2);
        } else {
            threeText.innerHTML = ``;
            disableAmountCharactersButton(2);
        }

        if (pricesArray.amountcharacters[0].four[0].sketch[0].isItPossible) {
            fourText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters[0].four[0].sketch[0].value - 100) + pricesArray.amountcharacters[0].four[0].sketch[0].dollarOrPercentage}</span>`;
            enableAmountCharactersButton(3);
        } else {
            fourText.innerHTML = ``;
            disableAmountCharactersButton(3);
        }
    } 
    
    else if (style.value == "doodle") {
        if (pricesArray.amountcharacters[0].one[0].doodle[0].isItPossible) {
            oneText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters[0].one[0].doodle[0].value - 100) + pricesArray.amountcharacters[0].one[0].doodle[0].dollarOrPercentage}</span>`;
            enableAmountCharactersButton(0);
        } else {
            oneText.innerHTML = ``;
            disableAmountCharactersButton(0);
        }

        if (pricesArray.amountcharacters[0].two[0].doodle[0].isItPossible) {
            twoText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters[0].two[0].doodle[0].value - 100) + pricesArray.amountcharacters[0].two[0].doodle[0].dollarOrPercentage}</span>`;
            enableAmountCharactersButton(1);
        } else {
            twoText.innerHTML = ``;
            disableAmountCharactersButton(1);
        }

        if (pricesArray.amountcharacters[0].three[0].doodle[0].isItPossible) {
            threeText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters[0].three[0].doodle[0].value - 100) + pricesArray.amountcharacters[0].three[0].doodle[0].dollarOrPercentage}</span>`;
            enableAmountCharactersButton(2);
        } else {
            threeText.innerHTML = ``;
            disableAmountCharactersButton(2);
        }

        if (pricesArray.amountcharacters[0].four[0].doodle[0].isItPossible) {
            fourText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters[0].four[0].doodle[0].value - 100) + pricesArray.amountcharacters[0].four[0].doodle[0].dollarOrPercentage}</span>`;
            enableAmountCharactersButton(3);
        } else {
            fourText.innerHTML = ``;
            disableAmountCharactersButton(3);
        }
    } 
    
    else if (style.value == "scribble") {
        if (pricesArray.amountcharacters[0].one[0].scribble[0].isItPossible) {
            oneText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters[0].one[0].scribble[0].value - 100) + pricesArray.amountcharacters[0].one[0].scribble[0].dollarOrPercentage}</span>`;
            enableAmountCharactersButton(0);
        } else {
            oneText.innerHTML = ``;
            disableAmountCharactersButton(0);
        }

        if (pricesArray.amountcharacters[0].two[0].scribble[0].isItPossible) {
            twoText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters[0].two[0].scribble[0].value - 100) + pricesArray.amountcharacters[0].two[0].scribble[0].dollarOrPercentage}</span>`;
            enableAmountCharactersButton(1);
        } else {
            twoText.innerHTML = ``;
            disableAmountCharactersButton(1);
        }

        if (pricesArray.amountcharacters[0].three[0].scribble[0].isItPossible) {
            threeText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters[0].three[0].scribble[0].value - 100) + pricesArray.amountcharacters[0].three[0].scribble[0].dollarOrPercentage}</span>`;
            enableAmountCharactersButton(2);
        } else {
            threeText.innerHTML = ``;
            disableAmountCharactersButton(2);
        }

        if (pricesArray.amountcharacters[0].four[0].scribble[0].isItPossible) {
            fourText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters[0].four[0].scribble[0].value - 100) + pricesArray.amountcharacters[0].four[0].scribble[0].dollarOrPercentage}</span>`;
            enableAmountCharactersButton(3);
        } else {
            fourText.innerHTML = ``;
            disableAmountCharactersButton(3);
        }
    } 
    
    else if (style.value == "logo") {
        if (pricesArray.amountcharacters[0].one[0].logo[0].isItPossible) {
            oneText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters[0].one[0].logo[0].value - 100) + pricesArray.amountcharacters[0].one[0].logo[0].dollarOrPercentage}</span>`;
            enableAmountCharactersButton(0);
        } else {
            oneText.innerHTML = ``;
            disableAmountCharactersButton(0);
        }

        if (pricesArray.amountcharacters[0].two[0].logo[0].isItPossible) {
            twoText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters[0].two[0].logo[0].value - 100) + pricesArray.amountcharacters[0].two[0].logo[0].dollarOrPercentage}</span>`;
            enableAmountCharactersButton(1);
        } else {
            twoText.innerHTML = ``;
            disableAmountCharactersButton(1);
        }

        if (pricesArray.amountcharacters[0].three[0].logo[0].isItPossible) {
            threeText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters[0].three[0].logo[0].value - 100) + pricesArray.amountcharacters[0].three[0].logo[0].dollarOrPercentage}</span>`;
            enableAmountCharactersButton(2);
        } else {
            threeText.innerHTML = ``;
            disableAmountCharactersButton(2);
        }

        if (pricesArray.amountcharacters[0].four[0].logo[0].isItPossible) {
            fourText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters[0].four[0].logo[0].value - 100) + pricesArray.amountcharacters[0].four[0].logo[0].dollarOrPercentage}</span>`;
            enableAmountCharactersButton(3);
        } else {
            fourText.innerHTML = ``;
            disableAmountCharactersButton(3);
        }
    } 
    
    else if (style.value == "other") {
        if (pricesArray.amountcharacters[0].one[0].other[0].isItPossible) {
            oneText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters[0].one[0].other[0].value - 100) + pricesArray.amountcharacters[0].one[0].other[0].dollarOrPercentage}</span>`;
            enableAmountCharactersButton(0);
        } else {
            oneText.innerHTML = ``;
            disableAmountCharactersButton(0);
        }

        if (pricesArray.amountcharacters[0].two[0].other[0].isItPossible) {
            twoText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters[0].two[0].other[0].value - 100) + pricesArray.amountcharacters[0].two[0].other[0].dollarOrPercentage}</span>`;
            enableAmountCharactersButton(1);
        } else {
            twoText.innerHTML = ``;
            disableAmountCharactersButton(1);
        }

        if (pricesArray.amountcharacters[0].three[0].other[0].isItPossible) {
            threeText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters[0].three[0].other[0].value - 100) + pricesArray.amountcharacters[0].three[0].other[0].dollarOrPercentage}</span>`;
            enableAmountCharactersButton(2);
        } else {
            threeText.innerHTML = ``;
            disableAmountCharactersButton(2);
        }

        if (pricesArray.amountcharacters[0].four[0].other[0].isItPossible) {
            fourText.innerHTML = `<br><span class="xiransgreen">+${(pricesArray.amountcharacters[0].four[0].other[0].value - 100) + pricesArray.amountcharacters[0].four[0].other[0].dollarOrPercentage}</span>`;
            enableAmountCharactersButton(3);
        } else {
            fourText.innerHTML = ``;
            disableAmountCharactersButton(3);
        }
    }
}

function updateAmountCharactersPrice() {
    let bodyContent = "";

    for (var i = 0; i < amountCharactersRadio.length; i++) {
        if (amountCharactersRadio[i].checked) {
            if (amountCharactersRadio[i].value == "one") {
                if (style.value == "cleanColors") {
                    if (pricesArray.amountcharacters[0].one[0].cleanColors[0].isItPossible){
                        bodyContent = (pricesArray.amountcharacters[0].one[0].cleanColors[0].value - 100) + pricesArray.amountcharacters[0].one[0].cleanColors[0].dollarOrPercentage;
                    }
                } else if (style.value == "hybrid") {
                    if (pricesArray.amountcharacters[0].one[0].hybrid[0].isItPossible){
                        bodyContent = (pricesArray.amountcharacters[0].one[0].hybrid[0].value - 100) + pricesArray.amountcharacters[0].one[0].hybrid[0].dollarOrPercentage;
                    }
                } else if (style.value == "coloredSketch") {
                    if (pricesArray.amountcharacters[0].one[0].coloredSketch[0].isItPossible){
                        bodyContent = (pricesArray.amountcharacters[0].one[0].coloredSketch[0].value - 100) + pricesArray.amountcharacters[0].one[0].coloredSketch[0].dollarOrPercentage;
                    }
                } else if (style.value == "emote") {
                    if (pricesArray.amountcharacters[0].one[0].emote[0].isItPossible){
                        bodyContent = (pricesArray.amountcharacters[0].one[0].emote[0].value - 100) + pricesArray.amountcharacters[0].one[0].emote[0].dollarOrPercentage;
                    }
                } else if (style.value == "sketch") {
                    if (pricesArray.amountcharacters[0].one[0].sketch[0].isItPossible){
                        bodyContent = (pricesArray.amountcharacters[0].one[0].sketch[0].value - 100) + pricesArray.amountcharacters[0].one[0].sketch[0].dollarOrPercentage;
                    }
                } else if (style.value == "doodle") {
                    if (pricesArray.amountcharacters[0].one[0].doodle[0].isItPossible){
                        bodyContent = (pricesArray.amountcharacters[0].one[0].doodle[0].value - 100) + pricesArray.amountcharacters[0].one[0].doodle[0].dollarOrPercentage;
                    }
                } else if (style.value == "scribble") {
                    if (pricesArray.amountcharacters[0].one[0].scribble[0].isItPossible){
                        bodyContent = (pricesArray.amountcharacters[0].one[0].scribble[0].value - 100) + pricesArray.amountcharacters[0].one[0].scribble[0].dollarOrPercentage;
                    }
                } else if (style.value == "logo") {
                    if (pricesArray.amountcharacters[0].one[0].logo[0].isItPossible){
                        bodyContent = (pricesArray.amountcharacters[0].one[0].logo[0].value - 100) + pricesArray.amountcharacters[0].one[0].logo[0].dollarOrPercentage;
                    }
                } else if (style.value == "other") {
                    if (pricesArray.amountcharacters[0].one[0].other[0].isItPossible){
                        bodyContent = (pricesArray.amountcharacters[0].one[0].other[0].value - 100) + pricesArray.amountcharacters[0].one[0].other[0].dollarOrPercentage;
                    }
                }
            }
            else if (amountCharactersRadio[i].value == "two") {
                if (style.value == "cleanColors") {
                    if (pricesArray.amountcharacters[0].two[0].cleanColors[0].isItPossible){
                        bodyContent = (pricesArray.amountcharacters[0].two[0].cleanColors[0].value - 100) + pricesArray.amountcharacters[0].two[0].cleanColors[0].dollarOrPercentage;
                    }
                } else if (style.value == "hybrid") {
                    if (pricesArray.amountcharacters[0].two[0].hybrid[0].isItPossible){
                        bodyContent = (pricesArray.amountcharacters[0].two[0].hybrid[0].value - 100) + pricesArray.amountcharacters[0].two[0].hybrid[0].dollarOrPercentage;
                    }
                } else if (style.value == "coloredSketch") {
                    if (pricesArray.amountcharacters[0].two[0].coloredSketch[0].isItPossible){
                        bodyContent = (pricesArray.amountcharacters[0].two[0].coloredSketch[0].value - 100) + pricesArray.amountcharacters[0].two[0].coloredSketch[0].dollarOrPercentage;
                    }
                } else if (style.value == "emote") {
                    if (pricesArray.amountcharacters[0].two[0].emote[0].isItPossible){
                        bodyContent = (pricesArray.amountcharacters[0].two[0].emote[0].value - 100) + pricesArray.amountcharacters[0].two[0].emote[0].dollarOrPercentage;
                    }
                } else if (style.value == "sketch") {
                    if (pricesArray.amountcharacters[0].two[0].sketch[0].isItPossible){
                        bodyContent = (pricesArray.amountcharacters[0].two[0].sketch[0].value - 100) + pricesArray.amountcharacters[0].two[0].sketch[0].dollarOrPercentage;
                    }
                } else if (style.value == "doodle") {
                    if (pricesArray.amountcharacters[0].two[0].doodle[0].isItPossible){
                        bodyContent = (pricesArray.amountcharacters[0].two[0].doodle[0].value - 100) + pricesArray.amountcharacters[0].two[0].doodle[0].dollarOrPercentage;
                    }
                } else if (style.value == "scribble") {
                    if (pricesArray.amountcharacters[0].two[0].scribble[0].isItPossible){
                        bodyContent = (pricesArray.amountcharacters[0].two[0].scribble[0].value - 100) + pricesArray.amountcharacters[0].two[0].scribble[0].dollarOrPercentage;
                    }
                } else if (style.value == "logo") {
                    if (pricesArray.amountcharacters[0].two[0].logo[0].isItPossible){
                        bodyContent = (pricesArray.amountcharacters[0].two[0].logo[0].value - 100) + pricesArray.amountcharacters[0].two[0].logo[0].dollarOrPercentage;
                    }
                } else if (style.value == "other") {
                    if (pricesArray.amountcharacters[0].two[0].other[0].isItPossible){
                        bodyContent = (pricesArray.amountcharacters[0].two[0].other[0].value - 100) + pricesArray.amountcharacters[0].two[0].other[0].dollarOrPercentage;
                    }
                }
            }
            else if (amountCharactersRadio[i].value == "three") {
                if (style.value == "cleanColors") {
                    if (pricesArray.amountcharacters[0].three[0].cleanColors[0].isItPossible){
                        bodyContent = (pricesArray.amountcharacters[0].three[0].cleanColors[0].value - 100) + pricesArray.amountcharacters[0].three[0].cleanColors[0].dollarOrPercentage;
                    }
                } else if (style.value == "hybrid") {
                    if (pricesArray.amountcharacters[0].three[0].hybrid[0].isItPossible){
                        bodyContent = (pricesArray.amountcharacters[0].three[0].hybrid[0].value - 100) + pricesArray.amountcharacters[0].three[0].hybrid[0].dollarOrPercentage;
                    }
                } else if (style.value == "coloredSketch") {
                    if (pricesArray.amountcharacters[0].three[0].coloredSketch[0].isItPossible){
                        bodyContent = (pricesArray.amountcharacters[0].three[0].coloredSketch[0].value - 100) + pricesArray.amountcharacters[0].three[0].coloredSketch[0].dollarOrPercentage;
                    }
                } else if (style.value == "emote") {
                    if (pricesArray.amountcharacters[0].three[0].emote[0].isItPossible){
                        bodyContent = (pricesArray.amountcharacters[0].three[0].emote[0].value - 100) + pricesArray.amountcharacters[0].three[0].emote[0].dollarOrPercentage;
                    }
                } else if (style.value == "sketch") {
                    if (pricesArray.amountcharacters[0].three[0].sketch[0].isItPossible){
                        bodyContent = (pricesArray.amountcharacters[0].three[0].sketch[0].value - 100) + pricesArray.amountcharacters[0].three[0].sketch[0].dollarOrPercentage;
                    }
                } else if (style.value == "doodle") {
                    if (pricesArray.amountcharacters[0].three[0].doodle[0].isItPossible){
                        bodyContent = (pricesArray.amountcharacters[0].three[0].doodle[0].value - 100) + pricesArray.amountcharacters[0].three[0].doodle[0].dollarOrPercentage;
                    }
                } else if (style.value == "scribble") {
                    if (pricesArray.amountcharacters[0].three[0].scribble[0].isItPossible){
                        bodyContent = (pricesArray.amountcharacters[0].three[0].scribble[0].value - 100) + pricesArray.amountcharacters[0].three[0].scribble[0].dollarOrPercentage;
                    }
                } else if (style.value == "logo") {
                    if (pricesArray.amountcharacters[0].three[0].logo[0].isItPossible){
                        bodyContent = (pricesArray.amountcharacters[0].three[0].logo[0].value - 100) + pricesArray.amountcharacters[0].three[0].logo[0].dollarOrPercentage;
                    }
                } else if (style.value == "other") {
                    if (pricesArray.amountcharacters[0].three[0].other[0].isItPossible){
                        bodyContent = (pricesArray.amountcharacters[0].three[0].other[0].value - 100) + pricesArray.amountcharacters[0].three[0].other[0].dollarOrPercentage;
                    }
                }
            }
            else if (amountCharactersRadio[i].value == "four") {
                if (style.value == "cleanColors") {
                    if (pricesArray.amountcharacters[0].four[0].cleanColors[0].isItPossible){
                        bodyContent = (pricesArray.amountcharacters[0].four[0].cleanColors[0].value - 100) + pricesArray.amountcharacters[0].four[0].cleanColors[0].dollarOrPercentage;
                    }
                } else if (style.value == "hybrid") {
                    if (pricesArray.amountcharacters[0].four[0].hybrid[0].isItPossible){
                        bodyContent = (pricesArray.amountcharacters[0].four[0].hybrid[0].value - 100) + pricesArray.amountcharacters[0].four[0].hybrid[0].dollarOrPercentage;
                    }
                } else if (style.value == "coloredSketch") {
                    if (pricesArray.amountcharacters[0].four[0].coloredSketch[0].isItPossible){
                        bodyContent = (pricesArray.amountcharacters[0].four[0].coloredSketch[0].value - 100) + pricesArray.amountcharacters[0].four[0].coloredSketch[0].dollarOrPercentage;
                    }
                } else if (style.value == "emote") {
                    if (pricesArray.amountcharacters[0].four[0].emote[0].isItPossible){
                        bodyContent = (pricesArray.amountcharacters[0].four[0].emote[0].value - 100) + pricesArray.amountcharacters[0].four[0].emote[0].dollarOrPercentage;
                    }
                } else if (style.value == "sketch") {
                    if (pricesArray.amountcharacters[0].four[0].sketch[0].isItPossible){
                        bodyContent = (pricesArray.amountcharacters[0].four[0].sketch[0].value - 100) + pricesArray.amountcharacters[0].four[0].sketch[0].dollarOrPercentage;
                    }
                } else if (style.value == "doodle") {
                    if (pricesArray.amountcharacters[0].four[0].doodle[0].isItPossible){
                        bodyContent = (pricesArray.amountcharacters[0].four[0].doodle[0].value - 100) + pricesArray.amountcharacters[0].four[0].doodle[0].dollarOrPercentage;
                    }
                } else if (style.value == "scribble") {
                    if (pricesArray.amountcharacters[0].four[0].scribble[0].isItPossible){
                        bodyContent = (pricesArray.amountcharacters[0].four[0].scribble[0].value - 100) + pricesArray.amountcharacters[0].four[0].scribble[0].dollarOrPercentage;
                    }
                } else if (style.value == "logo") {
                    if (pricesArray.amountcharacters[0].four[0].logo[0].isItPossible){
                        bodyContent = (pricesArray.amountcharacters[0].four[0].logo[0].value - 100) + pricesArray.amountcharacters[0].four[0].logo[0].dollarOrPercentage;
                    }
                } else if (style.value == "other") {
                    if (pricesArray.amountcharacters[0].four[0].other[0].isItPossible){
                        bodyContent = (pricesArray.amountcharacters[0].four[0].other[0].value - 100) + pricesArray.amountcharacters[0].four[0].other[0].dollarOrPercentage;
                    }
                }
            }
        }
    }

    if (bodyContent == "") {
        document.getElementById("amountcharactersIDValue").classList.add("d-none");
    } else {
        document.getElementById("amountcharactersIDValue").classList.remove("d-none");
        document.getElementById("amountcharactersIDValue").innerText = bodyContent;
    }
}

function updateOutfitOptionsTextAndPrice(){
    var content = "";

    for (var i=0;i<outfitOptions.length;i++){
        if (i == 0){
            outfitOptions[i].innerText = "Very simple (T-shirt + pants) +" + (pricesArray.outfit[0].verySimple[0].value - 100) + pricesArray.outfit[0].verySimple[0].dollarOrPercentage;
        } else if (i == 1){
            outfitOptions[i].innerText = "Simple +~" + (pricesArray.outfit[0].simple[0].value - 100) + pricesArray.outfit[0].simple[0].dollarOrPercentage;
        } else if (i == 2){
            outfitOptions[i].innerText = "Average +~" + (pricesArray.outfit[0].average[0].value - 100) + pricesArray.outfit[0].average[0].dollarOrPercentage;
        } else if (i == 3){
            outfitOptions[i].innerText = "Somewhat complex +~" + (pricesArray.outfit[0].somewhatComplex[0].value - 100) + pricesArray.outfit[0].somewhatComplex[0].dollarOrPercentage;
        } else if (i == 4){
            outfitOptions[i].innerText = "Layered clothing +~" + (pricesArray.outfit[0].layeredClothing[0].value - 100) + pricesArray.outfit[0].layeredClothing[0].dollarOrPercentage;
        } else if (i == 5){
            outfitOptions[i].innerText = "Very complex (Semi-transparent, lace, embroidered, etc.) +~" + (pricesArray.outfit[0].veryComplex[0].value - 100) + pricesArray.outfit[0].veryComplex[0].dollarOrPercentage;
        }
    }

    if (outfit.value == "choose"){
    } else if (outfit.value == "verysimple"){
        content = (pricesArray.outfit[0].verySimple[0].value - 100) + pricesArray.outfit[0].verySimple[0].dollarOrPercentage;
    } else if (outfit.value == "simple"){
        content = (pricesArray.outfit[0].simple[0].value - 100) + pricesArray.outfit[0].simple[0].dollarOrPercentage;
    } else if (outfit.value == "average"){
        content = (pricesArray.outfit[0].average[0].value - 100) + pricesArray.outfit[0].average[0].dollarOrPercentage;
    } else if (outfit.value == "somewhatcomplex"){
        content = (pricesArray.outfit[0].somewhatComplex[0].value - 100) + pricesArray.outfit[0].somewhatComplex[0].dollarOrPercentage;
    } else if (outfit.value == "layeredclothing"){
        content = (pricesArray.outfit[0].layeredClothing[0].value - 100) + pricesArray.outfit[0].layeredClothing[0].dollarOrPercentage;
    } else if (outfit.value == "verycomplex"){
        content = (pricesArray.outfit[0].veryComplex[0].value - 100) + pricesArray.outfit[0].veryComplex[0].dollarOrPercentage;
    }

    if (content == "") {
        document.getElementById("outfitIDValue").classList.add("d-none");
    } else {
        document.getElementById("outfitIDValue").classList.remove("d-none");
        document.getElementById("outfitIDValue").innerText = content;
    }
}

function updateBackgroundYesNo(){
    for (var i = 0; i < backgroundRadio.length; i++) {
        if (backgroundRadio[i].checked) {
            if (backgroundRadio[i].value == "no") {
                document.getElementById("backgroundYesOptionsID").classList.add("d-none");
                document.getElementById("backgroundIDValue").classList.add("d-none");
            }
            else if (backgroundRadio[i].value == "yes") {
                document.getElementById("backgroundYesOptionsID").classList.remove("d-none");
                if (inputBackground.value != "choose"){
                    document.getElementById("backgroundIDValue").classList.remove("d-none");
                }
            }
        }
    }
}

function updateBackgroundOptionsTextAndPrice(){
    var content = "";

    for (var i=0;i<backgroundOptions.length;i++){
        if (i == 0){
            backgroundOptions[i].innerText = "Simple (Repeating pattern) +" + pricesArray.background[0].simple[0].dollarOrPercentage + pricesArray.background[0].simple[0].minValue + "~" + pricesArray.background[0].simple[0].maxValue;
        } else if (i == 1){
            backgroundOptions[i].innerText = "Average +" + pricesArray.background[0].average[0].dollarOrPercentage + pricesArray.background[0].average[0].minValue + "~" + pricesArray.background[0].average[0].maxValue;
        } else if (i == 2){
            backgroundOptions[i].innerText = "Somewhat complex +" + pricesArray.background[0].somewhatcomplex[0].dollarOrPercentage + pricesArray.background[0].somewhatcomplex[0].minValue + "~" + pricesArray.background[0].somewhatcomplex[0].maxValue;
        } else if (i == 3){
            backgroundOptions[i].innerText = "Very complex (Fully rendered scene integrating the character(s)) +" + pricesArray.background[0].verycomplex[0].dollarOrPercentage + pricesArray.background[0].verycomplex[0].minValue + "~" + pricesArray.background[0].verycomplex[0].maxValue;
        }
    }

    if (inputBackground.value == "choose"){
    } else if (inputBackground.value == "simple"){
        content = pricesArray.background[0].simple[0].dollarOrPercentage + pricesArray.background[0].simple[0].minValue + "~" + pricesArray.background[0].simple[0].maxValue;
    } else if (inputBackground.value == "average"){
        content = pricesArray.background[0].average[0].dollarOrPercentage + pricesArray.background[0].average[0].minValue + "~" + pricesArray.background[0].average[0].maxValue;
    } else if (inputBackground.value == "somewhatcomplex"){
        content = pricesArray.background[0].somewhatcomplex[0].dollarOrPercentage + pricesArray.background[0].somewhatcomplex[0].minValue + "~" + pricesArray.background[0].somewhatcomplex[0].maxValue;
    } else if (inputBackground.value == "verycomplex"){
        content = pricesArray.background[0].verycomplex[0].dollarOrPercentage + pricesArray.background[0].verycomplex[0].minValue + "~" + pricesArray.background[0].verycomplex[0].maxValue;
    }

    if (content == "") {
        document.getElementById("backgroundIDValue").classList.add("d-none");
    } else {
        document.getElementById("backgroundIDValue").classList.remove("d-none");
        document.getElementById("backgroundIDValue").innerText = content;
    }
}

function updatePrivateTextAndPrice() {
    let content = "";
    let noCost = (pricesArray.private[0].no[0].value - 100) + pricesArray.private[0].no[0].dollarOrPercentage;
    let yesCost = (pricesArray.private[0].yes[0].value - 100) + pricesArray.private[0].yes[0].dollarOrPercentage;

    document.getElementById("noPrivateRadioText").innerHTML = `(<span class="xiransgreen">${noCost}</span>)`;
    document.getElementById("yesPrivateRadioText").innerHTML = `(<span class="xiransgreen">+${yesCost}</span>)`;

    for (var i = 0; i < privateRadio.length; i++) {
        if (privateRadio[i].checked) {
            if (privateRadio[i].value == "no") {
                content = noCost;
            }
            else if (privateRadio[i].value == "yes") {
                content = yesCost;
            }
        }
    }

    if (content == "") {
        document.getElementById("privateIDValue").classList.add("d-none");
    } else {
        document.getElementById("privateIDValue").classList.remove("d-none");
        document.getElementById("privateIDValue").innerText = content;
    }
}

function updateSkipQueueButtons() {
    let content = "";
    let addtoqueueText = document.getElementById("addtoqueueText");
    let skipqueueText = document.getElementById("skipqueueText");
    let skipqueueasapText = document.getElementById("skipqueueasapText");
    let skipIDpeopleInQueue = document.getElementById("skipIDpeopleInQueue");
    let skipIDpeopleSkipping = document.getElementById("skipIDpeopleSkipping");
    let skipIDpeopleRushing = document.getElementById("skipIDpeopleRushing");
    let peopleInQueue = commissionsArray.length - 3;
    let peopleSkippingQueue = 0;
    let peopleSkippingRushingQueue = 0;

    for (var i=0;i<commissionsArray.length;i++){
        for (var u=0;u<commissionsArray[i].idLabels.length;u++){
            if (commissionsArray[i].idLabels[u] == "602f50f0929b6d86a5354893"){
                peopleSkippingQueue += 1;
            }
            if (commissionsArray[i].idLabels[u] == "5f94fcab5edf3c4d70e9235f"){
                peopleSkippingRushingQueue += 1;
            }
        }
    }

    for (let i=0;i<skipQueueRadio.length;i++){
        if (skipQueueRadio[i].checked){
            skipQueueButtons[i].classList.add("active");
        }
    }

    addtoqueueText.innerHTML = `+${(pricesArray.skipqueue[0].addmetoqueue[0].value - 100) + pricesArray.skipqueue[0].addmetoqueue[0].dollarOrPercentage}`;
    skipqueueText.innerHTML = `+${(pricesArray.skipqueue[0].skipqueue[0].value - 100) + pricesArray.skipqueue[0].skipqueue[0].increaseValuePerPerson*peopleInQueue + pricesArray.skipqueue[0].skipqueue[0].dollarOrPercentage}`;
    skipqueueasapText.innerHTML = `+${(pricesArray.skipqueue[0].rushpriority[0].value - 100) + pricesArray.skipqueue[0].rushpriority[0].increaseValuePerPerson*(peopleInQueue+peopleSkippingQueue) + pricesArray.skipqueue[0].rushpriority[0].dollarOrPercentage}`;
    skipIDpeopleInQueue.innerHTML = `${(peopleInQueue)}`;
    skipIDpeopleSkipping.innerHTML = `${(peopleSkippingQueue)}`;
    skipIDpeopleRushing.innerHTML = `${(peopleSkippingRushingQueue)}`;
    
    for (var i=0;i<skipQueueRadio.length;i++){
        if (skipQueueRadio[i].checked){
            if (skipQueueRadio[i].value == "addqueue"){
                content = (pricesArray.skipqueue[0].addmetoqueue[0].value - 100) + pricesArray.skipqueue[0].addmetoqueue[0].dollarOrPercentage;
            } else if (skipQueueRadio[i].value == "skipqueue"){
                content = (pricesArray.skipqueue[0].skipqueue[0].value - 100) + pricesArray.skipqueue[0].skipqueue[0].increaseValuePerPerson*peopleInQueue + pricesArray.skipqueue[0].skipqueue[0].dollarOrPercentage
            } else if (skipQueueRadio[i].value == "skipqueueasap"){
                content = (pricesArray.skipqueue[0].rushpriority[0].value - 100) + pricesArray.skipqueue[0].rushpriority[0].increaseValuePerPerson*(peopleInQueue+peopleSkippingQueue) + pricesArray.skipqueue[0].rushpriority[0].dollarOrPercentage;
            }
        }
    }

    if (content == "") {
        document.getElementById("skipIDValue").classList.add("d-none");
    } else {
        document.getElementById("skipIDValue").classList.remove("d-none");
        document.getElementById("skipIDValue").innerText = content;
    }
}

function updateLewdTextAndPrice() {
    let content = "";
    let noCost = (pricesArray.lewd[0].no[0].value - 100) + pricesArray.lewd[0].no[0].dollarOrPercentage;
    let yesCost = (pricesArray.lewd[0].yes[0].minValue - 100) + "~" + (pricesArray.lewd[0].yes[0].maxValue - 100) + pricesArray.lewd[0].yes[0].dollarOrPercentage;

    document.getElementById("noLewdRadioText").innerHTML = `(<span class="xiransgreen">${noCost}</span>)`;
    document.getElementById("yesLewdRadioText").innerHTML = `(<span class="xiransgreen">+${yesCost}</span>)`;

    for (var i = 0; i < lewdRadio.length; i++) {
        if (lewdRadio[i].checked) {
            if (lewdRadio[i].value == "no") {
                content = noCost;
            }
            else if (lewdRadio[i].value == "yes") {
                content = yesCost;
            }
        }
    }

    if (content == "") {
        document.getElementById("lewdIDValue").classList.add("d-none");
    } else {
        document.getElementById("lewdIDValue").classList.remove("d-none");
        document.getElementById("lewdIDValue").innerText = content;
    }
}

function updateTotal(){
    var totalMin = 0;
    var totalMax = 0;
    totalMin = (((((((numberBody + numberStyleShading) * (numberOutfitComplexity + numberDesigningCharacterMin - 1)) * numberAmountCharacters) * numberLewdMin) * numberBackgroundMin) * numberSkip) * numberPrivate);
    totalMax = (((((((numberBody + numberStyleShading) * (numberOutfitComplexity + numberDesigningCharacterMax - 1)) * numberAmountCharacters) * numberLewdMax) * numberBackgroundMax) * numberSkip) * numberPrivate);
    //alert("totalMin: " + totalMin);
    //alert("totalMax: " + totalMax);
}

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(AMOUNT_OF_COMMISSIONS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            commissionsArray = resultObj.data;

            getJSONData(PRICES_URL).then(function (resultObj) {
                if (resultObj.status === "ok") {
                    pricesArray = resultObj.data;
        
                    designCharacters = document.getElementsByName("designCharacterRadio");
                    updateDesignCharactersTextAndPrice();
        
                    style = document.getElementById("inputStyle");
                    styleShadingRadio = document.getElementsByName("styleShadingRadio");
        
                    bodyRadio = document.getElementsByName("amountBody");
                    bodyButtons = document.getElementsByName("buttonBody");
        
                    amountCharactersRadio = document.getElementsByName("amountCharacters");
                    amountCharactersButtons = document.getElementsByName("buttonAmountCharacters");
        
                    updateStyleShowShadingPriceAndCallOtherFunctions();
                    updateBodyPrice();
                    updateAmountCharactersPrice();
        
                    outfit = document.getElementById("inputOutfit");
                    outfitOptions = document.getElementsByName("outfitOptions");
                    updateOutfitOptionsTextAndPrice();
        
                    inputBackground = document.getElementById("inputBackground");
                    backgroundRadio = document.getElementsByName("backgroundRadio");
                    backgroundOptions = document.getElementsByName("backgroundOptions");
                    updateBackgroundYesNo();
                    updateBackgroundOptionsTextAndPrice();
        
                    privateRadio = document.getElementsByName("privateRadio");
                    updatePrivateTextAndPrice();
        
                    lewdRadio = document.getElementsByName("lewdRadio");
                    updateLewdTextAndPrice();
        
                    skipQueueRadio = document.getElementsByName("skipQueueRadio");
                    skipQueueButtons = document.getElementsByName("skipQueueButtons");
                    updateSkipQueueButtons();

                    updateTotal();
                }
            });
        }
    });
});