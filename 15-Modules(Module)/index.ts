import { updateProduct } from "./product.service.js";
import type { UpdateProductResponse } from "./product.service.js";

const result=updateProduct('abc123',{price:400,stock:10})
if(result.status){
    console.log(result.product)
}else{
    console.log(result.message)
}