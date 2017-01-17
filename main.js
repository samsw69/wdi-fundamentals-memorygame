console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour =  "king";


/* if(cardTwo === cardFour){
   alert('You found a match!')
   }
else{
   alert('Sorry, try again.')
   }
   if(cardTwo === cardThree){
   alert('You found a match!')
   }
else{
   alert('Sorry, try again.')
   }
   if(cardTwo === cardOne){
   alert('You found a match!')
   }
else{
   alert('Sorry, try again.')
   }
   if(cardOne=== cardFour){
   alert('You found a match!')
   }
else{
   alert('Sorry, try again.')
   }
   if(cardOne=== cardThree){
   alert('You found a match!')
   }
else{
   alert('Sorry, try again.')
   }
   if(cardThree=== cardFour){
   alert('You found a match!')
   }
else{
   alert('Sorry, try again.')
   }
   */
   
var createCards = function(){
		var Board = document.getElementById('game-board');
   		for (var i=0; i<=3; i++) {

   		/* create an element with class = card */		
   		var card = document.createElement('div');
   		    card, className = 'card';
   		}
   		
   		/*append new card to the game-board*/
   		card.appendChild(Board);

    createCards();
   }