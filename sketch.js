const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var rows=[];
var particles = [];
var plinkos=[];
var rows;
var ground;


var rowsHeight = 300



function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,790,800,20);
  for(var i = 40; i<= width-10; i = i+50){
    plinkos.push(new Plinko(i ,185))
  }
  for(var i = 15; i<= width-10; i = i+50){
    plinkos.push(new Plinko(i ,225))
  }
  for(var i = 40; i<= width-10; i = i+50){
    plinkos.push(new Plinko(i ,265))
  }
  for(var i = 15; i<= width-10; i = i+50){
    plinkos.push(new Plinko(i ,305))
  }
  for(var i = 40; i<= width-10; i = i+50){
    plinkos.push(new Plinko(i ,345))
  }
  for(var i = 15; i<= width-10; i = i+50){
    plinkos.push(new Plinko(i ,385))
  }
  for(var j = 0; j <=width; j = j+80){
    rows.push(new Rows(j, height-rowsHeight/2, 10, rowsHeight));
  }
}

 



function draw() {
  background(0,0,0);  
  Engine.update(engine);
  ground.display();
  if(frameCount % 30 === 0){
    particle = new Particle(random(130, 400), 0, 7, random(0, 360));
    particles.push(particle);
  }
  Engine.update(engine, 25);
  for(var i = 0; i < particles.length; i++){
    particles[i].display();
  }
  for(var i = 0; i<plinkos.length;i++){
    plinkos[i].display();

  }
  for(var j = 0; j<rows.length;j++){
    rows[j].display();
 }
  
  
  
  drawSprites();
}