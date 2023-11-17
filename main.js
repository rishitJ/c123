leftWristX = 0
rightWristx = 0

noseX = 0
noseY = 0

difference = 45

function preload() 
{
    
}
function setup() 
{
    canvas = createCanvas(600, 500)
    canvas.position(850, 84)
    video = createCapture(VIDEO)
    video.size(600, 500)

    poseNet = ml5.poseNet(video, modelloaded)
    poseNet.on("pose", gotPoses)
}
function gotPoses(result) 
{
    if (result.length > 0) 
    {
        noseX = result[0].pose.nose.x
        noseY = result[0].pose.nose.y

        leftWristX = result[0].pose.leftWrist.x
        rightWristX = result[0].pose.rightWrist.x

        difference = floor(leftWristX - rightWristX)
        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX)
    }
}
function draw() 
{
    background("white")
    document.getElementById("square_s").innerHTML = "The Width and Height of square = " + difference + "px"

    fill("red")
    stroke("black")
    square(noseX, noseY, difference)
}
function modelloaded() 
{
    console.log("Model Is Loaded")
}