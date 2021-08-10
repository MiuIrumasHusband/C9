var scarletlikesthisbox;
function setup() {
  createCanvas(400,400);
  scarletlikesthisbox = createSprite (69, 69, 69, 69);
  
}

function draw() 
{
  background(30);
  if (keyIsDown(RIGHT_ARROW)) {
    scarletlikesthisbox.position.x = scarletlikesthisbox.position.x + 5
  }
  if (keyIsDown(LEFT_ARROW)) {
    scarletlikesthisbox.position.x = scarletlikesthisbox.position.x - 5
  }
  if (keyIsDown(UP_ARROW)) {
    scarletlikesthisbox.position.y = scarletlikesthisbox.position.y - 5
  }
  if (keyIsDown(DOWN_ARROW)) {
    scarletlikesthisbox.position.y = scarletlikesthisbox.position.y + 5
  }
  drawSprites();
  
}




