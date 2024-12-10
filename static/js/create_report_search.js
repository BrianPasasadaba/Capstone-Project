document.addEventListener('DOMContentLoaded', function () {
    // Function to handle dynamic options (like names from the database)
    function setupSearch(inputId, hiddenInputId, optionsListId, options) {
        const searchInput = document.getElementById(inputId);
        const hiddenInput = document.getElementById(hiddenInputId);
        const suggestionsBox = document.getElementById(optionsListId);

        searchInput.addEventListener('input', function () {
            const query = searchInput.value.toLowerCase();
            suggestionsBox.innerHTML = '';

            if (query.length > 0) {
                const filteredOptions = options.filter(option => option.name.toLowerCase().includes(query));
                if (filteredOptions.length > 0) {
                    suggestionsBox.style.display = 'block';
                    filteredOptions.forEach(option => {
                        const item = document.createElement('li');
                        item.classList.add('dropdown-item');
                        item.textContent = option.name;

                        item.addEventListener('click', () => {
                            searchInput.value = option.name;
                            hiddenInput.value = option.id; // Store user ID in hidden input

                            const contactNumber = option.contact_number || '';
                            if (inputId === 'crground-search') {
                                document.getElementById('crground-num').value = contactNumber;
                            } else if (inputId === 'crsafety-search') {
                                document.getElementById('crsafety-num').value = contactNumber;
                            } else if (inputId === 'crsender-search') {
                                document.getElementById('crsender-num').value = contactNumber;
                            }

                            suggestionsBox.innerHTML = '';
                            suggestionsBox.style.display = 'none';
                            searchInput.focus();
                            searchInput.setSelectionRange(option.name.length, option.name.length);
                        });
                        suggestionsBox.appendChild(item);
                    });
                } else {
                    suggestionsBox.style.display = 'none';
                }
            } else {
                suggestionsBox.style.display = 'none';
            }
        });

        searchInput.addEventListener('blur', function () {
            setTimeout(() => {
                hiddenInput.value = searchInput.value.trim();
                suggestionsBox.style.display = 'none';
            }, 200);
        });

        document.addEventListener('click', function (event) {
            if (!searchInput.contains(event.target) && !suggestionsBox.contains(event.target)) {
                suggestionsBox.style.display = 'none';
            }
        });
    }

    // Function to handle the static list (involvedOptions)
    function setupInvolvedSearch(inputId, hiddenInputId, optionsListId, options) {
        const searchInput = document.getElementById(inputId);
        const hiddenInput = document.getElementById(hiddenInputId);
        const suggestionsBox = document.getElementById(optionsListId);

        searchInput.addEventListener('input', function () {
            const query = searchInput.value.toLowerCase();
            suggestionsBox.innerHTML = '';

            if (query.length > 0) {
                const filteredOptions = options.filter(option => option.toLowerCase().includes(query));
                if (filteredOptions.length > 0) {
                    suggestionsBox.style.display = 'block';
                    filteredOptions.forEach(option => {
                        const item = document.createElement('li');
                        item.classList.add('dropdown-item');
                        item.textContent = option;

                        item.addEventListener('click', () => {
                            searchInput.value = option;
                            hiddenInput.value = option; // Store the selected option directly

                            suggestionsBox.innerHTML = '';
                            suggestionsBox.style.display = 'none';
                            searchInput.focus();
                            searchInput.setSelectionRange(option.length, option.length);
                        });
                        suggestionsBox.appendChild(item);
                    });
                } else {
                    suggestionsBox.style.display = 'none';
                }
            } else {
                suggestionsBox.style.display = 'none';
            }
        });

        searchInput.addEventListener('blur', function () {
            setTimeout(() => {
                hiddenInput.value = searchInput.value.trim();
                suggestionsBox.style.display = 'none';
            }, 200);
        });

        document.addEventListener('click', function (event) {
            if (!searchInput.contains(event.target) && !suggestionsBox.contains(event.target)) {
                suggestionsBox.style.display = 'none';
            }
        });
    }

    // Fetch names dynamically for namesOptions
    fetch('/fetch-names/')
        .then(response => response.json())
        .then(data => {
            const namesOptions = data.names || [];

            // Initialize search functionality for fields that use namesOptions
            setupSearch('crground-search', 'crground', 'crground-options', namesOptions);
            setupSearch('crsafety-search', 'crsafety', 'crsafety-options', namesOptions);
            setupSearch('crsender-search', 'crsender', 'crsender-options', namesOptions);
        })
        .catch(error => console.error('Error fetching names:', error));

    // Define involved options (static list)
    const involvedOptions = [
        "Assembly", "Educational", "Day Care", "Health Care", "Residential Board and Care",
        "Detention and Correctional", "Residential", "Mercantile", "Business", "Industrial",
        "Storage", "Mixed Occupancies", "Special Structures", "Grass", "Agricultural",
        "Rubbish", "Post", "Forest", "Motor Vehicle", "Ship/Water Vessel", "Air Craft",
        "Locomotive"
    ];

    // Initialize search functionality for the "Involved" field using static options
    setupInvolvedSearch('crinvolved-search', 'crinvolved', 'crinvolved-options', involvedOptions);
});
