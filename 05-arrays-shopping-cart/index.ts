const initialCart:string[]=["Laptop","Mouse","Keyboard"];

const addToCart=(currentCart:string[],newItem:string):string[]=>{
    return [...currentCart,newItem];
}

const result=addToCart(initialCart,"helipad");
console.log("result",result)