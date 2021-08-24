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
    background("lavender")
};

function modelloaded() {
    console.log("model has been loaded")
};

function gotposes() {
    console.log(results);
}