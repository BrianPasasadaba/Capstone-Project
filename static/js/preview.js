
document.addEventListener('DOMContentLoaded', function() {
    const rowsPerPage = 10;
    let currentPage = 1;
    const tableBody = document.getElementById('reportTable');
    const rows = tableBody.querySelectorAll('tr');
    const totalPages = Math.ceil(rows.length / rowsPerPage);
    const noDataMessage = document.getElementById('noDataMessage');
    const page2Button = document.getElementById('button2');
    const page3Button = document.getElementById('button3');

    if (rows.length === 0) {
        noDataMessage.style.display = 'block';  
        page2Button.classList.add('disabled');
        page3Button.classList.add('disabled');
        document.querySelector('.pagination .prev').classList.add('disabled');
        document.querySelector('.pagination .next').classList.add('disabled');
        return;
    }

    function displayRowsForPage(page) {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        let rowsDisplayed = false;

        rows.forEach((row, index) => {
            if (index >= start && index < end) {
                row.style.display = '';
                rowsDisplayed = true;
            } else {
                row.style.display = 'none';
            }
        });

        noDataMessage.style.display = rowsDisplayed ? 'none' : 'block';
        updatePaginationControls();
    }

    function updatePaginationControls() {
        const prevButton = document.querySelector('.pagination .prev');
        const nextButton = document.querySelector('.pagination .next');

        prevButton.classList.toggle('disabled', currentPage === 1);
        nextButton.classList.toggle('disabled', currentPage === totalPages);

        // Disable page buttons based on available data
        page2Button.classList.toggle('disabled', rows.length <= rowsPerPage);
        page3Button.classList.toggle('disabled', rows.length <= rowsPerPage * 2);

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

    

    displayRowsForPage(currentPage);
});


    
const reportRows = document.querySelectorAll("tbody tr[data-bs-toggle='modal']");
const modalStatus = document.querySelector('#modal-status');
const editButton = document.querySelector('.btn-edit');

reportRows.forEach(row => {
    row.addEventListener('click', function () {
        const reportId = row.getAttribute('data-report-id');
        
        const location = row.getAttribute('data-location');
        const dateReported = row.getAttribute('data-date');
        const timeReported = row.getAttribute('data-time');
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

        const involved = row.getAttribute('data-involved');
        const alarmDec = row.getAttribute('data-alarm-declared-by');
        const timeArrive = row.getAttribute('data-time-arrival');
        const timeUnder = row.getAttribute('data-time-under-control');
        const dateUnder = row.getAttribute('data-date-under-control');
        const funderDec = row.getAttribute('data-fire-under-declared-by');
        const timeOut = row.getAttribute('data-time-fire-out');
        const dateOut = row.getAttribute('data-date-fire-out');
        const foutDec = row.getAttribute('data-fire-out-declared-by');
        const affected = row.getAttribute('data-families-affected');
        const trucks = row.getAttribute('data-trucks');
        const groundCommander = row.getAttribute('data-ground-commander');
        const groundCommanderContact = row.getAttribute('data-ground-commander-contact');
        const safetyOfficer = row.getAttribute('data-safety-officer');
        const safetyOfficerContact = row.getAttribute('data-safety-officer-contact');
        const sender = row.getAttribute('data-sender');
        const senderContact = row.getAttribute('data-sender-contact');
        const fireTeam = row.getAttribute('data-team');

        const status = row.getAttribute('data-status'); 
            
        if (modalStatus) {
            modalStatus.textContent = status; 
        }

        if (status === 'Case Closed') {
            editButton.style.display = 'none';
        } else {
            editButton.style.display = ''; 
        }

        // Populate the form fields in the modal
        
        document.getElementById('loc').value = location;
        document.getElementById('team').value = fireTeam;
        document.getElementById('date').value = dateReported;
        document.getElementById('detect').value = timeReported;
        document.getElementById('time-out').value = timeOut;
        document.getElementById('involved').value = involved;
        document.getElementById('owner').value = owner;
        document.getElementById('alarm').value = alarm; 
        document.getElementById('alarm-dec').value = alarmDec;
        document.getElementById('time-arrive').value = timeArrive;
        document.getElementById('time-under').value = timeUnder;
        document.getElementById('date-under').value = dateUnder;
        document.getElementById('funder-dec').value = funderDec;
        document.getElementById('time-out').value = timeFireOut;
        document.getElementById('date-out').value = dateOut;
        document.getElementById('fout-dec').value = foutDec;
        document.getElementById('damage').value = damages;
        document.getElementById('fatality').value = casualties;
        document.getElementById('injured').value = injured;
        document.getElementById('affected').value = affected;
        document.getElementById('establishment').value = establishments;
        document.getElementById('truck').value = trucks;
        document.getElementById('ground').value = groundCommander;
        document.getElementById('ground-num').value = groundCommanderContact;
        document.getElementById('safety').value = safetyOfficer;
        document.getElementById('safety-num').value = safetyOfficerContact;
        document.getElementById('sender').value = sender;
        document.getElementById('sender-num').value = senderContact;

        // Handle proof image
        const proofImg = document.getElementById('proof');
        if (proof) {
            proofImg.src = proof;
            proofImg.style.display = 'block';
        } else {
            proofImg.style.display = 'none';
        }

        // Resolve button handling
        const modalResolveButton = document.querySelector(`#resolve-button-${reportId}`);
        if (modalResolveButton) {
            modalResolveButton.addEventListener('click', function() {
                modalResolveButton.click();
            });
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const reportRows = document.querySelectorAll("tbody tr[data-bs-toggle='modal']");
    const resolveButton = document.querySelector('.resolve-button');
    const previewModal = new bootstrap.Modal(document.getElementById('report-preview-modal'));
    const resolveWarningModal = new bootstrap.Modal(document.getElementById('resolve-warning-modal'));
    const confirmResolveButton = document.getElementById('resconfirm');
    const cancelResolveButton = document.getElementById('rescancel');

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

    // Handle Resolve button click
    resolveButton.addEventListener('click', function (event) {
        event.preventDefault();

        // Close the preview modal and show the resolve confirmation modal
        previewModal.hide();
        resolveWarningModal.show();
    });


    confirmResolveButton.addEventListener('click', function () {
        const reportId = resolveButton.getAttribute('data-report-id');
        const currentStatus = resolveButton.getAttribute('data-status');
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

                resolveButton.setAttribute('data-status', data.status);
                if (data.status === 'Case Closed') {
                    resolveButton.disabled = true;
                    resolveButton.textContent = 'Status Closed';
                }
            }

            if (data.message) {
                console.log(data.message);
            }

            resolveWarningModal.hide();
            window.location.href = '/reports/';
        })
        .catch(error => {
            console.error('Error in status update:', error);
        });
    });

    // Handle Cancel button in the confirmation modal
    cancelResolveButton.addEventListener('click', function () {
        // Close the resolve confirmation modal and reopen the preview modal
        resolveWarningModal.hide();
        previewModal.show();
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
  
        