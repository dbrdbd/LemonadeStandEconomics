"use strict";

var inone, intwo, inthree;
var val = 0;
var Lprice,Sprice;


function assignVars(){
	localStorage.clear();
	inone = document.getElementById("lemons").value;
	intwo = document.getElementById("sugars").value;
	inthree = document.getElementById("glasses").value;
}
function store(){
	localStorage.setItem("lemons", inone);
	localStorage.setItem("sugars", intwo);
	localStorage.setItem("glasses", inthree);
}
function returnstats(){
	Lprice=inone*1.08;
	Sprice=intwo*0.02;
	localStorage.setItem("Lprice",Lprice);
	localStorage.setItem("Sprice",Sprice);
}
function printVars(){
	console.log("Var one: " + inone  + "/nVar two: " + intwo + "/nVar three: " + inthree);
}

function getVars(){

	return [inone, intwo, inthree];
}
//parseInt("2",10)
function main(){

	assignVars();
	store();
	printVars();
	returnstats();

	window.location = 'potentialRev.html';
}

var nextButton = document.getElementById('nextButton');
nextButton.addEventListener('click', main);