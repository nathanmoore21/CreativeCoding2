//chart one
class BarChart {
    constructor(_data) {
        this.data = _data;

        this.title = "2019 vs 2020 Dublin Airport Passengers";
        this.chartWidth = 300;
        this.chartHeight = 300;
        //spacing between each bar
        this.BarSpacing = 5;
        this.margin = 30;
        this.numTicks = 8;
        this.tickIncrements;
        this.maxValue;
        //how much figures will be after the decimal point (in this case, none)
        this.numPlaces = 0;
        this.tickSpacing;
        this.barWidth;
        this.availableWidth;

        //boolean to I determine if the following are showing or not
        this.showValues = true;
        this.showLabels = true;
        this.rotateLabels = true;

        //first colour is yellow for 2019. second is blue for 2020
        this.colors = [color('#f7f0a8'), color('#8de5ec')];
        this.updateValues();
    }

    updateValues() {
        this.tickSpacing = this.chartHeight / this.numTicks;
        this.availableWidth = this.chartWidth - (this.margin * 2) - (this.BarSpacing * (this.data.length - 1));
        this.barWidth = this.availableWidth / this.data.length;
        let values = this.data.map(function (x) {
            return x.total
        })
        this.maxValue = max(values);
        this.tickIncrements = this.maxValue / this.numTicks;
    }

    render() {
        //start of traslation - push()
        push()
        //translate to a this location
        translate(this.posX, this.posY);

        this.drawTicks();
        this.drawHorizontalLines();
        this.drawRects();
        this.drawAxis();
        this.drawTitle();
        //end of translation
        pop()
    }

    scaleData(num) {
        return map(num, 0, this.maxValue, 0, this.chartHeight);
    }

    drawAxis() {
        //chart
        stroke(255, 180);
        strokeWeight(1);
        line(0, 0, 0, -this.chartHeight); //y axis
        line(0, 0, this.chartWidth, 0); //x axis
    }

    drawTitle() {
        //title
        noStroke();
        fill(255);
        textSize(16);
        textAlign(LEFT, BOTTOM);
        text(this.title, 0, (-this.chartHeight) - 40); //locating the title 
    }

    drawTicks() {
        for (let i = 0; i <= this.numTicks; i++) {
            //ticks
            stroke(255);
            strokeWeight(1)
            line(0, this.tickSpacing * -i, -10, this.tickSpacing * -i);

            //numbers (text)
            if (this.showValues) {
                fill(255, 200);
                noStroke();
                textSize(14);
                textAlign(RIGHT, CENTER);
                text((i * this.tickIncrements).toFixed(this.numPlaces), -15, this.tickSpacing * -i);
            }
        }
    }

    drawHorizontalLines() {
        for (let i = 0; i <= this.numTicks; i++) {
            //horizontal line
            stroke(255, 50);
            strokeWeight(1)
            line(0, this.tickSpacing * -i, this.chartWidth, this.tickSpacing * -i);
        }
    }

    drawRects() {
        push();
        translate(this.margin, 0);
        //looping through the data to display the following
        for (let i = 0; i < this.data.length; i++) {
            //modulus operator % - means tell me the remainder
            let colorNumber = i % 2;

            //bars
            fill(this.colors[colorNumber]);
            noStroke();
            rect((this.barWidth + this.BarSpacing) * i, 0, this.barWidth, this.scaleData(-this.data[i].total));

            //numbers (text)
            noStroke();
            fill(255);
            textSize(12);
            textAlign(CENTER, BOTTOM);
            text(this.data[i].total, ((this.barWidth + this.BarSpacing) * i) + this.barWidth / 2, this.scaleData(-this.data[i].total));

            //text
            if (this.showLabels) {
                if (this.rotateLabels) {
                    push()
                    noStroke();
                    textSize(14);
                    textAlign(LEFT, CENTER);
                    translate(((this.barWidth + this.BarSpacing) * i) + this.barWidth / 2, 10);
                    //rotate clockwise
                    rotate(PI / 2.5)
                    text(this.data[i].name, 0, 0);
                    pop()
                } else {
                    noStroke();
                    fill(255);
                    textSize(14);
                    textAlign(CENTER, BOTTOM);
                    text(this.data[i].name, ((this.barWidth + this.BarSpacing) * i) + this.barWidth / 2, 20);
                }
            }
        }
        pop()
    }
}