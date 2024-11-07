// Input validation for alphabetic characters only
document.getElementById('crinvolved-search').addEventListener('input', function(e) {
    const regex = /^[a-zA-Z\s]*$/;
    if (!regex.test(e.target.value)) {
        e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    }
});

// Dropdown search functionality
document.addEventListener('DOMContentLoaded', function() {
    const options = [
        "Assembly", "Educational", "Day Care", "Health Care", "Residential Board and Care",
        "Detention and Correctional", "Residential", "Mercantile", "Business", "Industrial",
        "Storage", "Mixed Occupancies", "Special Structures", "Grass", "Agricultural",
        "Rubbish", "Post", "Forest", "Motor Vehicle", "Ship/Water Vessel", "Air Craft", 
        "Locomotive"
    ];
    
    const searchInput = document.getElementById('crinvolved-search');
    const hiddenInput = document.getElementById('crinvolved');
    const suggestionsBox = document.getElementById('crinvolved-options');

    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        suggestionsBox.innerHTML = ''; // Clear previous results

        if (query.length > 0) {
            const filteredOptions = options.filter(option => option.toLowerCase().includes(query));
            
            if (filteredOptions.length > 0) {
                suggestionsBox.style.display = 'block'; // Show dropdown if there are matches
                filteredOptions.forEach(option => {
                    const item = document.createElement('li');
                    item.classList.add('dropdown-item');
                    item.textContent = option;
                    
                    // Handle click to select the item
                    item.addEventListener('click', () => {
                        // Remove 'selected' class from previous selection
                        document.querySelectorAll('.dropdown-item').forEach(el => el.classList.remove('selected'));
                        
                        // Add 'selected' class to the clicked item
                        item.classList.add('selected');
                        
                        // Set the selected value in the input fields
                        searchInput.value = option;
                        hiddenInput.value = option;
                        
                        // Clear dropdown after selection
                        suggestionsBox.innerHTML = '';
                        suggestionsBox.style.display = 'none';
                    });
                    suggestionsBox.appendChild(item);
                });
            } else {
                suggestionsBox.style.display = 'none'; // Hide if no matches
            }
        } else {
            suggestionsBox.style.display = 'none'; // Hide if query is empty
        }
    });

    // Close dropdown if clicked outside
    document.addEventListener('click', function(event) {
        if (!searchInput.contains(event.target) && !suggestionsBox.contains(event.target)) {
            suggestionsBox.style.display = 'none'; // Hide dropdown
        }
    });
});
