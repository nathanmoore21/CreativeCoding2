let data01 = [{
        name: "Oranges",
        total: 20
    },
    {
        name: "Bananas",
        total: 35
    },
    {
        name: "Pineapples",
        total: 23
    },
    {
        name: "Pears",
        total: 29
    },
    {
        name: "Apples",
        total: 23
    }
];

let data02 = [{
        name: "Oranges",
        total: 23
    },
    {
        name: "Bananas",
        total: 36
    },
    {
        name: "Pineapple",
        total: 41
    },
    {
        name: "Pears",
        total: 23
    },
    {
        name: "Apples",
        total: 18
    }
];

let data03 = [

    {
        name: "Oranges",
        total: 23,
        values: [{
            country: "Ireland",
            value: 7
        }, {
            country: "England",
            value: 11
        }, {
            country: "Spain",
            value: 5
        }]
    },
    {
        name: "Bananas",
        total: 34,
        values: [{
            country: "Ireland",
            value: 15
        }, {
            country: "England",
            value: 6
        }, {
            country: "Spain",
            value: 13
        }]
    },
    {
        name: "Pineapples",
        total: 18,
        values: [{
            country: "Ireland",
            value: 3
        }, {
            country: "England",
            value: 5
        }, {
            country: "Spain",
            value: 10
        }]
    },
    {
        name: "Pears",
        total: 32,
        values: [{
            country: "Ireland",
            value: 12
        }, {
            country: "England",
            value: 10
        }, {
            country: "Spain",
            value: 8
        }]
    },
    {
        name: "Apples",
        total: 20,
        values: [{
            country: "Ireland",
            value: 5
        }, {
            country: "England",
            value: 5
        }, {
            country: "Spain",
            value: 10
        }]
    }
];

let chart01;
let chart02;
let chart03;

function setup() {
    createCanvas(800, 800);

    chart01 = new BarChart(data01)
    chart01.chartWidth = 200;
    chart01.chartHeight = 200;
    chart01.posX = 100;
    chart01.posY = 300;

    chart02 = new HorizontalBarChart(data02)
    chart02.chartWidth = 600;
    chart02.chartHeight = 200;
    chart02.posX = 100;
    chart02.posY = 650;

    chart03 = new StackChart(data03)
    chart03.title = "Stacked Bar Chart"
    chart03.chartWidth = 200;
    chart03.chartHeight = 200;
    chart03.posX = 500;
    chart03.posY = 300;
}

function draw() {
    background(50);
    chart01.updateValues();
    chart01.render();

    chart02.updateValues();
    chart02.render();

    chart03.updateValues();
    chart03.render();
}