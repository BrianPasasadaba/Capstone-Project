document.addEventListener("DOMContentLoaded", () => {
    // Function to initialize dropdown behavior
    function initializeDropdown(dropdownId, preselectFirst) {
        const dropdownItems = document.querySelectorAll(`#${dropdownId} .dropdown-item`);
        let previousSelected = null; // Keep track of the previously selected item

        // Automatically select the first item if preselectFirst is true
        if (preselectFirst && dropdownItems.length > 0) {
            const firstItem = dropdownItems[0];
            applySelectedStyle(firstItem); // Apply styles immediately
            previousSelected = firstItem; // Save the first item as the selected one
        }

        dropdownItems.forEach(item => {
            item.addEventListener('click', function () {
                // Revert the style of the previously selected item
                if (previousSelected) {
                    removeSelectedStyle(previousSelected); // Revert previous item's style
                }

                // Apply the selected style
                applySelectedStyle(item);

                // Save the currently selected item
                previousSelected = item;
            });
        });

        // Helper function to apply selected styles
        function applySelectedStyle(element) {
            element.style.backgroundColor = 'rgb(237, 112, 39)'; // --color-secondary color
            element.style.color = 'white'; // Set text color to white
            element.style.pointerEvents = 'none'; // Disable the currently selected item
        }

        // Helper function to remove selected styles
        function removeSelectedStyle(element) {
            element.style.backgroundColor = ''; // Remove custom background color
            element.style.color = ''; // Revert text color to default
            element.style.pointerEvents = 'auto'; // Enable the previous item
        }
    }

    // Initialize dropdowns with specific behaviors
    initializeDropdown('dropdown-filter-rep', true); // Preselect first item
    initializeDropdown('dropdown-filter-acc', false); // No preselection
});
