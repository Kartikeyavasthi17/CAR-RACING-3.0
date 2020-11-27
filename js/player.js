class Player
{
    constructor(){
        this.name =null;
        this.distance =0;
        this.index =null;
        this.rank =0;
    };

    getCount()
    {
        var PlayerCountRef =database.ref('playerCount')
        PlayerCountRef.on("value",(data)=>{
            playerCount =data.val();
        })
   }

    updateCount(count)
    {
        database.ref('/').update({
            playerCount:count
        })
    }

    update()
    {
        var playerIndex ="players/player"+this.index;
        database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance
        })

    }

       static getPlayersInfo()
        {
            var PlayersInfoRef =database.ref('players')
            PlayersInfoRef.on("value",(data)=>
            {
                allPlayers =data.val();
            })

        }

        getCarsAtEnd()
        {
            var getCarsAtEndInfo =database.ref('carsAtEnd')
            getCarsAtEndInfo.on("value",(data)=>
            {
                this.rank =data.val();
            })
        }

        static updateCarsAtEnd(rank)
        {
            database.ref('/').update(
                {
                    carsAtEnd:rank
                }
            )

        }

}
