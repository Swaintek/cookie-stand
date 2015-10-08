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
		var tableStore = document.getElementById(place);
		var itemStore = document.createElement('th');
		itemStore.appendChild(document.createTextNode(place));
		tableStore.appendChild(itemStore);
		for (var i = 0; i < times.length; i++) {
			this.totalCookieHour.push(Math.floor(this.randCustHour() * this.avgCookiesCust));
			var table = document.getElementById(place);
			var item = document.createElement('td');
			item.appendChild(document.createTextNode(this.totalCookieHour[i]));
			table.appendChild(item);
			this.cookieSum += this.totalCookieHour[i];
		};
		var tableSum = document.getElementById(place);
		var itemSum = document.createElement('td');
		itemSum.appendChild(document.createTextNode(this.cookieSum));
		tableSum.appendChild(itemSum);
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



