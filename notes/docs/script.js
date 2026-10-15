const button = document.querySelector("#greetBtn");
const message = document.querySelector("#message");

button.addEventListener("click", function () {
    message.textContent = "Welcome to my website, I am Adinan!";
});
const form = document.querySelector("#contactForm");
const formResult = document.querySelector("#formResult");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;

    if (name === "" || email === "") {
        formResult.textContent = "Please fill in your name and email.";
    } else {
        formResult.textContent = "Thank you, " + name + "! Message received.";
    }
});