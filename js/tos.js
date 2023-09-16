var pricesArray = [];

function UpdateLewdCost(){
    let yesCost = "+" + (pricesArray.lewd.yes.minValue - 100) + "-" + (pricesArray.lewd.yes.maxValue - 100) + pricesArray.lewd.yes.dollarOrPercentage;

    document.getElementById("lewdCost").innerHTML = yesCost;
}

function UpdateCharacterDesign(){
    let yesCost = "+" + (pricesArray.designing.yes.minValue - 100) + "-" + (pricesArray.designing.yes.maxValue - 100) + pricesArray.designing.yes.dollarOrPercentage;

    document.getElementById("characterDesignCost").innerHTML = yesCost;
}

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRICES_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            pricesArray = resultObj.data;

            UpdateLewdCost();
            UpdateCharacterDesign();
        }
    })
});