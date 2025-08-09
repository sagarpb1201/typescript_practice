const initialCart:string[]=["Laptop","Mouse","Keyboard"];

const addToCart=(currentCart:string[],newItem:string):string[]=>{
    return [...currentCart,newItem];
}

const displayCart=(cart:string[]):string=>{
    if(cart.length==0){
        return "Your cart is empty."
    }else{
        const joinedArr=cart.join(", ")
        console.log("after joining", joinedArr)
        return `Your cart contains ${joinedArr}`
    }
}

const result=addToCart(initialCart,"helipad");
console.log(displayCart(result))
console.log(displayCart([]))