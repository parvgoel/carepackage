var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
boxp=width/2-100
boxy=610
leftbox=createSprite(boxp,boxy,20,100)
leftbox.shapeColor="red"
leftbody=Bodies.rectangle(boxp+20,boxy,20,100,{isStatic:true})
World.add(world,leftbody)
downbox=createSprite(boxp+100,boxy+40,200,20)
downbox.shapeColor="red"
downbody=Bodies.rectangle(boxp+100,boxy+25,200,20,{isStatic:true})
World.add(world,downbody)
rightbox=createSprite(boxp+200,boxy,20,100)
rightbox.shapeColor="red"
rightbody=Bodies.rectangle(boxp+200-20,boxy,20,100,{isStatic:true})
World.add(world,rightbody)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
Matter.Body.setStatic(packageBody,false)
    
  }
}



