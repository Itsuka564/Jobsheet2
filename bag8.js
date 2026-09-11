const numbers = [5, 3, 8, 1];

function bubbleSort(numbers) {
    const arr = [...numbers];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

console.log(bubbleSort(numbers));

const dataProduk = [
    { title: "Mouse Gaming", price: 50, rating: 4.5 },
    { title: "Laptop ROG", price: 1500, rating: 4.8 },
    { title: "Keyboard Mechanical", price: 100, rating: 4.7 },
    { title: "MacBook Air", price: 1200, rating: 4.9 }
];

function sortProducts(products, sortBy) {
    const arr = [...products];
    
    if (sortBy === "price-asc") {
        arr.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
        arr.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
        arr.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "title") {
        arr.sort((a, b) => a.title.localeCompare(b.title));
    }
    
    return arr;
}

console.log(sortProducts(dataProduk, "price-desc"));
console.log(sortProducts(dataProduk, "rating"));
console.log(sortProducts(dataProduk, "title"));