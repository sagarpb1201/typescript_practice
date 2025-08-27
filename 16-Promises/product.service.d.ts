type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    category: 'electronics' | 'books' | 'apparel';
    createdAt: Date;
    updatedAt: Date;
};
type updateProductSuccessResponse = {
    status: true;
    product: Product;
};
type updateProductFailureResponse = {
    status: false;
    message: string;
};
export type UpdateProductResponse = updateProductFailureResponse | updateProductSuccessResponse;
export declare function updateProduct(id: string, data: Partial<Product>): Promise<UpdateProductResponse>;
export {};
//# sourceMappingURL=product.service.d.ts.map