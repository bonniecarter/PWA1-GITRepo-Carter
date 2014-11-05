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
    var round=0;                             //Variable Round Starts @ 0
                                             //function fight starts with an alert
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
                                             //A Number, representing a number from 0 up to but not including 1
                                             //The Math.floor(x) function returns the largest integer less than or equal to a number "x".
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

                                             //inflict damage
            playerOneHealth-=f1;
            playerTwoHealth-=f2;
                                             //console log: player 1 name and the health  player 2 name and the health.
            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);

                                             //check for victor (winner) assign function winnerCheck to declared variable result
            var result = winnerCheck();
                                             //console log: results of the winner or no winner
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
                                             //function named winnerCheck if both players are less then 1 health, no winner, if
                                             //if player 1 or 2 has les then 1 the opposite player "wins" then return result to variable
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
                                             //function fight is called ... game starts
    fight();

})();