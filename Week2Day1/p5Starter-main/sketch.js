let chartWidth = 400;
let chartHeight = 400;
let data = [230, 390, 120, 230]
let spacing = 10;
let margin = 60;
let numTicks = 10;
let tickLenght = 10;
let tickSpacing = chartHeight / numTicks;
let tickValues = chartHeight / numTicks;


let availableWidth = chartHeight - (margin * 2) - (spacing * (data.length));
let barWidth = availableWidth / data.length;

console.log(barWidth)

function setup() {
    createCanvas(500,500)
    background(0)
}

function draw(){
    background(0);
    noStroke()

    translate(50, 450);

    stroke(255, 200);
    strokeWeight(2);
    line(0, 0, 0, -400);
    line(0, 0, 400, 0);

    for(let i = 0; i < numTicks; i++){
        //ticks
        stroke(255, 200);
        strokeWeight(2);
        line (0, -i * tickSpacing, -tickLenght, -i * tickSpacing);

        //tick values
        fill(255, 0, 0)
        noStroke()
        textSize(12);
        textAlign(RIGHT, CENTER);
        text(i * tickValues, -15, -i * tickValues);
    }

    translate(margin, 0)
    //bars
    for(let i = 0; i < data.length; i++){
        noStroke()
        fill(0, 255, 0);
        rect ((barWidth + spacing) * i, 0, barWidth, -data[i])
    }    
}

