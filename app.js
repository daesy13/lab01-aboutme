'use strict';

// Teach us more about you! Build out an “About Me” webpage that quizzes the user on fun facts gives the user some basic information about who you are and where you came from.

// * As a user, I would like to be guided to an answer through a series of feedback responses so that I can learn more about the site owner.
// [ ] Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
// [ ] Indicates through an alert if the guess is “too high” or “too low”.
// [ ] It should give the user exactly four opportunities to get the correct answer.
// [ ] After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.
// * As a user, I would like to guess the answer to a question that could have many possibilities so that I can have fun with with a guessing game.
// [ ] Add a 7th question that has multiple possible correct answers that are stored in an array.
// [ ] Give the user 6 attempts to guess the correct answer.
// [ ] The guesses will end once the user guesses a correct answer or they run out of attempts.
// [ ] Display all the possible correct answers to the user.
// [ ] Consider using a loop of some sort for this question.
// [ ] As a user, I would like to know my final score so that I can know how well I did.
// [ ] Keep track of the total number of correct answers. At the end tell them how many they got correct out of the 7 questions asked.
// [ ] In addition to the user stories stated above, continue to use console.logs throughout the code to track the questions that are being asked to the user, and add addtional CSS to style your HTML page.

// Stay within scope of what was taught so far in class. Do not write functions within your application. Work with the instructional staff directly if you have questions about this requirement.

var name = prompt('What is your name?');
console.log('User name: ' + name);

alert('Hi ' + name + ', Welcome to my page!');

var favColor = prompt(name + " let's play a guessing game about me. Is my favorite color Red? Yes or No:");
console.log('my favorite color: ' + favColor);

if (favColor.toUpperCase() === 'YES') {
    alert("Sorry, " + name + " wrong answer.");
}
else if (favColor.toUpperCase() === 'NO'){
    alert("Yes! " + name + " you are right.");
}
else {  
    alert("This answer is not valid");
}


var coffee = prompt('Do I like coffee? Yes or No:');
console.log('coffee: ' + coffee);

if (coffee.toUpperCase() === 'YES') {
    alert("Sorry, " + name + " wrong answer.");
}
else if (coffee.toUpperCase() === 'NO') {
    alert("Yes! " + name + " you are right.");
}
else {  
    alert("This answer is not valid");
}


var rollerCoaster = prompt('Do I like roller coasters? Yes or No');
console.log('roller coaster: ' + rollerCoaster);

if (rollerCoaster.toUpperCase() === 'YES') {
    alert("Sorry, " + name + " wrong answer.");
}
else if (rollerCoaster.toUpperCase() === 'NO'){
    alert("Yes! " + name + " you are right.");
}
else {  
    alert("This answer is not valid");
}


var macUser = prompt('Do I prefer Mac computers? Yes or No');
console.log('mac user: ' + macUser);

if (macUser.toUpperCase() === 'YES') {
    alert("Yes! " + name + " you are right.");   
}
else if (macUser.toUpperCase() === 'NO'){
    alert("Sorry, " + name + " wrong answer.");
}
else {  
    alert("This answer is not valid");
}


var windowsUser = prompt('Do I prefer Windows computers? Yes or No');
console.log('windows user: ' + windowsUser);

if (favColor.toUpperCase() === 'YES') {
    alert("Sorry, " + name + " wrong answer.");
}
else if (favColor.toUpperCase() === 'NO'){
    alert("Yes! " + name + " you are right.");
}
else {  
    alert("This answer is not valid");
}

alert(name + "Thank you for playing this game!")