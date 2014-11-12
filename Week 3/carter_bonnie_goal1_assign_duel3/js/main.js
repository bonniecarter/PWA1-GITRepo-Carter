/**
 * Duel Fight Game - Bonnie Carter
 * Date: 11/10/14

 Assignment 1
 Part 3/3 of series
 Updated by Bonnie Carter
*/

// self-executing function
(function(){

    console.log(" ** Fight **");                 //Comment: Display to Browser "Fight"


    //DEFINE YOUR do pieces; Multiple ways to define/access HTML tags.
    var fighter1_txt = document.querySelector("#spiderman").querySelector("#p");
    var fighter2_txt = document.querySelector("#superman").querySelector("#p");
    var round_txt = document.querySelector("h5");
    var button = document.getElementById("fight_btn");

    console.log("I am past the variables.");
    //var fighter1=["Spiderman",20,100];       //Defining Array for Spiderman #1
    //var fighter2=["Superman",20,100];        //Defining Array for Superman #2

    //SETUP YOUR click event
    button.addEventListener("click", fight, false);

    //CREATE ARRAY OF OBJECTS FOR 2 FIGHTERS
    var fighter = [
        {
            name:"Spiderman",
            damage:20,
            health:100
        },
        {
            name:"Superman",
            damage:20,
            health:100
        }];

    var round = 1;                              //Defining Global Variable for Fight

    console.log("I am past the var round = 1");


    //INITIALIZE DOM innerHTML text for top of HTML page

    document.getElementById("round").innerHTML = "Click FIGHT BUTTON to Start!";
    fighter1_txt.innerHTML = fighter[0].name + ":  " + fighter[0].health;
    fighter2_txt.innerHTML = fighter[1].name + ":  " + fighter[1].health;

    console.log("I am past initializing the DOM");

    // console.log ("Spiderman & Superman");    //Comment: Display Battle Names

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

        console.log("inside fight function");

        fighter1_txt.innerHTML = fighter[0].name + ";  " + fighter[0].health;
        fighter2_txt.innerHTML = fighter[1].name + ";  " + fighter[1].health;


        //determine damage
        var f1 = Math.floor(math.random() * fighter[0].damage + fighter[0].damage *.5);
        var f2 = Math.floor(math.random() * fighter[1].damage + fighter[1].damage *.5);

        //inflict damage
        fighter[0].health -= f1;
        fighter[1].health -= f2;

        console.log(fighter[0].health, fighter[1].health);

        //check for winner
        var result = winnerCheck();
        console.log(result);

        round_txt.innerHTML = "ROUND #" + round + " Results:";
        round++;
        if (result === "no winner")
        {
            fighter1_txt.innerHTML = fighter[0].name + ":  " + fighter[0].health;
            fighter2_txt.innerHTML = fighter[1].name + ":  " + fighter[1].health;
        }else{
            fighter1_txt.innerHTML = result;
            fighter2_txt.innerHTML = "";

            //Disable the button - need the below if using addEventListner
            button.removeEventListener("click", fight, false);
            //button.disabled = true;

            //button.onclick = "return false";

            document.querySelector('.buttonblue').innerHTML = 'DONE!!!';
        }

        //console.log("FIGHT!!!");

        //Main Pop-Up for Fighting Game
        //alert(fighter1[0]+":"+fighter1[2]+"  *START*  "+fighter2[0]+":"+fighter2[2]);
                                             //pop up with player one name and health and player two health
        //for (var i = 0; i < 10; i++)
                                             //incrementing by one
        //{
                                             //random formula is - Math.floor(Math.random() * (max - min) + min);
                                             //min damage .5 (random)
            //var minDamage1 = fighter1[1] * .5;
                                             //min damage .5 (random)
            //var minDamage2 = fighter2[1] * .5;
                                             //A Number, representing a number from 0 up to but not including 1
                                             //The Math.floor(x) function returns the largest integer less than or equal to a number "x".
            //var f1 = Math.floor(Math.random()*(fighter1[1]-minDamage1)+minDamage1);
            //var f2 = Math.floor(Math.random()*(fighter2[1]-minDamage2)+minDamage2);

                                             //inflict damage
            //fighter1[2]-=f1;
            //fighter2[2]-=f2;
                                             //console log: player 1 name and the health  player 2 name and the health.
            //console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);
            //console.log(fighter1[2]+" "+fighter2[2]);

                                             //check for victor (winner) assign function winnerCheck to declared variable result
            //var result = winnerCheck();
                                             //console log: results of the winner or no winner
            //console.log(result);
            //if (result==="no winner")
            //{
            //    round++;
            //   alert(fighter1[0]+":"+fighter1[2]+"  *ROUND "+round+" OVER"+"*  "+fighter2[0]+":"+fighter2[2]);

            //} else{
            //   alert(result);
            //   break;
            //  };

          //};
    }
                                             //function named winnerCheck if both players are less then 1 health, no winner, if
                                             //if player 1 or 2 has les then 1 the opposite player "wins" then return result to variable
    function winnerCheck(){
        var result = "no winner";
        if (fighter[0].health < 1 && fighter[1].health < 1)
        {
            result = "You Both Die - GAME OVER!";
        } else if(fighter[0].health < 1){
            result =fighter[1].name + " WINS!!!"
        } else if (fighter[1] < 1)
        {
            result = fighter[0].name + " WINS!!!"
        }
       return result;
    }

    /*******  The program gets started below *******/
                                             //function fight is called ... game starts
    //fight();

})();