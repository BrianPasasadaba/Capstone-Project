function formatNumber(input) {
    let value = input.value;

    // Determine if the input is decimal (allowing dots) or numeric (no dots)
    const isDecimal = input.getAttribute('inputmode') === 'decimal';

    // Remove invalid characters
    value = isDecimal
        ? value.replace(/[^0-9.]/g, '') // Allow digits and a single dot
        : value.replace(/[^0-9]/g, ''); // Allow digits only

    // Remove extra dots for decimal input
    if (isDecimal) {
        const dotCount = (value.match(/\./g) || []).length;
        if (dotCount > 1) {
            value = value.substring(0, value.lastIndexOf('.'));
        }
    }

    // Remove leading zeros
    value = value.replace(/^0+/, ''); // Ensure no leading zeros

    // Format integer part with commas
    if (value) {
        const parts = value.split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ','); // Add commas to the integer part
        value = parts.join('.'); // Rebuild the value
    }

    // Update the input's display value
    input.value = value;

    // Store the raw integer in a hidden field or data attribute
    const rawValue = value.replace(/[^0-9]/g, ''); // Extract only digits
    input.setAttribute('data-raw-value', rawValue); // Save raw value for later use
}
