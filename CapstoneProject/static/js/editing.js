    
    function handleExport() {
        window.location.href = '/export-initial-report/';  
    }
    
   
    
  
    document.addEventListener("DOMContentLoaded", function () {
        const closeButton = document.getElementById("close-button");
        const editButtons = document.querySelectorAll(".btn-edit"); // Get all edit buttons
        const reportPreviewModal = document.getElementById("report-preview-modal");
        const unsavedModalElement = document.getElementById("unsaved-warning-modal");

        let editTriggered = false; // Track if edit was clicked

        editButtons.forEach(function (editButton) {
            editButton.addEventListener("click", function () {
                editTriggered = true; // Set the flag to true if the edit button is clicked
            });
        });

        
        closeButton.addEventListener("click", function () {
            const reportPreviewModalInstance = bootstrap.Modal.getInstance(reportPreviewModal);

            if (editTriggered) {
                
                reportPreviewModalInstance.hide();

                
                reportPreviewModalInstance._element.addEventListener("hidden.bs.modal", function () {
                    const unsavedModal = new bootstrap.Modal(unsavedModalElement, {
                        backdrop: 'static', 
                        keyboard: false     
                    });
                    unsavedModal.show();
                }, { once: true }); 
            } else {
                reportPreviewModalInstance.hide();
                reportPreviewModalInstance._element.addEventListener("hidden.bs.modal", function () {
                    window.location.href = "/reports/";
                }, { once: true });
            }
        });

        
        const stayButton = document.getElementById("stay");
        stayButton.addEventListener("click", function () {
            const unsavedModal = bootstrap.Modal.getInstance(unsavedModalElement);
            unsavedModal.hide(); // Close the unsaved changes modal
            const reportPreviewModalInstance = new bootstrap.Modal(reportPreviewModal);
            reportPreviewModalInstance.show();
        });

        const leaveButton = document.getElementById("leave");
        leaveButton.addEventListener("click", function () {
            window.location.href = "/reports/"; // Redirect to /reports/ when "Leave" is clicked
        });
    });

