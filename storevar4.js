"use strict";

var sold, price;
var Profit,Revenue;
var intlmn, intsug;


function assignVars(){
	sold = document.getElementById("sales").value;
}
function store(){
	localStorage.setItem("lemonsP", sold);
}
function returnstats(){
	price=parseInt(localStorage.getItem("lemonsPrice"),10);
	intlmn=parseInt(localStorage.getItem("Lprice"),10);
	intsug=parseInt(localStorage.getItem("Sprice"),10);
	Revenue=sold*price;
	Profit=Revenue-intlmn-intsug;
	localStorage.setItem("Rev",Revenue);
	localStorage.setItem("Prof",Profit);
}
//parseInt("2",10)
function main(){
	assignVars();
	store();
	returnstats();

	window.location = 'results.html';
}

var nextButton = document.getElementById('nextButton');
nextButton.addEventListener('click', main);