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

   fill(17, 245, 30);
   circle(17, 245, 35);
   fill(10, 30, 17, 200);
   rect(10, 30, 17, 200);
   fill(17, 245, 30);
   circle(260, 245, 35);
   fill(10, 30, 17, 200);
   rect(250, 30, 17, 200);
   fill(17, 245, 30);
   circle(20, 30, 35);
   fill(10, 30, 17, 200);
   rect(30, 30, 200, 17);
   fill(17, 245, 30);
   circle(20, 30, 35);
   fill(10, 30, 17, 200);
   rect(36, 240, 210, 17);
   fill(17, 245, 30);
   circle(245, 39, 35);
}

function take_snapshot(){
    save('picture.png');
}