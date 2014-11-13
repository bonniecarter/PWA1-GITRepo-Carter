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


    //DEFINE YOUR pieces do; Multiple ways to define/access HTML tags.
    var fighter1_txt = document.getElementById("spiderman");
    var fighter2_txt = document.getElementById("superman");
    var round_txt = document.querySelector("h5");
    var button = document.getElementById("fight_btn");

    console.log("I am past the variables.");

    //SETUP YOUR click event
    button.addEventListener("click", fight, false);

    //CREATE ARRAY OF OBJECTS FOR 2 FIGHTERS
    var fighters = [
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
    round_txt.innerHTML = "Click FIGHT BUTTON to Start!";
    fighter1_txt.innerHTML = fighters[0].name + ":  " + fighters[0].health;
    fighter2_txt.innerHTML = fighters[1].name + ":  " + fighters[1].health;

    console.log("I am past initializing the DOM");

    //CREATE FIGHT FUNCTION
    function fight() {

        console.log("inside fight function");

        //start
        fighter1_txt.innerHTML = fighters[0].name + ";  " + fighters[0].health;
        fighter2_txt.innerHTML = fighters[1].name + ";  " + fighters[1].health;

        //determine damage
        var f1 = Math.floor(Math.random() * fighters[0].damage + fighters[0].damage * .5);
        var f2 = Math.floor(Math.random() * fighters[1].damage + fighters[1].damage * .5);

        //inflict damage
        fighters[0].health -= f1;
        fighters[1].health -= f2;

        console.log(fighters[0].health, fighters[1].health);

        //check for winner
        var result = winnerCheck();
        console.log(result);

        round_txt.innerHTML = "ROUND #" + round + " Results:";
        round++;
        if (result === "no winner") {
            fighter1_txt.innerHTML = fighters[0].name + ":  " + fighters[0].health;
            fighter2_txt.innerHTML = fighters[1].name + ":  " + fighters[1].health;
        } else {
            fighter1_txt.innerHTML = result;
            fighter2_txt.innerHTML = "";

            //Disable the button - need the below if using addEventListner
            button.removeEventListener("click", fight, false);
            //button.disabled = true;

            //button.onclick = "return false";

            document.querySelector('.buttonblue').innerHTML = 'DONE!!!';
        }
    }

  function winnerCheck(){
        var result = "no winner";
        if (fighters[0].health < 1 && fighters[1].health < 1)
        {
            result = "You Both Die - GAME OVER!";
        } else if(fighters[0].health < 1){
            result =fighters[1].name + " WINS!!!"
        } else if (fighters[1] < 1)
        {
            result = fighters[0].name + " WINS!!!"
        }
       return result;
    }

})();