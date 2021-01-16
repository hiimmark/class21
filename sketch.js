var rect1, rect2

function setup() {
  createCanvas(800,400);
  rect1 = createSprite(200,200,50,50);
  rect1.shapeColor = ("green");
  rect2 = createSprite(400,200,50,100);
  rect2.shapeColor = ("green");
  rect3 = createSprite(300,300,50,80);
  rect3.shapeColor = ("green");
  rect4 = createSprite(100,300,50,150);
  rect4.shapeColor = ("green");
  //rect1.velocityX = 3
  //rect1.velocityY = 2
  rect4.velocityX = 2
}

function draw() {
  background(255,255,255);  
  
  rect1.x = mouseX
  rect1.y = mouseY
  if(isTouching(rect1,rect2)){
    rect1.shapeColor = "red"
    rect2.shapeColor = "red"
  }
  else{
    rect1.shapeColor = "green"
    rect2.shapeColor = "green"
  }
  
  console.log(rect1.x-rect2.x)
  bounceOff(rect3,rect4);
  drawSprites();
}

