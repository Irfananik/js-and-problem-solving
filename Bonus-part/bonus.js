// Understand for loop in a forward and reverse way
/* for (let i = 1; i < 6; i++) {
    console.log(i);
} */

/* function randomINumber(i) {
    if (i > 5) {
        return;
    }
    console.log(i);
    randomINumber(i + 1);
}
randomINumber(1); */




// Understand recursion using sum of numbers
function recursionSum(i) {
    console.log(i);
    if (i == 1) {
        return 1;
    }
    return i + recursionSum(--i);
}
console.log(recursionSum(5));