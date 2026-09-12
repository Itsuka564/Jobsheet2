const products = [
    { title: "Laptop ROG", category: "laptops", brand: "Asus", tags: ["gaming", "computer"] },
    { title: "MacBook Air", category: "laptops", brand: "Apple", tags: ["computer", "office"] },
    { title: "iPhone 15", category: "phones", brand: "Apple", tags: ["mobile", "electronics"] },
    { title: "Mouse Logitech", category: "accessories", tags: ["office", "computer"] }
];

const uniqueCategories = [...new Set(products.map(p => p.category))];
const uniqueBrands = [...new Set(products.filter(p => p.brand).map(p => p.brand))];
const uniqueTags = [...new Set(products.flatMap(p => p.tags))];

console.log(uniqueCategories);
console.log(uniqueBrands);
console.log(uniqueTags);