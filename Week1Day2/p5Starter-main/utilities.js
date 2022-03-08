function drawBoxs(numBoxs,strokeColor,strokeThickness){
    boxSize = width/numBoxs;
    for (let j=0; j<numBoxs; j++){
        for (let i=0; i<numBoxs; i++){
            noFill();
            strokeWeight(strokeThickness);
            stroke(strokeColor);
            push ()
            translate (i*boxSize, j*boxSize)
            rotate (45)
            rect(0,0,boxSize,boxSize);
            pop ()
            // console.log("all my work");
        }
    }
}