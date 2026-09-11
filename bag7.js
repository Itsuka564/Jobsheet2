function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

const products = [
    { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3 },
    { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15 },
    { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5 }
];

products.sort((a, b) => a.price - b.price);

function binarySearchByPrice(sortedProducts, targetPrice) {
    let left = 0;
    let right = sortedProducts.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (sortedProducts[mid].price === targetPrice) return mid;
        if (sortedProducts[mid].price < targetPrice) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

console.log(binarySearchByPrice(products, 800));