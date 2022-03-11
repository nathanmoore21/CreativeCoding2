//chart one
class LineChart {
    constructor(_data) {
        this.data = _data;

        this.title = "Number of flights handled by Irish Airports (2015-2020)";
        this.spacing = 73;
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
        this.availableWidth = this.chartWidth - (this.margin * 2) - (this.spacing * (this.data.length - 0.8));
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
        this.drawLines();
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
        text(this.title, 0, (-this.chartHeight) - 30);
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
            stroke(255, 50);
            strokeWeight(1)
            line(0, this.tickSpacing * -i, this.chartWidth, this.tickSpacing * -i);
        }
    }

    drawLines() {
        push();
        beginShape();
        for (let i = 0; i < this.data.length; i++) {
            let colorNumber = i % 2;
            noFill();
            stroke(this.colors[colorNumber]);
            strokeWeight(3);
            vertex(i * 200, -this.scaleData(this.data[i].total));
        }
        endShape();

        //figures above bars
        for (let i = 0; i < this.data.length; i++) {
            noStroke();
            fill(255);
            textSize(11);
            textAlign(CENTER);
            //text(this.data[i].total, ((this.barWidth + this.spacing) * i) + this.barWidth / 1, this.scaleData(-this.data[i].total));
        }

        //text - lables
        for (let i = 0; i < this.data.length; i++) {
            if (this.rotateLabels) {
                push()
                noStroke();
                textSize(14);
                textAlign(CENTER, TOP);
                translate(((this.barWidth + this.spacing) * i) + this.barWidth / 1, 10);
                text(this.data[i].name, 0, 0);
                pop()
            }
        }
        pop()
    }
}