const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
 
	polygonImg = loadImage("TOWERSIEGE-1-MAIN/polygon.png");


}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
    world = engine.world;


    stand = new Ground(400,400,100,10);
    
    polygon = createSprite(300,300,10,10);
    polygon.addImage(polygonImg);
    

Engine.run(engine);
}

function draw() {
      
rectMode(CENTER);
background(0);

stand.display();
polygon.display();


}
