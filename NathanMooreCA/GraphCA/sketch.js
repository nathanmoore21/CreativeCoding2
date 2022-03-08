//declaring data sets for bar charts
//bar chart
let data01 = [{
        name: "January - March 2019", //19
        total: 2000000 + 2000000 + 1000000,
    },
    {
        name: "January - March 2020", //20
        total: 2040000 + 2040000 + 430000,
    },
    {
        name: "April - June 2019", //19
        total: 27000 + 46000 + 94000,
    },
    {
        name: "April - June 2020", //20
        total: 500 + 1000 + 3000,
    },
    {
        name: "July - September 2019", //19
        total: 381000 + 516000 + 392000,
    },
    {
        name: "July - September 2020", //20
        total: 42000 + 78000 + 51000,
    },
    {
        name: "October - December 2019", //19
        total: 263000 + 175000 + 291000,
    },
    {
        name: "October - December 2020", //20
        total: 24000 + 14000 + 38000,
    },
];

//horizontal chart
let data02 = [{
        name: "Europe 2019",
        total: 32571696
    },
    {
        name: "Europe 2020",
        total: 7404121
    },
    {
        name: "North America 2019",
        total: 4342306
    },
    {
        name: "North America 2020",
        total: 603220
    },
    // {
    //     name: "Africa 2019",
    //     total: 47886
    // },
    // {
    //     name: "Africa 2020",
    //     total: 9389
    // },
    {
        name: "Asia 2019",
        total: 924260
    },
    {
        name: "Asia 2020",
        total: 221342
    },
];

//stacked bar chart
let data03 = [

    {
        name: "2018",
        total: 266410,
        values: [{
            category: "Arrivals",
            value: 133262
        }, {
            country: "Departures",
            value: 133048
        }]
    },
    {
        name: "2019",
        total: 273558,
        values: [{
            category: "Arrivals",
            value: 136840
        }, {
            country: "Departures",
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
            country: "Departures",
            value: 47564
        }]
    }
];

let chart01;
let chart02;
let chart03;

function setup() {
    createCanvas(1425, 800);

    //decalring (data01) to 'BarChart' 
    chart01 = new BarChart(data01)
    //chart size
    chart01.chartWidth = 475;
    chart01.chartHeight = 425;
    //positioning of graph
    chart01.posX = 80;
    chart01.posY = 550;

    chart02 = new HorizontalBarChart(data02)
    chart02.chartWidth = 600;
    chart02.chartHeight = 200;
    chart02.posX = 750;
    chart02.posY = 300;

    chart03 = new StackChart(data03)
    chart03.title = "Number of Flights handled by Irish Airports 2018-2020"
    chart03.chartWidth = 600;
    chart03.chartHeight = 200;
    chart03.posX = 750;
    chart03.posY = 650;
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