const productName:string="Super fast laptop";
const productPrice:number=90000;
const inStock:boolean=true;
const discountCode:string | null="test";
let message:string;

if(discountCode!=null){
    message=`The name of product is ${productName}, the price is ${productPrice}, it is in stock and the discount code is ${discountCode}`;
}else{
    message=`The name of product is ${productName}, the price is ${productPrice}, it is in stock.`;
}
console.log(message);
