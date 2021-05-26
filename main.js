function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 70, 70, 150, 120);

    fill(55, 245, 220, 25);
    rect(60, 20, 220, 25);
    fill(55, 245, 220, 25);
    rect(40, 17, 25, 250);
    fill(55, 245, 220, 25);
    rect(270, 17, 25, 250);
    fill(55, 245, 220, 25);
    rect(60, 245, 220, 25);
}

function take_snapshot(){
    save('picture.png');
}