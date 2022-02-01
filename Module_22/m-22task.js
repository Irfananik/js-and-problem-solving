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
const myString = ("Hello sir, how are you?");

function reverseString(text) {
    let reverse = '';
    for (const letter of text) {
        // console.log(letter);
        reverse = letter + reverse;
    }
    return reverse;
}
const reversLetter = reverseString(myString);
console.log(reversLetter);