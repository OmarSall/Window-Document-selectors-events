const fontSizeInput = document.getElementById("fontSizeInput");
const textParagraph = document.getElementById("text");

fontSizeInput.addEventListener("input", function () {
    const fontSize = parseInt(fontSizeInput.value, 10);

    if (!isNaN(fontSize) && fontSize > 0) {
        textParagraph.style.fontSize = fontSize + "px"
    } else {
        textParagraph.style.fontSize = "12px";
    }
});