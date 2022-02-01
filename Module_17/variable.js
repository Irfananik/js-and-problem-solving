// variable types
var age = 23;
var aria = 12;

var fname = "Anik";
var lname = "Bhuiyan";

var pss = false;
var subscription = false;


// Mathematical operations 
var availablePeople = 4;
var availableTk = 500;
var poorPeople = 10;
var bananaPrice = 20;
var applePrice = 45;
var orangePrice = 46;
var jackfruitPrice = 50;

var totalFruitPrice = (bananaPrice + applePrice + orangePrice + jackfruitPrice);
var restTk = (availableTk - totalFruitPrice);
var availablePeople = (availablePeople * totalFruitPrice);
var tkDividedByPeople = (availableTk / poorPeople);

// console.log(totalFruitPrice);
// console.log(restTk);
// console.log(availablePeople);
// console.log(tkDividedByPeople);


// Mathematical operations by shortcuts
var carPrice001 = 5000;
var carPrice002 = 3000;

// carPrice001 = 1000 + carPrice001;
// carPrice001 += 1000;
// carPrice001++;
// carPrice002--;
// console.log(carPrice001);
// console.log(carPrice002);



// String connection
var fname = "Golam";
var mname = "Morshed";
var lname = "Anik";
var fullname = fname + ' ' + mname + ' ' + lname;
console.log(fullname);


// string converted 
var ageAnik = "23";
var ageAshim = "15.5";

var convertInNumber = parseInt(ageAnik);
var convertInNumber1 = parseFloat(ageAshim);
var totalAge = convertInNumber + convertInNumber1;

// console.log(convertInNumber);
// console.log(convertInNumber1);
// console.log(totalAge);


// number converted 
var applePrice = 44.44;
var orangePrice = 55.55;

var applePriceConverted = parseInt(applePrice);

// console.log(applePriceConverted);


// type and to fixed
var carPrice0001 = 400.56;
var carPrice0002 = 500.56;
var name = "anik";
var sunnyDay = true;
var totalCarPrice = (carPrice0001 + carPrice0002);

console.log(parseFloat(totalCarPrice.toFixed(3)));

// console.log(typeof sunnyDay);

// console.log(17 % 5);

var num1 = '99.5';
var num2 = 15;
console.log(num1 + num2);