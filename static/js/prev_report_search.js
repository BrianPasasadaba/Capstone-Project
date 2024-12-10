document.addEventListener('DOMContentLoaded', function() {
    // Function to handle search input and suggestions
    function setupSearch(inputId, hiddenInputId, optionsListId, options) {
        const searchInput = document.getElementById(inputId);
        const hiddenInput = document.getElementById(hiddenInputId);
        const suggestionsBox = document.getElementById(optionsListId);

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
            
            // Always update the hidden input with the current value of the search input
            hiddenInput.value = searchInput.value.trim();
        });

        // Update hidden input on blur (use current text if no selection is made)
        searchInput.addEventListener('blur', function() {
            setTimeout(() => {
                hiddenInput.value = searchInput.value.trim(); // Always update hidden input
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
    setupSearch('involved-search', 'involved', 'involved-options', involvedOptions);
    setupSearch('alarm-dec-search', 'alarm-dec', 'alarm-dec-options', namesOptions);
    setupSearch('funder-dec-search', 'funder-dec', 'funder-dec-options', namesOptions);
    setupSearch('fout-dec-search', 'fout-dec', 'fout-dec-options', namesOptions);
    setupSearch('ground-search', 'ground', 'ground-options', namesOptions);
    setupSearch('safety-search', 'safety', 'safety-options', namesOptions);
    setupSearch('sender-search', 'sender', 'sender-options', namesOptions);
});
