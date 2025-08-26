"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Let's pretend this is our database table
const products = [
    {
        id: 'abc-123',
        name: 'Quantum Laptop',
        description: 'A laptop from the future.',
        price: 2500,
        stock: 15,
        category: 'electronics',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 'def-456',
        name: 'Ergonomic Keyboard',
        description: 'Type for hours without strain.',
        price: 150,
        stock: 50,
        category: 'electronics',
        createdAt: new Date(),
        updatedAt: new Date(),
    }
];
function updateProduct(id, data) {
    const result = products.find(product => product.id === id);
    if (result != undefined) {
        Object.assign(result, data);
        result.updatedAt = new Date();
        return { status: true, product: result };
    }
    else {
        return { status: false, message: 'Product not found' };
    }
}
function logProductAnalytics(data) { }
const result = updateProduct('abct123', { price: 2399, stock: 10 });
if (result.status == true) {
    console.log(result.product);
}
else {
    console.log(result.message);
}
//# sourceMappingURL=index.js.map