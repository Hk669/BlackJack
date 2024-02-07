//Black Jack
let cards = [];
let sum = 0;
let message = "";
let isAlive = true;
let hasBlackJack = false;

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("cards-el");
let startbtn = document.getElementById('start-btn')

function getRandom() {
  let randomNum = Math.floor(Math.random() * 13) + 1;
  if (randomNum === 1) {
    return 11;
  } else if (randomNum > 10) {
    return 10;
  } else {
    return randomNum;
  }
}

function renderGame() {
  cardEl.textContent = "Cards: ";
  for (let card of cards) {
    cardEl.textContent += card + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum > 21) {
    message = "You Lost 😭";
    isAlive = false;
  } else if (sum < 21) {
    message = "you are still in the game, wanna Draw a card? 🫣";
  } else {
    message = "Yay You won. You've got a BlackJack 🤝";
    hasBlackJack = true;
  }

  messageEl.textContent = message;
  toggleButton(!isAlive);
}

function newCard() {
  if (isAlive && hasBlackJack === false) {
    let newCard = getRandom();
    cards.push(newCard);
    sum += newCard;
  }
  renderGame();
}

function startGame() {
  cards = [];
  sum = 0;
  let firstCard = getRandom();
  let secondCard = getRandom();
  cards.push(firstCard);
  cards.push(secondCard);
  sum += firstCard + secondCard;
  renderGame();
}

function toggleButton(isLost){
  if (isLost){
    startbtn.textContent = "Reset";
    startbtn.setAttribute('onclick', 'resetGame()');
  }else{
    startbtn.textContent = 'Start';
    startbtn.setAttribute('onclick', 'startGame()')
  }
}

function resetGame(){
  isAlive = true;
  hasBlackJack = false;
  toggleButton(false);
  startGame();
}