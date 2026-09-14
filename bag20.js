const products = [
  {
    id: 1,
    title: "Laptop",
    price: 1200,
    rating: 4.5,
    stock: 10,
    category: "laptops",
    dimensions: { width: 30, height: 2, depth: 20 },
    reviews: [
      { user: "A", rating: 5, comment: "Good product" },
      { user: "B", rating: 4, comment: "Worth it" },
    ],
  },
  {
    id: 2,
    title: "Smartphone",
    price: 800,
    rating: 4.2,
    stock: 15,
    category: "phones",
    dimensions: { width: 7, height: 0.8, depth: 15 },
    reviews: [
      { user: "C", rating: 4, comment: "Nice camera" },
      { user: "D", rating: 5, comment: "Fast" },
    ],
  },
  {
    id: 3,
    title: "Headphones",
    price: 100,
    rating: 4.0,
    stock: 3,
    category: "audio",
  },
  {
    id: 4,
    title: "Keyboard",
    price: 50,
    rating: 3.8,
    stock: 25,
    category: "accessories",
    dimensions: { width: 44, height: 3, depth: 14 },

  },
];

function section(title) {
  console.log("\n=== " + title + " ===");
}

section("01 Template Literal");

const label = (product) => `${product.title} - $${product.price}`;
products.forEach((p) => console.log(label(p)));


section("02 Arrow Function");

const getTitle = (product) => product.title;
const titles = products.map(getTitle);
console.log("titles:", titles);

section("03 Destructuring");

const { title, price, category } = products[0];
console.log("title:", title, "| price:", price, "| category:", category);

const [firstProduct, ...restProducts] = products;
console.log("firstProduct.title:", firstProduct.title);
console.log("restProducts.length:", restProducts.length);


section("04 Spread");

const updatedProduct = { ...products[0], stock: 20 };
console.log("updatedProduct:", updatedProduct);

const newProduct = { id: 5, title: "Mouse", price: 25, category: "accessories" };
const merged = [...products, newProduct];
console.log("merged.length:", merged.length);

section("05 Rest Parameter");

function sumPrices(...prices) {
  return prices.reduce((a, b) => a + b, 0);
}
console.log("sumPrices(...allPrices):", sumPrices(...products.map((p) => p.price)));
console.log("sumPrices(10, 20, 30):", sumPrices(10, 20, 30));


section("06 Optional Chaining & Nullish Coalescing");

products.forEach((p) => {
  const width = p.dimensions?.width ?? "Tidak diketahui";
  console.log(`${p.title}.dimensions?.width ->`, width);
});

products.forEach((p) => {
  const reviewCount = p.reviews?.length ?? 0;
  console.log(`${p.title}.reviews?.length ->`, reviewCount);
});



function filterByCategory(list, category = "all") {
  if (category === "all") return list;
  return list.filter((p) => p.category === category);
}
console.log('filterByCategory(products) [default "all"] -> jumlah:', filterByCategory(products).length);
console.log(
  'filterByCategory(products, "phones") ->',
  filterByCategory(products, "phones").map((p) => p.title)
);





section("Latihan 20.1 — getStatistics (refactor)");

function getStatistics(list) {
  const { length: totalProducts } = list;

  const prices = list.map(({ price }) => price);
  const ratings = list.map(({ rating }) => rating ?? 0);
  const stocks = list.map(({ stock }) => stock ?? 0);

  return {
    totalProducts,
    averagePrice: prices.reduce((a, b) => a + b, 0) / totalProducts,
    highestPrice: Math.max(...prices),
    lowestPrice: Math.min(...prices),
    totalStock: stocks.reduce((a, b) => a + b, 0),
    averageRating: Number(
      (ratings.reduce((a, b) => a + b, 0) / totalProducts).toFixed(2)
    ),
  };
}

console.log(getStatistics(products));