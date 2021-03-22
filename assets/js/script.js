var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wordToGuessEl = document.getElementById('word-to-guess');
var winsEl = document.getElementById('wins');
var lossesEl = document.getElementById('losses');
var startButton = document.getElementById('start-button');
var secondsRemainingEl = document.getElementById('seconds-remaining');

var wordToGuess = 'banana';
var wordToDisplay = '';
var guessedLetters = [];

function generateText() {
    wordToDisplay = '';
    for(var i = 0; i < wordToGuess.length; i++) {
        if (guessedLetters.includes(wordToGuess[i])) {
            wordToDisplay = wordToDisplay + ' ' + wordToGuess[i] + ' ';
        } else {
            wordToDisplay = wordToDisplay + ' _ ';
        }
    }
    wordToGuessEl.textContent = wordToDisplay;
}

startButton.addEventListener('click', function(){
    hasGameStarted = true;
})

document.addEventListener('keydown', function(event) {
    if(hasGameStarted) {    
        console.log(event.key);
        guessedLetters.push(event.key);
        generateText();
    }
});



generateText();


// var start = function () {
//     myButtons = document.getElementById('start');
//     letters = document.createElement('ul');

//     for(var i = 0; i < alphabet.length; i++) {
//         letters.id = 'alphabet';
//         letters.id = 'alphabet';
//         list = document.createElement('li');
//         list.id = 'letter';
//         list.innerHTML = alphabet[i];
//         check();
//         myButtons.appendChild(letters);
//         letters.appendChild(list);
//     }

// function setTime() {
//   // Sets interval in variable
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + " seconds left.";

//     if(secondsLeft === 0) {
//       // Stops execution of action at set interval
//       clearInterval(timerInterval);
//       // Calls function to create and append image
//       sendMessage();
//     }
//     return;

//   }, 1000);


// }

// setTime();