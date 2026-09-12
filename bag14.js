class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(item) {
        this.items.push(item);
    }
    dequeue() {
        return this.items.shift();
    }
    peek() {
        return this.items[0];
    }
}

const requestQueue = new Queue();

requestQueue.enqueue("Proses Pembayaran 1");
requestQueue.enqueue("Proses Pembayaran 2");
requestQueue.enqueue("Proses Pembayaran 3");

console.log(requestQueue.peek());
console.log(requestQueue.dequeue());
console.log(requestQueue.peek());