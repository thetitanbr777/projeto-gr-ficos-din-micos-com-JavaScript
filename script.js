const ctx = document.getElementById('socialMediaChart').getContext('2d');
const socialMediaChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Facebook', 'Instagram', 'Twitter', 'TikTok', 'LinkedIn'],
        datasets: [{
            label: 'Usuários (milhões)',
            data: [2900, 1400, 450, 1000, 900], // Exemplo de dados
            backgroundColor: [
                'rgba(59, 89, 152, 0.7)', // Facebook
                'rgba(225, 48, 108, 0.7)', // Instagram
                'rgba(29, 161, 242, 0.7)', // Twitter
                'rgba(255, 0, 0, 0.7)', // TikTok
                'rgba(0, 123, 181, 0.7)', // LinkedIn
            ],
            borderColor: [
                'rgba(59, 89, 152, 1)',
                'rgba(225, 48, 108, 1)',
                'rgba(29, 161, 242, 1)',
                'rgba(255, 0, 0, 1)',
                'rgba(0, 123, 181, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

