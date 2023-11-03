const ctx = document.getElementById('lineChart').getContext('2d');
let delayed


// Gradient:
let gradient = ctx.createLinearGradient(0,0,-100,500);
gradient.addColorStop(0, 'rgb(67, 150, 247)');
gradient.addColorStop(1, 'rgba(67, 150, 247, .3)');

const labels = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thurs',
    'Fri',
    'Sat'
]

const data = {
        labels, 
        datasets: [{
            data: [421, 456, 398 , 488, 375, 388, 401],
            label: 'L used on this day',
            fill: true,
            backgroundColor: gradient,
            borderColor: '#8f6249',
            pointBackgroundColor: '#8f6249',
            tension: 0,
        },
    ],
}

const config = {
    type: 'line',
    data: data, 
    options: {
        radius: 5,
        hitRadius: 30,
        responsive: true,
    },
}

const myChart = new Chart(ctx, config)








const ctxt = document.getElementById('lineChartt').getContext('2d');
let delayedt


// Gradient:
let gradientt = ctx.createLinearGradient(0,0,-100,500);
gradient.addColorStop(0, 'rgb(67, 150, 247)');
gradient.addColorStop(1, 'rgba(67, 150, 247, .3)');

const labelst = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thurs',
    'Fri',
    'Sat'
]

const datat = {
        labelst, 
        datasets: [{
            data: [421, 456, 398 , 488, 375, 388, 401],
            label: 'L used on this day',
            fill: true,
            backgroundColor: gradientt,
            borderColor: '#8f6249',
            pointBackgroundColor: '#8f6249',
            tension: 0,
        },
    ],
}

const configt = {
    type: 'line',
    data: datat, 
    options: {
        radius: 5,
        hitRadius: 30,
        responsive: true,
    },
}

const myChartt = new Chart(ctxt, configt)
