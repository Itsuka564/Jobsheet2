const products = [
    { id: 101, title: "Laptop ROG", category: "laptops", price: 1500 },
    { id: 102, title: "MacBook Air", category: "laptops", price: 1200 },
    { id: 103, title: "iPhone 15", category: "phones", price: 900 }
];

function buildProductLookup(products) {
    const productMap = new Map();
    for (const product of products) {
        productMap.set(product.id, product);
    }
    return productMap;
}

const productLookup = buildProductLookup(products);

console.log(productLookup.get(102));
console.log(productLookup.get(103));