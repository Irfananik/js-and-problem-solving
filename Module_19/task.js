// multiplication table - task 01................................................................

function multiply() {
    var number = 13;
    for (var i = 1; i < 11; i++) {
        console.log(number + " X " + i + " = " + number * i);
    }
}

multiply();




// task 02 ...............................................................................................

function letterTranslate() {
    var name = "Golam Morshed";
    console.log(name);
    var text = name.toLowerCase();
    console.log(text);
}
letterTranslate();




// task 03 .toFixed.............................................................................................

function fullName(Golam, Morshed) {
    var Golam = "Golam";
    var Morshed = "Morshed";
    console.log(Golam + " " + Morshed);
}
fullName();



// task 04 .toFixed.............................................................................................
function square(number) {
    console.log(number * number);
}

var value = 5;
square(value);



// task 05 .toFixed.............................................................................................
const pizza = {

    toppings: ['cheese', 'sauce', 'pepperoni'],

    crust: 'deep dish',

    serves: 2

}
console.log(pizza.toppings[2]);