/*-----------------------------CHART-----------------------------*/
function updateChart(timeframe) {
    const chartContainer = document.querySelector('.incident-bars');
    chartContainer.innerHTML = ''; // Clear existing chart

    if (timeframe === 'monthly') {
        fetch('/api/reports-monthly-2024/')
            .then(response => response.json())
            .then(data => {
                const monthlyData = data.monthly_data; // Example: {"Jan": 5, "Feb": 10, ..., "Dec": 0}
                const monthlyColors = ['#E4AE7E', '#E08E44', '#ED7027', '#E4AE7E', '#3C4273', '#FE982D', '#E4AE7E', '#E08E44', '#ED7027', '#E4AE7E', '#3C4273', '#FE982D'];

                // Render bars for all months
                Object.entries(monthlyData).forEach(([month, count], index) => {
                    const bar = `<li>
                                    <div class="bar" data-percentage="${count}" style="height: ${count}%; background: ${monthlyColors[index]}"></div>
                                    <span>${month}</span>
                                 </li>`;
                    chartContainer.innerHTML += bar;
                });

                animateBars(); // Animate after rendering bars
            })
            .catch(error => console.error('Error fetching monthly data:', error));
    }
 else {
        fetch('/api/reports-years/')
            .then(response => response.json())
            .then(data => {
                const yearlyData = data.yearly_data;
                const yearlyColors = ['#E4AE7E', '#E08E44', '#ED7027', '#E4AE7E', '#3C4273', '#FE982D', '#3C4273'];

                // Render bars for all years
                Object.entries(yearlyData).forEach(([year, percent], index) => {
                    const bar = `<li>
                                    <div class="bar" data-percentage="${percent}" style="height: 0%; background: ${yearlyColors[index]}"></div>
                                    <span>${year}</span>
                                 </li>`;
                    chartContainer.innerHTML += bar;
                });

                animateBars(); 
            })
            .catch(error => console.error('Error fetching yearly data:', error));
    }
}

function animateBars() {
    // Ensure bars are animated after the DOM has been updated
    $('.incident-bars .bar').each(function() {
        var percentage = $(this).data('percentage');
        $(this).animate({
            'height': percentage + '%'
        }, 1000);
    });
}

$(document).ready(function() {
    updateChart('yearly');  // Initial call to render yearly chart
});
