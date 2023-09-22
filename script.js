const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("#hone-number");
const password = document.getElementById("password");
const conPassword = document.getElementById("con-password");

firstName.addEventListener("focusout", (event) => {
    let content = event.target.value;
    if(content == "") {
        event.target.style.borderColor = "red";
    } else {
        event.target.style.borderColor = "rgba(128, 128, 128, 0.2)";
    }
})

firstName.addEventListener("focusin", (event) => {
    firstName.setAttribute("class", "focused")
})