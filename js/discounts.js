discountsArray = [];

function cleanArray(){
    for (var i = 0; i < discountsArray.length; i++){
        if (discountsArray[i][0] == "type name here"){
            discountsArray.length = i;
        }
    }
}

function toggleDiscountDetails(){
    document.getElementById("discountDetailsID").classList.toggle("d-none");
}

function selectBGColor(from){
    if (from == "Milestone"){
        return `<div class="card text-white bg-loyalty mx-auto" style="width: 18rem;">`;
    } else if (from == "Refer a friend"){
        return `<div class="card text-white bg-friend mx-auto" style="width: 18rem;">`;
    } else if (from == "Twitch"){
        return `<div class="card text-white bg-twitch mx-auto" style="width: 18rem;">`;
    } else if (from == "Big Commission"){
        return `<div class="card text-white bg-bigcommission mx-auto" style="width: 18rem;">`;
    }
}

function addTitle(from, n){
    if (from == "Milestone"){
        return `<span>${discountsArray[1][n]} </span>
                <span>${discountsArray[2][n]}</span>`;
    } else if (from == "Refer a friend"){
        return `<span>${discountsArray[1][n]} </span>
                <span>${discountsArray[2][n]}</span>`;
    } else if (from == "Twitch"){
        return `<span>${discountsArray[2][n]} </span>
                <span>${discountsArray[1][n]}</span>`;
    } else if (from == "Big Commission"){
        return `<span>${discountsArray[2][n]} </span>
                <span>${discountsArray[1][n]}</span>`;
    }
}

function checkDiscount(){
    var name = document.getElementById("Discord").value;
    var found = false;
    var foundAtLeastOneDiscount = false;
    var content = "";

    for (var i = 0; i < discountsArray.length; i++){
        if (discountsArray[i][0] == name && name.length != 0){
            found = true;

            content += `
            <div class="alert alert-info alert-fix-info" role="alert">
                <h4 class="alert-heading">You have completed ${discountsArray[i][1]} commissions > $50 so far!</h4>
                <p>Thank you so much for commissioning me.</p>
                <hr>
                <p class="mb-0">These discounts are available to you on your next eligible commission &#9829</p>
            </div>
            `
            content += `<div class="row">`

            for (var n = 2; n < discountsArray[i].length; n++){
                if (discountsArray[i][n] > 0){
                    foundAtLeastOneDiscount = true;
                    content += 
                    `
                    <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-3">
                        ${selectBGColor(discountsArray[1][n])}
                            <div class="card-header">
                                ${addTitle(discountsArray[1][n], n)}
                            </div>
                            <div class="card-body">
                                <span class="h5 card-title">${discountsArray[3][n]}</span>
                                <span class="h5 float-right"><small>x</small>${discountsArray[i][n]}</span>
                            </div>
                        </div>
                    </div>
                    `
                }
            }
            content += `</div>`

            if (!foundAtLeastOneDiscount){
                content = 
                `
                <div class="alert alert-info alert-fix-info" role="alert">
                    <h4 class="alert-heading">You have completed ${discountsArray[i][1]} commissions > $50 so far!</h4>
                    <hr>
                    <p class="mb-0">
                    You currently do not have any discounts available.<br>
                    For more information, please visit [this page].
                    </p>
                </div>
                `
            }
        }
    }
    if (found == true){
        document.getElementById("displayDiscounts").innerHTML = content;
    } else {
        document.getElementById("displayDiscounts").innerHTML = 
        `
        <div class="alert alert-danger alert-fix-danger" role="alert">
            Your name wasn't found or the commission that will make you eligible for a discount hasn't been completed yet.<br>
            Please contact me if you believe there's been an error.
        </div>
        `
    }
}

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(COMMISSION_DISCOUNT_SS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            discountsArray = resultObj.data.values;

            cleanArray();
        }
    });

    document.getElementById("btnCheckDiscount").addEventListener("click", function () {
        checkDiscount();
    }, false);
});