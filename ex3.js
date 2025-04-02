const paragraphs = document.querySelectorAll("p");
const button = document.getElementById("toggleButton");

let isGreen = false;

button.addEventListener("click", function () {
    isGreen = !isGreen;

    paragraphs.forEach(paragraph => {
        paragraph.style.color = isGreen ? "green" : "black";
    });
});