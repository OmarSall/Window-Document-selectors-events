const textInput = document.getElementById("textInput");
const actionButton = document.getElementById("actionButton");

const defaultText = "Click";

textInput.addEventListener("blur", function () {
    const newText = textInput.value.trim();
    actionButton.textContent = newText.length > 0 ? newText : defaultText;
});

actionButton.addEventListener("click", function () {
    textInput.value = "";
    actionButton.textContent = defaultText;
});