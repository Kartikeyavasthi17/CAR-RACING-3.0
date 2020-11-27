var ball;

var allPlayers;

var position,database;

var form,game,player;

var car1,car2,car3,car4;

var cars =[];

var gameState =0;
var playerCount =0;

var car1Img,car2Img,car3Img,car4Img;

var track,ground;

function preload()
{
    car1Img =loadImage("images/car1.png");
    car2Img =loadImage("images/car2.png");
    car3Img =loadImage("images/car3.png");
    car4Img =loadImage("images/car4.png");

    track =loadImage("images/track.jpg");
    ground =loadImage("images/ground.png");
}

function setup(){
    createCanvas(displayWidth-20,displayHeight-40);



    database =firebase.database();
    game =new Game();
    game.getState();
    game.start();

}

function draw ()
{

        if(playerCount === 4)
        {
            game.update(1);
        }

        if(gameState === 1)
        {
            clear();
            game.play();
        }

        if(gameState === 2)
        {
            game.end();
            game.update(2);
            playerCount =5;
        }
}