import { updateProduct,getProductDetails,getProductReviews,getProductStock } from "./product.service.js";
import type { UpdateProductResponse } from "./product.service.js";

try{
    const result= await updateProduct('abc-123',{price:400,stock:10})
    if(result.status){
        console.log(result.product)
    }else{
        console.log(result.message)
    }
}catch(error){
    console.error(error)
}

try{
    const productDetailsPromise = getProductDetails('abc-123');
    const productReviewsPromise = getProductReviews('abc-123');
    const productStockPromise = getProductStock('abc-123');
    const [productResult, reviewsResult, stockResult] = await Promise.all([productDetailsPromise, productReviewsPromise, productStockPromise]);
    console.log({ productResult, reviewsResult, stockResult });
}catch(error){
    console.error(error);
}