const state = {
    products: products,
    search: "",
    category: "all",
    sortBy: "default"
};

function render() {
    let result = [...state.products];

    // Filter search
    if (state.search !== "") {
        result = result.filter(product =>
            product.title.toLowerCase().includes(
                state.search.toLowerCase()
            )
        );
    }

    // Filter category
    if (state.category !== "all") {
        result = result.filter(product =>
            product.category === state.category
        );
    }

    // Sorting
    if (state.sortBy === "price-asc") {
        result.sort((a, b) => a.price - b.price);
    }

    if (state.sortBy === "price-desc") {
        result.sort((a, b) => b.price - a.price);
    }

    if (state.sortBy === "rating") {
        result.sort((a, b) => b.rating - a.rating);
    }

    if (state.sortBy === "title") {
        result.sort((a, b) =>
            a.title.localeCompare(b.title)
        );
    }

    renderProducts(result);
}

render();