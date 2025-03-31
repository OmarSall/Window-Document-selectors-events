const colorInput = document.getElementById("colorInput");
const colorButton = document.getElementById("colorButton");

if (colorInput && colorButton) {
    colorButton.addEventListener("click", function() {
        const userColor = colorInput.value.trim();
    
        const isValidColor = CSS.supports("color", userColor);
    
        if (isValidColor) {
            colorButton.style.backgroundColor = userColor;
        } else {
            alert("Please enter a valid color!");
        }
    });
} else {
    console.error("Error: Missing input or button element in the DOM.");
}

