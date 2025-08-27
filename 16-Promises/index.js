import { updateProduct } from "./product.service.js";
try {
    const result = await updateProduct('abc-123', { price: 400, stock: 10 });
    if (result.status) {
        console.log(result.product);
    }
    else {
        console.log(result.message);
    }
}
catch (error) {
    console.error(error);
}
//# sourceMappingURL=index.js.map