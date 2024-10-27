
    document.getElementById('accountSearchInput').addEventListener('keyup', function() {
    var searchValue = this.value.toLowerCase();
    var tableRows = document.querySelectorAll('#accountTable tr');

    tableRows.forEach(function(row) {
        var name = row.cells[1].textContent.toLowerCase();
        var role = row.cells[2].textContent.toLowerCase();
        var email = row.cells[3].textContent.toLowerCase();

        if (name.includes(searchValue) || role.includes(searchValue) || email.includes(searchValue)) {
            row.style.display = '';  
        } else {
            row.style.display = 'none';  
        }
    });
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

        prevButton.classList.toggle('disabled', currentPage === 1);

        nextButton.classList.toggle('disabled', currentPage === totalPages);

        page2Button.classList.toggle('disabled', rows.length < rowsPerPage); 
        
        page3Button.classList.toggle('disabled', rows.length < (rowsPerPage * 2)); 

        document.querySelectorAll('.pagination .page-item').forEach((pageButton) => {
            pageButton.classList.remove('active');
        });
        document.querySelector(`.pagination .page-item[data-page="${currentPage}"]`).classList.add('active');
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



