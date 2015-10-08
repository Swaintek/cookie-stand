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
		var tableRow = document.getElementById('salesTable');
		var newRow = document.createElement('tr');
		var rowHead = document.createElement('th');
		var storeName = document.createTextNode(place);
		rowHead.appendChild(storeName);
		newRow.appendChild(rowHead);
		tableRow.appendChild(newRow);
		for (var i = 0; i < times.length; i++) {
			this.totalCookieHour.push(Math.floor(this.randCustHour() * this.avgCookiesCust));
			var item = document.createElement('td');
			item.appendChild(document.createTextNode(this.totalCookieHour[i]));
			newRow.appendChild(item);
			this.cookieSum += this.totalCookieHour[i];
		};
		var itemSum = document.createElement('td');
		itemSum.appendChild(document.createTextNode(this.cookieSum));
		newRow.appendChild(itemSum);
	};
	
	};

var storeForm = document.getElementById('storeForm');
var storeButton = document.getElementById('storeButton');
var storeLoc = document.getElementById('storeLoc');
var minCust = document.getElementById('minCust');
var maxCust = document.getElementById('maxCust');
var avgCust = document.getElementById('avgCust');

storeButton.addEventListener('click', function() {
	event.preventDefault();
	// console.log(storeLoc.value);
	var newStore = new CookieStand(storeLoc.value, minCust.value, maxCust.value, avgCust.value);
	// console.log(newStore);
	newStore.makeTable();
	});








