const button = document.getElementById("toggleColorButton");

button.addEventListener("click", function() {
    button.style.backgroundColor = button.style.backgroundColor === "red" ? "yellow" : "red";
});