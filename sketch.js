const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block,block1,block2,block3,block4,block4,block5,block6,block7,
block8,block9,block10,block11,block12,block13,block14;
var polygon, slingShot;


function setup(){
    var canvas = createCanvas(400,400);
   
    
//level four
 block1=new Block (330,235,30,40);
 block2=new Block (360,235,30,40);
 block3=new Block (390,235,30,40);
 block4=new Block (420,235,30,40);
 block5=new Block (450,235,30,40);
 block6=new Block (480,235,30,40);
//level three
 block7=new Block (360,195,30,40);
 block8=new Block (380,195,30,40);
 block9=new Block (420,195,30,40);
 block10=new Block (450,195,30,40);
//level two
 block11=new Block (330,155,30,40);
 block12=new Block (360,155,30,40);
 block13=new Block (380,155,30,40);
//top
 block14=new Block(330,100,30,40);
 

  
}

function draw(){
background(0);
rectMode(CENTER);
rect(200,200,50,50);
strokeWeight(4);
Engine.update(engine);

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
drawSprites()
}
