console.log("JS file is connected to HTML! Woo!");

/*Declare a variable, cards, and set it equal to an array of four string elements: 'queen', 'queen', 'king', 'king'.*/
var cards = ["queen", "king", "queen", "king"];
/*Declare a variable, cardsInPlay, whose value is an empty array.*/

var cardsInPlay = [];

var createBoard = function() {
  /* loop that creates an HTML element for each card - should be a div and have the class card */
  // var gameBoard = document.getElementById("game-board");
  for (var i = 0; i < cards.length; i++) {
    //var cardElement = document.createElement(div);
    //cardElement.innerHTML = '<div class="card"></div>';
    // sets card's 'data-card' to be the element of the array; data — attributes store data about an element not tied to a style, i.e., 'king'.
    var cardElement = document.createElement('div');
    cardElement.setAttribute('class', 'card');
    cardElement.setAttribute('id', 'card');
    cardElement.setAttribute('data-card', cards[i]);
    document.getElementById('game-board').appendChild(cardElement);
  // when a card is clicked the function isTwoCards will be executed
    cardElement.addEventListener('click', isTwoCards);
    //gameBoard.appendChild(cardElement);
  }
};

//createBoard();

var isMatch = function() {
  //alert winning message
 if (cards[0] === cards[1]) {
   alert("You found a match!");
 } else {
   alert("Sorry, try again.");
};

isMatch();

/* function called isTwoCards to check if two cards are in play.*/
var isTwoCards = function() {
  this.getAttribute('data-card');
  // add card to array of cards in play it gives you access to the card the user clicked on
  cardsInPlay.push('data-card');
  //shows king or queen image depending on value
  if ('data_card' === "queen") {
    this.innerHTML = '<img src="queen_playing_card.png" alt="Queen" />';
  } else if ('data_card' === "king") {
    this.innerHTML = '<img src="king_playing_card.png" alt="King" />';
  }
};
// if you have two cards in play, check for a match
if (cardsInPlay.length === 2) {
  // pass the cardsInPlay as an argument to the isMatch function
  //isMatch(cardsInPlay);
  isMatch(cardsInPlay);
  cardsInPlay = [];
}