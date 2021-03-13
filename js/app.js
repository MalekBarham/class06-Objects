'use strict';




let hours=['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let tableElement=document.getElementById('table');

function Cookie(locationName, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerSale) {
  this.locationName = locationName;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.totalDailyCookies = 0;
}
Cookie.prototype.calcCustomersEachHour = function() {
  for (let i = 0; i < hours.length; i++) {
    this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
  }
};
Cookie.prototype.calcCookiesEachHour = function() {
  this.calcCustomersEachHour();
  for (let i = 0; i < hours.length; i++) {
    let oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
    this.cookiesEachHour.push(oneHour);
    this.totalDailyCookies += oneHour;
  }
};

Cookie.prototype.render = function() {
  this.calcCookiesEachHour();
  let tableRow = document.createElement('tr');
  let tableDataElement = document.createElement('td');
  tableDataElement.textContent = this.locationName;
  tableRow.appendChild(tableDataElement);
  for (let i = 0; i < hours.length; i++) {
    tableDataElement = document.createElement('td');
    tableDataElement.textContent = this.cookiesEachHour[i];
    tableRow.appendChild(tableDataElement);
  }
  let tableHeader = document.createElement('th');
  tableHeader.textContent = this.totalDailyCookies;
  tableRow.appendChild(tableHeader);
  tableElement.appendChild(tableRow);
};

Cookie.all = [];
let seattle=new Cookie('Seattle', 23, 65, 6.3);
let tokyo=new Cookie('Tokyo', 3, 24, 1.2);
let dubai=new Cookie('Dubai', 11, 38, 3.7);
let paris=new Cookie('Paris', 20, 38, 2.3);
let lima=new Cookie('Lima', 2, 16, 4.6);

let locations=[seattle,tokyo,dubai,paris,lima];

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeingHeader() {
  let tableRow = document.createElement('tr');
  let tableHeader = document.createElement('th');
  tableHeader.textContent = 'Locations';
  tableRow.appendChild(tableHeader);
  for (let i = 0; i < hours.length; i++) {
    tableHeader = document.createElement('th');
    tableHeader.textContent = hours[i];
    tableRow.appendChild(tableHeader);
  }
  tableHeader = document.createElement('th');
  tableHeader.textContent = 'location totals';
  tableRow.appendChild(tableHeader);
  tableElement.appendChild(tableRow);
}

function makeFotter() {
  let tableRow = document.createElement('tr');
  let tableHeader = document.createElement('th');
  tableHeader.textContent = 'hourly totals for all the  locations';
  tableRow.appendChild(tableHeader);
  let totalOfTotals = 0;
  for (let i = 0; i < hours.length; i++) {
    let hourlyTotal = 0;
    for (let j = 0; j < locations.length; j++){
      hourlyTotal += locations[j].cookiesEachHour[i];
      totalOfTotals += hourlyTotal;
    }
    tableHeader = document.createElement('th');
    tableHeader.textContent = hourlyTotal;
    tableRow.appendChild(tableHeader);
  }
  tableHeader = document.createElement('th');
  tableHeader.textContent = totalOfTotals;
  tableRow.appendChild(tableHeader);
  tableElement.appendChild(tableRow);
}

(function renderTable() {
    makeingHeader();
    for(let i = 0; i < locations.length; i++){
      locations[i].render();
    }
    makeFotter();
  })();
































