function Reset(){
    gameState = PLAY;
    
    gameOver.visible = false;
    restart.visible = false;
    batman.x = 60
    obstaclesGroup.destroyEach();
    score = 0;
    
}