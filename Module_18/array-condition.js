// About array.....................................................

var users = ['Anik', 'Ashim', 'Orin', 'Mithi'];
var usersIds = [002, 001, 003, 004];
var usersResults = [10.5, 11.8, 10.6, 11.9];

// var calculations = (usersIds + users + usersResults);
// console.log(calculations);

// console.log(usersIds[0] + ' ' + users[0] + ' ' + usersResults[0]);
// console.log(usersIds[1] + ' ' + users[1] + ' ' + usersResults[1]);
// console.log(usersIds[2] + ' ' + users[2] + ' ' + usersResults[2]);
// console.log(usersIds[3] + ' ' + users[3] + ' ' + usersResults[3]);










// about array index...............................................................................
var usersIds = [012, 023, 90, 33, 21, 45, 28, 99, 100, 123, 88, 71, 23];
var books = ['latin', 'latin1', 'latin2', 'latin3', 'pucke', 'pucke1', 'pucke2', 'juggo', 'juggo1', 'juggo2'];

// var usersIndex = usersIds.indexOf(23);
// console.log(usersIndex);

books[6] = 'laguri';

var bookIndex = books[6];
// console.log(bookIndex);






// push and pop an array..............................................................

var books = ['Mina', 'Julfikar', 'Kaka babu', 'Tom&Jerry'];
var booksPrice = [100, 230, 150, 200, 300];

// element added and removed last index

// books.push('Gopal Var');
// booksPrice.push(500);

// books.pop();
// booksPrice.pop();

// console.log(books);
// console.log(booksPrice);


// console.log(books);
// console.log(booksPrice);



// element added and removed in first index........... unshift means(first added) and shift means(first removed);
// books.unshift('Gopal Var');
// booksPrice.unshift(500);
books.shift('Gopal Var');
booksPrice.shift(500);

// console.log(books);
// console.log(booksPrice);

// console.log(books);
// console.log(booksPrice);






// conditions................................................................

// var phonPrice = 25000;
// var myBudgetPrice = 20000;

// if (phonPrice < myBudgetPrice) {
//     console.log("I will buy this phone");
// } else {
//     console.log("This is to much that's why i didn't effort this product")
// }


// var gotJobs = true;
// var hasFlat = false;
// var demandSalary = 150000;
// var salary = 200000;
// var hasHouse = true;

// if ((gotJobs && hasFlat) || (hasHouse && demandSalary <= salary)) {
//     console.log("You are accepted!!!");
// } else {
//     console.log("You are not accepted!!");
// }



// var cgpa = 1.90;

// if (cgpa >= 3.00) {
//     console.log("First Class");
// } else if (cgpa >= 2.00) {
//     console.log("Second Class");
// } else if (cgpa >= 1.00) {
//     console.log("Third Class");
// } else {
//     console.log("Failed to exam")
// }



// var number = -1;

// if (number == 0) {
//     console.log("This number is Zero");
// } else if (number > 0) {
//     console.log("This number is Positive");
// } else {
//     console.log("This number is negative")
// }

// var number = -1;
// if (number >= 0) {
//     if (number == 0) {
//         console.log("This number is Zero");
//     } else {
//         console.log("This number is Positive");
//     }
// } else {
//     console.log("This number is Negative")
// }


// class task 01
// var alia = 95;
// var dalia = 66;
// var salia = 80;
// var malia = 59;
// var lilia = 47;
// var jalia = 77;

// if (alia >= 90) {
//     console.log("Alia get A+");
// }
// if (dalia >= 60 && dalia < 70) {
//     console.log("Dalia get C")
// }
// if (salia >= 80 && salia < 90) {
//     console.log("Salia get A");
// }
// if (malia >= 50 && malia < 60) {
//     console.log("Salia get C");
// }
// if (lilia < 50) {
//     console.log("lilia get F");
// }
// if (jalia >= 70 && jalia < 80) {
//     console.log("jalia get B");
// }


// var marks = prompt("Enter your marks here: ");
// if (marks >= 90) {
//     console.log("Get A+");
// } else if (marks >= 80 && marks < 90) {
//     console.log("Get A");
// } else if (marks >= 70 && marks < 80) {
//     console.log("Get B");
// } else if (marks >= 60 && marks < 70) {
//     console.log("Get C");
// } else if (marks >= 50 && marks < 60) {
//     console.log("Get D");
// } else {
//     console.log("Get F");
// }


// task 02
// var redLight = false;
// var yellowLight = true;
// var greenLight = false;

// if (redLight == true) {
//     console.log("Please don't go, stop right now");
// } else if (yellowLight == true) {
//     console.log("wait for green light");
// } else if (greenLight == true) {
//     console.log("You can go now");
// }


// p-1
// var age = 16;
// var isVaccinated = false;
// var vaccineCount = 0;

// if (age >= 20 && vaccineCount == 2) {
//     console.log("You can go now another country");
// }
// if (age >= 15 && age < 20 && vaccineCount == 0) {
//     console.log("2/4/33");
// }
// if (age >= 15 && age < 20 && vaccineCount == 2) {
//     console.log("You can go now another country");
// }

// p-2

// var myBudget = 6000;
// var hotelRent = 4000;
// var budgetRemaining = (myBudget - hotelRent);
// console.log(budgetRemaining);

// if (myBudget > 5000) {
//     console.log("I will go to tour!!!!");
//     if (budgetRemaining > 2000) {
//         console.log("Yes BBQ done!");
//     } else {
//         console.log("I will shopping something...");
//     }
// }