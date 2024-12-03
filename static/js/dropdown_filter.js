document.addEventListener("DOMContentLoaded", () => {
    const filterDropdown = document.querySelectorAll('.dropdown-menu .dropdown-item');
    let previousSelected = null; // Keep track of the previously selected item

    filterDropdown.forEach(item => {
        item.addEventListener('click', function(event) {
            // If a previous item was selected, revert its background color, text color, and enable it again
            if (previousSelected) {
                previousSelected.style.backgroundColor = '';  // Remove custom background color
                previousSelected.style.color = '';  // Revert text color to default
                previousSelected.style.pointerEvents = 'auto';  // Enable the previous item
            }

            // Set the background color and text color of the selected item
            item.style.backgroundColor = 'rgb(237, 112, 39)'; // --color-secondary color
            item.style.color = 'white';  // Set text color to white

            // Disable the item
            item.style.pointerEvents = 'none'; // Disable the currently selected item

            // Save the currently selected item as the previous one for the next click
            previousSelected = item;
        });
    });
});