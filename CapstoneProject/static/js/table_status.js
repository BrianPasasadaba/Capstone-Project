document.querySelectorAll('.rb-table td:last-child h6').forEach((element) => {
    const statusText = element.textContent.trim().toLowerCase();
    const row = element.closest('tr'); // Get the parent row

    // Apply border and background color based on status
    if (statusText === 'ongoing') {
        element.style.border = '3px solid #ED7027';
        row.classList.add('status-ongoing');
    } else if (statusText === 'resolved') {
        element.style.backgroundColor = '#ED7027';
        row.classList.add('status-resolved');
    }
});

document.querySelectorAll('.ab-table td:last-child h6').forEach((element) => {
    const statusText = element.textContent.trim().toLowerCase();
    const row = element.closest('tr'); // Get the parent row

    // Apply border and background color based on status
    if (statusText === 'unverified') {
        element.style.border = '3px solid #ED7027';
        row.classList.add('status-unverified');
    } else if (statusText === 'verified') {
        element.style.backgroundColor = '#ED7027';
        row.classList.add('status-verified');
    }
});

