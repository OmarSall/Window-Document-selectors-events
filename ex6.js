const input = document.getElementById("numberInput");
const button = document.getElementById("incrementButton");

button.addEventListener("click", function () {
    const currentValue = parseInt(input.value) || 0;
    input.value = currentValue + 1;
});