/*
constants: user-input, new game
variables: win/lose, letters, inputs fill in space
add function for getting letter wrong crossing it out
add function for limited guesses before hangman completes
add letter containers to the right side and hangman on the left
fill in the blank at the bottom 

*/// word array 
const wordList = [
    {
      word: "elephant",
      hint: "a large mammal with a trunk"
    },
    {
      word: "guitar",
      hint: "a stringed musical instrument"
    },
    {
      word: "ocean",
      hint: "a vast body of salt water"
    },
    {
      word: "pizza",
      hint: "a popular Italian dish with toppings"
    },
    {
      word: "bicycle",
      hint: "a two-wheeled vehicle powered by pedaling"
    },
    {
      word: "mountain",
      hint: "a large natural elevation of the earth's surface"
    },
    {
      word: "butterfly",
      hint: "an insect with colorful wings"
    },
    {
      word: "rainbow",
      hint: "an arc of colors visible in the sky"
    },
    {
      word: "library",
      hint: "a place where books are kept"
    },
    {
      word: "volcano",
      hint: "a mountain that erupts with lava"
    },
    {
      word: "airplane",
      hint: "a flying vehicle with wings"
    },
    {
      word: "jungle",
      hint: "a dense forest in a tropical area"
    },
    {
      word: "robot",
      hint: "a machine capable of carrying out tasks"
    },
    {
      word: "strawberry",
      hint: "a red, juicy fruit with seeds on the outside"
    },
    {
      word: "rocket",
      hint: "a vehicle used to travel into space"
    },
    {
      word: "diamond",
      hint: "a precious gemstone made of carbon"
    },
    {
      word: "panda",
      hint: "a black and white bear from China"
    },
    {
      word: "violin",
      hint: "a small stringed musical instrument played with a bow"
    },
    {
      word: "sunflower",
      hint: "a tall plant with a large yellow flower"
    },
    {
      word: "telescope",
      hint: "an instrument used to observe distant objects"
    }
  ];
  // constants
const  wordDisplay= document.querySelector(".word-display");
const  guesses= document.querySelector(".guesses-text b");
const  keyboard= document.querySelector(".keyboard");
const  hangmanImage= document.querySelector(".spaceman-container img");
const  gamemodel= document.querySelector(".game-model");
const  playAgain= gamemodel.querySelector("button");
//variables
let currentWord, correctLetters, WrongGuessCount;
const maxGuesses = 6;
// reset game
const resetGame = () => {
    correctLetters = [];
    WrongGuessCount = 0
    hangmanImage.src= 'images/hangman-0.svg';
    guesses.innerText = `${WrongGuessCount} / ${maxGuesses}`;


    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");

    keyboard.querySelectorAll("button").forEach(btn => btn.disabled =false);

    gamemodel.classList.remove("show");
}

// randomizer
const getRandomWord = () => {
  const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];

  currentWord = word;
  document.querySelector(".hint-text b").innerText = hint;
  resetGame();
}

// win/lose declaration 
const gameOver = (isvictory) => {
  const modelText = isvictory ? `You Win!: `: 'The correct word was:';
  gamemodel.querySelector('img').src = `images/${isvictory ? 'victory' : 'lost' }.gif`;
  gamemodel.querySelector("h4").innerText = isvictory ? 'congrats' : 'game Over!';
  gamemodel.querySelector("p").innerHTML = `${modelText} <b> ${currentWord}</b>`; 
  gamemodel.classList.add("show");
}

for (let i = 97; i <= 122; i++) {
    const button = document.createElement ('button');
    button.innerText = String.fromCharCode(i);
    keyboard.appendChild(button);

    button.addEventListener('click', (e) => initGame(e.target, String.fromCharCode(i)));
}
const initGame = (button, clickedLetter) => {
    if (currentWord.includes(clickedLetter)) {
        [...currentWord].forEach((letter, index) => {
            if (letter === clickedLetter) {
                correctLetters.push(letter);
                wordDisplay.querySelectorAll('li')[index].innerText = letter;
                wordDisplay.querySelectorAll('li')[index].classList.add('guessed')
            }
        });
    } else {
        WrongGuessCount++;
        hangmanImage.src =`images/hangman-${WrongGuessCount}.svg`;
    }
    button.disabled =true;

    guesses.innerText = `${WrongGuessCount} / ${maxGuesses}`;

    if (WrongGuessCount === maxGuesses) return gameOver(false) 
    if(correctLetters.length === currentWord.length) return gameOver(true);
}

getRandomWord();

playAgain.addEventListener('click', getRandomWord);


