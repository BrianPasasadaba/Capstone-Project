/*-----------------------------CHART-----------------------------*/
function updateChart(timeframe) {
    const chartContainer = document.querySelector('.incident-bars');
    chartContainer.innerHTML = '';

    if (timeframe === 'monthly') {
        fetch('/api/reports-monthly-2024/')
        .then(response => response.json())
        .then(data => {
            const monthlyData = data.monthly_data; // Example: {"Jan": 5, "Feb": 10, ...}
            const monthlyColors = ['#E4AE7E', '#E08E44', '#ED7027', '#E4AE7E', '#3C4273', '#FE982D', '#E4AE7E', '#E08E44', '#ED7027', '#E4AE7E', '#3C4273', '#FE982D'];

            // Clear chart container
            chartContainer.innerHTML = '';

            // Render bars for all months
            Object.entries(monthlyData).forEach(([month, percent], index) => {
                const bar = `<li>
                                <div class="bar" data-percentage="${percent}" style="height: ${percent}%; background: ${monthlyColors[index]}"></div>
                                <span>${month}</span>
                             </li>`;
                chartContainer.innerHTML += bar;
            });
        })
        .catch(error => console.error('Error fetching monthly data:', error));

    } else {
    const yearlyData = {2018: 20, 2019: 40, 2020: 60, 2021: 80, 2022: 100, 2023: 85}; // Exclude 2024 initially
    const yearlyColors = ['#E4AE7E', '#E08E44', '#ED7027', '#E4AE7E', '#3C4273', '#FE982D', '#3C4273'];

    fetch('/api/reports-2024/')
    .then(response => response.json())
    .then(data => {
        yearlyData[data.year] = data.count; 

        chartContainer.innerHTML = '';

        Object.entries(yearlyData).forEach(([year, percent], index) => {
            const bar = `<li>
                            <div class="bar" data-percentage="${percent}" style="height: ${percent}%; background: ${yearlyColors[index]}"></div>
                            <span>${year}</span>
                         </li>`;
            chartContainer.innerHTML += bar;
        });
    })
    .catch(error => console.error('Error fetching data for 2024:', error));

}
    animateBars();
}

function animateBars() {
    $('.incident-bars .bar').each(function() {
        var percentage = $(this).data('percentage');
        $(this).animate({
            'height': percentage + '%'
        }, 1000);
    });
}

$(document).ready(function() {
    updateChart('yearly');
});
