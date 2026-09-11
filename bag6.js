const inventoryProduk = ["Laptop ROG", "Mouse Gaming", "MacBook Air", "Keyboard Mechanical"];

function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
}

// Uji coba pencarian produk
console.log(linearSearch(inventoryProduk, "MacBook Air"));
console.log(linearSearch(inventoryProduk, "Headset Bluetooth"));