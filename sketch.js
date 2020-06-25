var  database;
  
var gameState = 0;
var playerCount;
var form,player,game;

function setup(){
  database = firebase.database();
  
  createCanvas(500,500);

  game = new Game();
  form = new Form();
}

function draw(){
  background("white");
  
  form.display();
  
  
}

