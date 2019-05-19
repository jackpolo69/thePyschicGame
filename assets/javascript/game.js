var wins = 0;
var losses = 0;
var guessesLeft = 10;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)]
console.log(computerGuess)

// This runs every time I press a button on a key board
document.onkeyup = function (event) {
  if (guessesLeft === 0) {
    alert ("you Lose")
    losses++
    document.getElementById("losses").innerHTML = losses
  }
  if (guessesLeft < 0) {
    guessesLeft = 10
    computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)]
  }
  if (event.key === computerGuess) {
    alert ("you win")
    wins++
    document.getElementById("wins").innerHTML = wins
  } else {
    guessesLeft--
    document.getElementById("guessesLeft").innerHTML = guessesLeft
    var guessesHTML = document.getElementById("lettersGuessed")
    guessesHTML.innerHTML += event.key
  }


}

