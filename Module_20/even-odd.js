// check is this even number...............................................
function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}

// let myNumber = isEven(21);
// console.log("Is this odd number?", myNumber);

// let herNumber = isEven(100);
// console.log("Her number is: ", herNumber);



// check is this odd number....................................................................
function isOdd(number) {
    if (number % 2 != 0) {
        return true
    }
    return false;
}

// var myNumber = isOdd(33);
// console.log("Is this odd number?", myNumber);

// var herNumber = isOdd(22);
// console.log("Is this odd number?", herNumber);




// check leap-year....................................................................................
function isLeapYear(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        return true;
    }
    return false;
}

let myYear = isLeapYear(2024);
console.log("is this year leap-year?", myYear);



// check factorial.................................................................................................
// var factorial = 1;
// for (i = 1; i <= 7; i++) {
//     factorial = factorial * i;
// }
// console.log("factorial number is: ", factorial);


// check factorial with function and for loop.......................................................................................
/*
function factorial(number) {
    let fact = 1;
    for (let i = 1; i <= number; i++) {
        fact = fact * i;
    }
    return fact;
}
let myNumber = factorial(4);
console.log(myNumber);
*/




// check factorial with function and while loop.......................................................................................

// function factorial(number) {
//     let fact = 1;
//     let i = 1;
//     while (i <= number) {
//         fact = fact * i;
//         i++;
//     }
//     return fact;
// }
// const myNumber = factorial(7);
// console.log(myNumber);


// check factorial reverse way with function and while loop .......................................................................................
// function factorial(number) {
//     let fact = 1;
//     let i = number;
//     while (i >= 1) {
//         fact = fact * i;
//         i--;
//     }
//     return fact;
// }
// const myFac = factorial(4);
// console.log(myFac);



// check factorial reverse way with function and for loop .......................................................................................
// function factorial(number) {
//     let fact = 1;
//     for (i = number; i >= 1; i--) {
//         fact = fact * i;
//     }
//     return fact;
// }
// const myNumber = factorial(3);
// console.log(myNumber);






// task hors to min convert................................................

function timeConvert(num) {
    // let hours = Math.floor(num * 60);
    let minutes = Math.floor(num * 60);
    return minutes
}

const number = timeConvert(5);
console.log("This is your converted time in hours to minutes: ", number);





// task age showing with even odd................................................
function evenOdd(age) {
    if (age % 2 == 0) {
        return true;
    } else if (age % 2 == 1) {
        return false;
    }
}

let myAge = evenOdd(23);
console.log("here is my age and sowing the result value: ", myAge);