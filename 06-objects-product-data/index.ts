type IndexSignatureProduct={
    [key:string]:string | number;
}

type Product={
    name:string;
    price:number;
    inStock:boolean;
    notes?:string;
}
const product:Product={
    name:"Gaming Mouse",
    price:800,
    inStock:true
}

const productWithNotes:Product={
    name:"Gaming Mouse",
    price:999,
    inStock:false,
    notes:"Special edition with RGB lighting"
}

const customProduct:IndexSignatureProduct={
    name:"Gaming Mouse",
    price:890,
    notes:"Special",
    brand:"TechCorp",
    year:2024
}

const displayProduct=(product:Product):string=>{
    return `Product:${product.name}, Price:$${product.price}, In Stocks:${product.inStock?"Yes":"No"}${product.notes?`, ${product.notes}.`:"."}`
}

console.log(displayProduct(product))
console.log(displayProduct(productWithNotes))