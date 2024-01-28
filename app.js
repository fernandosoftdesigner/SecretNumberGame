let secretNumber = generateSecretNumber();

function assignTextElement(element, text) {
    let elementHTML = document.querySelector(element);
     elementHTML.innerHTML = text;
     return;
}

function verifyAttempt() {
    let userNumber = parseInt(document.getElementById('userValue').value);
    
    if(userNumber === secretNumber) {
        assignTextElement('p', 'Acertaste el número');
    } else {
        if(userNumber > secretNumber) {
            assignTextElement('p', 'El numero secreto es menor');
        }  else {
            assignTextElement('p', 'El numero secreto es mayor');
        }
      }
    return;

}

function generateSecretNumber() {
    return Math.floor(Math.random()*10)+1;
}

assignTextElement('h1', 'Secret Number');
assignTextElement('p', 'Insert a number from 1 to 10');


