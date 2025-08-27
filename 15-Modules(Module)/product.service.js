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
export function updateProduct(id, data) {
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
//# sourceMappingURL=prouduct.service.js.map