// Function to clean the input value (allow single spaces only)
function cleanInput(event, allowedChars) {
    const input = event.target;
    let value = input.value;

    // Dynamically allow only the defined characters (including spaces)
    const regex = new RegExp(`[^${allowedChars}]`, 'g');
    value = value.replace(regex, ''); // Remove disallowed characters

    // Replace multiple spaces with a single space
    value = value.replace(/\s+/g, ' ');

    // Allow leading space while typing but trim final input
    input.value = value.trimStart(); // Keep leading spaces when typing, trim at the end
}

// Attach to specific input fields
document.addEventListener("DOMContentLoaded", function () {
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
            element.addEventListener("input", function (event) {
                cleanInput(event, allowedChars);
            });
        }
    });
});
