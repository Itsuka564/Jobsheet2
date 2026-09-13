
const arrayBesar = Array.from({length: 10000}, (_, i) => i + 1);
const target = 9999;

function linearSearchWithCount(arr, target) {
    let langkah = 0;
    for (let i = 0; i < arr.length; i++) {
        langkah++;
        if (arr[i] === target) return langkah;
    }
    return langkah;
}

function binarySearchWithCount(arr, target) {
    let langkah = 0;
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        langkah++;
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return langkah;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return langkah;
}


console.log("Langkah Linear Search:", linearSearchWithCount(arrayBesar, target));
console.log("Langkah Binary Search:", binarySearchWithCount(arrayBesar, target));







const produkBanyak = Array.from({length: 1000}, (_, i) => ({ id: i, category: i % 2 === 0 ? "A" : "B" }));

function findPairsNested(products) {
    let langkah = 0;
    for (let i = 0; i < products.length; i++) {
        for (let j = i + 1; j < products.length; j++) {
            langkah++;
        }
    }
    return langkah;
}

function findPairsMap(products) {
    let langkah = 0;
    const group = new Map();
    for (let i = 0; i < products.length; i++) {
        langkah++;
        const cat = products[i].category;
        if (!group.has(cat)) group.set(cat, []);
        group.get(cat).push(products[i]);
    }
    return langkah;
}


console.log("Langkah Nested Loop O(n²):", findPairsNested(produkBanyak));
console.log("Langkah Grouping Map O(n):", findPairsMap(produkBanyak));