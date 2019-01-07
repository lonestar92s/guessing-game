//guessing game


//random number function

let randomNumber = function() {

    return Math.floor(Math.random() * 10) + 1

}

let x = randomNumber()
console.log(x)
//random number button

// $("#new-random").click(function() {
//     x = randomNumber()
//     $('.random-number').replaceWith('<h1 class="random-number">' + x + '</h1>')
// });








class Players {
    constructor(name) {
        this.name = name;
        //this.score = 0;
        this.remainingGuesses = 5;

    }
    playerGuess() {
        this.remainingGuesses -= 1
    }
}

let player1 = new Players("Player 1")
let player2 = new Players("Player 2")

//game function

//guess button

$('#add-guess-button').click(function() {
    let guess = 'You guessed ' + $('#add-guess-input').val() 
    console.log(guess)
    let p1Guess = $('<div id="p1guess">' + guess + '</div>')
    $("#add-guess-input").val("")
    $("#p1guess").append(p1Guess);

    // console.log("Guess", guess, typeof guess)
    // console.log("Random number", x, typeof x)

    if (Number(guess) === x) {
        alert("Match")
        location.reload()

    } else {
        (Number(guess) !== x)
        alert("Try Again")
        player1.remainingGuesses -= 1;
    };


    if (player1.remainingGuesses <= 0) {
        alert("Game over")
        location.reload()
    }


})