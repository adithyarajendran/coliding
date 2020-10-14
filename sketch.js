var fixedRect, movingRect;
var  gameObj1,gameObj2,gameObj3,gameObj4;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = false;
  
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = false;

  gameObj1 = createSprite(100,100,50,50);
  gameObj1.shapeColor = "blue"
  gameObj2 = createSprite(200,100,50,50);
  gameObj2.shapeColor = "blue"
  gameObj3 = createSprite(300,100,50,50);
  gameObj3.shapeColor = "blue"
  gameObj4 = createSprite(400,100,50,50);
  gameObj4.shapeColor = "blue"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if (isTouching(movingRect,gameObj4) ){
  movingRect.shapeColor = "yellow";
  gameObj4.shapeColor = "yellow";

 }
else{
  movingRect.shapeColor = "blue";
  gameObj4.shapeColor = "blue";
}


  drawSprites();
}







