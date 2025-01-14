var selectedReportId = null; // Store the selected report ID
var hiddenReportIdInput = document.getElementById('report-id'); // Hidden input for report ID
var selectedCheckboxCount = 0; // Track selected checkboxes


document.addEventListener('DOMContentLoaded', function () {
    const reportTable = document.getElementById('reportTable');
    const archiveTable = document.getElementById('archiveTable');  // Your archive table
    const viewButton = document.querySelector('.btn-view'); // Your existing "View" button
    const modal = document.getElementById('report-preview-modal');
    const modalStatus = document.querySelector('#modal-status');
    const editButton = document.querySelector('.btn-edit');
    const resolveButtons = document.querySelectorAll('.resolve-button');
    
    let selectedRow = null;



    reportTable.addEventListener('click', function (event) {
        const clickedRow = event.target.closest('tr');
        
        // Check if we clicked on a checkbox specifically
        const checkbox = event.target.closest('input[type="checkbox"]');
        
        // Proceed only if we clicked a checkbox in a row with data-report-id
        if (checkbox && clickedRow && clickedRow.dataset.reportId) {
            const reportId = clickedRow.dataset.reportId;
            
            if (checkbox.checked) {
                // Add the ID to our array if it's not already there
                if (!selectedReportIds.includes(reportId)) {
                    selectedReportIds.push(reportId);
                }
                console.log('Row selected for view. Report IDs:', selectedReportIds);
                
                // Update the hidden input with the comma-separated report IDs
                hiddenReportIdInput.value = selectedReportIds.join(',');
                console.log('Hidden Input Value Set:', hiddenReportIdInput.value);
            } else {
                // Remove this specific ID from the array
                selectedReportIds = selectedReportIds.filter(id => id !== reportId);
                
                // Update the hidden input with the remaining IDs
                hiddenReportIdInput.value = selectedReportIds.join(',');
                console.log('Selection updated:', selectedReportIds);
            }
        }
    });

    archiveTable.addEventListener('click', function (event) {
        const clickedRow = event.target.closest('tr');
        
        // Check if we clicked on a checkbox specifically
        const checkbox = event.target.closest('input[type="checkbox"]');
        
        // Proceed only if we clicked a checkbox in a row with data-report-id
        if (checkbox && clickedRow && clickedRow.dataset.reportId) {
            const reportId = clickedRow.dataset.reportId;
            
            if (checkbox.checked) {
                // Add the ID to our array if it's not already there
                if (!selectedReportIds.includes(reportId)) {
                    selectedReportIds.push(reportId);
                }
                console.log('Row selected for view. Report IDs:', selectedReportIds);
                
                // Update the hidden input with the comma-separated report IDs
                hiddenReportIdInput.value = selectedReportIds.join(',');
                console.log('Hidden Input Value Set:', hiddenReportIdInput.value);
            } else {
                // Remove this specific ID from the array
                selectedReportIds = selectedReportIds.filter(id => id !== reportId);
                
                // Update the hidden input with the remaining IDs
                hiddenReportIdInput.value = selectedReportIds.join(',');
                console.log('Selection updated:', selectedReportIds);
            }
        }
    });

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
            console.log('Single checkbox selected. Enabling "View" button.');
            viewButton.removeAttribute('disabled');
            selectedRow = row;
            if (hiddenReportIdInput) {
                hiddenReportIdInput.value = row.dataset.reportId;
            }
        } else {
            viewButton.setAttribute('disabled', true);
            console.log('Multiple checkboxes selected. Disabling "View" button.');
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
        // Ensure exactly one row is selected
        if (!selectedReportIds) {
            console.log('No report selected. Preventing modal from opening.');
            event.preventDefault(); // Prevent modal from opening if no report is selected
            return;
        }

        // Find the row with the selected report ID
        const selectedRow = document.querySelector(`tr[data-report-id="${selectedReportIds}"]`);
        
        if (selectedRow) {
            // Populate the modal with selected row data

            console.log('Selected row found:', selectedRow);
            populateModal(selectedRow);

            // Show the modal
            const bootstrapModal = new bootstrap.Modal(modal);
            bootstrapModal.show();
        } else {
            console.log('Selected row not found.');
        }
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
        const isArchived = row.dataset.archive === 'true'; // Check 'true' as a string


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
        document.getElementById('is_archived').value = isArchived;

        // Handle proof image
        const proofImg = document.getElementById('proof');
        if (proof !== 'None') {
            proofImg.src = proof;
            proofImg.style.display = 'block';
        } else {
            proofImg.style.display = 'none';

            // Add a message or element when there's no proof
            const noProofMessage = document.createElement('p');
            noProofMessage.textContent = 'No proof image available';
            noProofMessage.className = 'text-muted'; // Add styling class if needed
            proofImg.parentNode.appendChild(noProofMessage);

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
    const tbody = document.querySelector('tbody');
    const resolveButton = document.querySelector('.resolve-button');
    const previewModal = new bootstrap.Modal(document.getElementById('report-preview-modal'));
    const resolveWarningModal = new bootstrap.Modal(document.getElementById('resolve-warning-modal'));
    const confirmResolveButton = document.getElementById('resconfirm');
    const cancelResolveButton = document.getElementById('rescancel');
    let selectedReportId = null;

    // Check if the row data is complete
    function isRowDataComplete(row) {
        const requiredFields = [
            'data-location', 'data-date', 'data-time', 'data-fireout', 
            'data-owner', 'data-alarm', 'data-damages', 'data-establishments', 
            'data-casualties', 'data-injured', 'data-proof', 'data-involved', 
            'data-alarm-declared-by', 'data-time-arrival', 'data-time-under-control', 
            'data-date-under-control', 'data-fire-under-declared-by', 'data-time-fire-out', 
            'data-date-fire-out', 'data-fire-out-declared-by', 'data-families-affected', 
            'data-trucks', 'data-ground-commander', 'data-ground-commander-contact', 
            'data-safety-officer', 'data-safety-officer-contact', 'data-sender', 
            'data-sender-contact', 'data-team'
        ];

        for (let field of requiredFields) {
            if (!row.getAttribute(field) || row.getAttribute(field) === 'None') {
                return false; 
            }
        }
        return true; 
    }

    tbody.addEventListener('click', function (event) {
        const row = event.target.closest('tr[data-report-id]');
        if (row) {
            selectedReportId = row.getAttribute('data-report-id');
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
        }
    });

    resolveButton.addEventListener('click', function (event) {
        event.preventDefault();

        if (selectedReportId) {
            const row = document.querySelector(`tr[data-report-id="${selectedReportId}"]`);

            if (isRowDataComplete(row)) {
                previewModal.hide();
                resolveWarningModal.hide();
                confirmResolveButton.click();
            } else {
                previewModal.hide();
                resolveWarningModal.show();
            }
        } else {
            console.log('No report selected.');
        }
    });

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

                resolveWarningModal.hide();
                window.location.href = '/reports/';
            })
            .catch(error => {
                console.error('Error in status update:', error);
            });
        }
    });

    cancelResolveButton.addEventListener('click', function () {
        resolveWarningModal.hide();
        previewModal.show();
    });

});

// Get CSRF token for safe POST requests
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
