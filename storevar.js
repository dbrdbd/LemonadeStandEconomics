"use strict";

var inone, intwo, inthree;
var val = 0;



function assignVars(){
	inone = document.getElementById("user1").value;
	intwo = document.getElementById("user2").value;
	inthree = document.getElementById("user3").value;
	alert(inone);
}

function printVars(){
	console.log("Var one: " + inone  + "/nVar two: " + intwo + "/nVar three: " + inthree);
}

function getVars(){

	return [inone, intwo, inthree];
}

function main(){
		
	assignVars();
	printVars();
	
}
