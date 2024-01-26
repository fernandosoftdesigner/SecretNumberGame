let secretNumber = generateSecretNumber();

function assignTextElement(element, text) {
    let elementHTML = document.querySelector(element);
     elementHTML.innerHTML = text;
     return;
}

function userAttempt() {
    alert('Click from the button');
    return;

}

function generateSecretNumber() {
    return Math.floor(Math.random()*10)+1;
}

assignTextElement('h1', 'Secret Number');
assignTextElement('p', 'Insert a number from 1 to 10');


