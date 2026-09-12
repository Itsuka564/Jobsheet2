class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
}

const searchHistory = new Stack();

function searchProduct(keyword) {
    searchHistory.push(keyword);
}

function undoSearch() {
    searchHistory.pop();
    if (searchHistory.isEmpty()) {
        return "Riwayat kosong";
    }
    return searchHistory.peek();
}

searchProduct("laptop");
searchProduct("phone");
searchProduct("tablet");

console.log(searchHistory.peek());
console.log(undoSearch());
console.log(undoSearch());