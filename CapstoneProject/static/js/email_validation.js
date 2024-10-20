// Function to validate email using regex
const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// Validation function to be called on input event
const validate = () => {
    const $result = $('#email-result');
    const email = $('#email').val();
    $result.text(''); // Clear previous results immediately on input

    if (email === '') {
        $result.css('color', 'transparent'); // No message if the field is empty
    } else if (validateEmail(email)) {
        $result.text(''); // If valid, no message
        $result.css('color', 'transparent');
    } else {
        $result.html('<i class="bi bi-exclamation-circle" style="color: red;"></i> Please enter a valid email (e.g. example@gmail.com).');
        $result.css('color', 'red');
    }
    return false; // Prevent default form submission if used within a form
};

// Bind the validate function to the input event of email input field
$(document).ready(function() {
    $('#email').on('input', validate);
});
