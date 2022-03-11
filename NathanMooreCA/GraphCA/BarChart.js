//chart one
class BarChart {
    constructor(_data) {
        this.data = _data;

        this.title = "2019 vs 2020 Dublin Airport Passengers";
        //legend
        this.subTitle1 = "Yellow = 2019";
        this.subTitle2 = "Blue = 2020"
        //description
        this.paragraph = "**Note** April - June 2020 is not visable as the data was too low, due to the pandemic."
        //spacing between each bar
        this.BarSpacing = 73;
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
        this.rotateLabels = false;

        //first colour is yellow for 2019. second is blue for 2020
        this.colors = [color('#f7f0a8'), color('#8de5ec')];
        this.updateValues();
    }

    updateValues() {
        this.tickSpacing = this.chartHeight / this.numTicks;
        this.availableWidth = this.chartWidth - (this.margin * 2) - (this.BarSpacing * (this.data.length - 0.8));
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
        strokeWeight(2);
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
        fill('#f7f0a8'); //yellow
        textSize(12);
        text(this.subTitle1, 0, (-this.chartHeight) + 570); //locating the legend
        fill('#8de5ec'); //blue
        textSize(12);
        text(this.subTitle2, 0, (-this.chartHeight) + 585);
        fill(155); //grey
        textSize(12);
        text(this.paragraph, 0, (-this.chartHeight) + 610); //locating description
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
        //grouped chart
        push();
        translate(this.margin, 0);
        //looping through the data to display the following
        for (let i = 0; i < this.data.length; i++) {
            push();
            for (let j = 0; j < this.data[i].values.length; j++) {
                //modulus operator % - means tell me the remainder
                let colorNumber = j % 2;
                fill(this.colors[colorNumber]);
                stroke(1);
                rect((this.barWidth + this.BarSpacing) * i, 0, this.barWidth, this.scaleData(-this.data[i].values[j]));
                translate(this.barWidth + 2, 0)
            }
            pop();

            //figures above bars
            noStroke();
            fill(255);
            textSize(11);
            textAlign(CENTER, BOTTOM);
            text(this.data[i].values, ((this.barWidth + this.BarSpacing) * i) + this.barWidth / 1, this.scaleData(-this.data[i].total));

            //text - lables
            if (this.showLabels) {
                if (this.rotateLabels) {
                    push()
                    noStroke();
                    textSize(14);
                    textAlign(LEFT, CENTER);
                    translate(((this.barWidth + this.BarSpacing) * i) + this.barWidth / 9, 10);
                    //rotate clockwise
                    rotate(PI / 6)
                    text(this.data[i].name, 0, 0);
                    pop()
                } else {
                    noStroke();
                    fill(255);
                    textSize(14);
                    textAlign(CENTER, BOTTOM);
                    text(this.data[i].name, ((this.barWidth + this.BarSpacing) * i) + this.barWidth / 1, 20);
                }
            }
        }
        pop()
    }
}