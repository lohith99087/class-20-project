
var body, ground,rock;




const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

function setup()
{
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var ball_options={
     restitution:0.3,
     frictionAir:0.1      

  }
  ball=Bodies.circle(200,200,50,ball_options)
  World.add(world,ball)
 var ground_options = {
  isStatic:true


 }
  ground=Bodies.rectangle(200,380,400,10,ground_options)
  World.add(world,ground)

  rock=Bodies.circle(200,30,10,rock_options)

  var rock_options=
  {
    restitution:2,
    frictionAir:0.1 
  }
  World.add(world,rock)

}

function draw() 
{
  background(51);
  Engine.update(engine)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,50,50)
  rectMode(CENTER)


  rect(ground.position.x,ground.position.y,400,10)

  ellipseMode(RADIUS)
  ellipse(rock.position.x,rock.position.y,10,10)
 
}

