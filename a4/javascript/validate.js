function validateForm() {
    let valid = true;
    let errorMessages = "";
    
    // Reset all error messages
    document.querySelectorAll("div[id^='error']").forEach(el => el.innerHTML = "");

    // First Name validation
    const firstname = document.getElementById("firstname").value;
    if (firstname === "" || firstname.length > 20 || !/^[a-zA-Z]+$/.test(firstname)) {
        document.getElementById("errorFirstname").innerHTML = "First name is required and should be alphabetic and less than 20 characters.";
        valid = false;
    }

    // Last Name validation
    const lastname = document.getElementById("lastname").value;
    if (lastname === "" || lastname.length > 50 || !/^[a-zA-Z]+$/.test(lastname)) {
        document.getElementById("errorLastname").innerHTML = "Last name is required and should be alphabetic and less than 50 characters.";
        valid = false;
    }

    // Email validation
    const email = document.getElementById("email").value;
    const atpos = email.indexOf("@");
    const dotpos = email.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        document.getElementById("errorEmail").innerHTML = "Invalid email format.";
        valid = false;
    }

    // Phone validation
    const phone = document.getElementById("phone").value;
    if (!/^\d{1,15}$/.test(phone)) {
        document.getElementById("errorPhone").innerHTML = "Phone number should be numerical and up to 15 digits.";
        valid = false;
    }

    // Username validation
    const username = document.getElementById("username").value;
    if (username === "" || username.length > 12) {
        document.getElementById("errorUsername").innerHTML = "Username is required and should be less than 12 characters.";
        valid = false;
    }

    // Password validation
    const password = document.getElementById("password").value;
    if (password.length > 7 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password) || !/[!@#$%^&*]/.test(password)) {
        document.getElementById("errorPassword").innerHTML = "Password should be less than 7 characters, and must include at least one upper case letter, one lower case letter, one digit, and one special character.";
        valid = false;
    }

    // Address validation
    const address = document.getElementById("address").value;
    if (address === "") {
        document.getElementById("errorAddress").innerHTML = "Address is required.";
        valid = false;
    }

    // City validation
    const city = document.getElementById("city").value;
    if (city === "") {
        document.getElementById("errorCity").innerHTML = "City is required.";
        valid = false;
    }

    // State validation
    const state = document.getElementById("state").value;
    if (state === "") {
        document.getElementById("errorState").innerHTML = "State is required.";
        valid = false;
    }

    // Country validation
    const country = document.getElementById("country").value;
    if (country === "") {
        document.getElementById("errorCountry").innerHTML = "Country is required.";
        valid = false;
    }

    // Zipcode validation
    const zipcode = document.getElementById("zipcode").value;
    if (country === "USA" && (!/^\d{5}$/.test(zipcode))) {
        document.getElementById("errorZipcode").innerHTML = "Zip code is required for USA and must be 5 digits.";
        valid = false;
    }

    return valid;
}

