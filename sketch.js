var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score = 0;
var bg;
var batman,bm,bm1;
var joker, j1;
var invisibleGround;
var obstacleGroup,obstacle1, obstacle2, obstacle3, obstacle4, obstacle5,bomb;
var gameOver,restart,goImage,rstImg;
var EL,bgm;

function preload(){
    bg = loadImage("images/bg.png");
    
    bm = loadAnimation("images/bm1.png","images/bm2.png","images/bm3.png","images/bm4.png","images/bm5.png","images/bm6.png","images/bm7.png");
    j1 = loadAnimation("images/j7.png","images/j6.png","images/j5.png","images/j4.png","images/j3.png","images/j2.png","images/j1.png");
    obstacle1 = loadImage("images/b1.png");
    obstacle2 = loadImage("images/b2.png");
    obstacle3 = loadImage("images/b3.png");
    obstacle4 = loadImage("images/b4.png");
    obstacle5 = loadImage("images/bomb.png");
    rstImg = loadImage("images/restart.png");
    goImage = loadImage("images/gameOVer.png");
    EL = loadSound("laugh.mp3")
    bgm1 = loadSound("BGM2.mp3")

}

function setup(){
    createCanvas(1000,500);
    

    night = createSprite(500,200,1000,400);
    night.addImage(bg);
    night.scale = 1.2;
    night.x = night.width/2
    
    
    joker = createSprite(950,420,20,40)
    joker.addAnimation("run",j1);
    joker.scale = 1.7;    

    batman = createSprite(60,400,20,40)
    batman.addAnimation("running",bm);
    batman.scale = 1.7;


    invisibleGround = createSprite(500,480,1000,10);
    invisibleGround.visible = false;

    gameOver = createSprite(470,180,200,30);
    gameOver.addImage(goImage);
    gameOver.visible = false;

    restart = createSprite(490,250,200,30);
    restart.addImage(rstImg);
    restart.visible = false;

    batman.setCollider("circle",0,0,18)
    //batman.debug = true; 


    obstaclesGroup = new Group();

}

function draw(){
  background(0);

  if (gameState===PLAY){
    
    bgm1.play();
    

    score = score + Math.round(getFrameRate()/60);
    //night.velocityX = -(6 + 3*score/100);

    night.velocityX = -4;

    if (night.x < night.width/2) {
        night.x = night.width/2+50;
    }
 
    if (keyDown("space") && batman.y >= 400) {
      batman.velocityY = -25;
      batman.velocityX = 0.2;
    }
    batman.velocityY = batman.velocityY + 1

    

    spawnObstacles();
  
    if (batman.isTouching(obstaclesGroup)){
      gameState = END;

     
    }

 }
  
 else{
  bgm1.stop();
  restart.visible = true;
  gameOver.visible = true;

  night.velocityX = 0;
  batman.velocityY = 0;
  batman.velocityX = 0;

  obstaclesGroup.setVelocityXEach(0);

  obstaclesGroup.setLifetimeEach(-1);


  if (mousePressedOver(restart)) {
    Reset();
  }


 }

  batman.collide(invisibleGround);

  drawSprites();

  textSize(20);
  fill("white");
  stroke("crimson");
  text("score = "+ score,800,100);
}  

