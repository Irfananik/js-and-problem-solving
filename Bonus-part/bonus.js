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
    // console.log(i);
    if (i == 1) {
        return 1;
    }
    return i + recursionSum(--i);
}
console.log(recursionSum(5));





// Explore Factorial Recursion using a for loop concept
function factorial(n) {
    if (n == 1) {
        return 1;
    }
    return n * factorial(--n);
}
console.log(factorial(4));





// (advanced) Find the matching product by searching products
/* const products = [
    { name: "Mac Laptop", price: 1200000 },
    { name: "Microsoft Laptop", price: 90000 },
    { name: "Hp Laptop", price: 65000 },
    { name: "Iphone 14", price: 130000 },
    { name: "Samsung phone s 14", price: 95000 },
    { name: "Apple Watch", price: 21000 },
    { name: "Samsung Watch", price: 9000 }
];

function searchProducts(products, searchText) {
    const searchResult = [];
    for (let product of products) {
        if (product.name.includes(searchText)) {
            searchResult.push(product);
        }
    }
    return searchResult;
}
const matched = searchProducts(products, "Laptop");
console.log(matched); */





const products = [
    { name: "Mac Laptop", price: 1200000 },
    { name: "Microsoft Laptop", price: 90000 },
    { name: "Hp Laptop", price: 65000 },
    { name: "Iphone 14", price: 130000 },
    { name: "Samsung phone s 14", price: 95000 },
    { name: "Apple Watch", price: 21000 },
    { name: "Samsung Watch", price: 9000 }
];
for (let product of products) {
    if (product.price < 20000) {
        continue;
    }
    console.log(product);
}