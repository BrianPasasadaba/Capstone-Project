    
    function handleExport() {
        window.location.href = '/export-initial-report/';  
    }
    
    document.addEventListener("DOMContentLoaded", function () {
        const closeButton = document.getElementById("close-button");
        const editButtons = document.querySelectorAll(".btn-edit"); 
        const resolveButton = document.querySelector(".resolve-button"); 
        const saveButton = document.querySelector(".save-button"); 
        const reportPreviewModal = document.getElementById("report-preview-modal");
        const unsavedModalElement = document.getElementById("unsaved-warning-modal");
    
        let editTriggered = false; 
    

        editButtons.forEach(function (editButton) {
            editButton.addEventListener("click", function () {
                editTriggered = true; 
    
                
                resolveButton.style.display = "none";
                saveButton.style.display = "inline-block";
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
            unsavedModal.hide();
            const reportPreviewModalInstance = new bootstrap.Modal(reportPreviewModal);
            reportPreviewModalInstance.show();
    
            // Keep the form in editable state if stay button is clicked
            resolveButton.style.display = "none";
            saveButton.style.display = "inline-block"; // Ensure the save button is visible
        });
    
        const leaveButton = document.getElementById("leave");
        leaveButton.addEventListener("click", function () {
            window.location.href = "/reports/"; 
        });
    });
    