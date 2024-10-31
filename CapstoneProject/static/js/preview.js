
document.addEventListener('DOMContentLoaded', function() {

function exportTableToExcel(tableId, filename = 'report_data.xlsx') {
    var table = document.getElementById(tableId);
    var wb = XLSX.utils.table_to_book(table, {sheet: "Report Data"});

    var ws = wb.Sheets["Report Data"];

    XLSX.utils.sheet_add_aoa(ws, [[ "Location", "Date", "Time", "Status"]], {origin: "A1"});

    const headerRange = XLSX.utils.decode_range(ws['!ref']);
    for (let C = headerRange.s.c; C <= headerRange.e.c; C++) {
        let cellAddress = XLSX.utils.encode_cell({r: 0, c: C});
        if (!ws[cellAddress]) continue;
        ws[cellAddress].s = {
            font: {bold: true, color: {rgb: "FFFFFF"}},
            fill: {
                fgColor: {rgb: "FFA500"}
            },
            alignment: {horizontal: "center", vertical: "center"}
        };
    }
    ws['!cols'] = [

        {wch: 20},
        {wch: 15}, 
        {wch: 15},
        {wch: 15}, 
    ];

    XLSX.writeFile(wb, filename);
}

document.querySelector('.rb-export button').addEventListener('click', function() {
    exportTableToExcel('reportTable', 'report_data.xlsx');
});
});


document.addEventListener('DOMContentLoaded', function() {
    const rowsPerPage = 10;
    let currentPage = 1;
    const tableBody = document.getElementById('reportTable');
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


    
    const reportRows = document.querySelectorAll("tbody tr[data-bs-toggle='modal']");

    reportRows.forEach(row => {
        row.addEventListener('click', function () {
            const reportId = row.getAttribute('data-report-id');
            const location = row.getAttribute('data-location');
            const date = row.getAttribute('data-date');
            const timeArrival = row.getAttribute('data-time');
            const timeFireOut = row.getAttribute('data-fireout');
            const occupancy = row.getAttribute('data-occupancy');
            const owner = row.getAttribute('data-owner');
            const alarm = row.getAttribute('data-alarm');
            const respondents = row.getAttribute('data-respondents');
            const damages = row.getAttribute('data-damages');
            const establishments = row.getAttribute('data-establishments');
            const casualties = row.getAttribute('data-casualties');
            const injured = row.getAttribute('data-injured');
            const proof = row.getAttribute('data-proof'); 
            

            document.getElementById('loc').value = location;
            document.getElementById('date').value = date;
            document.getElementById('time').value = timeArrival;
            document.getElementById('time-out').value = timeFireOut;
            document.querySelector("select[name='occupancy_type']").value = occupancy;
            document.getElementById('name').value = owner;
            document.querySelector("select[name='alarm_status']").value = alarm;
            document.getElementById('respondents').value = respondents;
            document.getElementById('damages').value = damages;
            document.getElementById('establish').value = establishments;
            document.getElementById('casualties').value = casualties;
            document.getElementById('injured').value = injured;
            
            const proofImg = document.getElementById('proof');
            if (proof) {
                proofImg.src = `/media/${proof}`;
                proofImg.style.display = 'block';
            } else {
                proofImg.style.display = 'none';
            }

            const modalResolveButton = document.querySelector(`#resolve-button-${reportId}`);
            if (modalResolveButton) {
                modalResolveButton.addEventListener('click', function() {

                    modalResolveButton.click();
                });
            }
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
    const reportRows = document.querySelectorAll("tbody tr[data-bs-toggle='modal']");
    const resolveButton = document.querySelector('.resolve-button'); 
    reportRows.forEach(row => {
        row.addEventListener('click', function () {
            const reportId = row.getAttribute('data-report-id');
            const status = row.querySelector(`#status-text-${reportId}`).textContent.trim();

            resolveButton.setAttribute('data-report-id', reportId);
            resolveButton.setAttribute('data-status', status);
            if (status === 'Case Closed') {
                resolveButton.disabled = true;
                resolveButton.textContent = 'Status Closed';
            } else {
                resolveButton.disabled = false;
                resolveButton.textContent = 'Resolve'; 
            }
        });
    });

    resolveButton.addEventListener('click', function(event) {
        event.preventDefault();

        const reportId = this.getAttribute('data-report-id');
        const currentStatus = this.getAttribute('data-status');
        const newStatus = currentStatus === 'Ongoing' ? 'Case Closed' : 'Ongoing';

        const csrfToken = getCookie('csrftoken');

        fetch(`/toggle-status/${reportId}/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken,
            },
            body: JSON.stringify({ status: newStatus })
        })
        .then(response => response.json())
        .then(data => {
            if (data.status) {
                const statusTextElement = document.querySelector(`#status-text-${reportId}`);

                if (statusTextElement) {
                    statusTextElement.textContent = data.status;
                }

                this.setAttribute('data-status', data.status);
                if (data.status === 'Case Closed') {
                    this.disabled = true;
                    this.textContent = 'Status Closed';
                }
            }

            if (data.message) {
                console.log(data.message);
            }
        })
        .catch(error => {
            console.error('Error in status update:', error);
        });
    });
});

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
  
        document.getElementById('searchInput').addEventListener('keyup', function() {
        var searchValue = this.value.toLowerCase();
        var tableRows = document.querySelectorAll('#reportTable tr');
        
        tableRows.forEach(function(row) {
        var location = row.cells[1].textContent.toLowerCase();
        var date = row.cells[2].textContent.toLowerCase();
        var time = row.cells[3].textContent.toLowerCase();
        
        if (location.includes(searchValue) || date.includes(searchValue) || time.includes(searchValue)) {
        row.style.display = '';
        } else {
        row.style.display = 'none';
        }
        });
        });
    

    