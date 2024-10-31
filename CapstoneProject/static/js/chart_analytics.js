/*-----------------------------CHART-----------------------------*/
function updateChart(timeframe) {
    const chartContainer = document.querySelector('.incident-bars');
    chartContainer.innerHTML = '';

    if (timeframe === 'monthly') {
        const monthlyData = [45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
        const monthlyColors = ['#E4AE7E', '#E08E44', '#ED7027', '#E4AE7E', '#3C4273', '#FE982D', '#E4AE7E', '#E08E44', '#ED7027', '#E4AE7E', '#3C4273', '#FE982D'];
        monthlyData.forEach((percent, index) => {
            const monthName = new Date(0, index).toLocaleString('default', { month: 'short' });
            const bar = `<li><div class="bar" data-percentage="${percent}" style="height: 0; background: ${monthlyColors[index]}"></div><span>${monthName}</span></li>`;
            chartContainer.innerHTML += bar;
        });
    } else {
        const yearlyData = {2018: 20, 2019: 40, 2020: 60, 2021: 80, 2022: 100, 2023: 85, 2024: 75};
        const yearlyColors = ['#E4AE7E', '#E08E44', '#ED7027', '#E4AE7E', '#3C4273', '#FE982D', '#3C4273'];
        Object.entries(yearlyData).forEach(([year, percent], index) => {
            const bar = `<li><div class="bar" data-percentage="${percent}" style="height: 0; background: ${yearlyColors[index]}"></div><span>${year}</span></li>`;
            chartContainer.innerHTML += bar;
        });
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
