function bubbleSort(numbers) {
    const arr = [...numbers];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

function sortProducts(products, sortBy) {
    const arr = [...products];
    
    if (sortBy === "price-asc") {
        arr.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
        arr.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
        arr.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "title") {
        arr.sort((a, b) => a.title.localeCompare(b.title));
    }
    
    return arr;
}