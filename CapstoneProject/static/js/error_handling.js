
    document.addEventListener('DOMContentLoaded', function() {
        const loginErrorMessage = document.getElementById('login-error-message').textContent.trim();
        const emailResult = document.getElementById('email-result');
        const passwordError = document.getElementById('password-error');

        if (loginErrorMessage) {
            if (loginErrorMessage.includes("email") && loginErrorMessage.includes("password")) {
                emailResult.textContent = loginErrorMessage;
                emailResult.style.color = "red";
            } else if (loginErrorMessage.includes("password")) {
                passwordError.textContent = loginErrorMessage;
                passwordError.style.color = "red";
            }
        }
    });

    
    document.addEventListener('DOMContentLoaded', function() {
        const resetErrorMessage = document.getElementById('reset-error-message').textContent.trim();
        const emailResult = document.getElementById('email-result');
        const passwordError = document.getElementById('password-error');
    
        if (resetErrorMessage) {
            if (resetErrorMessage.includes("Email address not found")) {
                emailResult.textContent = resetErrorMessage;
                emailResult.style.color = "red";
            } else if (resetErrorMessage.includes("Passwords do not match")) {
                passwordError.textContent = resetErrorMessage;
                passwordError.style.color = "red";
            }
        }
    });




