/*
constants: user-input, new game
variables: win/lose, letters, inputs fill in space
add function for getting letter wrong crossing it out
add function for limited guesses before hangman completes
add letter containers to the right side and hangman on the left
fill in the blank at the bottom 

*/
const  wordDisplay= document.querySelector(".word-display");
const  guesses= document.querySelector(".guesses-text b");
const  keyboard= document.querySelector(".keyboard");
const  hangmanImage= document.querySelector(".spaceman-container img");
const  gamemodel= document.querySelector(".game.model");
const  playAgain= gamemodel.querySelector(".button");

let currentWord, correctLetters, WrongGuessCount;
const maxGuesses = 6;

const resetGame = () => {
    correctLetters = [];
    WrongGuessCount = 0
    hangmanImage.src= "images/hangman-0.svg";
    guesses.innerText = `${WrongGuessCount} / ${maxGuesses}`;


    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li`).join("");

    keyboard.querySelectorAll("button").forEach(btn => btn.disabled =false);

    gamemodel.classList.remove("show");
}

resetGame();



const worldList = [
  {
    word: "trex",
    hint: "a big dinosaur"
  },
  {
    word: "banana",
    hint: "a fruit that is yellow"
  },
  {
    word: "computer",
    hint: "something that we are all using now"
  },
]