function assignTextElement(element, text) {
    let elementHTML = document.querySelector(element);
     elementHTML.innerHTML = text;
}

function userAttempt() {
    alert('Click from the button');

}

assignTextElement('h1', 'Secret Number');
assignTextElement('p', 'Insert a number from 1 to 10');


