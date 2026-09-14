export function renderProducts(products) {
    const container = document.querySelector("#product-list");

    container.innerHTML = "";

    for (const product of products) {
        const {
            title,
            price,
            category,
            rating,
            thumbnail
        } = product;

        const card = document.createElement("div");

        card.classList.add("product-card");

        card.innerHTML = `
            <img src="${thumbnail}" alt="${title}">
            <h3>${title}</h3>
            <p>${category}</p>
            <p>Harga: $${price}</p>
            <p>Rating: ${rating}</p>
        `;

        container.append(card);
    }
}