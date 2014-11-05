/**
 * Duel Fight Game - Bonnie Carter
 * Date: 11/5/14

 Assignment 1
 Part 2/3 of series
 Updated by Bonnie Carter
*/

// self-executing function
(function(){

    console.log("FIGHT!!!");                 //Comment: Display to Browser "Fight"

    var fighter1=["Spiderman",20,100];       //Defining Array for Spiderman #1
    var fighter2=["Superman",20,100];        //Defining Array for Superman #2

    var round = 1;                           //Defining Global Variable for Fight

    console.log ("Spiderman & Superman");    //Comment: Display Battle Names

    //player name
    //var playerOneName = "Spiderman";         //Name Player One: Spiderman
    //var playerTwoName = "Superman";          //Name Player Two: Superman

    //player damage
    //var player1Damage = 20;                  //Damage to be reduced
    //var player2Damage = 20;                  //Damage to be reduced

    //player health
    //var playerOneHealth = 100;               //Start Player One Health 100
    //var playerTwoHealth = 100;               //Start Player Two Health 100

    //initiate round
    //var round=0;                             //Variable Round Starts @ 0
                                             //function fight starts with an alert
    function fight(){

        console.log("FIGHT!!!");

        //Main Pop-Up for Fighting Game
        alert(fighter1[0]+":"+fighter1[2]+"  *START*  "+fighter2[0]+":"+fighter2[2]);
                                             //pop up with player one name and health and player two health
        for (var i = 0; i < 10; i++)
                                             //incrementing by one
        {
                                             //random formula is - Math.floor(Math.random() * (max - min) + min);
                                             //min damage .5 (random)
            var minDamage1 = fighter1[1] * .5;
                                             //min damage .5 (random)
            var minDamage2 = fighter2[1] * .5;
                                             //A Number, representing a number from 0 up to but not including 1
                                             //The Math.floor(x) function returns the largest integer less than or equal to a number "x".
            var f1 = Math.floor(Math.random()*(fighter1[1]-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(fighter2[1]-minDamage2)+minDamage2);

                                             //inflict damage
            fighter1[2]-=f1;
            fighter2[2]-=f2;
                                             //console log: player 1 name and the health  player 2 name and the health.
            //console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);
            console.log(fighter1[2]+" "+fighter2[2]);

                                             //check for victor (winner) assign function winnerCheck to declared variable result
            var result = winnerCheck();
                                             //console log: results of the winner or no winner
            console.log(result);
            if (result==="no winner")
            {
                round++;
                alert(fighter1[0]+":"+fighter1[2]+"  *ROUND "+round+" OVER"+"*  "+fighter2[0]+":"+fighter2[2]);

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
        if (fighter1[2]<1 && fighter2[2]<1)
        {
            result = "You Both Die";
        } else if(fighter1[2]<1){
            result =fighter2[0]+" WINS!!!"
        } else if (fighter2[2]<1)
        {
            result = fighter1[0]+" WINS!!!"
        };
       return result;
    };

    /*******  The program gets started below *******/
                                             //function fight is called ... game starts
    fight();

})();