const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies; 
const Body = Matter.Body;

var perticles
var divisions = [];
var divisionsHeight = 300;
var particles = [particle];
var plinkos =  [];
var line

var divisionHeight = 300;

var gameState = "PLAY";

var count = 0;

var score = 0
function preload(){

}

function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  engine = engine.update;
  world = engine.world;
   
  ground = new Ground(400,690,800,20);

  for (var i = 0;i<=width; i=i+80){
    divisions.push(new Division (i,height-divisionsHeight/2,10,divisionsHeight))
  }

  for (var j = 40; j <=width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }

  for (var j = 15; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,175));
  }
}

function draw() {
  background(0);
Engine.update(engine);
textSize(35);
text("Score : "+score,20,40);
fill(255);
textSize = (35)
text("500",5,550);
text("500",80,550);
text("500",160,550);
text("500",240,550);
text("100",320,550);
text("100",400,550);
text("100",480,550);
text("200",560,550);
text("200",640,550);
text("200",720,550);
 for (var k = 0; k<divisions.length; k++) {
    divisions [k].display();
  }  

  for (var k = 0; k<plinkos.length; k++) {
    plinkos [k].display();
  } 
   

  drawSprites();
}