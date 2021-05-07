var gardenImg;
var catImg1,mouseImg1,cat,mouse,catImg2,mouseImg2,catImg3,mouseImg3;
function preload() {
    //load the images here
    gardenImg=loadImage("images/garden.png");
    catImg1=loadImage("images/cat1.png");
    mouseImg1=loadImage("images/mouse1.png");
    catImg2=loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    catImg3=loadImage("images/cat4.png");
    mouseImg3=loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(850,650);
    cat.addImage("jerrryStanding",catImg1);
    cat.scale=0.2;
    mouse=createSprite(200,650);
    mouse.addImage("mouseStanding",mouseImg1);
    mouse.scale=0.2;
}

function draw() {

    background(gardenImg);
    
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
       cat.velocityX=0;
       cat.addAnimation("catStopping",catImg3);
       cat.x=300;
       cat.scale=0.3;
       cat.changeAnimation("catStopping");
       mouse.addAnimation("mouseStopping",mouseImg3);
       mouse.scale=0.2;
       mouse.changeAnimation("mouseStopping");

    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyDown("LEFT_ARROW")){
   cat.velocityX=-5;
   cat.addAnimation("catMoving",catImg2);
   cat.changeAnimation("catMoving");
   mouse.addAnimation("mouseMoving",mouseImg2);
   mouse.changeAnimation("mouseMoving")
}

}
