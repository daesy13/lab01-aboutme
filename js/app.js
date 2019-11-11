'use strict';

var score = 0;
var name = prompt('What is your name?');
console.log('User name: ' + name);

alert('Hi ' + name + ', Welcome to my page!');
alert('let\'s play a guessing game about me. Only Yes or No answers are valid.')

function yesCorrect (question) {
    if (question.toUpperCase() === 'YES') {
        alert("Yes!, you are right.");
    }
    else if (question.toUpperCase() === 'NO'){
        alert("Sorry, wrong answer try again.");
    }
    else {
        alert("This answer is not valid");
    }
}

function noCorrect (question) {
    if (question.toUpperCase() === 'YES') {
        alert("Sorry, wrong answer try again.");
    }
    else if (question.toUpperCase() === 'NO'){
        alert("Yes! you are right.");
    }
    else {
        alert("This answer is not valid");
    }
}


// Guess Question 1
var favColor = prompt(name + " Is my favorite color Red? Yes or No:");
console.log('my favorite color: ' + favColor);

noCorrect(favColor);


// Guess Question 2
var coffee = prompt(name + ' Do I like coffee? Yes or No:');
console.log('coffee: ' + coffee);

noCorrect(coffee);


// Guess Question 3
var rollerCoaster = prompt(name + ' Do I like roller coasters? Yes or No');
console.log('roller coaster: ' + rollerCoaster);

noCorrect(rollerCoaster);

// Guess Question 4
var macUser = prompt(name + ' Do I prefer Mac computers? Yes or No');
console.log('mac user: ' + macUser);

yesCorrect(macUser);


// Guess Question 5
var windowsUser = prompt(name + ' Do I prefer Windows computers? Yes or No');
console.log('windows user: ' + windowsUser);

noCorrect(windowsUser);


// Guess Question 6
function guessFavNumber() {
    var counter = 1;
    if (counter === 5) {
        alert('Sorry you run out of guesses');
    }
    while (counter < 5 && number !==33) {
        var number = parseInt(prompt('Guess my favorite number'));
        if (number > 33) {
            alert('You guessed too high! Guess again');
            counter++;
        } else if (number < 33) {
            alert('You guessed too low! Guess again');
            counter++;
        }
    }
    if (number === 33) {
        alert('That is correct! My favorite number is 33!');
        score++;
        counter = 5;
    }
}

guessFavNumber();


// Guess Question 7

function questionSeven() {
    var userFavFruit = ['apple', 'strawberry', 'orange', 'grape', 'watermelon'];

    for (var i = 0; i < 6; i++) {
        var userAnsw = prompt('Can you guess my favorite fruit?');
        var guess = userAnsw.toLowerCase();

        for (var j = 0; j < userFavFruit.length; j++){
            if (guess === userFavFruit[j]) {
                alert('Congrats you got it right!!!');
                score++;
                i = 6;
                break;
            }
        }
        if (i !==6){
            alert('Sorry wrong answer, try again');
        }
    }
}

questionSeven();

alert('My favorite fruits are: apple, strawberry, orange, grape and watermelon');

alert('Good Job!... You got ' + score + ' correct answers!');