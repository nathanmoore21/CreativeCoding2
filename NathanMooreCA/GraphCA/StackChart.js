//third chart
class StackChart {
    constructor(_data) {
        this.data = _data;

        this.title = "Number of Flights handled by main airports 2015-2020";
        this.subTitle1 = "Yellow = Arrivals";
        this.subTitle2 = "Blue = Departures"
        this.chartWidth = 300;
        this.chartHeight = 300;
        this.BarSpacing = 30;
        this.margin = 30;
        this.numTicks = 5;
        this.tickIncrements;
        this.maxValue;
        this.numPlaces = 0;
        this.tickSpacing;
        this.barWidth;
        this.availableWidth;

        this.showValues = true;
        this.showLabels = true;
        this.rotateLabels = true;

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
        push()
        translate(this.posX, this.posY);
        this.drawTicks();
        this.drawHorizontalLines();
        this.drawRects();
        this.drawAxis();
        this.drawTitle();
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
        text(this.title, 0, (-this.chartHeight) - 20);

        //legend
        fill('#f7f0a8');//yellow
        textSize(12);
        text(this.subTitle1, 0, (-this.chartHeight) + 260);
        fill('#8de5ec');//blue
        textSize(12);
        text(this.subTitle2, 0, (-this.chartHeight) + 275);
    }

    drawTicks() {
        for (let i = 0; i <= this.numTicks; i++) {
            //ticks
            stroke(255);
            strokeWeight(1)
            line(0, this.tickSpacing * -i, -10, this.tickSpacing * -i);

            //numbers (text) - figures
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
        for (let i = 0; i < this.data.length; i++) {
            push()
            for (let j = 0; j < this.data[i].values.length; j++) {
                let colorNumber = j % 2;

                //bars
                fill(this.colors[colorNumber]);
                noStroke();
                rect((this.barWidth + this.BarSpacing) * i, 0, this.barWidth, this.scaleData(-this.data[i].values[j].value));
                translate(0, this.scaleData(-this.data[i].values[j].value))
            }
            pop()

            //numbers (text) - above bars
            noStroke();
            fill(255);
            textSize(12);
            textAlign(CENTER, BOTTOM);
            text(this.data[i].total, ((this.barWidth + this.BarSpacing) * i) + this.barWidth / 2, this.scaleData(-this.data[i].total));

            //text - lables
            if (this.showLabels) {
                if (this.rotateLabels) {
                    push()
                    noStroke();
                    textSize(14);
                    textAlign(LEFT, CENTER);
                    translate(((this.barWidth + this.BarSpacing) * i) + this.barWidth / 2, 10);
                    rotate(PI / 4)
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