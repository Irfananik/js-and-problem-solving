// task 01 Remove duplicate items from an array
/* const names = ["anik", "ashim", "Mithi", "Orin", "anik", "ashim", "Mithi", "langku", "gugtuk", "kunur", "gugtuk", "anik", "gugtuk"];

function removeDuplicates(names) {
    let unique = [];
    for (let element of names) {
        console.log(element);
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}
let uniqueName = removeDuplicates(names);
console.log(uniqueName); */



// Task - 02 Explore string nature and reverse a string
/* const myString = ("Hello sir, how are you?");

function reverseString(text) {
    let reverse = '';
    for (const letter of text) {
        // console.log(letter);
        reverse = letter + reverse;
    }
    return reverse;
}
const reversLetter = reverseString(myString);
console.log(reversLetter); */




// Task - 03  sum two numbers with function........................................
/* function sumTwoNumbers(a, b) {
    const sum = a + b;
    return sum;
}
let result = sumTwoNumbers(12, 11);
console.log(result); */


// Task - 04 Use add and multiplication to calculate wood requirements...........................................
/* function furnitureCalculation(computerTableQuantity, computerChairQuantity, badQuantity, diningTableQuantity) {
    const tablePerCount = 10;
    const chairPerCount = 3;
    const diningTablePerCount = 20;
    const bedPerCount = 50;


    const computerTable = computerTableQuantity * tablePerCount;
    const computerChair = computerChairQuantity * chairPerCount;
    const bedLarge = badQuantity * bedPerCount;
    const diningTable = diningTableQuantity * diningTablePerCount;

    const totalCount = computerTable + computerChair + bedLarge + diningTable;

    return totalCount;
}

const firstLot = furnitureCalculation(1, 1, 1, 1);
console.log(firstLot); */



// Task - 5 1 to 50 print then Write foo, bar, foobar if divisible by 3 or 5 or both..............................................
/* for (let i = 1; i <= 30; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        console.log("fobar");
    } else if (i % 3 == 0) {
        console.log("foo");
    } else if (i % 5 == 0) {
        console.log("bar");
    } else {
        console.log(i);
    }
} */



// Task - 06 Find the cheapest phone from an array of phone objects...........................................................
/* const phones = [
    { name: "nokia", camera: 8, stored: 32, price: 30000 },
    { name: "samsung", camera: 8, stored: 32, price: 18000 },
    { name: "oppo", camera: 8, stored: 32, price: 12000 },
    { name: "samsung", camera: 8, stored: 32, price: 11000 },
    { name: "nokia", camera: 8, stored: 32, price: 9000 },
    { name: "apple", camera: 8, stored: 32, price: 110000 },
    { name: "nokia", camera: 8, stored: 32, price: 10000 }
]
let cheapest = phones[0];
for (const phone of phones) {
    if (phone.price < cheapest.price) {
        cheapest = phone;
    }
}
console.log("Lowest price phone is", cheapest); */


// Task 07 Calculate the total cost of the products in a shopping cart.................................................................
/* const products = [
    { name: "mobile", price: 46000 },
    { name: "laptop", price: 76000 },
    { name: "watch", price: 6000 },
    { name: "bag", price: 5000 }
]
let totalPrice = 0;
for (let product of products) {
    totalPrice += product.price
}
console.log(totalPrice); */



const cart = [
    { name: "mobile", price: 46000, quantity: 1 },
    { name: "laptop", price: 76000, quantity: 1 },
    { name: "watch", price: 6000, quantity: 2 },
    { name: "bag", price: 5000, quantity: 2 }
]
let totalPrice = 0;
for (let product of cart) {
    productTotal = product.price * product.quantity;
    totalPrice += productTotal;
}
console.log(totalPrice);