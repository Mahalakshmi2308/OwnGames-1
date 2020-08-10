var player,player1;
var canvas;
var garden,garden1;
var stones;

function preload(){

  garden1 = loadImage("images/garden.png");
  player1 = loadImage("images/player.png"); 

}

function setup(){

  canvas = createCanvas(1200,700);

  garden = createSprite(1200,700);
  garden.addImage("garden",garden1);


  player = createSprite(600,350,5,5);
  player.addImage("player",player1);
 
  

  

}
function draw(){

  background("white");


 
 
  drawSprites();




}