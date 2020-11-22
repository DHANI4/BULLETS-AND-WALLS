var car, wall; 
//var safeimg,lethalimg,averageimg,mainimg;
var speed, weight;
var thickness;

/*function preload()
{

  mainimg=loadImage("main.png");
  safeimg=loadImage("safe.png");
  averageimg=loadImage("average.png");
  lethalimg=loadImage("lethal.png");
 
 }*/

function setup() 
{
  createCanvas(1400,400);

  speed=random(30,100);
  weight=random(700,2500);
  thickness=Math.round(random(22,83));
  
  car=createSprite(50, 200, 50,5);
  car.shapeColor="white";
  car.scale=0.5;
  car.velocityX=speed;

 /* car.addAnimation("safe",safeimg);
  safeimg.scale=0.5;
  car.addAnimation("average",averageimg);
  car.addAnimation("lethal",lethalimg);
  car.addAnimation("main",mainimg);
*/

  wall=createSprite(1340, 200,thickness,height/2);
  wall.shapeColor="grey";
}

function draw() 
{
  background("black");  
  
  if (//car.x - wall.x < wall.width/2 + car.width/2&&
     wall.x - car.x < (wall.width/2 + car.width)/2)
    {
    car.velocityX=0;

    var damage=0.5*speed*weight*speed/thickness*thickness*thickness;
    if(damage>10){
      wall.shapeColor=color(255,0,0);
  }
  
  if(damage<50){
    wall.shapeColor=color(rgb(0, 128, 0));
  }

    if(((0.5*weight*speed*speed)/22500)>180)
    {
     // car.changeAnimation("lethal",lethalimg);
    }else if(((0.5*weight*speed*speed)/22500)<80)
    {
      //wall.shapeColor("pink");
    }else if(((0.5*weight*speed*speed)/22500)<180 && ((0.5*weight*speed*speed)/22500)>80)
    {
     // wall.shapeColor("white");
    }

  }


  drawSprites();
}