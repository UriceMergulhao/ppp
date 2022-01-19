function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);
    video.position(100,200)
    canvas=createCanvas(400,400);
    canvas.position(800,200);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background('#006699');
}

function modelLoaded(){
    console.log("PoseNet is initialized");


}


function gotPoses(results){
    if(results.length>0){
        console.log(results);
        
    }
}