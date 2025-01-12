document.addEventListener('DOMContentLoaded', function () {
    const reportTable = document.getElementById('reportTable');
    const archiveTable = document.getElementById('archiveTable');  // Your archive table
    const viewButton = document.querySelector('.btn-view'); // Your existing "View" button
    const hiddenReportIdInput = document.getElementById('report-id'); // Hidden input for report ID
    const modal = document.getElementById('report-preview-modal');
    const modalStatus = document.querySelector('#modal-status');
    const editButton = document.querySelector('.btn-edit');
    
    let selectedRow = null;
    let selectedCheckboxCount = 0;  // Track selected checkboxes

    // Function to handle checkbox change in any table (main or archive)
    function handleCheckboxChange(event) {
        const checkbox = event.target;
        const row = checkbox.closest('tr');

        // Update the checkbox count
        if (checkbox.checked) {
            selectedCheckboxCount++;
        } else {
            selectedCheckboxCount--;
        }

        // Enable the "View" button only if exactly one checkbox is selected
        if (selectedCheckboxCount === 1) {
            viewButton.removeAttribute('disabled');
            selectedRow = row;
            if (hiddenReportIdInput) {
                hiddenReportIdInput.value = row.dataset.reportId;
            }
        } else {
            viewButton.setAttribute('disabled', true);
            selectedRow = null;
            if (hiddenReportIdInput) {
                hiddenReportIdInput.value = '';
            }
        }
    }

    // Add event listener for checkbox changes in both tables
    reportTable.addEventListener('change', handleCheckboxChange);
    archiveTable.addEventListener('change', handleCheckboxChange);

    // Listen for the "View" button click
    viewButton.addEventListener('click', function (event) {
        if (!selectedRow || selectedCheckboxCount !== 1) {
            console.log('Either no row selected or more than one checkbox selected. Preventing modal from opening.');
            event.preventDefault(); // Prevent modal from opening if more than one checkbox is selected
            return;
        }

        // Populate the modal with selected row data
        populateModal(selectedRow);

        // Show the modal
        const bootstrapModal = new bootstrap.Modal(modal);
        bootstrapModal.show();
    });

    // Function to populate the modal with selected report row data
    function populateModal(row) {
        const reportId = row.getAttribute('data-report-id');
        const location = row.getAttribute('data-location');
        const dateReported = row.getAttribute('data-date');
        const timeReported = row.getAttribute('data-time');
        const timeFireOut = row.getAttribute('data-fireout');
        const owner = row.getAttribute('data-owner');
        const alarm = row.getAttribute('data-alarm');
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

        // Set the modal status text
        if (modalStatus) {
            modalStatus.textContent = status;
        }

        // Hide or show the edit button based on the status
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

        // Resolve button handling (if needed)
        const modalResolveButton = document.querySelector(`#resolve-button-${reportId}`);
        if (modalResolveButton) {
            modalResolveButton.addEventListener('click', function() {
                modalResolveButton.click();
            });
        }
    }
});




document.addEventListener('DOMContentLoaded', function () {
    const tbody = document.querySelector('tbody'); // Parent element for event delegation
    const resolveButton = document.querySelector('.resolve-button');
    const previewModal = new bootstrap.Modal(document.getElementById('report-preview-modal'));
    const resolveWarningModal = new bootstrap.Modal(document.getElementById('resolve-warning-modal'));
    const confirmResolveButton = document.getElementById('resconfirm');
    const cancelResolveButton = document.getElementById('rescancel');
    let selectedReportId = null; // Store the selected report ID

    // Using event delegation to handle row clicks
    tbody.addEventListener('click', function (event) {
        // Ensure the click target is within a row with data-report-id attribute
        const row = event.target.closest('tr[data-report-id]');
        if (row) {
            selectedReportId = row.getAttribute('data-report-id'); // Store the report ID
            const status = row.querySelector(`#status-text-${selectedReportId}`).textContent.trim();

            resolveButton.setAttribute('data-report-id', selectedReportId);
            resolveButton.setAttribute('data-status', status);

            if (status === 'Case Closed') {
                resolveButton.disabled = true;
                resolveButton.textContent = 'Status Closed';
            } else {
                resolveButton.disabled = false;
                resolveButton.textContent = 'Resolve';
            }

            console.log('Row clicked. Selected Report ID:', selectedReportId);
        }
    });

    // Handle Resolve button click
    resolveButton.addEventListener('click', function (event) {
        event.preventDefault();

        if (selectedReportId) {
            // Close the preview modal and show the resolve confirmation modal
            previewModal.hide();
            resolveWarningModal.show();
        } else {
            console.log('No report selected. Preventing modal from opening.');
        }
    });

    // Handle the confirm button click in the resolve confirmation modal
    confirmResolveButton.addEventListener('click', function () {
        if (selectedReportId) {
            const currentStatus = resolveButton.getAttribute('data-status');
            const newStatus = currentStatus === 'Ongoing' ? 'Case Closed' : 'Ongoing';
            const csrfToken = getCookie('csrftoken');

            fetch(`/toggle-status/${selectedReportId}/`, {
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
                    const statusTextElement = document.querySelector(`#status-text-${selectedReportId}`);
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
        }
    });

    // Handle Cancel button in the confirmation modal
    cancelResolveButton.addEventListener('click', function () {
        // Close the resolve confirmation modal and reopen the preview modal
        resolveWarningModal.hide();
        previewModal.show();
    });
});

// Get CSRF token from cookies for safe post requests
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
