// Declare constants
const answerInput = document.querySelector("#answerBox");
const checkButton = document.querySelector("#submitAnswer");
const introContent = document.querySelector(".content");

// Declare variables
let level = 1;
let answer;

// Collapse Instructions function
function collapseIntro() {
    if (introContent.style.display === "none") {
        introContent.style.display = "block";
    } else {
        introContent.style.display = "none";
    }
}

// Stop enter key from refreshing page by submitting(code from stackoverflow)
$('form').keypress(function(event) {
    return event.keyCode != 13;
});

// Makes the enter key click the button(w3schools)
answerInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        checkButton.click();
    }
});

// Return to main menu
function mainMenu() {
    location.href="index.html";
}

// Progress bar function
/* Progress bar moving as questions are answered,
First question highlights first block.
Second question highlights second block... and so on*/
function progessBarMovement() {
    $(".progressBar #active").removeAttr("id").next().attr("id", "active");
}

// initial setup when loading game for all game types
function loadGameNumbers(gameMode) {
    switch (gameMode) {
        case "addition":
            gameAddition();
            break;
        case "subtraction":
            gameSubtraction();
            break;
        case "multiplication":
            gameMultiplication();
            break;
        case "division":
            gameDivision();
            break;
        default:
            alert("Game not loading...");
            break;
    }
}

// The math functions are a modified version of the examples provided by developer.mozilla.org

// Addition number generation function; sum of both numbers does not exceed 100.
function gameAddition() {
    const min1 = Math.ceil(0);
    const max1 = Math.floor(100);
    const firstNumber = Math.floor(Math.random()*(max1-min1+1)+min1);
    
    $("#firstNumber p").html(firstNumber);
    
    const min2 = Math.ceil(0);
    const max2 = Math.floor(100-firstNumber);
    const secondNumber = Math.floor(Math.random()*(max2-min2+1)+min2);
    
    $("#secondNumber p").html(secondNumber);
    
    // set the answer of the question
    answer = firstNumber + secondNumber;
}

// Subtraction number generation function; no negative numbers.
function gameSubtraction() {
    const min1 = Math.ceil(0);
    const max1 = Math.floor(100);
    const firstNumber = Math.floor(Math.random()*(max1-min1+1)+min1);
    
    $("#firstNumber p").html(firstNumber);
    
    const min2 = Math.ceil(0);
    const max2 = Math.floor(firstNumber);
    const secondNumber = Math.floor(Math.random()*(max2-min2+1)+min2);
    
    $("#secondNumber p").html(secondNumber);
    
    // set the answer of the question
    answer = firstNumber - secondNumber;
}

// Multiplication number generation function; standard multiplication table 0 to 10.
function gameMultiplication() {
    const min1 = Math.ceil(0);
    const max1 = Math.floor(10);
    const firstNumber = Math.floor(Math.random()*(max1-min1+1)+min1);
    
    $("#firstNumber p").html(firstNumber);
    
    const min2 = Math.ceil(0);
    const max2 = Math.floor(10);
    const secondNumber = Math.floor(Math.random()*(max2-min2+1)+min2);
    
    $("#secondNumber p").html(secondNumber);
    
    // set the answer of the question
    answer = firstNumber * secondNumber;
}

// Division number generation function; standard multiplication table 0 to 10.
function gameDivision() {
    const min1 = Math.ceil(1);
    const max1 = Math.floor(10);
    const firstNumber = Math.floor(Math.random()*(max1-min1+1)+min1);
    
    const min2 = Math.ceil(1);
    const max2 = Math.floor(10);
    const secondNumber = Math.floor(Math.random()*(max2-min2+1)+min2);
    
    const Numerator = firstNumber * secondNumber;
    
    $("#firstNumber p").html(Numerator);
    $("#secondNumber p").html(secondNumber);
    
    // set the answer of the question
    answer = Numerator / secondNumber;
}


/* Test if answer is correct then proceed with the game loop.
If correct, give feedback, move the progress bar 1 step, generate new numbers and clear input box.
If incorrect give feedback and let them try again
Test for all 4 game modes*/


function testAnswer(gameMode) {
    if(Number(answerInput.value) === answer){
        alert("Correct Answer!");
        progessBarMovement();
        loadGameNumbers(gameMode)
        answerInput.value = "";
            if(level<=9){
                level++;
            } else {
                alert("Congratulations you have finished all questions!");
                mainMenu();
            }
    } else {
        alert("Incorrect Answer!");
        answerInput.value = "";
    }
}







