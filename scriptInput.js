const nameInput = document.querySelector("#name");
const disableButton = document.querySelector("#disableButton");

disableButton.addEventListener("click", function () {
    nameInput.disabled = true;
});