function formatNumber(input) {
    let value = input.value;

    // Determine if the input is decimal (allowing dots) or numeric (no dots)
    const isDecimal = input.getAttribute('inputmode') === 'decimal';

    // For decimal inputs (allowing dots)
    if (isDecimal) {
        value = value.replace(/[^0-9\.]/g, ''); // Allow digits and a dot

        // Allow only one dot
        const dotCount = (value.match(/\./g) || []).length;
        if (dotCount > 1) {
            value = value.substring(0, value.lastIndexOf('.')); // Keep only the first dot
        }

        // Handle leading zeros for decimals
        const parts = value.split('.');

        // Remove leading zeros from the integer part but keep "0" if the value is zero
        if (parts[0] !== '0') {
            parts[0] = parts[0].replace(/^0+/, ''); // Remove leading zeros from integer part
        }

        // Add commas to the integer part if it's not empty
        if (parts[0] && parts[0] !== '0') {
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Add commas every 3 digits
        }

        // Rebuild the value
        value = parts.join('.'); // Rejoin the integer and decimal parts
    } else {
        value = value.replace(/[^0-9]/g, ''); // Allow digits only

        // Handle leading zeros in numeric input: if there are leading zeros, remove them
        if (value !== "0") {
            value = value.replace(/^0+/, ''); // Remove leading zeros from numeric input
        }

        // If the number is "0" or starts with a zero (like 000), no commas should be applied
        if (value !== "0" && value !== "") {
            value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Add commas every 3 digits
        }

        // If the value becomes empty, do not revert it to "0"
        if (value === "") {
            value = ""; // Allow the value to be empty
        } else if (value === "0") {
            value = "0"; // Keep single zero without commas
        }
    }

    // Update the input value with the formatted number
    input.value = value;
}
