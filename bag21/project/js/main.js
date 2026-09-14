import { products } from "./data.js";
import { state } from "./state.js";
import {
    filterProducts,
    sortProducts
} from "./algorithms.js";
import { renderProducts } from "./ui.js";


state.products = products;


function render() {
    let result = filterProducts(
        state.products,
        state.search,
        state.category
    );

    result = sortProducts(
        result,
        state.sortBy
    );

    renderProducts(result);
}


const searchInput =
    document.querySelector("#search-input");

const categorySelect =
    document.querySelector("#category-select");

const sortSelect =
    document.querySelector("#sort-select");


searchInput.addEventListener("input", (e) => {
    state.search = e.target.value;
    render();
});


categorySelect.addEventListener("change", (e) => {
    state.category = e.target.value;
    render();
});


sortSelect.addEventListener("change", (e) => {
    state.sortBy = e.target.value;
    render();
});


render();