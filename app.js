let secretNumber = generateSecretNumber();
let tries = 1;
console.log(secretNumber);
function assignTextElement(element, text) {
    let elementHTML = document.querySelector(element);
     elementHTML.innerHTML = text;
     return;
}

function verifyAttempt() {
    let userNumber = parseInt(document.getElementById('userValue').value);
    console.log(tries);
    if(userNumber === secretNumber) {
        assignTextElement('p', `You got the right number in  ${tries} ${(tries === 1) ? 'attempt' : 'attempts'}`);
    } else {
        if(userNumber > secretNumber) {
            assignTextElement('p', 'The secret number is greater than');
        }  else {
            assignTextElement('p', 'The secret number is less than');
        }
        tries++;
      }
    return;

}

function generateSecretNumber() {
    return Math.floor(Math.random()*10)+1;
}

assignTextElement('h1', 'Secret Number');
assignTextElement('p', 'Insert a number from 1 to 10');
