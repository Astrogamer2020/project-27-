
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//var ball2;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

keyPressed();
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

ground1=new Ground(400,250,400,50);
ball1=new Ball(380,450,40);
ball2=new Ball(400,450,40);
ball3=new Ball(360,450,40);
ball4=new Ball(420,450,40);
ball5=new Ball(340,450,40);
rope1=new Rope(ball1.body,ground1.body);
rope2=new Rope(ball2.body,ground1.body);
rope3=new Rope(ball3.body,ground1.body);
rope4=new Rope(ball4.body,ground1.body);
rope5=new Rope(ball5.body,ground1.body);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground1.display();
  rope1.display();
  ball1.display();
  rope2.display();
  ball2.display();
  
  rope3.display();
  ball3.display();
  rope4.display();
  ball4.display();
  rope5.display();
  ball5.display();
  
  

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball5.body, ball5.body.position, { x:-100, y: -100 });
	}
}


