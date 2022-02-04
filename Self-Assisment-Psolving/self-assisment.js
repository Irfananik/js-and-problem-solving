// Task 01 feetToInch convertion...........................................
/* function feetToInch(feet) {
    let feetCalculated = 12 * feet;
    return feetCalculated;
}
const myInch = (feetToInch(10));
console.log(myInch); */

// Task - 02 centimetersToMeter convertion........................................
/* function centimeterToMeter(centimeter) {
    let centimeterCalculated = 0.01 * centimeter;
    return centimeterCalculated;
}
const myCentimeter = (centimeterToMeter(100));
console.log(myCentimeter); */


// Task 03 paperRequirements ............................
/* function paperRequirements(firstBookQuantity, secondBookQuantity, thirdBookQuantity) {
    const firstBookPages = 100;
    const secondBookPages = 200;
    const thirdBookPages = 300;

    const firstBookMultiply = firstBookQuantity * firstBookPages;
    const secondBookMultiply = secondBookQuantity * secondBookPages;
    const thirdBookMultiply = thirdBookQuantity * thirdBookPages;

    const TotalBookPages = firstBookMultiply + secondBookMultiply + thirdBookMultiply;
    return TotalBookPages;
}
const finalResult = paperRequirements(2, 2, 2);
console.log(finalResult); */



// Task 04 return big array string value............................................
/* const bFriendName = "anik asim golam morshed kabir";
const beastFriends = (bFriendName) => {
    const strArray = bFriendName.split(" ");
    const sortedString = strArray.sort(
        (bFriendNameA, bFriendNameB) => {
            return bFriendNameB.length - bFriendNameA.length;
        }
    );
    return sortedString[0];
}
console.log(beastFriends(bFriendName)) */



/* function beastFriends(names) {
    let bigName = "";
    for (name of names) {
        if (name.length > bigName.length) {
            bigName = name;
        }
    }
    return bigName;
}

const fNameArray = ["gugtuk", "golam", "jahid hasan", "golam morshed", "kuman Turki"];
const result = beastFriends(fNameArray);
console.log(result); */




// Task 05 positive array value show..........................................
function positiveArray(myArrays) {
    let positiveArray = [];
    for (let myArray of myArrays) {
        if (myArray < 0) {
            break;
        } else {
            positiveArray.push(myArray);
        }
    }
    return positiveArray;
}
const myArray = [12, 23, 34, 45, -67, 32];
console.log("positiveArray: ", positiveArray(myArray));