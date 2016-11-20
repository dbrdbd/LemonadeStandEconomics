"use strict";

var inone, intwo, inthree;
var val = 0;
var AvePrice;


function assignVars(){
	inone = document.getElementById("user1").value;
	intwo = document.getElementById("user2").value;
	inthree = document.getElementById("user3").value;
}
function store(){
	localStorage.setItem("user1", inone);
	localStorage.setItem("user2", intwo);
	localStorage.setItem("user3", inthree);
}
function returnstats(){
	AvePrice=(inone*1.08+intwo*0.02)/inthree;
	localStorage.setItem("AvePP",AvePrice);
	console.log(AvePrice);
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
	//store();
	printVars();
	returnstats();
}
