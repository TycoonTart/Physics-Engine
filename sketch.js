const Engine= Matter.Engine;
const World=Matter.World;
const Bodies= Matter.Bodies;

var engine,world;
var ground,ball;





function setup() {
  createCanvas(400,400);
  engine= Engine.create();
  world=engine.world;
  var groundOptions={
    isStatic:true
    
  }
  ground=Bodies.rectangle(100,190,200,20,groundOptions);
 World.add(world,ground);
var ballOptions={
  restitution:1

}
  ball=Bodies.circle(50,50,20,ballOptions);
 World.add(world,ball);




}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  rectMode(CENTER);
 rect(ground.position.x,ground.position.y,200,20);
 
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,10);
  
}