function spawnObstacles() {
    if(frameCount % 100 === 0) {
      var obstacle = createSprite(720,430,10,40);
      //obstacle.debug = true;
      obstacle.velocityX = -(6 + 3*score/100);
      
      //generate random obstacles
      var rand = Math.round(random(1,5));
      switch(rand) {
        case 1: obstacle.addImage(obstacle1);
                obstacle.scale = 0.4;
                break;
        case 2: obstacle.addImage(obstacle2);
                obstacle.scale = 0.5;
                break;
        case 3: obstacle.addImage(obstacle3);
                obstacle.scale = 0.5;
                break;
        case 4: obstacle.addImage(obstacle4);
                obstacle.scale = 0.4;
                break;
        case 5: obstacle.addImage(obstacle5);
                obstacle.scale = 0.3;
                EL.play();
                break;
        default: break;
      }
      
      //assign scale and lifetime to the obstacle           
  
      obstacle.lifetime = 300;
      //add each obstacle to the group
      obstaclesGroup.add(obstacle);
    }
    }