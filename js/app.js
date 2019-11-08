'use strict';

var score = 0;
var name = prompt('What is your name?');
console.log('User name: ' + name);

alert('Hi ' + name + ', Welcome to my page!');
alert('let\'s play a guessing game about me. Only Yes or No answers are valid.')

// FUNCTION EXAMPLE USING WHILE - LECTURE EXAMPLE

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

var number = prompt(name + " Guess my favorite number");
console.log( "user guess num is: " + number)

// Guess Question 6

var favNum = 33;
var counter = 1;

while(counter < 5){
    number = parseInt(prompt(" Guess my favorite number"));

    if (number < 33) {
        alert('you guessed too low');
        counter++;
    }
    else if (number > 33) {
        alert('you guessed too high');
        counter++;
    }
    else if (number === NaN || number === null) {
        alert('please enter a real number');
        counter++;
    }
    else if (number == 33) {
        alert('Congrats you got it right!!!');
        score++;
        break;
    }
}

alert('Nice try! My favorite number is ' + favNum);

// Guess Question 7
var fruits = ['apple', 'strawberry', 'orange', 'grape', 'watermelon'];
var userFavFruit;

for (var i = 0; i <=6 ; i++) {
    userFavFruit = prompt("Can you guess my favorite fruit?").toLowerCase();
    console.log('user input for fruit ' + userFavFruit);
    if (fruits.includes(userFavFruit)) {
        console.log('if statement fruit ' + userFavFruit);
        alert('Congrats you got it right!!!');
        score++;
        break;
    }
    else {
        alert('Sorry wrong answer, try again');   
    }
} 

alert('My favorite fruits are: apple, strawberry, orange, grape and watermelon');


alert('Good Job!... You got ' + score + ' correct answers!')