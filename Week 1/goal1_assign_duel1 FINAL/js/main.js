/**
 * Duel Fight Game - Bonnie Carter
 * Date: 4/09/13

 Assignment 1
 Part 1/3 of series
 Updated by Bonnie Carter
*/

// self-executing function
(function(){

    console.log("FIGHT!!!");                 //Comment: Display to Browser "Fight"
    console.log ("Spiderman & Superman");    //Comment: Display Battle Names

    //player name
    var playerOneName = "Spiderman";         //Name Player One: Spiderman
    var playerTwoName = "Superman";          //Name Player Two: Superman

    //player damage
    var player1Damage = 20;                  //Damage to be reduced
    var player2Damage = 20;                  //Damage to be reduced

    //player health
    var playerOneHealth = 100;               //Start Player One Health 100
    var playerTwoHealth = 100;               //Start Player Two Health 100

    //initiate round
    var round=0;

    function fight(){
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);
                                             //pop up with player one name and health and player two health
        for (var i = 0; i < 10; i++)
                                             //incrementing by one
        {
                                             //random formula is - Math.floor(Math.random() * (max - min) + min);
                                             //min damage .5 (random)
            var minDamage1 = player1Damage * .5;
                                             //min damage .5 (random)
            var minDamage2 = player2Damage * .5;
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

                                             //inflict damage
            playerOneHealth-=f1;
            playerTwoHealth-=f2;

            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);

                                             //check for victor
            var result = winnerCheck();
            console.log(result);
            if (result==="no winner")
            {
                round++;
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth);

            } else{
                alert(result);
                break;
            };

          };
    };

    function winnerCheck(){
        var result="no winner";
        if (playerOneHealth<1 && playerTwoHealth<1)
        {
            result = "You Both Die";
        } else if(playerOneHealth<1){
            result =playerTwoName+" WINS!!!"
        } else if (playerTwoHealth<1)
        {
            result = playerOneName+" WINS!!!"
        };
       return result;
    };

    /*******  The program gets started below *******/
    fight();

})();