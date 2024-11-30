// Function to toggle between month filter and year filter
function toggleFilters() {
    var period = document.getElementById('period-select').value;  // Get selected value of period
    var monthFilter = document.getElementById('month-filter');
    var yearFilter = document.getElementById('year-filter');

    if (period === '1') {
        // If "Yearly" is selected, show year-filter and hide month-filter
        yearFilter.style.display = 'block';
        monthFilter.style.display = 'none';
    } else if (period === '2') {
        // If "Monthly" is selected, show month-filter and hide year-filter
        yearFilter.style.display = 'none';
        monthFilter.style.display = 'block';
    }
}

// Initialize the toggle state when the page is loaded
window.onload = function() {
    toggleFilters();  // Ensure the correct filter is displayed when the page loads
};