
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground1
var box1,box2,box3
var ball1

function preload()
{

}

function setup() {
	createCanvas(800, 600);
	engine = Engine.create();
	world = engine.world;

	box1 = new Box(320,530,20,100);
    box2 = new Box(380,580,120,20);
    box3 = new Box(450,530,20,100)
	
    ball1 = new ball(100,500,10)
    ground1 = new ground(20,600,1600,20)

	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display();
    box2.display();
	box3.display();
	ball1.display();
	ground1.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
Matter.Body.applyForce(ball1.body,ball1.body.position,{x:11,y:-11})

}
}