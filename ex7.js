const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const message = document.getElementById("message");

button1.addEventListener("click", function () {
    message.textContent = "Button 1 clicked";
});

button2.addEventListener("click", function () {
    message.textContent = "Button 2 clicked";
});