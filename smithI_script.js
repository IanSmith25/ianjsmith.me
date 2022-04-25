/*  
Web Page Development Assinment 5
Java Script

Authors: Ian Smith
Date: 10/27/21

Filename: smithI_script.js
*/

var areaAttract = [
"<a href='https://visittybee.com/article/north-beach'>Visit North Beach</a>", 
"<a href='https://visittybee.com/profile/tybee-time-sports-bar/7952'>Visit Tybee Time Sports Bar</a>", 
"<a href='https://visittybee.com/profile/cocos-sunset-grille/14693'>Visit Coco's Sunset Grill</a>"];

function favEvents() {
	document.getElementById("areaParagraph").innerHTML = "<ol>";
	for (var i = 0; i < areaAttract.length; i++) {
		document.getElementById("areaParagraph").innerHTML += "<li>" + areaAttract[i] + "</li>";
	}
	document.getElementById("areaParagraph").innerHTML += "</ol>";
}

function reservations() {
	/*(document.getElementById("custName").value && document.getElementById("custEmail").value && document.getElementById("custPhone").value && document.getElementById("custAddress").value && document.getElementById("custAge").value) ? alert("Thank You!") : alert("Please fill in all fields"); e.preventDefault();*/
	
	if (document.getElementById("custName").value && document.getElementById("custEmail").value && document.getElementById("custPhone").value && document.getElementById("custAddress").value && document.getElementById("custAge").value) {
		alert("Thank You for filling out the Contact Information!");
	} else {
		alert("You did not fill in all of the Contact Information.");
		event.preventDefault();
	}
}

function rooms(alt) {
	alert("You Doubled Clicked On: " + alt);
}

var column1 = ["Name", "Description", "Time &amp; Location", "Price"];
var column2 = ["Live Music", "Live music preformed every night for our guests to enjoy!", "7:30pm-10pm <br> Outdoor Bar", "Free"];
var column3 = ["Indoor and Outdoor Pool", "Our luxury indoor and outdoor pools free for all guests.", "10am-10pm <br> Walk through the doors behind the front desk on the right", ""];
var column4 = ["Buffet", "$5 per Guest, then it is all you can eat for the night.", "5pm-12am <br> Across from the Bar", "$5"];
var column5 = ["Bingo Night", "Our weekly bingo nights are held on fridays. We play many rounds of bingo and offer exclusive rewards to the winners!", "5pm-10pm <br> Child Activitys Center", "$5 entry"];
var column6 = ["Child Activitys Center", "A safe, fun place to drop off the kids while you enjoy the bar or any of our other amentitys.", "7am-3pm <br> Located Right Across from the Hotel", "$40 per day"];
var column7 = ["Transport to the Park", "We offer luxury transportation to the parks from our hotel for all guests.", "", "$10"];

var columnfinder = column1;
function amenities() {
	for(var i = 0; i < 7; i++) {
		var tr = document.getElementsByTagName("tr")[i];
		var changerstring = "th";
		var runner = true;
		var y = 0;
		for(var x = 0; x < 4; x++) {
			if (i === 1) {
				columnfinder = column2;
			} else if (i === 2) {
				columnfinder = column3;
			} else if (i === 3) {
				columnfinder = column4;
			} else if (i === 4) {
				columnfinder = column5;
			} else if (i === 5) {
				columnfinder = column6;
			} else if (i === 6) {
				columnfinder = column7;
			}
			if (columnfinder[x] != "") {
				tr.getElementsByTagName(changerstring)[y].innerHTML = columnfinder[x];
			}  else if (columnfinder[x] === "" && x === 2) {
				tr.getElementsByTagName(changerstring)[y].innerHTML = columnfinder[x+1];
				x = 4;
			}
			y++;
			if (!(tr.getElementsByTagName(changerstring)[1]) && runner === true) {
				changerstring = "td";
				y = 0;
				runner = false;	
			}
		}
	}
}
