var sea
var shipImg1
var sea1
var ship
function preload(){

 sea = loadImage("sea.png");
 shipImg1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");

}

function setup(){
  createCanvas(400,400);
 
 

  sea1 = createSprite (200,200);
  sea1.addImage(sea);
  sea1.velocityX = 4;
  sea1.scale = 0.25
  
  ship = createSprite (200,200);
  ship.addAnimation("running", shipImg1);
  ship.scale = 0.5
 
}
  
function draw() {

  if(sea1.x > 400){
    sea1.x = sea1.x = 0  
  }
  
  background("0,0,250");
  

  drawSprites()
  
 }
