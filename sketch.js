const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;
var playerArrow,computerArrow;
var playerArcher,computerArcher;

var arrow;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
 
  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
  playerArcher = new PlayerArcher(
    340,
    playerBase.body.position.y - 180,
    120,
    120
  );

  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  computerArcher = new ComputerArcher(
    width - 340,
    computerBase.body.position.y - 170,
    120,
    120
  );

  playerArrow = new PlayerArrow(380, playerBase.body.position.y - 180,30,7);
  computerArrow = new ComputerArrow(1220,280,30,10);

}

function draw() {
  background("yellow");

  Engine.update(engine);

  // Title
  fill("black");
  textAlign("center");
  textSize(70);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  playerArcher.display();
  computerArcher.display()

 playerArrow.display();
 computerArrow.display();
}

function keyPressed() {

  if(keyCode === RIGHT_ARROW){
   playerArrow.shoot(playerArcher.body.angle);
  }
}