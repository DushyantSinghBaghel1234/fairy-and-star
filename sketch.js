var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	 //fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  
  fairy.velocityX=0;
  fairy.velocityY=0;
  keyPressed();
  drawSprites();

}

function keyPressed() {
	//write code here
	
	if (keyDown("right")) {
  fairy.velocityY=0;
  fairy.velocityX=fairy.velocityX+8;
 //fairyVoice.play();
}
if (keyDown("left")){
	fairy.velocityY=0;
	fairy.velocityX=fairy.velocityX-8;
}
if(keyDown("down"))	{
  star.velocityY=star.velocityY+5;
  star.velocityX=0;

}
}
