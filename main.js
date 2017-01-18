console.log("JS file is connected to HTML! Woo!");

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/* Create a function called createCards */
var createCards = function() {
	/* Gets an element with the id of game-board and set it to a variable. */
	var gameBoard = document.getElementById("game-board"); 
		/* loop that creates an HTML element for each card - should be a div and have the class card */
		for (var i = 0; i < 3; i++) {
		var newCard = document.createElement('div');
		newCard.className = "card";
		/* Append each newly created card to the div with the ID game-board. */
		/* try line below instead of   gameBoard.appendChild(newCard);*/
		gameBoard.appendChild(newCard);	}	
	};
/* run function called createCards */
createCards ();




/*if (cardOne === cardFour),  {
alert("you found a match");
}
else if (cardOne === cardThree) {
alert("you found a match");
}
else if (cardOne === cardTwo) {
alert("you found a match");
}
else if (cardTwo === cardFour) {
alert("you found a match");
}
else if (cardTwo === cardThree) {
alert("you found a match");
}
else if (cardThree === cardFour) {
alert("you found a match");
}
else alert("no match!");
//*
	
