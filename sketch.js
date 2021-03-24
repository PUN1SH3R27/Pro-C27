
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1= new bob(500,330,30)
	bobObject2= new bob(260,330,30)
	bobObject3= new bob(320,330,30)
	bobObject4= new bob(380,330,30)
	bobObject5= new bob(440,330,30)
    Ground = new Roof(width/2,500,width,40)
	RoofObject= new Roof(380,100,400,50)

	rope1= new Rope(bobObject1.body, RoofObject.body, -bobDiameter*2,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("LightGrey");
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  Ground.display();
  RoofObject.display();
  rope1.display();

  drawSprites();
 
}



