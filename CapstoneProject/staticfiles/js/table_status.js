document.querySelectorAll('.rb-table td:last-child h6').forEach((element) => {
    const statusText = element.textContent.trim().toLowerCase();
    if (statusText === 'ongoing') {
        element.style.border = '3px solid #ED7027';
    } else if (statusText === 'resolved') {
        element.style.backgroundColor = '#ED7027';
    }
});
