//guessing game


//random number function

let randomNumber = function() {
    
    return Math.floor(Math.random() * 5) + 1

}

let x = randomNumber()

//random number button

$("#new-random").click(function() {
	x = randomNumber()
    $('.random-number').replaceWith('<h1 class="random-number">' + x + '</h1>')
});

//guess button

$('#add-guess-button').click(function(){
	let guess = $('#add-guess-input').val()
	if(guess === ""){
		alert("Guess cannot be blank")
	}else
	console.log(guess)
	let p1Guess = $('<div id="p1guess">' + guess + '</div>')
	
	$("#add-guess-input").val("")
	$("#p1guess").append(p1Guess)

})






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

let player1 = new Players("Player 1")
let player2 = new Players("Player 2")

//game function

