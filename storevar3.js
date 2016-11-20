"use strict";

var inone, lemonsPrice,Sprice;


function assignVars(){
	inone = document.getElementById("lemonsP").value;
}
function store(){
	localStorage.setItem("lemonsPrice", inone);
}

//parseInt("2",10)
function main(){

	assignVars();
	store();

	window.location = 'sellLemonade.html';
}

var nextButton = document.getElementById('nextButton');
nextButton.addEventListener('click', main);