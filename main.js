var lw_X = 0;
var rw_X = 0;

function preload() {

};

function setup() {
    canvas = createCanvas(550, 550);
    canvas.position(650, 100);
    video = createCapture(VIDEO);
    video.size(600, 500)
    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotposes);

};

function draw() {
    background("lavender");
    textsize(difference);
    fill("#f4fc05");
    text('akshita', 50, 400);


};

function modelloaded() {
    console.log("model has been loaded");
};

function gotposes() {

    if (results.legnth > 0) {
        console.log(results);
        lw_X = results[0].pose.leftWrist.x;
        rw_X = results[0].pose.rightWrist.x;
        difference = floor(lw_X - rw_X);
    };


}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results)
        lw_X = results[0].pose.leftWrist.x;
        rw_X = results[0].pose.rightWrist.x;
        difference = floor(lw_X - rw_X);
        console.log("left wrist x=" + lw_X + "right wrist x=" + rw_X + "difference=" + difference)
    }
}