/*
GAME FUNCTION:
- Player must guess a number between a min and max number
- Player gets a certain number of guesses
- Notify player of guesses remaining
- Notify player of the correct answer if they loose
- Let player choose to play again
*/

//Game Values
let
  min         = 1,
  max         = 10,
  winningNum  = getRandomNum(min, max),
  guessesLeft = 3,
  inkInfo     = '#107dd8',
  inkSuccess  = '#05b63a',
  inkWarning  = '#e7bb0e',
  inkError    = '#f34121';
    

//UI Elements
const
  uiGame       = document.getElementById('game'),
  uiMinNum     = document.getElementById('min-num'),
  uiMaxNum     = document.getElementById('max-num'),
  uiGuessInput = document.getElementById('guess-input'),
  uiGuessBtn   = document.getElementById('guess-btn'),
  uiMessage    = document.getElementById('message');

//Assign UI min and max
uiMinNum.textContent = min;
uiMaxNum.textContent = max;

//focus the input
uiGuessInput.focus();


//Event Listeners
uiGame.addEventListener('mousedown', function (e) {
  if (e.target.classList.contains('play-again')) {
    window.location.reload();
  }
});

uiGuessBtn.addEventListener('click', function () {
  checkGuess();
});

uiGuessInput.addEventListener('keypress', function (e) {
  console.log(e.code);
  if (e.code === 'Enter' || e.code === 'NumpadEnter') {
    checkGuess();
  }
});


/**
 * Checks the users guess to see if they are a winner
 * 
 */
function checkGuess() {
  let guess = parseInt(uiGuessInput.value);

  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'error');
  }
  else {
    if (guess === winningNum) {
      gameOver(true, `${winningNum} is correct! YOU WIN`, 'success');
    }
    else {
      --guessesLeft;
      if (guessesLeft === 0) {
        gameOver(false, `GAME OVER. you lost. The number was ${winningNum}.`, 'error');
      }
      else {
        uiGuessInput.value = '';
        uiGuessInput.focus();
        setMessage(`You guessed ${guess} that is INCORRECT. You have ${guessesLeft} ${guessesLeft === 1 ? 'guess' : 'guesses'} left.`, 'error');
      }
    }
  }
}



/**
 * Ends the game.
 * 
 * @param {boolean} won Did the user win?
 * @param {string} msg The message to display to the user
 */
function gameOver(won, msg) {
  let severity = won ? 'success' : 'error';
  let inkColor = won ? inkSuccess : inkError;

  uiGuessInput.disabled = true;
  uiGuessInput.style.borderColor = inkColor;
  setMessage(msg, severity);

  //play again
  uiGuessBtn.value = 'Play Again';
  uiGuessBtn.classList.add('play-again');
}



/**
 * Displays a message to the user
 * 
 * @param {string} msg The message to display to the user
 * @param {string} severity Allowable values: [info,success,warning,error]
 */
function setMessage(msg, severity) {
  switch (severity) {
    case 'info':
      uiMessage.style.color = inkInfo;
      break;
    case 'success':
      uiMessage.style.color = inkSuccess;
      break;
    case 'warning':
      uiMessage.style.color = inkWarning;
      break;
    case 'error':
      uiMessage.style.color = inkError;
      break;
    default:
      break;
  }
  uiMessage.textContent = msg;
}



/**
 * Generate a random number between a min and a max (including the min and max)
 * 
 * @param {any} min 
 * @param {any} max 
 * @returns 
 */
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}