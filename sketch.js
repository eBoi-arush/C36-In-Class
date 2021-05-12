var database;

var form1;
var game1;

var gameState = 0;
var playerCount;

function setup(){
    createCanvas(500,500);    

    database = firebase.database();

    game1 = new Game();
    game1.getState();    
    game1.start();
}

function draw(){
    background("white");
}