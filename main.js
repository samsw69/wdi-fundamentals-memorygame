console.log("JS file is connected to HTML! Woo!");

/*Declare a variable, cards, and set it equal to an array of four string elements: 'queen', 'queen', 'king', 'king'.*/
var cards = ["queen", "king", "queen", "king"];

/*Declare a variable, cardsInPlay, whose value is an empty array.*/
var cardsInPlay = [];

var createBoard = function() {
  var gameBoard = document.getElementById("game-board");
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('div');
    cardElement.setAttribute('class', 'card');
    cardElement.setAttribute('id', 'card');
    cardElement.setAttribute('data-card', cards[i]);
    gameBoard.appendChild(cardElement);
    cardElement.addEventListener('click', isTwoCards);
  }
};

/* function called isTwoCards to check if two cards are in play.*/
var isTwoCards = function() {
  cardsInPlay.push(this.getAttribute('data-card'));
  var newCard = this.getAttribute('data-card');
  //shows king or queen image depending on value
  if (newCard === 'queen') {
    this.innerHTML = '<img src="queen_playing_card.png" alt="Queen" />';
  } else {
    this.innerHTML = '<img src = "king_playing_card.png" alt="King" />';
  }

if (cardsInPlay.length === 2) {
 // pass the cardsInPlay as an argument to the isMatch function
 isMatch(cardsInPlay);
}
};

var isMatch = function(cards) {
  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
};

createBoard();