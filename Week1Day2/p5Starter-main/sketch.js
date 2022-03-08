let rVal=0;

function setup(){
    createCanvas(500,500)
    drawBoxs();
    angleMode(DEGREES)
    rectMode(CENTER)
}

function draw(){
    background(0)
    
    // push ()
    // translate (width/2,height/2)
    // fill ('red')
    // rotate (rVal++)
    // rect (0,0,100,100)
    // pop ()

    // rect (300,300,100,100)


    // drawBoxs(50,color("blue"),1)
    drawBoxs(10,color('green'),2)
}