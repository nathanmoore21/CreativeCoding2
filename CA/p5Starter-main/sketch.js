//use array
//use for loop for addition
// let data19 = [2000000, 2000000, 1000000, 27000, 46000, 94000, 381000, 516000, 392000, 263000, 175000, 291000];
// let data20 = [2040000, 2040000, 430000, 500, 1000, 3000, 42000, 78000, 51000, 24000, 14000, 38000];
// let dataName = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// let dataQuarter = ["January - March 2019", "January - March 2020", "April - June 2019", "April - June 2020", "July - September 2019", "July - September 2020", "October - December 2019", "October - December 2020"]

let data = [{
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

let listValues = data.map(function (x) {
    return x.total
})

let chartWidth = 800;
let chartHeight = 500;
let scaledData = [];
let spacing = 30;
let margin = 20;
let numTicks = 10;
let posX = 100;
let posY = 600;
let headX = 400;
let headY = -550;
let tickIncrements;
let maxValue;
let numPlaces = 0;

let showValues = true;
let showLables = true;
let rotateLables = true;
let showTitle = true;

let colors;

let tickSpacing = chartHeight / numTicks; //space between ticks on  the left 
let availableWidth = chartWidth - (margin * 2) - (spacing * (data.length - 1)); //available space for bars
let barWidth = availableWidth / data.length; //bar width

function setup() {
    createCanvas(1000, 800);
    background(0);

    colors = [
        color('#f7f0a8'), //yellow
        color('#8de5ec'), //blue
    ]

    maxValue = max(listValues); //will display the max value in the array
    tickIncrements = Math.round(maxValue / numTicks);

    for (let i = 0; i < data.length; i++) {
        let tempVal = map(data[i].total, 0, maxValue, 0, chartHeight);
        scaledData.push(tempVal);
    }
}

function draw() {
    background(100);
    //relocating the chart
    translate(posX, posY);
    //chart
    stroke(255, 180);
    strokeWeight(2);
    line(0, 0, 0, -chartHeight); //y-axis
    line(0, 0, chartWidth, 0); //x-axis

    for (let i = 0; i <= numTicks; i++) {
        //ticks
        stroke(255, 100);
        strokeWeight(1);
        line(0, tickSpacing * -i, -10, tickSpacing * -i);
        //horizontal lines
        stroke(255, 50);
        strokeWeight(1);
        line(0, tickSpacing * -i, chartWidth, tickSpacing * -i);
        //numbers (text)
        fill(255, 200);
        noStroke();
        textSize(11);
        textAlign(RIGHT, CENTER);
        text((i * tickIncrements).toFixed(numPlaces), -15, tickSpacing * -i);
    }

    translate(margin, 0);
    for (let i = 0; i < scaledData.length; i++) {
        let colorNumber = i % 2; //to change the colour
        //modulus operator %
        //means tell me the remainder
        //10 % 4 = 2 (10 goes into 4 twice with the remained of 2) 
        //bars
        fill(colors[colorNumber]);
        noStroke();
        rect((barWidth + spacing) * i, 0, barWidth, -scaledData[i]);

        if (showTitle) {
            push()
            noStroke();
            fill(255);
            textSize(30);
            textAlign(CENTER, CENTER);
            translate(headX, headY);
            text("2019 vs 2020 Dublin Airport Passengers", 0, 0);
            pop()
        }
        //numbers (text)
        if (showValues) {
            noStroke();
            fill(255);
            textSize(16);
            textAlign(CENTER, BOTTOM);
            text(data[i].total, ((barWidth + spacing) * i) + barWidth / 2, -scaledData[i]);
        }
        //text (lables)
        if (showLables) {
            if (rotateLables) {
                push()
                noStroke();
                fill(255);
                textSize(14);
                textAlign(LEFT, BOTTOM);
                translate(((barWidth + spacing) * i) + barWidth / 2, 10)
                rotate(PI / 4)
                text(data[i].name, 0, 0);
                pop()

            } else {
                noStroke();
                fill(255);
                textSize(14);
                textAlign(CENTER, BOTTOM);
                text(data[i].name, ((barWidth + spacing) * i) + barWidth / 2, 20);
            }
        }
    }
}