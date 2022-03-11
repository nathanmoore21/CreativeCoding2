//declaring data sets for bar charts
//bar chart
let data01 = [
    {
        name: "Jan - Mar",
        total: 2000000 + 2000000 + 1000000, 
        values: [2000000 + 2000000 + 1000000, 2040000 + 2040000 + 430000]
    },
    {
        name: "Apr - Jun",
        total: 27000 + 46000 + 94000,
        values: [27000 + 46000 + 94000, 500 + 1000 + 3000]
    },
    {
        name: "Jul - Sep",
        total: 381000 + 516000 + 392000,
        values: [381000 + 516000 + 392000, 42000 + 78000 + 51000]
    },
    {
        name: "Oct - Dec",
        total: 263000 + 175000 + 291000,
        values: [263000 + 175000 + 291000, 24000 + 14000 + 38000]
    }
]

//horizontal chart
let data02 = [{
        name: "Europe '19",
        // total: 32,571,696
        total: 32500
    },
    {
        name: "Europe '20",
        // total: 7404121
        total: 7400
    },
    {
        name: "North America '19",
        // total: 4342306
        total: 4340
    },
    {
        name: "North America '20",
        // total: 603220
        total: 603
    },
    {
        name: "Asia '19",
        // total: 924260
        total: 924
    },
    {
        name: "Asia '20",
        // total: 221342
        total: 221
    },
];

//stacked bar chart
let data03 = [
    {
        name: "2015",
        total: 231648,
        values: [{
            category: "Arrivals",
            value: 116031
        }, {
            category: "Departures",
            value: 115617
        }]
    },
    {
        name: "2016",
        total: 247337,
        values: [{
            category: "Arrivals",
            value: 123822
        }, {
            category: "Departures",
            value: 123515
        }]
    },
    {
        name: "2017",
        total: 254371,
        values: [{
            category: "Arrivals",
            value: 127352
        }, {
            category: "Departures",
            value: 127019
        }]
    },
    {
        name: "2018",
        total: 266410,
        values: [{
            category: "Arrivals",
            value: 133262
        }, {
            category: "Departures",
            value: 133048
        }]
    },
    {
        name: "2019",
        total: 273500,
        values: [{
            category: "Arrivals",
            value: 136840
        }, {
            category: "Departures",
            value: 136718
        }]
    },
    {
        name: "2020",
        total: 95309,
        values: [{
            category: "Arrivals",
            value: 47745
        }, {
            category: "Departures",
            value: 47564
        }]
    }
];

//line chart				
let data04 = [
    {
        name: "2015",
        total: 188771
    },
    {
        name: "2016",
        total: 204563
    },
    {
        name: "2017",
        total: 212248
    },
    {
        name: "2018",
        total: 222692
    },
    {
        name: "2019",
        total: 229000
    },
    {
        name: "2020",
        total: 80540
    }
];

let chart01;
let chart02;
let chart03;
let chart04;

function setup() {
    // createCanvas(1425, 800);
    createCanvas(1425, 1305);

    //decalring (data01) to 'BarChart' 
    chart01 = new BarChart(data01)
    //chart size
    chart01.chartWidth = 475;
    chart01.chartHeight = 525;
    //positioning of graph
    chart01.posX = 80;
    chart01.posY = 650;

    chart02 = new HorizontalBarChart(data02)
    chart02.chartWidth = 600;
    chart02.chartHeight = 200;
    chart02.posX = 750;
    chart02.posY = 300;

    chart03 = new StackChart(data03)
    chart03.title = "Number of Flights handled by Irish Airports 2015-2020"
    chart03.chartWidth = 600;
    chart03.chartHeight = 200;
    chart03.posX = 750;
    chart03.posY = 650;

    chart04 = new LineChart(data04)
    chart04.chartWidth = 1000;
    chart04.chartHeight = 400;
    chart04.posX = 80;
    chart04.posY = 1250;
}

function draw() {
    background(50);
    chart01.updateValues();
    chart01.render();

    chart02.updateValues();
    chart02.render();

    chart03.updateValues();
    chart03.render();

    chart04.updateValues();
    chart04.render();
}