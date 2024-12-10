document.addEventListener('DOMContentLoaded', function () {
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
                            if (inputId === 'ground-search') {
                                document.getElementById('ground-num').value = contactNumber;
                            } else if (inputId === 'safety-search') {
                                document.getElementById('safety-num').value = contactNumber;
                            } else if (inputId === 'sender-search') {
                                document.getElementById('sender-num').value = contactNumber;
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

    // Retain hardcoded options
    const involvedOptions = [
        "Assembly", "Educational", "Day Care", "Health Care", "Residential Board and Care",
        "Detention and Correctional", "Residential", "Mercantile", "Business", "Industrial",
        "Storage", "Mixed Occupancies", "Special Structures", "Grass", "Agricultural",
        "Rubbish", "Post", "Forest", "Motor Vehicle", "Ship/Water Vessel", "Air Craft",
        "Locomotive"
    ];

    // Fetch names dynamically for namesOptions
    fetch('/fetch-names/')
        .then(response => response.json())
        .then(data => {
            const namesOptions = data.names || [];

            // Set up search functionality for each field
            setupSearch('involved-search', 'involved', 'involved-options', involvedOptions);
            setupSearch('alarm-dec-search', 'alarm-dec', 'alarm-dec-options', namesOptions);
            setupSearch('funder-dec-search', 'funder-dec', 'funder-dec-options', namesOptions);
            setupSearch('fout-dec-search', 'fout-dec', 'fout-dec-options', namesOptions);
            setupSearch('ground-search', 'ground', 'ground-options', namesOptions);
            setupSearch('safety-search', 'safety', 'safety-options', namesOptions);
            setupSearch('sender-search', 'sender', 'sender-options', namesOptions);
        })
        .catch(error => console.error('Error fetching names:', error));
});
