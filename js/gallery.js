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

    var galleryContent =
    `
    <ul class="ul-style-none">
    `

    for (var i = 0; i < galleryCleanedArray.length; i++){

        var number = galleryCleanedArray[i];

        var firstID = "";
        var secondID = "";
        
        firstID = galleryArray[number].id;
        secondID = galleryArray[number].idAttachmentCover;

        var name = galleryArray[number].name;
        name = name.substring(0, name.indexOf('|')).trimEnd();
        var link = `https://trello.com/1/cards/${firstID}/attachments/${secondID}/download/`;

        var content =
        `
        <li>
            <a href="${link}" id="${"ImgNumber" + i}" data-toggle="modal" data-target="#imgModal">
                <div class="card text-white bg-darker">
                    <img class="card-img-top gallery-img-max-height" src="${link}" alt="${name}">
                    <div class="card-body card-body-padding-fix">
                        <h6 class="card-text text-center">${name}</h6>
                    </div>
                </div>
            </a>
        </li>
        `;

        galleryContent += content;
    }

    var end =
    `
    </ul>
    `
    galleryContent += end;
    document.getElementById("galleryID").innerHTML += galleryContent;




    for (var i = 0; i < galleryCleanedArray.length; i++){

        let element = document.getElementById(`ImgNumber${i}`);
        let link = element.href;
        element.onclick = function() {SetModalImg(link)};
    }
}

function SetModalImg(link){
    document.getElementById("modalImg").src = link;
}

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(GALLERY_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            galleryArray = resultObj.data;

            excludeTags();
        }
    })

    document.getElementById("modalImg").addEventListener("mouseover", event => {
        event.target.classList.add("zoom");
    })
    document.getElementById("modalImg").addEventListener("mouseout", event => {
        event.target.classList.remove("zoom");
    })
});