galleryArray = [];
galleryCleanedArray = [];

function excludeTags(){

    var targetAmount = 20;
    var currentAmount = 0;
    var currentlyChecking = 2;

    while (currentAmount < targetAmount){

        var current = galleryArray[currentlyChecking];

        if (current == null){
            fillGallery();
            return;
        }

        var addCurrent = true;

        for (var i = 0; i < current.idLabels.length; i++) {
            if (current.idLabels[i] == "63c33f97e803e201c4c53a97") {
                addCurrent = false;
            }
        }

        if (addCurrent){
            galleryCleanedArray.push(currentlyChecking);
            currentAmount++;

            if (currentAmount == targetAmount){
                fillGallery();
                return;
            }
        }

        currentlyChecking++;
    }
}

function fillGallery(){
    for (var i = 0; i < galleryCleanedArray.length; i++){

        var number = galleryCleanedArray[i];

        var firstID = "";
        var secondID = "";
        
        firstID = galleryArray[number].id;
        secondID = galleryArray[number].idAttachmentCover;

        var name = galleryArray[number].name;
        var link = `https://trello.com/1/cards/${firstID}/attachments/${secondID}/download/`;

        var content =
        `
        <div class="p-1 col-6 mb-3">
            <div id="${"ImgNumber" + i}" class="card text-white bg-darker h-100">
                <img class="card-img-top" src="${link}" alt="${name}" data-target="#imgCarousel" data-slide-to="${i}">
                <div class="card-body h-0 m-0 p-0"></div>
                <div class="card-footer border-0">
                    <h5 class="card-title">${name}</h5>
                </div>
            </div>
        </div>
        `;

        document.getElementById("galleryID").innerHTML += content;

        if (i == 0){
            var contentCarousel =
            `
            <div class="carousel-item active">
                <img class="d-block w-100" src="${link}">
            </div>
            `
        }
        else{
            var contentCarousel =
            `
            <div class="carousel-item">
                <img class="d-block" src="${link}">
            </div>
            `
        }



        document.getElementById("carouselImgID").innerHTML += contentCarousel;
    }
}

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(COMPLETED_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            galleryArray = resultObj.data;

            excludeTags();
        }
    })
});