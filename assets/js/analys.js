// analys page - chart
const chartElement = document.getElementById('chart');

new Chart(chartElement, {
    type: 'bar',
    data: {
        labels: ['1/1', '2/1', '3/1', '4/1', '5/1', '6/1', '7/1'],
        datasets: [{
            data: [220, -220, 380, -150, 250, 320, -380],
            backgroundColor: [
                'rgb(34 187 103)',
                'rgb(223 47 52)',
                'rgb(34 187 103)',
                'rgb(223 47 52)',
                'rgb(34 187 103)',
                'rgb(34 187 103)',
                'rgb(223 47 52)',
            ],
            borderWidth: 0
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});

// Analys change active cate
const listCate = document.querySelector('.chart-block .list-category')
const chartBlock = document.querySelector('#chart')

listCate.addEventListener('click', (selectedItem) => {
    if (selectedItem.target.classList.contains("cate-item")) {
        // add active class
        listCate.querySelector('.border-primary').classList.remove('border-primary')
        selectedItem.target.classList.add('border-primary')
        
        let listCustom = document.querySelector('.list-custom-input')

        if (selectedItem.target.classList.contains("custom")) {
            listCustom.classList.add('show-input')
            chartBlock.classList.add('show-input')
        } else {
            listCustom.classList.remove('show-input')
            chartBlock.classList.remove('show-input')
        }
    }
})

