// Generates the current date and time in a formatted string
const generateDateTime = () => {
    const now = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const weekDay = days[now.getDay()];
    const time = now.toLocaleTimeString('en-US', {
        hour: '2-digit', minute: '2-digit', second: '2-digit'
    });

    return `${weekDay} ${year}/${month}/${day} - ${time}`;
};

// Import chart data from data.js
const data = chartData;

// Set default font for Chart.js if it's available
if (typeof Chart !== 'undefined') {
    Chart.defaults.font.family = 'Roboto Condensed';
}

// Get the chart element from the DOM
const chartElement = document.getElementById('statistics-chart');

// Check if the chart element exists
if (chartElement) {
    // Get the 2D rendering context
    const ctx = chartElement.getContext('2d');

    // Initialize a new Chart.js line chart
    new Chart(ctx, {
        type: 'line',
        // Chart data
        data: {
            // Date labels for x-axis
            labels: data.labels,
            // labels: ['Feb 7', 'Feb 8', 'Feb 9', 'Feb 10', 'Feb 11', 'Feb 12', 'Feb 13', 'Today'],
            datasets: [
                {
                    label: 'Visitors',
                    // Random visitors per day
                    data: data.visitors,
                    // data: [20, 16, 37, 60, 34, 68, 29, 50],
                    fill: true,
                    backgroundColor: '#00aaaa33',
                    borderColor: '#0aa',
                    borderWidth: 4,
                    pointBackgroundColor: '#0aa',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 1,
                    pointRadius: 7,
                    pointHoverRadius: 14,
                    tension: 0.2
                },
                {
                    label: 'Visits',
                    // Random visits per day
                    data: data.visits,
                    // data: [55, 26, 51, 67, 59, 94, 73, 60],
                    fill: true,
                    backgroundColor: '#ff445522',
                    borderColor: '#f45',
                    borderWidth: 4,
                    pointBackgroundColor: '#f45',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 1,
                    pointRadius: 7,
                    pointHoverRadius: 14,
                    tension: 0.2
                }
            ]
        },
        // Chart options
        options: {
            // Responsive feature
            responsive: true,
            maintainAspectRatio: false,
            // Chart customization
            scales: {
                x: {
                    grid: { color: '#939fff55', tickColor: '#ff0' },
                    title: {
                        display: true,
                        text: 'Date',
                        color: '#ff0',
                        font: { size: 22, weight: 'bold' }
                    },
                    ticks: { color: '#fff', font: { size: 18 } }
                },
                y: {
                    grid: { color: '#939fff55', tickColor: '#ff0' },
                    title: {
                        display: true,
                        text: 'Hits',
                        color: '#ff0',
                        font: { size: 22, weight: 'bold' }
                    },
                    ticks: { color: '#fff', font: { size: 18 } }
                }
            },
            interaction: { mode: 'index', intersect: false },
            plugins: {
                title: {
                    display: true,
                    // Display the current date and time
                    text: generateDateTime(),
                    color: '#fff',
                    font: { size: 20, weight: 'bold' }
                },
                subtitle: {
                    display: true,
                    text: 'https://www.youtube.com/@gilgeekify',
                    color: '#939fff',
                    font: { size: 17 },
                    padding: { bottom: 3 }
                },
                legend: {
                    labels: {
                        color: '#fff',
                        font: { size: 20 }
                    }
                },
                tooltip: {
                    backgroundColor: '#00000099',
                    titleColor: '#fff',
                    bodyColor: '#0f0',
                    borderColor: '#939fff',
                    cornerRadius: 12,
                    borderWidth: 2,
                    padding: 10,
                    titleFont: { size: 20 },
                    bodyFont: { size: 20 },
                    // Customize tooltip labels
                    callbacks: { label: c => ` ${c.dataset.label || ''}: ${c.raw}` }
                }
            }
        }
    });
} else {
    // Log error if chart element is missing
    console.error('Chart element with id "statistics-chart" not found.');
}
