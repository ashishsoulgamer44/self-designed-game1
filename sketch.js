



function preload(){
  backgroundImg = loadImage("backgroundimg.jpg");
 manimg = loadImage("idle__004.png");
  
  }
  



function setup() {
  createCanvas(800,400);
  man = createSprite(100, 200, 50, 50);
  man.addImage("man",manimg);
  man.scale = 0.4;

}

function draw() {
  background(backgroundImg);  
  drawSprites();
}