const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    var options={
        isStatic:true
    }
    object=Bodies.circle(200,200,10,options);
    World.add(world,object);
    
}



function draw(){
    background(0);
    Engine.update(engine);
   ellipseMode(RADIUS);
   ellipse(object.position.x,object.position.y,15);
  
   
}

