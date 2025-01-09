document.addEventListener('DOMContentLoaded', function() {
    // Initialize charts
    function createChart(elementId, labels, data, label) {
        const canvas = document.getElementById(elementId);
        if (!canvas) {
            console.error(`Canvas element ${elementId} not found`);
            return;
        }
        
        const ctx = canvas.getContext('2d');
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
    }

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
                const targetId = this.getAttribute('data-target');
                const content = document.getElementById(targetId);
                if (content) {
                    this.classList.toggle('active');
                    content.classList.toggle('active');
                }
            });
        });
    } catch (error) {
        console.error('Error creating charts:', error);
    }
});