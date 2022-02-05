// Understand for loop in a forward and reverse way
/* for (let i = 1; i < 6; i++) {
    console.log(i);
} */

function randomINumber(i) {
    if (i > 5) {
        return;
    }
    console.log(i);
    randomINumber(i + 1);
}
randomINumber(1);