// Function to clean the input value (to remove disallowed characters)
function cleanInput(event, allowedChars) {
    const input = event.target;
    let value = input.value;

    // Check if the first character is invalid (space or special character)
    if (/[^A-Za-z0-9]/.test(value.charAt(0)) && value.length === 1) {
        return; // Don't update if the first character is invalid
    }

    // If the first character is invalid but there are more characters, allow editing
    if (value.length > 1 && /[^A-Za-z0-9]/.test(value.charAt(0))) {
        // Remove the invalid first character
        value = value.slice(1);
    }
    
    // Replace invalid characters anywhere except the first one
    input.value = value.replace(new RegExp(`[^${allowedChars}]`, 'g'), '');
}

// Attach to specific input fields
document.addEventListener("DOMContentLoaded", function() {
    const fields = [
        { id: "crloc", allowedChars: 'A-Za-z0-9.,\\s-' },
        { id: "crinvolved-search", allowedChars: 'A-Za-z\\s.,/-' },
        { id: "crowner", allowedChars: 'A-Za-z\\s.,-' },
        { id: "cralarm-dec-search", allowedChars: 'A-Za-z\\s.,-' },
        { id: "crfunder-dec-search", allowedChars: 'A-Za-z\\s.,-' },
        { id: "crfout-dec-search", allowedChars: 'A-Za-z\\s.,-' },
        { id: "crground-search", allowedChars: 'A-Za-z\\s.,-' },
        { id: "crsafety-search", allowedChars: 'A-Za-z\\s.,-' },
        { id: "crsender-search", allowedChars: 'A-Za-z\\s.,-' }
    ];

    fields.forEach(({ id, allowedChars }) => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener("input", function(event) {
                cleanInput(event, allowedChars);
            });
        }
    });
});
