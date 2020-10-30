
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperball;
var rect1,rect2,rect3;


function setup() {
	createCanvas(800, 600);
	engine = Engine.create();
	world = engine.world;

	paperball= new paper(100,200,30);
	
	Ground= new ground(400,height,800,20)

	rect1=createSprite(500,height-35,220,20);
	rect1.shapeColor=("red");
	rect2=createSprite(400,520,20,100);
	rect2.shapeColor=("red");
	rect3=createSprite(600,520,20,100);
	rect3.shapeColor=("red");

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);

  background(0);
  
  paperball.display();
  Ground.display();

  jump();
  drawSprites();
 
}

function jump(){

  if (keyCode === UP_ARROW){

   Matter.Body.applyForce(paperball.body,paperball.body.position,{x:5,y:-1});

   } 
   paperball.velocityY=paperball.velocityY+0.8;

}

