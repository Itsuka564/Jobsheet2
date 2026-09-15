const promise = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("Data berhasil diambil");
    } else {
        reject("Terjadi error");
    }
});

promise
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => console.log("Selesai, apa pun hasilnya"));



    const getProducts = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve([
            {
                id: 1,
                title: "Laptop",
                price: 1200
            },
            {
                id: 2,
                title: "Smartphone",
                price: 800
            }
        ]);
    } else {
        reject("Gagal mengambil data produk");
    }
});

getProducts
    .then(products => {
        console.log("Produk berhasil diambil:");
        console.log(products);
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        console.log("Proses selesai");
    });