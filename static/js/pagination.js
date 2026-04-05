document.getElementById('accountSearchInput').addEventListener('keyup', function() {
    var searchValue = this.value.toLowerCase();
    var tableRows = document.querySelectorAll('#accountTable tr');
    var noResultsMessage = document.getElementById('noFoundFilter'); // Get the "No Data to Display" row

    let resultsFound = false; // Flag to track if any row matches the search

    tableRows.forEach(function(row) {
        var name = row.cells[1]?.textContent.toLowerCase() || '';
        var role = row.cells[2]?.textContent.toLowerCase() || '';
        var email = row.cells[3]?.textContent.toLowerCase() || '';

        // Check if any of the cells contain the search value
        if (name.includes(searchValue) || role.includes(searchValue) || email.includes(searchValue)) {
            row.style.display = '';  // Show row if it matches
            resultsFound = true; // At least one match was found
        } else {
            row.style.display = 'none';  // Hide row if it doesn't match
        }
    });

    // Show or hide the "No Data to Display" message based on the search results
    if (resultsFound) {
        noResultsMessage.style.display = 'none';  // Hide "No Data" message if results are found
    } else {
        noResultsMessage.style.display = '';  // Show "No Data" message if no results are found
    }
});



document.addEventListener('DOMContentLoaded', function() {
    const rowsPerPage = 10;
    let currentPage = 1;
    const tableBody = document.getElementById('accountTable');
    const rows = tableBody.querySelectorAll('tr');
    const totalPages = Math.ceil(rows.length / rowsPerPage);

    function displayRowsForPage(page) {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        rows.forEach((row, index) => {
            if (index >= start && index < end) {
                row.style.display = ''; 
            } else {
                row.style.display = 'none'; 
            }
        });

        updatePaginationControls();
    }

    function updatePaginationControls() {
        const prevButton = document.querySelector('.pagination .prev');
        const nextButton = document.querySelector('.pagination .next');
        const page2Button = document.getElementById('button2');
        const page3Button = document.getElementById('button3');
    
        // Enable or disable the "Previous" button
        prevButton.classList.toggle('disabled', currentPage === 1);
    
        // Enable or disable the "Next" button
        nextButton.classList.toggle('disabled', currentPage === totalPages);
    
        // Enable or disable the "Page 2" button based on row count
        if (page2Button) {
            page2Button.classList.toggle('disabled', rows.length < rowsPerPage + 1); // At least 11 rows required
        }
    
        // Enable or disable the "Page 3" button based on row count
        if (page3Button) {
            page3Button.classList.toggle('disabled', rows.length < rowsPerPage * 2 + 1); // At least 21 rows required
        }
    
        // Update active class for the current page
        document.querySelectorAll('.pagination .page-item').forEach((pageButton) => {
            pageButton.classList.remove('active');
        });
        document.querySelector(`.pagination .page-item[data-page="${currentPage}"]`)?.classList.add('active');
    }
    

    document.querySelector('.pagination .prev').addEventListener('click', function(e) {
        e.preventDefault();
        if (currentPage > 1) {
            currentPage--;
            displayRowsForPage(currentPage);
        }
    });

    document.querySelector('.pagination .next').addEventListener('click', function(e) {
        e.preventDefault();
        if (currentPage < totalPages) {
            currentPage++;
            displayRowsForPage(currentPage);
        }
    });

    document.querySelectorAll('.pagination .page-item[data-page]').forEach((pageButton) => {
        pageButton.addEventListener('click', function(e) {
            e.preventDefault();
            if (!this.classList.contains('disabled')) {
                currentPage = parseInt(this.getAttribute('data-page')); 
                displayRowsForPage(currentPage);
            }
        });
    });

    displayRowsForPage(currentPage);
});



