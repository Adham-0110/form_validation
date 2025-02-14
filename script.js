var validate = true


var submit = document.getElementById("submit")
submit.addEventListener("click", () => {
    event.preventDefault()

    var nameRegex = /^[a-zA-Z]+$/
    var phoneRegex = /^\d{10}$/
    var emailRegex = /^[a-zA-Z0-9]+@gmail\.com/

    var name = document.getElementById("name")
    var phone = document.getElementById("phone")
    var email = document.getElementById("email")

    if (nameRegex.test(name.value) == false) {
        document.querySelector(".nameerror").style.display = "inline"
        validate = false
    }
    else {
        document.querySelector(".nameerror").style.display = "none"
        validate = true
    }

    if (phoneRegex.test(phone.value) == false) {
        document.querySelector(".phoneerror").style.display = "inline"
        validate = false
    }
    else {
        document.querySelector(".phoneerror").style.display = "none"
        validate = true
    }

    if (emailRegex.test(email.value) == false) {
        document.querySelector(".emailerror").style.display = "inline"
        validate = false
    }
    else {
        document.querySelector(".emailerror").style.display = "none"
        validate = true
    }

    if (validate == true) {
        alert("Form submitted successfully")
        document.form.reset()

    }




})
