function setup() {
    createCanvas(400, 400);
}
function draw(){
    background(0)
    
    push ()
    translate (width/2, height/2)
    rotate(PI / 4)
    rect (0,0,50,10)
    pop ()
}