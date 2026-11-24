const filesubmit = document.getElementById("filesubmit");
const imagesubmit = document.getElementById("imagesubmit");

filesubmit.addEventListener("change", function () {

    const file = this.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (event) {
            imagesubmit.src = event.target.result;
        };

        reader.readAsDataURL(file);
    }

});



const popupMessage = document.getElementById('popup');

function openPopup() {
    popupMessage.classList.add('open-popup');
}

function closePopup() {
    popupMessage.classList.remove('open-popup');
}


formsubmit.addEventListener("submit", function(event) {

    event.preventDefault();

    openPopup();

});