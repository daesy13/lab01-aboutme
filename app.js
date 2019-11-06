'use strict';

// [ ] Prompt the user a total of exactly five yes or no questions. The user input for the answer must accept either y/n or yes/no responses while taking into consideration case sensitivity by normalizing the user input so that it can be validated (hint: look into the .toUpperCase() or .toLowerCase() functions). Be sure to let the user know if they answered the question correctly by alerting them with a response.
// [ ] Add console.log() messages within your app to notify the user if they are correct. Before submitting, comment out (don’t delete) your console.log() messages and replace them with the alerts() to complete the project.
// [x] As a user, I would like a personalized welcome message so that I feel like I am interacting with the site owner.
// [x] Ask the user their name through a prompt()
// [x] Display that name back to the user through a custom greeting welcoming them to your site.
// [ ] Display the user’s name back to them in your final message to the user.

var name = prompt('What is your name?')
console.log('User name: ' + name)

alert('Hi ' + name + ', Welcome to my page!')

var favColor = prompt("Let's play a guessing game about me. Is my favorite color Red? Yes or No:");
console.log('my favorite color: ' + favColor);

var coffee = prompt('Do I like coffee? Yes or No:');
console.log('coffee: ' + coffee);

var rollerCoaster = prompt('Do I like roller coasters? Yes or No');
console.log('roller coaster: ' + rollerCoaster);

var macUser = prompt('Do I prefer Mac computers? Yes or No');
console.log('mac user: ' + macUser);

var windowsUser = prompt('Do I prefer Windows computers? Yes or No');
console.log('windows user: ' + windowsUser);

function yesOrNot(item) {
    if (item.toUpperCase === 'YES') {
        
    }
}