//init
$(document).ready(function() {


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
    });



    //next round button
    $("#next-round").click(function() {
        resetGame()
        console.log(y)
    })

    //guess button

    $('#add-guess-button').click(function() {
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