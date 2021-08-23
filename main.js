var img="";
var status="";
var objects=[];

function preload(){
img=loadImage("art 1.jpg");

}

function setup(){
canvas=createCanvas(640,420);
canvas.center();
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "status:Detecting Objects";
}

function modelLoaded(){
    console.log('Model Loaded!');
}


function gotResult(error, results) {
    if (error) {
        console.log(error);

    } else {
        console.log(results);
    }

}
function draw(){
    image(img,0,0,640,420)

    fill("BLACK");
    text("Brushes",280,10);
    textSize(15);
    noFill();
    rect(280,0,120,190);
}

