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
export async function updateProduct(id, data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const result = prodcts.find(product => product.id === id);
                if (result != undefined) {
                    Object.assign(result, data);
                    result.updatedAt = new Date();
                    resolve({ status: true, product: result });
                }
                else {
                    resolve({ status: false, message: 'Product not found' });
                }
            }
            catch (error) {
                reject(new Error(`Error updating product ${error}`));
            }
        }, 1000);
    });
}
function logProductAnalytics(data) { }
//# sourceMappingURL=product.service.js.map