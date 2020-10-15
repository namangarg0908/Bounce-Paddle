var player , ball , edges;
var playerimage , ballimage;
var topedge , bottomedge , leftedge;

function preload(){
playerimage = loadImage("paddle.png");
ballimage = loadImage("ball.png");
}

function setup(){
createCanvas(400,400);

edges = createEdgeSprites;

leftedge = createSprite(-5,200,10,60);
bottomedge = createSprite(200,405,60,10);
topedge = createSprite(200,-5,60,10);
  
player = createSprite(370,200,15,50);
player.addImage(playerimage);
  
ball = createSprite(200,200,20,20);
ball.addImage(ballimage);
ball.scale = 0.6;
ball.velocityX = 7;
ball.velocityY = 4;
}

function draw(){
background("yellow");
createEdgeSprites();

leftedge.y=ball.y;
bottomedge.x=ball.x;
topedge.x=ball.x;
  
ball.bounceOff(player);
ball.bounceOff(leftedge);  
ball.bounceOff(bottomedge);
ball.bounceOff(topedge);

if(player.y>440||player.y<-40){
player.y = 200;
}

  
if(keyDown(UP_ARROW)){
player.y = player.y-20;
}
  
if(keyDown(DOWN_ARROW)){
player.y = player.y+20;
}
  
if(ball.x>420){
ball.x = 200;
ball.y = 200;
}
drawSprites();
}