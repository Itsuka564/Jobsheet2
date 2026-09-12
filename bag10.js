const products = [
    { title: "Laptop ROG", category: "laptops", rating: 4.8, brand: "Asus", tags: ["gaming", "computer"] },
    { title: "MacBook Air", category: "laptops", rating: 4.9, brand: "Apple", tags: ["computer", "office"] },
    { title: "iPhone 15", category: "phones", rating: 4.2, brand: "Apple", tags: ["mobile", "electronics"] },
    { title: "Mouse Logitech", category: "accessories", rating: 4.5, tags: ["office", "computer"] }
];

function countFrequency(array) {
    return array.reduce((counts, item) => {
        counts[item] = (counts[item] || 0) + 1;
        return counts;
    }, {});
}

const categoryFrequency = countFrequency(products.map(p => p.category));
const tagsFrequency = countFrequency(products.flatMap(p => p.tags));
const ratingFrequency = countFrequency(products.map(p => Math.round(p.rating)));
const brandFrequency = countFrequency(products.filter(p => p.brand).map(p => p.brand));

console.log(categoryFrequency);
console.log(tagsFrequency);
console.log(ratingFrequency);
console.log(brandFrequency);