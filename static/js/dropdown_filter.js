document.addEventListener("DOMContentLoaded", () => {
    const filterDropdown = document.querySelectorAll('#dropdown-filter .dropdown-item');
    let previousSelected = null; // Keep track of the previously selected item

    // Automatically select the first item by default
    if (filterDropdown.length > 0) {
        const firstItem = filterDropdown[0];
        firstItem.style.backgroundColor = 'rgb(237, 112, 39)'; // --color-secondary color
        firstItem.style.color = 'white';  // Set text color to white
        firstItem.style.pointerEvents = 'none'; // Disable the first item
        previousSelected = firstItem; // Save the first item as the selected one
    }

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
