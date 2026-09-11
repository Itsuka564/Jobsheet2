const products = [
    { title: "Laptop ROG", category: "laptops", price: 1500, stock: 5, rating: 4.8 },
    { title: "Mouse Gaming", category: "accessories", price: 50, stock: 20, rating: 4.5 },
    { title: "MacBook Air", category: "laptops", price: 1200, stock: 3, rating: 4.9 },
    { title: "Keyboard Mechanical", category: "accessories", price: 100, stock: 12, rating: 4.7 }
];


function getLaptopAveragePrice(products) {
    const laptopPrices = products
        .filter(p => p.category === "laptops")
        .map(p => p.price);
    
    const totalSum = laptopPrices.reduce((acc, price) => acc + price, 0);
    return totalSum / laptopPrices.length;
}


function getStatistics(products) {
    const prices = products.map(p => p.price);
    const ratings = products.map(p => p.rating);

    return {
        totalProducts: products.length,
        totalStock: products.reduce((acc, p) => acc + p.stock, 0),
        highestPrice: Math.max(...prices),
        lowestPrice: Math.min(...prices),
        averagePrice: prices.reduce((acc, p) => acc + p, 0) / products.length,
        averageRating: ratings.reduce((acc, r) => acc + r, 0) / ratings.length
    };
}


console.log("Rata-rata Laptop:", getLaptopAveragePrice(products));
console.log("Statistik Toko:", getStatistics(products));