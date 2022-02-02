let boxWidth = 20;
let boxHeight = 20;
let spacing = 5;
let numBoxs = 10;
let xOffset = 10;
let yOffset = 10;


function setup(){
    createCanvas(500,500)
    background(0);
}

function draw(){
    drawBoxs();
}

function drawBoxs(){
    fill (255,0,0)
    noStroke()
    for (let i=0; i<numBoxs; i++){
        let totalSpace=boxWidth+spacing;
        rect (i*totalSpace + xOffset, yOffset, boxWidth, boxHeight)
    }
}

clap(3,8);

function clap(startNum,endNum){
    let loopCount = endNum-startNum
    for(let i=0;i<=loopCount;i++){
        console.log("Hi " + (startNum+i))
    }
    return "Done";
}

function addMeUp(num01,num02){
    let total = num01 + num02; //statement is between {}
    console.log("all my work");
    return total;
}

