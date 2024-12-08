document.addEventListener('DOMContentLoaded', function () {
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    const tableBody = document.querySelector('#reportTable');
    const pagination = document.querySelector('.pagination');
    const rowsPerPage = 10; // Number of rows per page
    let currentPage = 1;

    // Extract all rows' data into an array
    const allRowsData = Array.from(document.querySelectorAll('#reportTable tr')).map(row => ({
        element: row,
        date: new Date(row.dataset.date),
        status: row.querySelector('h6') ? row.querySelector('h6').textContent.trim() : null,
    }));

    let currentFilteredData = [...allRowsData]; // Holds the data after filtering/sorting

    // Function to render the current page
    function renderPage(data, page = 1) {
        tableBody.innerHTML = ''; // Clear the table
        const startIndex = (page - 1) * rowsPerPage;
        const endIndex = page * rowsPerPage;
        const rowsToRender = data.slice(startIndex, endIndex);

        rowsToRender.forEach(rowData => tableBody.appendChild(rowData.element));

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

    // Function to filter and sort data
    function filterAndSortData(criteria) {
        if (criteria === 'Latest' || criteria === 'Oldest') {
            currentFilteredData.sort((a, b) => {
                return criteria === 'Latest' ? b.date - a.date : a.date - b.date;
            });
        } else if (criteria === 'Ongoing' || criteria === 'Case Resolved') {
            currentFilteredData = allRowsData.filter(rowData => {
                return criteria === 'Ongoing'
                    ? rowData.status === 'Ongoing'
                    : rowData.status === 'Case Closed';
            });
        }

        // Always render page 1 after filtering/sorting
        renderPage(currentFilteredData, 1);
        currentPage = 1;
    }

    // Event listener for dropdown filter
    dropdownItems.forEach(item => {
        item.addEventListener('click', function (e) {
            const filterCriteria = e.target.textContent.trim();
            filterAndSortData(filterCriteria);
        });
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
