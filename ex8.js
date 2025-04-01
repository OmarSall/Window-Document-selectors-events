const hoverInput = document.getElementById("hoverInput");

hoverInput.addEventListener("mouseenter", function () {
    hoverInput.value = "The input is hovered over";
});

hoverInput.addEventListener("mouseleave", function () {
    hoverInput.value = "";
});