// Function to clean the input value (to remove disallowed characters)
function cleanInput(event, allowedChars) {
    event.target.value = event.target.value.replace(new RegExp(`[^${allowedChars}]`, 'g'), ''); // Remove invalid characters
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
