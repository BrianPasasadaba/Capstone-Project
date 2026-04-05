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

document.addEventListener("DOMContentLoaded", function () {
    const periodSelect = document.querySelector("#period-select");
    const monthFilter = document.getElementById("month-filter");
    const peakFireContainer = document.getElementById("peakFireContainer");  // Container for peak fire month

    // Event listener for period dropdown
    periodSelect.addEventListener("change", function () {
        const selectedPeriod = this.value; // 1 = Yearly, 2 = Monthly
        if (selectedPeriod === "2") {
            monthFilter.style.display = "flex";  // Show month filter
            peakFireContainer.style.display = "none"; // Hide Peak Fire Month
        } else {
            monthFilter.style.display = "none";  // Hide month filter
            peakFireContainer.style.display = "flex"; // Show Peak Fire Month
        }
    });

    // Initial check when the page loads
    if (periodSelect.value === "1") {
        peakFireContainer.style.display = "flex";  // Show Peak Fire Month if "Yearly" is selected
    } else {
        peakFireContainer.style.display = "none";  // Hide Peak Fire Month if "Monthly" is selected
    }
});
