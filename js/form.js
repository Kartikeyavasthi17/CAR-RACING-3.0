class Form
{
    constructor(){

        this.title =createElement('h2');
        this.input =createInput("NAME");
        this.button =createButton('PLAY');
        this.reset =createButton('Reset');
        this.greeting =createElement('h3');
    }

    hide()
    {
        this.title.hide();
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
  
    display()
    {
        this.title.html("CAR RACING GAME");
        this.title.position(displayWidth/2-50,0);
        this.reset.position(displayWidth-200,50);
    
        this.input.position(displayWidth/2-40,displayHeight/2-80);
        this.button.position(displayWidth/2+30,displayHeight/2);

        this.reset.mousePressed(()=>{
            game.update(0);
            player.updateCount(0);
        }
        )

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name =this.input.value();
            playerCount =playerCount+ 1;
            player.index =playerCount;

            player.updateCount(playerCount);

            player.update();
 
            this.greeting.html("Hello" + player.name)
            this.greeting.position(displayWidth/2-70,displayHeight/4);
        })
        
    }


}