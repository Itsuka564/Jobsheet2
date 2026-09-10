const products = [

  { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5 },
  { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15 },
  { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3 },

  { id: 4, title: "Tablet", price: 500, category: "tablets", stock: 8 },
  { id: 5, title: "Smartwatch", price: 250, category: "wearables", stock: 12 },
  { id: 6, title: "Keyboard", price: 75, category: "accessories", stock: 20 },
  { id: 7, title: "Mouse", price: 50, category: "accessories", stock: 25 },
  { id: 8, title: "Monitor", price: 300, category: "monitors", stock: 7 },
  { id: 9, title: "Webcam", price: 90, category: "accessories", stock: 10 },
  { id: 10, title: "Microphone", price: 120, category: "audio", stock: 6 },

  { id: 11, title: "Gaming Chair", price: 350, category: "furniture", stock: 4 },
  { id: 12, title: "Desk Lamp", price: 40, category: "furniture", stock: 18 },
  { id: 13, title: "USB Cable", price: 15, category: "accessories", stock: 50 },
  { id: 14, title: "Power Bank", price: 60, category: "accessories", stock: 22 },
  { id: 15, title: "Bluetooth Speaker", price: 80, category: "audio", stock: 9 },
  { id: 16, title: "External SSD", price: 150, category: "storage", stock: 11 },
  { id: 17, title: "Flash Drive", price: 25, category: "storage", stock: 30 },
  { id: 18, title: "Router", price: 100, category: "networking", stock: 14 },
  { id: 19, title: "WiFi Adapter", price: 35, category: "networking", stock: 16 },
  { id: 20, title: "Printer", price: 200, category: "printers", stock: 5 },

  { id: 21, title: "Projector", price: 450, category: "projectors", stock: 3 },
  { id: 22, title: "Mechanical Keyboard", price: 110, category: "accessories", stock: 13 },
  { id: 23, title: "Gaming Mouse", price: 70, category: "accessories", stock: 17 },
  { id: 24, title: "Graphics Tablet", price: 180, category: "tablets", stock: 6 },
  { id: 25, title: "Smart TV", price: 700, category: "televisions", stock: 4 },
  { id: 26, title: "Digital Camera", price: 600, category: "cameras", stock: 5 },
  { id: 27, title: "Action Camera", price: 300, category: "cameras", stock: 8 },
  { id: 28, title: "VR Headset", price: 400, category: "gaming", stock: 3 },
  { id: 29, title: "Game Controller", price: 65, category: "gaming", stock: 12 },
  { id: 30, title: "Laptop Stand", price: 45, category: "accessories", stock: 20 }

];

function findProductById(products, id) {
    return products.find(product => product.id === id);
}

function getLowStockProducts(products) {
   
    return products.filter(product => product.stock < 10);
}

function updateStock(products, id, newStock) {
    return products.map(p => 
        p.id === id ? { ...p, stock: newStock } : p
    );
}

console.log(findProductById(products, 5));
console.log(getLowStockProducts(products));
console.log(updateStock(products, 3, 10));