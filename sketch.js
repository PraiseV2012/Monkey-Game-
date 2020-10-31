
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var rand,rando
var bana
var background1
var gamestate
var spriteImage

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  spriteImage = loadAnimation("sprite_1.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)
  
  monkey = createSprite(300,590,10,10)
  monkey.addAnimation("running",monkey_running)
  monkey.scale = 0.1
  monkey.depth = 100
  
  background1 = createSprite(300,300,600,600)
  background1.shapeColor = "lightblue"
  background1.depth = monkey.depth-1  
  
  monkey.addAnimation("stop",spriteImage)
  
  score = 0
  
  ground = createSprite(300,600,800,40)
  ground.x = ground.width/2  
  ground.shapeColor = "lightgreen"
  
  obstacleGroup = new Group()
  FoodGroup = new Group()
  gamestate = "play"
  
  
}


function draw() {
background(600,600)
  
  
  
  
  if(gamestate === "play"){
  ground.velocityX = -2
  
  
  if(keyDown("space")&&monkey.y>150){
     monkey.velocityY = -5
    }
  
  if(ground.x < 200){
    ground.x = 400
  }
  
  if(frameCount%80 === 0){
  bana = Math.round(random(120,200))  
  }
  if(monkey.isTouching(FoodGroup)){
    if(FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach()
      
    }
    
    
    
  }
    
    
    
    
    
    
    
  
  score = Math.ceil(frameCount/frameRate())
    stroke("black")
  textSize(20)
  fill("black")    
    
    obstacleSpawn()    
  if(monkey.isTouching(obstacleGroup)){
    gamestate = "end"
    
  }
  
  
  
  monkey.velocityY = monkey.velocityY+0.5
  bananaSpawn()
  
  
  
  
  }
  drawSprites()
  
  if(gamestate === "end"){
    
    monkey.velocityX = 0
    monkey.velocityY = 0
    ground.velocityX = 0
    monkey.changeAnimation("stop",spriteImage)
    FoodGroup.velocityXEach = 0
    obstacleGroup.velocityXEach = 0
    text("Gameover",300,300)
        
      
  
  }
  
  
  
    
  monkey.collide(ground)
  text("Survival Time:"+score,400,50)  
  
  
  
  
}


function bananaSpawn(){
  rando = Math.round(random(1,1))  
  //if(monkey.isTouching(FoodGroup)){
   // banana.destroy()
  //}
  
  if(frameCount%80 === 0){
    
    
    switch(rando){
      case 1:banana = createSprite(610,560,10,10)
    banana.addImage(bananaImage)
    banana.scale = 0.1
    banana.velocityX = -2
    banana.lifetime = 300 
    banana.y = bana
        FoodGroup.add(banana)        
        
    }


  }  
  
}
function obstacleSpawn(){
  rand = Math.round(random(1,1))  
  if(frameCount% 300 === 0){
    
    
    
    
    switch(rand){
      case 1: obstacle = createSprite(610,560,10,10)
    obstacle.addImage(obstacleImage)
    obstacle.scale = 0.1
    obstacle.velocityX = -2
    obstacle.lifetime = 300  
    obstacleGroup.add(obstacle)
        
    }
    
    
    
  }
  
  
}




