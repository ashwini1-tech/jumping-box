var canvas;
var music;
var box1,box2,box3,box4;mainBox;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
box1=createSprite(100,590,150,20);
box1.shapeColor="blue";
box2=createSprite(260,590,150,20);
box2.shapeColor="orange";
box3=createSprite(420,590,150,20);
box3.shapeColor="maroon";
box4=createSprite(580,590,150,20);
box4.shapeColor="green";
mainBox=createSprite(random(20,750),300,50,30);
mainBox.shapeColor="white";
mainBox.velocityX=6;
mainBox.velocityY=-6;

    //create box sprite and give velocity
    music.loop();


}

function draw() {
    
    background(rgb(169,169,169));
    
    //create edgeSprite
    edges = createEdgeSprites();
    mainBox.bounceOff(edges);
   
drawSprites();
if(mainBox.isTouching(box4)&&mainBox.bounceOff(box4)){
    mainBox.shapeColor="green";
}
if(mainBox.isTouching(box3)&&mainBox.bounceOff(box3)){
    mainBox.shapeColor="maroon";
}
if(mainBox.isTouching(box2)&&mainBox.bounceOff(box2)){
    mainBox.shapeColor="orange";
}
if(mainBox.isTouching(box1)&&mainBox.bounceOff(box1)){
    mainBox.shapeColor="blue";
}


}
