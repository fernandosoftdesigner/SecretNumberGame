let secretNumber = 0;
let tries = 1;
let raffleNumberList = [];
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
        document.getElementById('restart').removeAttribute('disabled');
    } else {
        if(userNumber > secretNumber) {
            assignTextElement('p', 'The secret number is less');
        }  else {
            assignTextElement('p', 'The secret number is greater');
        }
        tries++;
        cleanBox();
      }
    return;

}


function cleanBox() {
    document.querySelector('#userValue').value = '';
}

function generateSecretNumber() {
   let generatedNumber = Math.floor(Math.random()*10)+1;
   console.log(generatedNumber);
   console.log(raffleNumberList);
   //if generated number is on raffle number list 
   if (raffleNumberList.includes(generatedNumber)) {
        return generateSecretNumber();
   } else {
        raffleNumberList.push(generatedNumber);
        return generatedNumber;
   }
}

function initialConditions() {
    assignTextElement('h1', 'Secret Number');
    assignTextElement('p', 'Insert a number from 1 to 10');
    secretNumber = generateSecretNumber();
    tries = 1;
}

function restartGame(){
    //cleanBox
    cleanBox();
    //indicate message of numberInterval
    //generatesecretNumber
    //start the number of attempts
    initialConditions();
    //disable button new game
    document.querySelector('#restart').setAttribute('disabled', 'true');
   
}
   initialConditions();


