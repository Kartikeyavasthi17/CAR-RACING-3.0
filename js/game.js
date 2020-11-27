class Game
{
    constructor(){


    }

    getState()
    {
        var gameStateRef =database.ref('gameState')
        gameStateRef.on("value",function(data){
            gameState =data.val();
        })
   }

    update(State)
    {
        database.ref('/').update({
            gameState:State,
        })
    }

    start()
    {
        if(gameState === 0)
        {
            player =new Player();
            player.getCount();
            form =new Form();
            form.display();
        }

        car1 =createSprite(100,200);
        car1.addImage(car1Img);

        car2 =createSprite(300,200);
        car2.addImage(car2Img);

        car3 =createSprite(500,200);    
        car3.addImage(car3Img);

        car4 =createSprite(700,200);     
        car4.addImage(car4Img);
        
        cars =[car1,car2,car3,car4];
    }

    play()
    {
        form.hide();
        Player.getPlayersInfo();

        player.getCarsAtEnd();

        background(ground);
        image(track,0,-displayHeight*4,displayWidth,displayHeight*5);

        if(allPlayers !== undefined)
        {
            var x =175;
            var y ;
            var index =0;

            for(var plr in allPlayers)
            {
                index+=1;   
                x =x+220;
                y =displayHeight-allPlayers[plr].distance;
                cars[index-1].x =x;
                cars[index-1].y =y;     
                
                if(index === player.index)
                {
                    stroke(10);
                    fill("yellow")
                    ellipse(x,y,60,60);

                    camera.position.x =displayWidth/2;
                    camera.position.y =cars[index-1].y;
                    
                }
            }

        }

        if(keyIsDown(UP_ARROW) && player.index !== null)
        {
            player.distance+=50;
            player.update();
        }

        if(player.distance > 4100)
        {
            gameState = 2;
            player.rank+=1;
            Player.updateCarsAtEnd(player.rank);
        }

        drawSprites();
    }

    end()
    {
        console.log("GAME ENDED");
        console.log(player.rank);
        textSize(30);
        rectMode(CENTER);
        fill("white");
        strokeWeight(3);
        stroke("blue");
        rect(displayWidth/2,cars[player.index-1].y -300 ,500,250 );
        fill("red");
        text("YOUR RANK IS : "+ player.rank,displayWidth/2-50,cars[player.index-1].y -300);
    }
}

