
var trex ,trex_running;
var ground
function preload(){
  trex_running = loadAnimation('trex1.png','trex3.png','trex4.png')
  groundimage = loadImage('ground2.png')
}
function setup(){
  createCanvas(600,200)
  ground = createSprite(200,180,400,20)
  ground.addImage(groundimage)
  trex = createSprite(50,160,20,50)
  trex.scale = 0.5
  trex.addAnimation('running',trex_running)
}

function draw(){
  background(220)
  ground.velocityX = -2
  if (ground.x < 0)
  {
    ground.x = ground.width/2
  }
  if (keyDown('SPACE'))
  {
    trex.velocityY = -10
  }
  trex.velocityY += 0.5
  trex.collide(ground)
  drawSprites()
}
