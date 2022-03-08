var r = 0;
var b = 255;

function setup(){
    createCanvas(600, 400);
}

function draw(){
    //background
    r = map(mouseX, 0, 600, 0, 255);
    b = map(mouseX, 0, 600, 255, 0);
    background(r, 0, b);
    //ellipse
    fill(259, 118, 222);
    ellipse(mouseX, 200, 64, 64);
}

//map (takes 5 arguments)
//map(__,__,__,__,__)
//map(     1.what is the value that has the current range that i want to map to the new range - (mouseX),
        // 2.min of current range, 
        // 3.max of current range,
        // 4.min of new range, 
        // 5.max of new range  )