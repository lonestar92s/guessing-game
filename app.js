
let youLose = "YOU LOSE. SELECT NEW GAME"
//timer
let timerStarted = false
let time = 6;
// let x = setTimeout(function(){ timer(); }, 1000);

//used boolean to stop running timer function after first click
let timer = function() {
    console.log("1111111111111")
    if(timerStarted === false){
    	console.log("djhjkwdwgdwed")
    	timerStarted = true
    	x = setInterval(function() {
        	time -= 1
        	// document.getElementById("time").innerHTML = time + " seconds";
        	if (time <= 0) {
            document.getElementById("time").innerHTML = time + " seconds";
            $('.guess-submit').replaceWith('<h1 class="flash">' + youLose + '</h1>');
            	timerStarted = false 
            	stopTimer();
        	}else{
        		document.getElementById("time").innerHTML = time + " seconds";
        	}    
    	}, 1000)
	}

}

let stopTimer = function() {
    clearTimeout(x)
}






//init
$(document).ready(function() {

	// $(".guess-submit").hide();
    $("#correct").hide();
    $('#next-round').hide();
    //reset funcion
    // let resetGame = function() {

    //     $("#p1guess").empty()
    //     $(".youWin").empty()
    //     $("#correct").hide();
    //     $("#number-selection").replaceWith('<h2 class="center" id="number-selection">Now I am thinking of a number between 1 and 100. Can you guess it?<div><button id="new-game" class="btn btn-primary">New Game</button><br/><button id="next-round" class="btn btn-primary">Next Round</button></div></h2>')


    // }

    //This will generate a random number between 1 and 100


    let easyRandomNumber = function() {

        return Math.floor(Math.random() * 100) + 1

    }

    let x = easyRandomNumber()
    console.log(x)

    



	class Players {
        constructor(name) {
            this.name = name;
            this.score = 0;
            this.remainingGuesses = 10;

        }

    }

    let player = new Players("Player 1")
    // let player2 = new Players("Player 2")

    //This reloads the game
    $('#new-game').click(function() {
        location.reload()

	$(".guess-submit").show();
    });



    //next round button
    $("#next-round").click(function() {
        resetGame()
        console.log(y)
    })

    //guess button

    $('#add-guess-button').click(function() {
       timer();
        let guess = $('#add-guess-input').val()
        let correct = "Correct!"
        let tooLow = "Too low!"
        let tooHigh = "Too High"
        let youMatched = "Match!"
        console.log(guess)
        let p1Guess = $('<div id="p1guess">' + guess + '</div>')
        $("#add-guess-input").val("")

        //scoreboard



        if (Number(guess) === x) {
            player.score += 1
            $(".scoreboard").replaceWith('<a class="scoreboard">' + player.score + '</a>')
            $(".youWin").append("My number was " + guess + ", you win!")
            $("#p1guess").append('<li>' + youMatched + '</li>')

            $("#correct").show();
            // $("#next-round").show();
        } else if (Number(guess) <= x) {
            $("#p1guess").append('<li>' + tooLow, guess + '</li>')
            player.remainingGuesses -= 1
        } else if (Number(guess) >= x) {
            $("#p1guess").append('<li>' + tooHigh, guess + '</li>')
            player.remainingGuesses -= 1;


        }

        if (player.remainingGuesses === 0) {
            
            alert("Game Over")
            location.reload()
        }

        //medium round




    })


});