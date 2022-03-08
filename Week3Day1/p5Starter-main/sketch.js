let chartWidth = 400;
let chartHeight = 400;
let data        = [200,130,200, 250,300];
let scaledData  =[];
let dataLabels  = ["Oranges","Bananas","Lemons","Limes","Apples","Grapes"]

//console.log(Math.max(...data));
let maxValue;

let spacing =5;
let margin =20;
let availableWidth = chartWidth - (margin*2) - (spacing*(data.length-1));
let barWidth = availableWidth / data.length;
let numTick = 10;
let tickSpacing = chartHeight / numTick;
let tickLenght = 10;
let tickIncrements;

//console.log(barWidth)

function setup() {
    createCanvas(500, 500);
    background(0);

    maxValue = max(data);
    tickIncrements = Math.round(maxValue / numTick);

    for(let i=0; i <data.length; i++) {
        let tempVal=map(data[i],0,maxValue,0,chartHeight)
        //console.log(tempVal)
        scaledData.push(tempVal)
        //console.log(scaledData)
    }

}

function draw() {

    background(0);
    translate(50, 450);

    stroke(255);
    strokeWeight(2);
    line(0, 0, 0, -chartHeight);
    line(0, 0, 400, 0);

    for (let i=0; i <= numTick; i++) {
        stroke(255,200)
        strokeWeight(1)
        line(0, -i * tickSpacing, -tickLenght, -i * tickSpacing)

        fill(255,0,0);
        noStroke();
        textSize(12);
        textAlign(RIGHT,CENTER);
        text(i*tickSpacing, -15, tickSpacing * -i);
    }

    translate(margin, 0);
    //console.log(barWidth)
    for (let i = 0; i < scaledData; i++) {
        console.log(barWidth)
        fill(0,255,0);
    }
        //rect((barWidth + spacing) * i, 0, barWidth, -scaledData[i]);
        

        // fill(255);
        // noStroke();
        // textSize(17);
        // textAlign(RIGHT,CENTER);
        // text(data[i],((barWidth + spacing) *ibarWidth/2, scaledData[i]+ 20)*i,0);
    }

