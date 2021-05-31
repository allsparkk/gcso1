function setup() {
  createCanvas(1600,800);
  //cars
   car1 =createSprite(200, 100, 50, 50);
   car2 =createSprite(200,300,50,50)
   car3 =createSprite(200,500,50,50)
   car4 =createSprite(200,700,50,50)
  //wall
   wall1= createSprite(1400,100,20,100)
   wall2= createSprite(1400,300,20,100)
   wall3= createSprite(1400,500,20,100)
   wall4= createSprite(1400,700,20,100)
  //test button
   test1=createSprite(50,100,70,50)
   test2=createSprite(50,300,70,50)
   test3=createSprite(50,500,70,50)
   test4=createSprite(50,700,70,50)
}

function draw() {
  background(255,255,255);  
if(mousePressedOver(test1)){
  car1.velocityX=30
}
if(mousePressedOver(test2)){
  car2.velocityX=30
}
if(mousePressedOver(test3)){
  car3.velocityX=30
}
if(mousePressedOver(test4)){
  car4.velocityX=30
}
car1.collide(wall1)
car2.collide(wall2)
car3.collide(wall3)
car4.collide(wall4)
//deformation info

  drawSprites();
}