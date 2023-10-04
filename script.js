const inputs = document.getElementsByTagName("input");
const errors = document.getElementsByClassName("error");

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone-number");
const password = document.getElementById("password");
const conPassword = document.getElementById("con-password");

for(let i=0; i<inputs.length; i++) {
    inputs[i].addEventListener("focusout", (event) => {
        if(event.target.value == "") {
            inputs[i].setAttribute("style", "outline: none; border: 0.1rem solid rgb(184, 38, 38); box-shadow: 0rem 0.25rem 1rem rgba(170, 170, 170, 0.3);")
            errors[i].textContent = "* please fill in this field";
        } else {
            inputs[i].setAttribute("style", "none");
            errors[i].textContent = "";
        }
    })
}

for(let i=0; i<inputs.length; i++) {
    inputs[i].addEventListener("focusin", (event) => {
        inputs[i].setAttribute("style", "outline: none; border: 0.1rem solid rgb(38, 114, 184); box-shadow: 0rem 0.25rem 1rem rgba(170, 170, 170, 0.3);")
    })
}

email.addEventListener("focusout", (event) => {
    const input = event.target.value;
    if(!(input.includes("@") && input.includes(".com"))) {
        email.setAttribute("style", "outline: none; border: 0.1rem solid rgb(184, 38, 38); box-shadow: 0rem 0.25rem 1rem rgba(170, 170, 170, 0.3);")
        errors[2].textContent = "* please enter a valid email";
    } else {
        email.setAttribute("style", "none");
        errors[2].textContent = "";
    }
})

phoneNumber.addEventListener("focusout", (event) => {
    if(isNaN(phoneNumber.value)) {
        phoneNumber.setAttribute("style", "outline: none; border: 0.1rem solid rgb(184, 38, 38); box-shadow: 0rem 0.25rem 1rem rgba(170, 170, 170, 0.3);")
        errors[3].textContent = "* please enter a number";
    } else {
        phoneNumber.setAttribute("style", "none");
        errors[3].textContent = "";
    }
})

conPassword.addEventListener("focusout", (event) => {
    if(password.value != conPassword.value) {
        conPassword.setAttribute("style", "outline: none; border: 0.1rem solid rgb(184, 38, 38); box-shadow: 0rem 0.25rem 1rem rgba(170, 170, 170, 0.3);")
        errors[5].textContent = "* passwords do not match";
    } else {
        conPassword.setAttribute("style", "none");
        errors[5].textContent = "";
    }
})