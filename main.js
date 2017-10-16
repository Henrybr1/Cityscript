background(0, 145, 255);
noStroke();

var windows = function(x, y) {
    fill(255, 255, 255);
    rect(x + 5, y + 5, 15, 15);
};

var building = function(x, y) {
    var height = 3.25 * y;
    var r = random(130,100);
    var g = random(100,200);
    var b = random(100,200);
    fill(r, g, b);
    rect(x, y, 50, height);
    for (var j = 0; j <= 25; j += 25) {
        for (var i = y + 5; i <= y + height - height/10; i += 25) {
            windows(x + j, i);
        }
    }
};

for(var i = 30; i <= 330; i += 60) {
    building(i, 80);
}

//street
fill(0, 0, 0);
rect(0, 340, 400, 60);

//dashed strips
for(var i = 30; i < 330; i += 40) {
    fill(255, 255, 255);
    rect(i, 368, 20, 5);
}

//croswalk
for(var i = 345; i < 395; i += 10) {
    fill(255, 255, 255);
    rect(350, i, 40, 8);
}

//recyclable trash
var trash = function(x, y, r, g, b){
    this.x = x;
    this.y = y;
    this.r = r;
    this.g = g;
    this.b = b;
};

trash.prototype.draw = function() {
    fill(this.r, this.g, this.b);
    rect(this.x, this.y, 15, 20);
};

var redtrash = new trash(5, 315, 255, 0, 0);
var greentrash = new trash(25, 315, 0, 255, 0);
var bluetrash = new trash(45, 315, 0, 0, 255);
var yellowtrash = new trash(65, 315, 255, 255, 0);

redtrash.draw();
greentrash.draw();
bluetrash.draw();
yellowtrash.draw();
