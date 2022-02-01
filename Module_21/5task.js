//Task - 01 find the largestNumber and smallest number.........................................................
// function largestNumber(first, second, third) {
//     if (first > second && first > third) {
//         return first;
//     } else if (second > first && second > third) {
//         return second;
//     } else {
//         return third;
//     }
// }

// const findLarger = largestNumber(12, 33, 22);
// console.log("the largerst number is : ", findLarger);


// function smallestNumber(first, second, third) {
//     if (first < second && first < third) {
//         return first;
//     } else if (second < first && second < third) {
//         return second;
//     } else {
//         return third;
//     }
// }

// const findSmaller = smallestNumber(44, 77, 92);
// console.log("the smallest number is : ", findSmaller);


// const first = 22;
// const second = 44;
// var max = Math.max(first, second);
// var min = Math.min(first, second);
// console.log(max);
// console.log(min);





// Task - 2 sum with array................................................................................................
/* const myNumber = [12, 76, 55, 99, 23, 11, 45, 11, 92];
let sum = 0;
for (i = 0; i < myNumber.length; i++) {
    const element = myNumber[i];
    sum = sum + element;
}
console.log("Total array sum result is: ", sum);


function totalArray(numbers) {
    let sum = 0;
    for (i = 0; i < numbers.length; i++) {
        const arrayNumber = numbers[i];
        sum = sum + arrayNumber;
    }
    return sum;
}
console.log("Total array sum result is: ", totalArray([12, 22, 22, 33])); */




// Task - 03 largestNumber and smallestNumber in array..................................................................
/* function largestNumber(arrayNumbers) {
    let largest = arrayNumbers[0];
    for (let i = 0; i < arrayNumbers.length; i++) {
        let element = arrayNumbers[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}
const ages = [12, 3, 65, 4, 22, 75, 78, 32, 23];
const oldest = largestNumber(ages);
console.log("Oldest array result is: ", oldest)

const ages2 = [-12, -66, -1, -99];
const oldest2 = largestNumber(ages2);
console.log("Oldest2 array result is: ", oldest2) */


/* function largestNumber(arrayNumbers) {
    let largest = arrayNumbers[0];
    for (let i = 0; i < arrayNumbers.length; i++) {
        let element = arrayNumbers[i];
        if (element < largest) {
            largest = element;
        }
    }
    return largest;
}
const ages = [12, 3, 65, 4, 22, 75, 78, 32, 23];
const oldest = largestNumber(ages);
console.log("Oldest array result is: ", oldest);

const ages2 = [-12, -3, -65, -4, -22, -75, -78, -32, -23];
const oldest2 = largestNumber(ages2);
console.log("Oldest array result is: ", oldest2); */



// Task - 04 fibnecchi............................................................................

/* const fibo = [0, 1];
for (let i = 2; i <= 10; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
};
console.log(fibo); */



/* function fibonacciSeries(num) {
    if (typeof num != 'number') {
        return "please enter a number";
    } else if (num < 2) {
        return "please enter a positive number grater than 1";
    }

    const fibo = [0, 1];
    for (let i = 2; i < num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}

console.log(fibonacciSeries(-13)); */