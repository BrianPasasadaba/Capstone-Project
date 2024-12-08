// Define the regex patterns for password requirements
const requirements = [
    { regex: /.{8,}/, element: document.querySelector(".requirement-list li:nth-child(2)") }, // At least 8 characters
    { regex: /[0-9]/, element: document.querySelector(".requirement-list li:nth-child(1)") }, // At least 1 number
    { regex: /[a-z]/, element: document.querySelector(".requirement-list li:nth-child(3)") }, // At least 1 lowercase letter
    { regex: /[A-Z]/, element: document.querySelector(".requirement-list li:nth-child(4)") }, // At least 1 uppercase letter
    { regex: /[^A-Za-z0-9]/, element: document.querySelector(".requirement-list li:nth-child(5)") } // At least 1 special character
];

let passwordValid = false;
let passwordsMatch = false;

// Function to validate the password against policy
function validatePassword() {
    let password = document.getElementById("new-password-field").value;
    passwordValid = true;

    // Check each requirement
    requirements.forEach(req => {
        if (req.regex.test(password)) {
            req.element.classList.add("valid"); // Add 'valid' class to li
            req.element.querySelector("i").className = "bi bi-check-lg"; // Change to check icon
        } else {
            req.element.classList.remove("valid"); // Remove 'valid' class from li
            req.element.querySelector("i").className = "bi bi-circle"; // Revert to circle icon
            passwordValid = false;
        }
    });

    // Only validate confirm password if the password meets all the policies
    if (passwordValid) {
        validateConfirmPassword(); // Now we call validateConfirmPassword only when password is valid
    } else {
        clearPasswordMatchMessage(); // Clear password match message if password is invalid
    }

    // Update button state based on validation
    updateButtonState();
}

// Function to validate the confirm password
function validateConfirmPassword() {
    let password = document.getElementById("new-password-field").value;
    let confirmPassword = document.getElementById("con-password-field").value;
    let errorMsg = document.getElementById("password-error");

    // If the password is empty and the confirm password has a value, clear any messages
    if (password === "" && confirmPassword !== "") {
        clearPasswordMatchMessage();
        return;
    }

    // Clear error message when confirm password is empty
    if (confirmPassword === "") {
        errorMsg.innerHTML = ""; // Reset innerHTML to clear the message
        errorMsg.style.color = ""; // Reset the color
        passwordsMatch = false;
        return;
    }

    // If passwords match and the password is valid
    if (password === confirmPassword) {
        errorMsg.innerHTML = '<i class="bi bi-check-circle" style="color: green;"></i> Password match!';
        errorMsg.style.color = "green";
        passwordsMatch = true;
    } else {
        // If passwords do not match
        errorMsg.innerHTML = '<i class="bi bi-exclamation-circle" style="color: red;"></i> Passwords do not match!';
        errorMsg.style.color = "red";
        passwordsMatch = false;
    }

    // Update the button state after confirm password validation
    updateButtonState();
}

// Function to clear the password match message when invalid
function clearPasswordMatchMessage() {
    let errorMsg = document.getElementById("password-error");
    errorMsg.innerHTML = ""; // Reset innerHTML to clear the message
    errorMsg.style.color = ""; // Reset the color
    passwordsMatch = false;
    updateButtonState(); // Disable the button if password is not valid
}

// Function to update the button state based on the password validity and match
function updateButtonState() {
    // Enable the button only if password is valid and both passwords match
    const isButtonEnabled = passwordValid && passwordsMatch;
    $('#change-button').prop('disabled', !isButtonEnabled);
}

$(document).ready(function() {
    // Bind the validate function to the input event of password fields
    $('#new-password-field, #con-password-field').on('input', function() {
        validatePassword();  // Call this function whenever any of the inputs change
    });

    // Initially disable the reset button
    $('.btn-submit').prop('disabled', true);

    // Function to prevent spaces in input fields
    function preventSpaces(event) {
        if (event.key === ' ') {
            event.preventDefault();
        }
    }

    // Attaching the event listener to input fields to prevent spaces
    var inputs = document.querySelectorAll('#new-password-field, #con-password-field');
    inputs.forEach(function(input) {
        input.addEventListener('keydown', preventSpaces);
    });
});
