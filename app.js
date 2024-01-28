let secretNumber = generateSecretNumber();

function assignTextElement(element, text) {
    let elementHTML = document.querySelector(element);
     elementHTML.innerHTML = text;
     return;
}

function verifyAttempt() {
    let userNumber = parseInt(document.getElementById('userValue').value);
    console.log(typeof(userNumber));
    console.log(secretNumber);
    console.log(typeof(secretNumber));
    console.log(userNumber);
    console.log(userNumber === secretNumber);
    return;

}

function generateSecretNumber() {
    return Math.floor(Math.random()*10)+1;
}

assignTextElement('h1', 'Secret Number');
assignTextElement('p', 'Insert a number from 1 to 10');


