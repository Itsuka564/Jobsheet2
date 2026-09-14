export function filterProducts(products, search, category) {
    let result = [...products];

    if (search !== "") {
        result = result.filter(product =>
            product.title
                .toLowerCase()
                .includes(search.toLowerCase())
        );
    }

    if (category !== "all") {
        result = result.filter(product =>
            product.category === category
        );
    }

    return result;
}

export function sortProducts(products, sortBy) {
    const result = [...products];

    if (sortBy === "price-asc") {
        result.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "price-desc") {
        result.sort((a, b) => b.price - a.price);
    }

    if (sortBy === "rating") {
        result.sort((a, b) => b.rating - a.rating);
    }

    if (sortBy === "title") {
        result.sort((a, b) =>
            a.title.localeCompare(b.title)
        );
    }

    return result;
}