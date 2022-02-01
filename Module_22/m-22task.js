// task 01 Remove duplicate items from an array
const names = ["anik", "ashim", "Mithi", "Orin", "anik", "ashim", "Mithi", "langku", "gugtuk", "kunur", "gugtuk", "anik", "gugtuk"];

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
console.log(uniqueName);