document.querySelectorAll('#report-preview-form input, #report-preview-form select').forEach(function(el) {
    el.setAttribute('disabled', 'true');
    el.setAttribute('readonly', 'true');
});