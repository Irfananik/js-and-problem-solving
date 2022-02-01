// task 01(C to F)....................................................................
// function celciusToFahrenheit(celcius) {
//     let fahrenheit = (celcius * 1.8) + 31;
//     return fahrenheit;
// }
// console.log("Her is the result of the calculation:", celciusToFahrenheit(29));


// tasks02(F to C)....................................................................
// function fahrenheitToCelsius(fahrenheit) {
//     let celsius = 5 / 9 * (fahrenheit - 32)
//     return celsius;
// }
// console.log("Here is the result of calculation:", fahrenheitToCelsius(85));



// task 03(marks distribution)....................................................................
// function markDistribution(marks) {
//     if (marks >= 80 && marks <= 100) {
//         console.log(marks, "A+");
//         return marks;
//     } else if (marks >= 70 && marks <= 79) {
//         console.log(marks, "A");
//         return marks;
//     } else if (marks >= 60 && marks <= 69) {
//         console.log(marks, "B")
//         return marks;
//     } else if (marks >= 50 && marks <= 59) {
//         console.log(marks, "C")
//         return marks;
//     } else if (marks >= 40 && marks <= 49) {
//         console.log(marks, "B")
//         return marks;
//     } else {
//         console.log("Ops!.... Sorry you are not abailable for next stage.");
//     }
// }
// markDistribution(77);



// task 04(Interest)....................................................................

// function interestPerYear(p, t, r, n) {
//     const amount = p * (Math.pow((1 + (r / n)), (n * t)));
//     const interest = amount - p;
//     return interest;
// }

// const principle = 2000;
// const time = 5;
// const rate = .08;
// const nOfTimesInterest = 12;

// console.log("Interest per year: ", interestPerYear(principle, time, rate, nOfTimesInterest));




// conceptual session task - 01
// function msgGenerator(name) {
//     randomMsg = "Hello...!" + name + " Thanks for your feedback and we are so glad to you for your purchase our product."
//     return randomMsg;
// }
// console.log(msgGenerator("Dear Samsul Huqe sir"));


// conceptual session task - 02

// function pizzaHouse(foodName, quantity) {
//     if (foodName.toLowerCase() != "pizza") {
//         var massage2 = "We are sorry! we sales pizza only"
//         return massage2;

//     } else if (quantity != 30 && quantity > 30) {
//         var massage3 = "Sorry sir, now our available pizza is 30 pieces. So you can order less then 31 pieces pizza's"
//         return massage3;
//     } else if (quantity > 10) {
//         var price = (249 * quantity) - 50;
//         var massage4 = "Congratulations for your order and you got bonus!!!. Order Info: " + foodName + "!" + " Price: " + price + " Tk Only";
//         return massage4;
//     } else {
//         var price = 249 * quantity;
//         var massage1 = "Congratulations for your order! Successful your order. Order Info: " + foodName + "!" + " Price: " + price + " Tk Only";
//         return massage1;
//     }
// }
// console.log(pizzaHouse("pizza", 30));




// object practice

var userData = {
    name: "Golam Morshed",
    agg: 23,
    address: "Dhaka, Bangladesh",
};
console.log(userData.name);