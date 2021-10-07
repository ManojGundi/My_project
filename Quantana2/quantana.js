const emailInputEl = document.getElementById("emailInput")
const emailErrorEl = document.getElementById("emailError")
const pwdInputEl = document.getElementById("pwdInput")
const pwdErrorEl = document.getElementById("pwdError")
const btnEl = document.getElementById("btn")
const loginErrorEl = document.getElementById("loginError")

emailInputEl.addEventListener("blur", function() {
    const inputText = emailInputEl.value
    const lastText = inputText.substr(inputText.length - 10);
    if (lastText === "@gmail.com") {
        emailErrorEl.classList.remove("error-el")
        emailErrorEl.textContent = ""
    } else {
        emailErrorEl.classList.add("error-el")
        emailErrorEl.textContent = "Enter a valid Email Address"
    }
})

pwdInputEl.addEventListener("blur", function() {
    const numbers = []
    const strings = []
    const password = pwdInputEl.value
    for (let i of password) {
        if (isNaN(i) === false) {
            numbers.push(i)
        } else {
            strings.push(i)
        }
    }
    if ((numbers.length == 3) && (strings.length == 3)) {
        pwdErrorEl.textContent = ""
        pwdErrorEl.classList.remove("error-el")
    } else {
        pwdErrorEl.classList.add("error-el")
        pwdErrorEl.textContent = "Password must contain 3Digits and 3Chars"
    }
})

let pwdList = []

btnEl.addEventListener("click", function() {
    let password = pwdInputEl.value
    let emailIdInput = emailInputEl.value
    if ((emailIdInput === "" || password === "") || (emailErrorEl.textContent !== "" || pwdErrorEl.textContent !== "")) {
        loginErrorEl.classList.add("error-el")
        loginErrorEl.textContent = "Please Enter Valid Deatails"
    } else {
        loginErrorEl.classList.remove("error-el")
        loginErrorEl.textContent = ""
        if (pwdList.length === 0) {
            pwdList.push(password)

            alert("Login Successful")
        } else {
            const dble = pwdList.filter((x) => password === x)
            if (dble.length === 0) {

                pwdList.push(password)
                alert("Login Successful")
            } else {

                alert("Login Failed")
            }
        }
    }


})