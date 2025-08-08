function formatProduct(productName:string,price:number, stockStatus:boolean,discountCode:string | null):string{
    return `The name of product is ${productName}, the price is ${price}, it is ${stockStatus?"in":"not in"} stock${discountCode!=null?" and has discount code.":"."}`;
}

const gamingMouse=formatProduct("Gaming Mouse",499,true,"test")
const mechanicalKeyboard=formatProduct("Mechanical Keyboard",599,false,null)
console.log(gamingMouse);
console.log(mechanicalKeyboard);