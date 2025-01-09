// Initialize charts
const createChart = (elementId, labels, data, label) => {
    const ctx = document.getElementById(elementId).getContext('2d');
    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: label,
                data: data,
                backgroundColor: 'rgba(54, 162, 235, 0.8)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });
};

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    try {
        // Create charts
        createChart('topicsChart', 
            ['Design & Retail', 'Construction', 'Sustainability'],
            [7, 4, 3],
            'Mentions'
        );

        createChart('initiativesChart',
            ['Store Development', 'Design Innovation', 'Strategic Growth'],
            [7, 5, 3],
            'Mentions'
        );

        createChart('solutionsChart',
            ['Core Infrastructure', 'Essential Services', 'Supporting Elements'],
            [8, 4, 3],
            'Mentions'
        );

        // Add click handlers for expandable sections
        document.querySelectorAll('.topic-header').forEach(header => {
            header.addEventListener('click', function() {
                this.classList.toggle('active');
                const content = this.nextElementSibling;
                content.classList.toggle('active');
            });
        });

        // Hide loading message
        const loading = document.getElementById('loading');
        if (loading) {
            loading.style.display = 'none';
        }
    } catch (error) {
        console.error('Error creating charts:', error);
        const loading = document.getElementById('loading');
        if (loading) {
            loading.innerHTML = 'There was an error loading the charts. Please try refreshing the page.';
        }
    }
});