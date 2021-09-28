mouthX = 0;
mouthY = 0;

function preload() {
    venom_teeth = loadImage('teeth.png');
}


function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("PoseNet is intialised");

}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        mouthX = results[0].pose.nose.x - 40;
        mouthY = results[0].pose.nose.y;
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(venom_teeth, mouthX, mouthY, 80, 35);
}

function Take_Snapshot() {
    save("I3.png");
}