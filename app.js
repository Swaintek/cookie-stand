var times = ['10 am: ', '11 am: ', '12 pm: ', '1 pm: ', '2 pm: ', '3 pm: ', '4 pm: ', '5 pm: ']

var CookieStand = function (place, minCustHour, maxCustHour, avgCookiesCust) {
	this.place = place;
	this.minCustHour = minCustHour;
	this.maxCustHour = maxCustHour;
	this.avgCookiesCust = avgCookiesCust;
	this.randCustHour = function () {
		return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour +1)) + this.minCustHour
	};
	this.totalCookieHour = [];
	this.cookieSum = 0;
	this.makeTable = function () {
		var tablestore = document.getElementById(place);
		var itemstore = document.createElement('th');
		tablestore.appendChild(document.createTextNode(place));
		for (var i = 0; i < times.length; i++) {
			this.totalCookieHour.push(Math.floor(this.randCustHour() * this.avgCookiesCust));
			var list = document.getElementById(place);
			var item = document.createElement('td');
			item.appendChild(document.createTextNode(this.totalCookieHour[i]));
			list.appendChild(item);
			this.cookieSum += this.totalCookieHour[i];
		};
		var list = document.getElementById(place);
		var item = document.createElement('td');
		item.appendChild(document.createTextNode(this.cookieSum));
		list.appendChild(item);
	};
	
	};

var pikePlace = new CookieStand('Pike Place Market', 17, 88, 5.2);
var seaTac = new CookieStand('SeaTac Airport', 6, 44, 1.2);
var southCenter = new CookieStand('Southcenter Mall', 11, 38, 1.9);
var bellevueSquare = new CookieStand('Bellevue Square', 20, 48, 3.3);
var alki = new CookieStand('Alki Beach', 3, 24, 2.6)

var placeNames = [pikePlace, seaTac, southCenter, bellevueSquare, alki]

for (var i = 0; i < placeNames.length; i++) {
	placeNames[i].makeTable();
};



