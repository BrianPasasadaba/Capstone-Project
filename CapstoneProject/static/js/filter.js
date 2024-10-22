document.addEventListener('DOMContentLoaded', function () {
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    const tableRows = document.querySelectorAll('#reportTable tr');

    // Function to reset the display of all rows (make all visible)
    function resetTable() {
        tableRows.forEach(row => {
            row.style.display = '';  // Reset all rows to be visible
        });
    }

    // Function to filter table rows based on the dropdown selection
    function filterTable(criteria) {
        resetTable(); // Reset the table before applying new filter

        if (criteria === 'Latest' || criteria === 'Oldest') {
            filterByDate(criteria === 'Latest' ? 'desc' : 'asc');
        } else {
            tableRows.forEach(row => {
                const statusText = row.querySelector('h6').textContent.trim();
                
                if (criteria === 'Ongoing') {
                    toggleRowVisibility(row, statusText === 'Ongoing');
                } else if (criteria === 'Case Resolved') {
                    toggleRowVisibility(row, statusText === 'Case Closed');
                }
            });
        }
    }

    // Helper function to toggle row visibility based on a condition
    function toggleRowVisibility(row, condition) {
        if (condition) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    }

    // Function to sort table rows by date
    function filterByDate(order) {
        const sortedRows = Array.from(tableRows).sort((a, b) => {
            const dateA = new Date(a.dataset.date);
            const dateB = new Date(b.dataset.date);

            // Sort ascending or descending
            if (order === 'asc') {
                return dateA - dateB;
            } else {
                return dateB - dateA;
            }
        });

        // Append sorted rows back to the table body
        const tableBody = document.querySelector('#reportTable');
        sortedRows.forEach(row => tableBody.appendChild(row));
    }

    // Attach event listener to each dropdown item
    dropdownItems.forEach(item => {
        item.addEventListener('click', function (e) {
            const filterCriteria = e.target.textContent.trim();
            filterTable(filterCriteria);
        });
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    const accountRows = document.querySelectorAll('#accountTable tr');

    // Function to reset the display of all rows
    function resetTable() {
        accountRows.forEach(row => {
            row.style.display = ''; // Make all rows visible
        });
    }

    // Function to filter and sort table rows based on the dropdown selection
    function filterTable(criteria) {
        resetTable(); // Reset the table before applying new filter

        if (criteria === 'Verified' || criteria === 'Unverified') {
            accountRows.forEach(row => {
                const statusText = row.querySelector('h6').textContent.trim();
                
                if (criteria === 'Verified') {
                    toggleRowVisibility(row, statusText === 'Verified');
                } else if (criteria === 'Unverified') {
                    toggleRowVisibility(row, statusText === 'Unverified');
                }
            });
        } else if (criteria === 'Latest' || criteria === 'Oldest') {
            sortTableByDate(criteria);
        }
    }

    // Helper function to toggle row visibility based on a condition
    function toggleRowVisibility(row, condition) {
        if (condition) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    }

    // Function to sort the table by date
    function sortTableByDate(order) {
        const tableBody = document.querySelector('#accountTable');
        const rowsArray = Array.from(accountRows);

        rowsArray.sort((a, b) => {
            const dateA = new Date(a.querySelector('td:nth-child(3)').textContent.trim());
            const dateB = new Date(b.querySelector('td:nth-child(3)').textContent.trim());

            // Swap the conditions to fix the sorting order
            return order === 'Latest' ? dateA - dateB : dateB - dateA;
        });

        // Re-attach rows to the table in the new order
        rowsArray.forEach(row => tableBody.appendChild(row));
    }

    // Attach event listener to each dropdown item
    dropdownItems.forEach(item => {
        item.addEventListener('click', function (e) {
            const filterCriteria = e.target.textContent.trim();
            filterTable(filterCriteria);
        });
    });
});

