var trex,trex_anim;
var ground,ground_img;

function preload(){
  trex_anim=loadAnimation('trex1.png','trex3.png','trex4.png')
  ground_img=loadImage('ground2.png')
}

function setup() {
  createCanvas(400, 400);
  trex=createSprite(50,380,20,20)
  trex.addAnimation('trex',trex_anim)
  trex.scale=0.5
  ground=createSprite(200,380,400,20)
  ground.addImage('ground',ground_img)
}

function draw() {
  background(220);
  if(keyDown("space")){
    trex.velocityY=-12;
  }
  trex.velocityY = trex.velocityY + 0.8;
  trex.collide(ground)
  drawSprites()
}