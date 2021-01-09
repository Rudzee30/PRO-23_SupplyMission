var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,finish,finished,box,box1,box2,invi ;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	finish=loadImage("images.jpg");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	finished=createSprite(width/2,80,50,50);
	finished.addImage(finish);
	finished.scale=2;
	finished.visible=false;

	invi=createSprite(400,625,200,20);
	invi.visible=false;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);

	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,70);
	groundSprite.shapeColor=color("Grey");

	
	

	engine = Engine.create();
	world = engine.world;

	box=new Box(400,620,200,20);
	box1=new Box(500,580,20,100);
	box2=new Box(300,580,20,100);

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 70 , {isStatic:true} );
	World.add(world, ground);
	 



	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;
  keyPressed();
  aftertouch();
  drawSprites();
  box.display();
  box1.display();
  box2.display();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
	packageSprite.velocityX=0;

    
  }
}
function aftertouch(){
	if(packageSprite.collide(invi)){
		finished.visible=true;
	}
}



