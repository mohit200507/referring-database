var canvas, database;
var position;
var form, player, game
var gameState=0
var playerCount
var allPlayers
var distance = 0

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
 
 game = new Game ()
 game.getState()
 game.start()
  }

function draw(){
  background("white");
 }