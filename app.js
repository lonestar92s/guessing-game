// Guessing game



//start screen
$("#start-game").click(function() {
    $('#start-game').hide();
    $('#game-screen').css('display', 'block')

});



//timer 
let timerStarted = false
let time = 60;

//use boolean to stop running timer function after first click
let timer = function() {

    if (timerStarted === false) {

        timerStarted = true
        x = setInterval(function() {
            time -= 1

            if (time <= 0) {
                document.getElementById("time").innerHTML = time + " seconds";
                $('.guess-submit').replaceWith('<h1 class="flash">' + youLose + '</h1>');
                timerStarted = false
                stopTimer();
            } else {
                document.getElementById("time").innerHTML = time + " seconds";
            }
        }, 1000)
    }

}

let stopTimer = function() {
    clearTimeout(x)
}


//initialize
$(document).ready(function() {


    //Level of difficulty
    let easyRandomNumber = function() {
        return Math.floor(Math.random() * 100) + 1
    }

    let x = easyRandomNumber()



    //Make sure random number and guessed number work correctly
    console.log(x)


    $("#correct").hide();
    $('#next-round').hide();


    //Player constructor potentially multiplayer
    class Players {
        constructor(name) {
            this.name = name;
            this.score = 0;
            this.remainingGuesses = 10;
        }
    }



    let player = new Players("Player 1")


    //This reloads the game
    $('#new-game').click(function() {
        location.reload()


    });


    //guess button

    $('#add-guess-button').click(function() {
        timer();

        //variables
        let correct = "Correct!"
        let tooLow = "Too low!"
        let tooHigh = "Too High"
        let youMatched = "Match!"
        let youLose = "YOU LOSE. SELECT NEW GAME."
        //shows guesses on screen
        let guess = $('#add-guess-input').val()
        let p1Guess = $('<div id="p1guess">' + guess + '</div>')
        $("#add-guess-input").val("")


        //scoreboard with jQuery // x = random number

        if (Number(guess) === x) {
            player.score += 1
            $(".scoreboard").replaceWith('<a class="scoreboard">' + player.score + '</a>')
            $(".youWin").append("My number was " + guess + ", you win! Not too shabby.")
            $("#p1guess").append('<li>' + youMatched + '</li>')
            stopTimer()
            $("#time-left").hide()
            $("#correct").show();

        } else if (Number(guess) <= x) {
            $("#p1guess").append('<li>' + tooLow, guess + '</li>')
            player.remainingGuesses -= 1
        } else if (Number(guess) >= x) {
            $("#p1guess").append('<li>' + tooHigh, guess + '</li>')
            player.remainingGuesses -= 1;
        }
        if (player.remainingGuesses === 0) {

            $('.guess-submit').replaceWith('<h1 class="flash">' + youLose + '</h1>');
            stopTimer()
        }
    })

});








