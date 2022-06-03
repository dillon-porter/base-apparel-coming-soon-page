const form = document.getElementById("form")
const email = document.getElementById("email")

form.addEventListener("submit", e => {
    e.preventDefault()
    const emailValidate = email.value

    //Check if it's a valid email

    if (!validateEmail(emailValidate)) {
        form.classList.add("errorMsg")
    } else {
        form.classList.remove("errorMsg")
        document.body.innerHTML = "Thank you for submitting!"
    }
})

//Searched Validate email regex and copied this function from stackoverflow
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};