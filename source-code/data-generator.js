// Generates a random integer between min and max (inclusive)
const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Generates date labels for the past 30 days plus "Today"
const generateLabels = () => {
    const now = new Date();
    const labels = [];
    for (let i = 30; i > 0; i--) {
        const pastDate = new Date(now.getTime());
        pastDate.setDate(pastDate.getDate() - i); // Get past dates
        labels.push(pastDate.toLocaleDateString('default',
            {
                day: 'numeric', month: 'short'
            }
        ));
    }
    labels.push('Today'); // Append "Today" as the last label
    return labels;
};

// Arrays to store visitor and visit data for the last 31 days
const visitorsData = [];
const visitsData = [];

// Populate arrays with random daily visitor and visit counts
for (let i = 0; i < 31; i++) {
    visitorsData.push(generateRandomNumber(1, 30)); // Random visitors (1-30)
    visitsData.push(generateRandomNumber(30, 60)); // Random visits (30-60)
}

// Stores chart data with labels, visitors, and visits
const chartData = {
    labels: generateLabels(),  // Date labels for x-axis
    visitors: visitorsData,    // Random visitors per day
    visits: visitsData         // Random visits per day
};
