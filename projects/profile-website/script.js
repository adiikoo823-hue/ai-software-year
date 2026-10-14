const button = document.querySelector("#greetBtn");
const message = document.querySelector("#message");

button.addEventListener("click", function () {
    message.textContent = "Welcome to my website, I am Adinan!";
});