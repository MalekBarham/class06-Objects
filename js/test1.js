'use strict';


function  car (color ,year,type,model,milage ) {
this.color = color;
this.year=year;
this.type=type;
this.model=model;
this.milage=milage;

}

car.prototype.drivecar=function () {
console.log(this.type+ '   ' + this.model + ' is driving ' )
};

let bmw = new car('red',2021,'bmw','520',6300);
let mercades= new car ('blue ' , 2020,'mercades',);

console.log (bmw.drivecar());
console.log(mercades);

