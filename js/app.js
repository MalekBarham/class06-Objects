'use strict';
let hours =  ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let table=document.getElementById('table');
function CookieStand(location ,minHourelyCustomer,maxHourlyCustomer,avgCookiesPerCoustmoer) {
this.location=location;
this.minHourelyCustomer=minHourelyCustomer;
this.maxHourlyCustomer=maxHourlyCustomer;
this.avgCookiesPerCoustmoer=avgCookiesPerCoustmoer;
this.totalcookiesPerDay=0;
this.totalcookiesPerHours=[];
}
CookieStand.prototype.cookies=function() {
    let r =Math.random()*(this.maxHourlyCustomer-this.minHourelyCustomer)+this.minHourelyCustomer;
    return Math.floor(r *this.avgCookiesPerCoustmoer);
}
CookieStand.prototype.tmain=function(){
    let tr = document.createElement('tr');
    let th = document.createElement('td');
    th.textContent = this.location;
    tr.appendChild(th);
    for(let i =0; i <hours.length;i++){
        let cookie = this.cookies();
        let td = document.createElement('td');
        td.textContent = cookie;
        tr.appendChild(td);
        this.totalcookiesPerDay += cookie;
    }
    let total = document.createElement('td');
    total.textContent = this.totalcookiesPerDay;
    tr.appendChild(total);
    table.appendChild(tr);

}
let Seattle=new CookieStand('seattle' , 23,65,6.3);
let tokyo=new CookieStand('tokyo',3,24,1.2);    
let dubai=new CookieStand('Dubai' , 11,38,3.7 );
let paris =new CookieStand('Paris',20,38,2.3);
let lima =new CookieStand('Lima',23,65,6.3);
let locationsList=[Seattle,tokyo,dubai,paris,lima];

function tableHeader (){
    let tHead = document.createElement('thead');
    let empty = document.createElement("th");
    empty.textContent = ' ';
tHead.appendChild(empty);
    for(let i =0 ; i < hours.length ; i++){
        let th = document.createElement('th');
        th.textContent = hours[i];
        tHead.appendChild(th);
    }
    let total = document.createElement('th');
    total.textContent = 'Daily Location Total';
    tHead.appendChild(total);
 
    table.appendChild(tHead);
   
}

tableHeader();

Seattle.tmain();
tokyo.tmain();
dubai.tmain();
paris.tmain();
lima.tmain();



function makingFooter () {
     let tableRow = document.createElement('tr');
     let tableHeader = document.createElement('th');
  tableRow.appendChild(tableHeader);
   let totalofTotal = 0;
   for ( let i = 0 ; i < hours.length ; i++) {
     let hourlyTotal = 0;
     for ( let j = 0 ; j < location[j] ; j++) {
         hourlyTotal+=hourlyTotal;

     }
       tableHeader = document.createElement('th');
       tableHeader.textContent=hourlyTotal;
       tableRow.appendChild(tableHeader);
   }
tableHeader = document.createElement('th');
tableHeader.textContent = totalofTotal;
tableRow.appendChild(tableHeader);
tableELement.appendChild(tableRow);

}

