//init
$(document).ready(function(){


 $("img").hide();
 $('#next-round').hide();


//random number function

let easyRandomNumber = function() {

    return Math.floor(Math.random() * 100) + 1

}

let x = easyRandomNumber()
console.log(x)

let mediumRandomNumber = function() {
    return Math.floor(Math.random() * 20) + 1
}
let y = mediumRandomNumber()


//reset funcion
let resetGame = function() {
    mediumRandomNumber();
    $("#p1guess").empty()
    $(".youWin").empty()
    $("img").hide();

}



// $("#new-random").click(function() {
//     x = randomNumber()
//     $('.random-number').replaceWith('<h1 class="random-number">' + x + '</h1>')
// });






class Players {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.remainingGuesses = 5;

    }
    playerGuess() {
        this.remainingGuesses -= 1
    }
}

let player = new Players("Player 1")
// let player2 = new Players("Player 2")

//new game button
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
    $("#p1guess").append(p1Guess);
    //scoreboard
    $(".scoreboard").replaceWith('<a class="scoreboard">' + player.score + '</a>')


    if (Number(guess) === x) {
        $(".youWin").append("My number was " + guess + ", you win!")
        $("#p1guess").append('<li>' + youMatched + '</li>')
        player.score += 1
        $("img").show();
        $("#next-round").show();
    } else if (Number(guess) <= x) {
        $("#p1guess").append('<li>' + tooLow + '</li>')
        player.remainingGuesses -= 1
    } else if (Number(guess) >= x) {
        $("#p1guess").append('<li>' + tooHigh + '</li>')
        player.remainingGuesses -= 1;


    }

    if (player.remainingGuesses <= 0) {
        alert("Game Over")
        location.reload()
    }

    //medium round
  



})


});