console.log("JS file is connected to HTML! Woo!");

/*Declare a variable, cards, and set it equal to an array of four string elements: 'queen', 'queen', 'king', 'king'.*/
var cards = ["queen", "king", "queen", "king"];

/*Declare a variable, cardsInPlay, whose value is an empty array.*/
var cardsInPlay = [];

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
	// sets card's 'data-card' to be the element of the array; data — attributes store data about an element not tied to a style, i.e., 'king'.
	cardElement.setAttribute('data-card', cards[i]); 
	// when a card is clicked the function isTwoCards will be executed
    cardElement.addEventListener('click', isTwoCards);
	}
	// clear cards in play array for your next try ** was in TwoCards function previously (moved here TO END OF VAR CREATEBOARD?)**
    cardsInPlay = [];
};
/* function to test if two cards in play are a match*/
var isMatch = function() {
};


/* function called isTwoCards to check if two cards are in play.*/
function isTwoCards () {
// add card to array of cards in play it gives you access to the card the user clicked on
  cardsInPlay.push(this.getAttribute('data-card'));
  // if you have two cards in play, check for a match
  if (cardsInPlay.length === 2) {
    // pass the cardsInPlay as an argument to the isMatch function
    isMatch(cardsInPlay);
    if(this.getAttribute('data-card') === "queen"){
    	cardElement.innerHTML = '<img src="queen_playing_card.png" alt="Queen of Spades" />';
    }
    else {
       	cardElement.innerHTML = '<img src="king_playing_card.png" alt="king of Spades" />';	
    }
}

  }

/* Create a function called createCards */
var createCards = function() {
	/* Gets an element with the id of game-board and set it to a variable. */
	var gameBoard = document.getElementById("game-board"); 
		/* loop that creates an HTML element for each card - should be a div and have the class card */
		for (var i = 0; i < 4; i++) {
		var newCard = document.createElement('div');
		newCard.className = "card";
		// trying out these next 2 lines - poss incorrect or in wrong place
		newCard.setAttribute('class', 'card');
		newCard.setAttribute('id', 'card');
		//sets attribute to king or queen
		newCard.setAttribute('data-card', cards[i]);
		/* Append each newly created card to the div with the ID game-board. */
		gameBoard.appendChild(newCard);	
		newCard.addEventListener('click', isTwoCards);
		}	
	};
/* run function called createCards */
createCards ();


