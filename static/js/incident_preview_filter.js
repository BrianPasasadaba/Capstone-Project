document.addEventListener("DOMContentLoaded", function() {
    const periodFilter = document.getElementById("period-filter").querySelector(".form-select");
    const specificFilter = document.getElementById("specific-filter").querySelector(".form-select");

    // Function to update options
    function updateSpecificFilterOptions() {
        specificFilter.innerHTML = ""; // Clear existing options

        if (periodFilter.value === "1") { // Yearly
            const years = ["2018", "2019", "2020", "2021", "2022", "2023", "2024"];
            let highestYear = years[0]; // Initialize with the first year

            years.forEach(year => {
                const option = document.createElement("option");
                option.value = year;
                option.textContent = year;
                specificFilter.appendChild(option);
                
                // Update highestYear to the latest value
                if (year > highestYear) {
                    highestYear = year;
                }
            });

            // Set the highest year as selected by default
            specificFilter.value = highestYear;

        } else if (periodFilter.value === "2") { // Monthly
            const months = [
                { value: "1", text: "January" },
                { value: "2", text: "February" },
                { value: "3", text: "March" },
                { value: "4", text: "April" },
                { value: "5", text: "May" },
                { value: "6", text: "June" },
                { value: "7", text: "July" },
                { value: "8", text: "August" },
                { value: "9", text: "September" },
                { value: "10", text: "October" },
                { value: "11", text: "November" },
                { value: "12", text: "December" }
            ];
            months.forEach((month, index) => {
                const option = document.createElement("option");
                option.value = month.value;
                option.textContent = month.text;
                specificFilter.appendChild(option);

                // Set the first month (January) as selected by default
                if (index === 0) {
                    option.selected = true;
                }
            });
        }
    }

    // Initial call to set up the options based on the default selected period
    updateSpecificFilterOptions();

    // Update options whenever the period filter selection changes
    periodFilter.addEventListener("change", updateSpecificFilterOptions);
});
