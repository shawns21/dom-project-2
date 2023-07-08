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

let suf = [20, 50, 70];

console.log(shuffle(suf));
