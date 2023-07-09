/* 
Write your guess-game code here! Don't forget to look at the test specs as a guide. You can run the specs
by running "npm run test".

In this file, you will also include the event listeners that are needed to interact with your HTML file when
a user clicks a button or adds a guess to the input field.
*/

function generateWinningNumber(){
     return (Math.floor(Math.random() * 100) + 1);
}

function shuffle(arr){

    for(let i = (arr.length - 1); i > 1; i--){

        let randNum = (Math.floor(Math.random() * (i + 1)));

        let temp = arr[randNum];

        arr[randNum] = arr[i];

        arr[i] = temp;

    }

    return(arr);
}

class Game {

    constructor() {
        this.playersGuess = null;

        this.pastGuesses = [];

        this.winningNumber = generateWinningNumber();

        this.hintShowing = false;
        
    }


    difference() {
        return Math.abs(this.playersGuess - this.winningNumber);
    }

    isLower() {
        if (this.playersGuess < this.winningNumber){
            return true;
        }

        else{
            return false;
        }
    }
    

    playersGuessSubmission(num) {
        this.playersGuess = num

        if (this.playersGuess < 1 || this.playersGuess > 100 || isNaN(this.playersGuess)) {
            return 'Invalid guess. Please enter a number between 1 and 100.';
        }
        
        return this.checkGuess();
        
    }

    checkGuess() {

        if (this.pastGuesses.length >= 4){
            return "You Lose.";
        }

        if (this.winningNumber === this.playersGuess){
            return "You Win!";
        }

        if (this.pastGuesses.includes(this.playersGuess)){
            return "You have already guessed that number.";
        }
        
        this.pastGuesses.push(this.playersGuess);

        if (this.difference() < 10){
            return "You're burning up!";
        }

        if (this.difference() < 25){
            return "You're lukewarm.";
        }
        
        if (this.difference() < 50){
            return "You're a bit chilly.";
        }

        if (this.difference() < 100){
            return "You're ice cold!";
        }
    }
    
    provideHint() {

        if (!this.hintShowing){
            
            let hints = [];
        
            hints.push(generateWinningNumber());

            hints.push(generateWinningNumber());

            hints.push(this.winningNumber);

            shuffle(hints);

            this.hintShowing = true;

            return hints;
        }

        else{
            return hints;
        }

    }

}

function newGame() {
  game = new Game();
  document.getElementById('outputBox').innerHTML = '';
  document.getElementById('guessBox').innerHTML = '';
  document.getElementById('hintBox').innerHTML = '';
}

function showNum(){
    const boxWrapper = document.getElementById("guessBox");
    boxWrapper.textContent = game.pastGuesses.join(', ');
}
    
let game = new Game();

function takeSubmission(){
    document.getElementById('outputBox').innerHTML = game.playersGuessSubmission(parseInt(document.getElementById("userInput").value));
    showNum(document.getElementById("userInput").value); 
    document.getElementById("userInput").value = "";
} 


function showHints(){ 
    document.getElementById('hintBox').innerHTML = game.provideHint();
}