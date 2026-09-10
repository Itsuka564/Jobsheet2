const products = [
{
id: 1,
title: "Laptop",
price: 1200,
rating: 4.5,
stock: 10,
category: "laptops",
tags: ["computer", "electronics", "office"],
dimensions: { width: 30, height: 2, depth: 20 },
reviews: [
{ user: "A", rating: 5, comment: "Good product" },
{ user: "B", rating: 4, comment: "Worth it" }
]
},
{
id: 2,
title: "Smartphone",
price: 800,
rating: 4.2,
stock: 15,
category: "phones",
tags: ["mobile", "electronics"],
dimensions: { width: 7, height: 0.8, depth: 15 },
reviews: [
{ user: "C", rating: 4, comment: "Nice camera" },
{ user: "D", rating: 5, comment: "Fast" },
{ user: "E", rating: 3, comment: "Battery so-so" }
]
}
]

const allTags = products.map(p => p.tags);

function findProductsByTag(products, tag) {
    return products.filter(p => p.tags.includes(tag));
}


const productReviewCounts = products.map(p => ({
    id: p.id,
    title: p.title,
    totalReviews: p.reviews.length
}));

const fiveStarReviews = products.flatMap(p => p.reviews).filter(r => r.rating === 5);


const averageRatings = products.map(p => {
    const totalScore = p.reviews.reduce((sum, r) => sum + r.rating, 0);
    return {
        id: p.id,
        avgRating: p.reviews.length > 0 ? totalScore / p.reviews.length : 0
    };
});

const mostReviewedProduct = products.reduce((max, p) => 
    p.reviews.length > max.reviews.length ? p : max
, products[0]);

const allRatings = products.flatMap(p => p.reviews.map(r => r.rating));

console.log(allTags);
console.log(findProductsByTag(products, "electronics"));
console.log(productReviewCounts);
console.log(fiveStarReviews);
console.log(averageRatings);
console.log(mostReviewedProduct);
console.log(allRatings);