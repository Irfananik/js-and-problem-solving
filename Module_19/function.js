// simple fuction deacler
// function userName() {
//     console.log("Golam Morshed");
//     console.log("MIthi Zaman");
// }

// function userId() {
//     console.log(001);
//     console.log(002);
// }

// userId();
// userName();






// function with parameters

// function students(name, id) {
//     var namePrint = name;
//     console.log("This is a student name:" + " " + name);
//     var idPrint = id;
//     console.log("This is a student id:" + " " + id);
// }

// students("Golam Morshed", 110);




function sum(a, b) {
    var result = a + b;
    console.log("Result: " + result);
}

function additional(c, d) {
    var result = c - d;
    console.log("Result: " + result);
}

function multiply(e, f) {
    var result = e * f;
    console.log("Result: " + result);
}

function divide(g, h) {
    var result = g / h;
    console.log("Result: " + result);
}

sum(10, 20);
additional(100, 60);
multiply(10, 10);
divide(200, 10);




// function bringPhon(taka) {
//     console.log("I will buy a new phon, my budget is only", taka, "Tk");
//     console.log("New phone price is here which is like me!")

//     var phonePrice = 500;
//     var phoneQuantity = phoneBudget / phonePrice;
//     return phoneQuantity;



// }
// var phoneBudget = 1000;
// var phone = bringPhon(phoneBudget);
// console.log("This is your phone", phone);

function addNumber(number1, number2) {
    return "Result is " + number1 + number2;
}

var result = addNumber(5, 4);