document.addEventListener('DOMContentLoaded', function () {
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    const searchInput = document.getElementById('searchInput'); // Search input element
    const tableBody = document.querySelector('#reportTable');
    const pagination = document.querySelector('.pagination');
    const rowsPerPage = 10; // Number of rows per page
    let currentPage = 1;
    const noFoundMessage = document.getElementById('noFoundFilter'); // No results message row

    // Extract all rows' data into an array
    const allRowsData = Array.from(document.querySelectorAll('#reportTable tr')).map(row => ({
        element: row,
        date: new Date(row.dataset.date),
        status: row.querySelector('h6') ? row.querySelector('h6').textContent.trim() : null,
        textContent: row.textContent.toLowerCase(), // Store the full row text for search
    }));

    let currentFilteredData = [...allRowsData]; // Holds filtered and searched data

    // Function to render the current page
    function renderPage(data, page = 1) {
        const startIndex = (page - 1) * rowsPerPage;
        const endIndex = page * rowsPerPage;

        // Clear the table body but retain existing data reference
        tableBody.innerHTML = '';

        const rowsToRender = data.slice(startIndex, endIndex);

        // If no data to display, show the 'No results found' message
        if (rowsToRender.length === 0) {
            noFoundMessage.style.display = 'table-row'; // Show the message
        } else {
            noFoundMessage.style.display = 'none'; // Hide the message
            rowsToRender.forEach(rowData => tableBody.appendChild(rowData.element));
        }

        // Update pagination buttons
        updatePagination(data.length, page);
    }

    // Function to update pagination buttons
    function updatePagination(totalRows, currentPage) {
        const totalPages = Math.ceil(totalRows / rowsPerPage);
        pagination.innerHTML = ''; // Clear existing pagination

        // Previous button
        const prevItem = document.createElement('li');
        prevItem.className = `page-item prev ${currentPage === 1 ? 'disabled' : ''}`;
        prevItem.innerHTML = `<a class="page-link" href="#" tabindex="-1" aria-disabled="${currentPage === 1}">Previous</a>`;
        pagination.appendChild(prevItem);

        // Page number buttons
        for (let i = 1; i <= totalPages; i++) {
            const pageItem = document.createElement('li');
            pageItem.className = `page-item ${i === currentPage ? 'active' : ''}`;
            pageItem.dataset.page = i;
            pageItem.innerHTML = `<a class="page-link" href="#">${i}</a>`;
            pagination.appendChild(pageItem);
        }

        // Next button
        const nextItem = document.createElement('li');
        nextItem.className = `page-item next ${currentPage === totalPages ? 'disabled' : ''}`;
        nextItem.innerHTML = `<a class="page-link" href="#">Next</a>`;
        pagination.appendChild(nextItem);
    }

    // Function to apply filter and search together
    function applyFilterAndSearch(filterCriteria, searchTerm) {
        // Apply filter
        let filteredData = [...allRowsData];
        if (filterCriteria === 'Latest' || filterCriteria === 'Oldest') {
            filteredData.sort((a, b) => {
                return filterCriteria === 'Latest' ? b.date - a.date : a.date - b.date;
            });
        } else if (filterCriteria === 'Ongoing' || filterCriteria === 'Case Resolved') {
            filteredData = filteredData.filter(rowData =>
                filterCriteria === 'Ongoing' ? rowData.status === 'Ongoing' : rowData.status === 'Case Closed'
            );
        }

        // Apply search
        const lowerCaseSearchTerm = searchTerm.toLowerCase().trim();
        currentFilteredData = filteredData.filter(rowData =>
            rowData.textContent.includes(lowerCaseSearchTerm)
        );

        // Render the first page of results
        currentPage = 1;
        renderPage(currentFilteredData, currentPage);
    }

    // Event listener for dropdown filter
    dropdownItems.forEach(item => {
        item.addEventListener('click', function (e) {
            const filterCriteria = e.target.textContent.trim();
            const searchTerm = searchInput.value; // Include the current search term
            applyFilterAndSearch(filterCriteria, searchTerm);
        });
    });

    // Event listener for search input
    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value; // Current search term
        const activeFilter = document.querySelector('.dropdown-item.active')?.textContent.trim() || 'All';
        applyFilterAndSearch(activeFilter, searchTerm);
    });

    // Event listener for pagination
    pagination.addEventListener('click', function (e) {
        const pageItem = e.target.closest('.page-item');
        if (!pageItem || pageItem.classList.contains('disabled')) return;

        if (pageItem.classList.contains('prev')) {
            currentPage = Math.max(1, currentPage - 1);
        } else if (pageItem.classList.contains('next')) {
            currentPage = Math.min(
                Math.ceil(currentFilteredData.length / rowsPerPage),
                currentPage + 1
            );
        } else {
            currentPage = parseInt(pageItem.dataset.page);
        }

        renderPage(currentFilteredData, currentPage);
    });

    // Initial render
    renderPage(allRowsData, 1);
});
