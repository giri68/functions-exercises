function coinFlip(){
	return (Math.floor(Math.random() * 2) === 0) ? 'head' : 'tail';
}


function flipGuess(){
	var guess = prompt("What is your guess, Tail or Head?");
	return guess;
}

function putInElement(string){
	
	$(document).ready(function(){
     $("#result").append(string);
    });
    
}