document.querySelectorAll('#create-report-form input, #create-report-form select').forEach(function(el) {
    el.setAttribute('disabled', 'true');
    el.setAttribute('readonly', 'true');
});