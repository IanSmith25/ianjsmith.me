/*  JavaScript 6th Edition
	Chapter 2
	Hands-on Projects
	
	Author: Ian Smith
	Date: 10/27/21
	
	Filename: script.js
*/

function tips() {
	document.write("<ol>");
	document.write("<li>Don't assume things work the way they're meant to.</li>");
	document.write("<li>Fix one problem at a time.</li>");
	document.write("<li>Learn your debugger's capabilities.</li>");
	document.write("<li>Rest often and involve other people (or ducks).</li>");
	document.write("<li>Test, test, test.</li>");
	document.write("</ol>");
}	

function convert() {
	let bits = document.getElementById("bitValue").value;
	let bytes = bits / 8;
	document.getElementById("byteValue").textContent = bytes;
}

function shapes(ian) {
	alert("You clciked on the " + ian);
}

function submitInfo(e) {
	let name = document.getElementById("nameinput");
	let email = document.getElementById("emailinput");
	let phone = document.getElementById("phoneinput");
	(name.value && email.value && phone.value) ? alert("Thank You!") : alert("Please fill in all fields");
	(name.value && email.value && phone.value) ? calcTotal() : e.preventDefault();
}

function calcTotal() {
	let itemTotal = 0;
	let orderTotal = 0;
	let salesTaxRate = 0.07;
	let item1 = document.getElementById("item1");
	let item2 = document.getElementById("item2");
	let item3 = document.getElementById("item3");
	let item4 = document.getElementById("item4");
	let item5 = document.getElementById("item5");
	(item1.checked) ? (itemTotal += 8) : (itemTotal += 0);
	(item2.checked) ? (itemTotal += 9) : (itemTotal += 0);
	(item3.checked) ? (itemTotal += 8) : (itemTotal += 0);
	(item4.checked) ? (itemTotal += 13) : (itemTotal += 0);
	(item5.checked) ? (itemTotal += 6) : (itemTotal += 0);
	itemTotal *= 100;
	orderTotal = (itemTotal + (itemTotal * salesTaxRate))/100;
	alert("Your order total is $" + orderTotal);
	document.getElementById("oTotal").value = orderTotal;
}