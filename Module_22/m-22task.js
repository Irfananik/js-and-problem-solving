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
for (let i = 1; i <= 30; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        console.log("fobar");
    } else if (i % 3 == 0) {
        console.log("foo");
    } else if (i % 5 == 0) {
        console.log("bar");
    } else {
        console.log(i);
    }
}