'use strict';

var hours =  ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','Daily Location Total'];

var data = [];
var table = document.getElementById('cookieStats');


// this function used to calculate avg cookis per houre
function CookiesLocation(minCustomersPerHour,maxCustomersPerHour,avgCookiesSalesPerCustomer) {
this.minCustomersPerHour;
this.maxCustomersPerHour;
this.avgCookiesSalesPerCustomer;

}
// object to generate a random number of customers per hour.
this.maxCustomersPerHour = function() {
   var min = Math.ceil(this.minCustomersPerHour);
   var max = Math.floor(this.maxCustomersPerHour);
   return Math.floor(Math.random() * (max - min + 1)) + min;
}
this.cookiesSoldPerHour = function(){
return Math.round(this.customersPerHour() * this.avgCookieSalesPerCustomer,0);
  
}
this.totalCookiesSoldInADay = 0

// im not finsih yet .. 