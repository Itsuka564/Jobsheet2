const products = [
    { title: "Laptop ROG", category: "laptops", price: 1500 },
    { title: "Lipstik Matte", category: "beauty", price: 50 },
    { title: "MacBook Air", category: "laptops", price: 1200 },
    { title: "Skincare Serum", category: "beauty", price: 100 },
    { title: "Mouse Gaming", category: "accessories", price: 50 }
];

function groupByCategory(products) {
    return products.reduce((groups, product) => {
        const key = product.category;
        if (!groups[key]) groups[key] = [];
        groups[key].push(product);
        return groups;
    }, {});
}

const groupedProducts = groupByCategory(products);
console.log(groupedProducts);


function showCategorySummary(groupedProducts) {
    const summary = [];
    
    for (const category in groupedProducts) {
        summary.push({
            Kategori: category,
            TotalProduk: groupedProducts[category].length
        });
    }
    

    console.table(summary);
}

showCategorySummary(groupedProducts);