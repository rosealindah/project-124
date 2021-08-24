var noseX = 0;
var noseY = 0;
var lw_X = 0;
var rw_X = 0;
var difference = 0;

function preload() {

}

function setup() {
    video = createCapture(VIDEO); //activates webcam and video is a global var//
    video.size(550, 500);

    canvas = createCanvas(550, 550)
    canvas.position(560, 110) //this creates the canvas and postitions it//
    posenet = ml5.poseNet(video, modelloaded) //calls the ml5 posenet//
    posenet.on('pose', gotposes)

}

function draw() {
    background("#b0ff26");
    fill("#f4fc05");
    stroke("#f4fc05");
    square(noseX, noseY, difference)
    document.getElementById("square_side").innerHTML = "width and height of the square is " + difference + "px";


}

function modelloaded() {
    console.log("posenet has been activated")
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results)
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("x=" + noseX + "y=" + noseY);
        lw_X = results[0].pose.leftWrist.x;
        rw_X = results[0].pose.rightWrist.x;
        difference = floor(lw_X - rw_X)
        console.log("left wrist x=" + lw_X + "right wrist x=" + rw_X + "difference=" + difference)


    }
} //where result from the model posenet is stored//