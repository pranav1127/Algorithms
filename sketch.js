var wall,car;

function setup() {
  createCanvas(800,400);
  car=createSprite(200, 200, 50, 50);
  car.shapeColor="red"
  wall=createSprite(400,200,50,70);
  wall.shapeColor="blue"
  car.debug=true
  wall.debug=true
}

function draw() {
  background(0);  
  car.x=mouseX;
  car.y=mouseY;
  console.log(wall.x-car.x);
  if (car.x-wall.x<car.width/2+wall.width/2&&
    wall.x-car.x<car.width/2+wall.width/2&&
    car.y-wall.y<car.height/2+wall.height/2&&
    wall.y-car.y<car.height/2+wall.height/2){
car.shapeColor="yellow"

    }
    else{
      car.shapeColor="red"
    }
  drawSprites();
}