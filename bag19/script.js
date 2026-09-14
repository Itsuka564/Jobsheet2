
const products = [
  {
    id: 1,
    title: "Laptop Pro 14",
    price: 1200,
    rating: 4.5,
    stock: 10,
    category: "laptops",
    thumbnail: "https://via.placeholder.com/150?text=Laptop"
  },
  {
    id: 2,
    title: "Smartphone X",
    price: 800,
    rating: 4.2,
    stock: 15,
    category: "phones",
    thumbnail: "https://via.placeholder.com/150?text=Phone"
  },
  {
    id: 3,
    title: "Headphones Max",
    price: 100,
    rating: 4.0,
    stock: 3,
    category: "audio",
    thumbnail: "https://via.placeholder.com/150?text=Audio"
  },
  {
    id: 4,
    title: "Laptop Air",
    price: 950,
    rating: 4.7,
    stock: 8,
    category: "laptops",
    thumbnail: "https://via.placeholder.com/150?text=Laptop"
  },
  {
    id: 5,
    title: "Smartphone Lite",
    price: 400,
    rating: 3.8,
    stock: 20,
    category: "phones",
    thumbnail: "https://via.placeholder.com/150?text=Phone"
  },
  {
    id: 6,
    title: "Earbuds Pro",
    price: 150,
    rating: 4.3,
    stock: 12,
    category: "audio",
    thumbnail: "https://via.placeholder.com/150?text=Audio"
  }
];

const state = {
  products: products,
  search: "",
  category: "all",
  sortBy: "default"
};


function filterBySearch(list, keyword) {
  if (!keyword) return list;
  const lower = keyword.toLowerCase();
  return list.filter((p) => p.title.toLowerCase().includes(lower));
}

function filterByCategory(list, category) {
  if (category === "all") return list;
  return list.filter((p) => p.category === category);
}

function sortProducts(list, sortBy) {
  const sorted = [...list]; // hindari mutasi array asli

  switch (sortBy) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "rating":
      return sorted.sort((a, b) => b.rating - a.rating);
    case "title":
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    default:
      return sorted;
  }
}


function renderProducts(list) {
  const container = document.querySelector("#product-list");
  container.innerHTML = "";

  if (list.length === 0) {
    container.innerHTML = `<p class="empty-message">Produk tidak ditemukan.</p>`;
    return;
  }

  for (const product of list) {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>${product.category}</p>
      <p>Harga: $${product.price}</p>
      <p>Rating: ${product.rating}</p>
      <p>Stok: ${product.stock}</p>
    `;
    container.append(card);
  }
}

function render() {
  let result = state.products;

  result = filterBySearch(result, state.search);
  result = filterByCategory(result, state.category);
  result = sortProducts(result, state.sortBy);

  renderProducts(result);
}


const searchInput = document.querySelector("#search-input");
searchInput.addEventListener("input", (e) => {
  state.search = e.target.value;
  render();
});

const categorySelect = document.querySelector("#category-select");
categorySelect.addEventListener("change", (e) => {
  state.category = e.target.value;
  render();
});

const sortSelect = document.querySelector("#sort-select");
sortSelect.addEventListener("change", (e) => {
  state.sortBy = e.target.value;
  render();
});


render();