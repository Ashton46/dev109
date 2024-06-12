function validateForm() {
    var name = document.forms["myContact"]["name"].value;
    var email = document.forms["myContact"]["subject"].value;
    var message = document.forms["myContact"]["message"].value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (name == "") {
        alert("Name must be filled out");
        return false;
    }

    if (email == "") {
        alert("Email must be filled out");
        return false;
    } else if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    return true;
}
