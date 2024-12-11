function formatNumber(input) {
    let value = input.value;

    // Determine if the input is decimal (allowing dots) or numeric (no dots)
    const isDecimal = input.getAttribute('inputmode') === 'decimal';

    // Remove invalid characters (allowing digits and one period for decimals)
    value = isDecimal
        ? value.replace(/[^0-9.]/g, '') // Allow digits and a single dot
        : value.replace(/[^0-9]/g, ''); // Allow digits only

    if (isDecimal) {
        // If the value starts with '0' and the next character is not a '.', adjust it
        if (value.startsWith('0') && value.length > 1 && value[1] !== '.') {
            value = '0.' + value.substring(1);
        }

        // Remove extra dots if present (only one allowed for decimal)
        const dotCount = (value.match(/\./g) || []).length;
        if (dotCount > 1) {
            value = value.substring(0, value.lastIndexOf('.'));
        }
    } else {
        // For numeric input (not decimal), do not allow leading zero unless the value is exactly '0'
        if (value.startsWith('0') && value.length > 1) {
            value = value.replace(/^0+/, '');
        }
    }

    // Apply comma formatting for numeric or decimal input (excluding leading zero cases)
    if (value) {
        const parts = value.split('.');

        // Apply commas only if the integer part doesn't start with '0' (except for "0.")
        if (parts[0] !== '0') {
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }

        value = parts.join('.'); // Rebuild the value
    }

    // Update the input's display value
    input.value = value;

    // Store the raw integer in a hidden field or data attribute
    const rawValue = value.replace(/[^0-9]/g, ''); // Extract only digits
    input.setAttribute('data-raw-value', rawValue); // Save raw value for later use
}
