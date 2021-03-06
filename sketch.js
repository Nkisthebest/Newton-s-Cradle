const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var l1,l2,l3,l4,l5,b1,b2,b3,b4,b5,s1,s2,s3,s5;
function setup() {
	createCanvas(1000, 1000);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	l1 = new Log(300,100,100,20);
	l2 = new Log(400,100,100,20);
	l3 = new Log(500,100,100,20);
	l4 = new Log(600,100,100,20);
	l5 = new Log(700,100,100,20);
	b1 = new Cradle(300,150,45);
	b2 = new Cradle(400,150,45);
	b3 = new Cradle(500,150,45);
	b4 = new Cradle(600,150,45);
	b5 = new Cradle(700,150,45);
	s1 = new Line(l1.body,b1.body);
	s2 = new Line(l2.body,b2.body);
	s3 = new Line(l3.body,b3.body);
	s4 = new Line(l4.body,b4.body);
	s5 = new Line(l5.body,b5.body);
}
function draw() {
  rectMode(CENTER);
  background(200); 
  l1.display(); 
  l2.display();
  l3.display(); 
  l4.display();
  l5.display(); 
  b1.display(); 
  b2.display();
  b3.display(); 
  b4.display();
  b5.display();
  s1.display();
  s2.display();
  s3.display();
  s4.display();
  s5.display();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(b1.body,b1.body.position,{x:-500,y:85})
	}
}