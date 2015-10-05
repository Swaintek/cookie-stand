var pikePlace = {
	location: 'Pike Place Market',
	minCustHour: 17,
	maxCustHour: 88,
	avgCookiesCust: 5.2,
	randCustHour: function() {
		return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
	},
	// openHour: 10,
	// closeHour: 17,
	totalCookieHour: [],
	makeUL: function() {
		for (var i = 0; i <= 7; i++) {
			this.totalCookieHour[i] = Math.floor(this.randCustHour() * this.avgCookiesCust);
			console.log(this.randCustHour());
		}
	}
}

var seatac = {
	location: 'SEATAC Airport',
	minCustHour: 6,
	maxCustHour: 44,
	avgCookiesCust: 1.2,
	randCustHour: function() {
		return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
	},
	// openHour: 10,
	// closeHour: 17,
	totalCookieHour: [],
	makeUL: function() {
		for (var i = 0; i <= 7; i++) {
			this.totalCookieHour[i] = Math.floor(this.randCustHour() * this.avgCookiesCust);
			console.log(this.randCustHour());
		}
	}
}

var south = {
	location: 'Southcenter Mall',
	minCustHour: 11,
	maxCustHour: 38,
	avgCookiesCust: 1.9,
	randCustHour: function() {
		return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
	},
	// openHour: 10,
	// closeHour: 17,
	totalCookieHour: [],
	makeUL: function() {
		for (var i = 0; i <= 7; i++) {
			this.totalCookieHour[i] = Math.floor(this.randCustHour() * this.avgCookiesCust);
			console.log(this.randCustHour());
		}
	}
}

var belle = {
	location: 'Bellevue Square',
	minCustHour: 20,
	maxCustHour: 48,
	avgCookiesCust: 3.3,
	randCustHour: function() {
		return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
	},
	// openHour: 10,
	// closeHour: 17,
	totalCookieHour: [],
	makeUL: function() {
		for (var i = 0; i <= 7; i++) {
			this.totalCookieHour[i] = Math.floor(this.randCustHour() * this.avgCookiesCust);
			console.log(this.randCustHour());
		}
	}
}

var alki = {
	location: 'Alki',
	minCustHour: 3,
	maxCustHour: 24,
	avgCookiesCust: 2.6,
	randCustHour: function() {
		return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
	},
	// openHour: 10,
	// closeHour: 17,
	totalCookieHour: [],
	makeUL: function() {
		for (var i = 0; i <= 7; i++) {
			this.totalCookieHour[i] = Math.floor(this.randCustHour() * this.avgCookiesCust);
			console.log(this.randCustHour());
		}
	}
}


function makeULpike(array) {
	for(var i = 0; i < pikePlace.totalCookieHour.length; i++) {
		var pikeList = document.getElementById('pike');
		var item = document.createElement('li');
		item.appendChild(document.createTextNode(times[i] + array[i]));
		pikeList.appendChild(item);
	}
	return pikeList;
}

function makeULseatac(array) {
	for(var i = 0; i < seatac.totalCookieHour.length; i++) {
		var seaList = document.getElementById('sea');
		var item = document.createElement('li');
		item.appendChild(document.createTextNode(times[i] + array[i]));
		seaList.appendChild(item);
	}
	return seaList;
}

function makeULsouth(array) {
	for(var i = 0; i < south.totalCookieHour.length; i++) {
		var southList = document.getElementById('south');
		var item = document.createElement('li');
		item.appendChild(document.createTextNode(times[i] + array[i]));
		southList.appendChild(item);
	}
	return southList;
}

function makeULbelle(array) {
	for(var i = 0; i < belle.totalCookieHour.length; i++) {
		var belleList = document.getElementById('belle');
		var item = document.createElement('li');
		item.appendChild(document.createTextNode(times[i] + array[i]));
		belleList.appendChild(item);
	}
	return belleList;
}

function makeULalki(array) {
	for(var i = 0; i < alki.totalCookieHour.length; i++) {
		var alkiList = document.getElementById('alki');
		var item = document.createElement('li');
		item.appendChild(document.createTextNode(times[i] + array[i]));
		alkiList.appendChild(item);
	}
	return alkiList;
}

var times = ['10 am: ', '11 am: ', '12 pm: ', '1 pm: ', '2 pm: ', '3 pm: ', '4 pm: ', '5 pm: ']


pikePlace.makeUL();
makeULpike(pikePlace.totalCookieHour);
seatac.makeUL();
makeULseatac(seatac.totalCookieHour)
south.makeUL();
makeULsouth(south.totalCookieHour);
belle.makeUL();
makeULbelle(belle.totalCookieHour);
alki.makeUL();
makeULalki(alki.totalCookieHour)