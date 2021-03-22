let name = document.getElementById("name");
let password = document.getElementById("password");
let form = document.getElementById("form");
let errorElement = document.getElementById('error');
let email = document.getElementById("email");
let regex = new RegExp(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/);
let phone = document.getElementById("number");
let regex1 = new RegExp(/^[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/);

form.addEventListener("submit", (e) => {
    let messages = []
    if (name.value === '' || name.value === null) {
        messages.push('A name is required');
    }

    if (password.value.length <= 8) {
        messages.push('Invalid Password. Please try again');
    }

    if (regex.test(email)) {
        messages.push('Invalid email, please try again');
    }

    if (regex1.test(phone)) {
        messages.push('Invalid phone number.');
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ');
    }
})





