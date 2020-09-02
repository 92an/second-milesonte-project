// Declare constants
const answerInput = document.querySelector("#answerBox");
const checkButton = document.querySelector("#submitAnswer");

// Declare variables
var level = 1;
var answer;

//Stop enter key from refreshing page by submitting(code from stackoverflow)
$('form').keypress(function(event) {
    return event.keyCode != 13;
});

//Makes the enter key click the button(w3schools)
answerInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        checkButton.click();
    }
});

//Return to main menu
function mainMenu(){
    location.href="index.html"
}

//Progress bar function
/* Progress bar moving as questions are answered,
First question highlights first block.
Second question highlights second block... and so on*/
function progessBarMovement(){
    $(".progressBar #active").removeAttr("id").next().attr("id", "active");
}

// initial setup when loading game for all game types
function loadingAddition(){
    gameAddition();
}

// The math functions are a modified version of the examples provided by developer.mozilla.org


function gameAddition(){
    let min1 = Math.ceil(0);
    let max1 = Math.floor(100);
    let firstNumber = Math.floor(Math.random()*(max1-min1+1)+min1);
    $("#firstNumber p").html(firstNumber);
    let min2 = Math.ceil(0);
    let max2 = Math.floor(100-firstNumber);
    let secondNumber = Math.floor(Math.random()*(max2-min2+1)+min2);
    $("#secondNumber p").html(secondNumber);
    // set the answer of the question
    answer = firstNumber + secondNumber;
}

/* Test if answer is correct then proceed with the game loop.
If correct, give feedback, move the progress bar 1 step, generate new numbers and clear input box.
If incorrect give feedback and let them try again*/
function answerTestAddition(){
    if(Number(answerInput.value) === answer){
        alert("Correct Answer!");
        progessBarMovement();
        gameAddition();
        answerInput.value = "";
            if(level<=9){
                level++;
            } else{
                mainMenu();
            }
    } else {
        alert("Incorrect Answer!")
        console.log(Number(answerInput.value));
        console.log(answer);
    }
}







