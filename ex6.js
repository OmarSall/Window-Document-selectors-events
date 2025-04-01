const input = document.getElementById("numberInput");
const button = document.getElementById("incrementButton");

button.addEventListener("click", function () {
    let currentValue = parseInt(input.value, 10) || 0;
    input.value = currentValue + 1;
});