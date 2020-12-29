var car,wall;
var speed,weight





function setup() {
  createCanvas(400,400);
  createSprite(400, 200, 50, 50);

  speed=random(55,90)
  weight=random(40,1500)

car=createSprite(50,200,50,50)
wall=createSprite(350,200,50,50)

car.velocityX=60
}

function draw() {
  background("black");  

if(car.isTouching(wall)){
wall.shapeColor="red"
}




  drawSprites();
}