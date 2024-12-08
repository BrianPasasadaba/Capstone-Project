document.addEventListener('DOMContentLoaded', function() {
    // Function to handle search input and suggestions
    function setupSearch(inputId, hiddenInputId, optionsListId, options) {
        const searchInput = document.getElementById(inputId);
        const hiddenInput = document.getElementById(hiddenInputId);
        const suggestionsBox = document.getElementById(optionsListId);

        // Function to update the suggestions box width
        function updateSuggestionsBoxWidth() {
            suggestionsBox.style.width = `${searchInput.offsetWidth}px`;
        }

        // Set the initial width of the suggestions box
        updateSuggestionsBoxWidth();

        // Adjust the width whenever the window is resized
        window.addEventListener('resize', updateSuggestionsBoxWidth);

        // Show suggestions while typing
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
                            // Replace the current input value with the selected option
                            searchInput.value = option; // Set input to selected suggestion
                            hiddenInput.value = option; // Update hidden input
                            
                            // Hide dropdown after selection
                            suggestionsBox.innerHTML = '';
                            suggestionsBox.style.display = 'none';
                            
                            // Set the cursor to the end of the input field to allow further typing
                            searchInput.focus();
                            searchInput.setSelectionRange(option.length, option.length);
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

        // Update hidden input on blur (use current text if no selection is made)
        searchInput.addEventListener('blur', function() {
            setTimeout(() => {
                hiddenInput.value = searchInput.value.trim();
                suggestionsBox.style.display = 'none'; // Hide dropdown
            }, 200); // Timeout ensures click on suggestion works before blur
        });

        // Close dropdown if clicked outside
        document.addEventListener('click', function(event) {
            if (!searchInput.contains(event.target) && !suggestionsBox.contains(event.target)) {
                suggestionsBox.style.display = 'none'; // Hide dropdown
            }
        });
    }

    // Options for each field
    const involvedOptions = [
        "Assembly", "Educational", "Day Care", "Health Care", "Residential Board and Care",
        "Detention and Correctional", "Residential", "Mercantile", "Business", "Industrial",
        "Storage", "Mixed Occupancies", "Special Structures", "Grass", "Agricultural",
        "Rubbish", "Post", "Forest", "Motor Vehicle", "Ship/Water Vessel", "Air Craft", 
        "Locomotive"
    ];

    const namesOptions = [
        "John Smith", "Emily Johnson", "Michael Brown", "Jessica Davis", "David Wilson",
        "Sarah Miller", "James Taylor", "Linda Anderson", "Robert Thomas", "Patricia Jackson",
        "William White", "Elizabeth Harris", "Joseph Martin", "Susan Thompson", "Charles Garcia",
        "Mary Martinez", "Thomas Robinson", "Barbara Clark", "Daniel Rodriguez", "Matthew Lewis"
    ];

    // Set up search functionality for each field
    setupSearch('crinvolved-search', 'crinvolved', 'crinvolved-options', involvedOptions);
    setupSearch('cralarm-dec-search', 'cralarm-dec', 'cralarm-dec-options', namesOptions);
    setupSearch('crfunder-dec-search', 'crfunder-dec', 'crfunder-dec-options', namesOptions);
    setupSearch('crfout-dec-search', 'crfout-dec', 'crfout-dec-options', namesOptions);
    setupSearch('crground-search', 'crground', 'crground-options', namesOptions);
    setupSearch('crsafety-search', 'crsafety', 'crsafety-options', namesOptions);
    setupSearch('crsender-search', 'crsender', 'crsender-options', namesOptions);
});
