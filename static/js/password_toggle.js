document.addEventListener('DOMContentLoaded', function() {
    const eyeIcon = document.getElementById('pass-eye');
    const passwordInput = document.getElementById('password-field');

    console.log(eyeIcon, passwordInput); // Check if elements are correctly selected

    eyeIcon.addEventListener('click', () => {
        console.log('Eye icon clicked'); // Verify if click is registered
        const isPassword = passwordInput.type === 'password';
        passwordInput.type = isPassword ? 'text' : 'password';
        eyeIcon.className = isPassword ? 'bi bi-eye-slash' : 'bi bi-eye';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const newPassEye = document.getElementById('new-pass-eye');
    const conPassEye = document.getElementById('con-pass-eye');
    const newPasswordInput = document.getElementById('new-password-field');
    const conPasswordInput = document.getElementById('con-password-field');

    // Toggle visibility for new password field
    newPassEye.addEventListener('click', () => {
        const isPassword = newPasswordInput.type === 'password';
        newPasswordInput.type = isPassword ? 'text' : 'password';
        newPassEye.className = isPassword ? 'bi bi-eye-slash' : 'bi bi-eye';
    });

    // Toggle visibility for confirm password field
    conPassEye.addEventListener('click', () => {
        const isPassword = conPasswordInput.type === 'password';
        conPasswordInput.type = isPassword ? 'text' : 'password';
        conPassEye.className = isPassword ? 'bi bi-eye-slash' : 'bi bi-eye';
    });
});
