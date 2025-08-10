interface CartItem{
    id:string;
    name:string;
    price:number;
}
class ShoppingCart{
    private items:CartItem[];

    constructor(){
        this.items=[];
    }

    addItem(cartItem:CartItem):void{
        this.items.push(cartItem);
    }

    displayItems():void{
        console.log(this.items)
    }
    getTotalPrice():number{
        return this.items.reduce((accumulator,currentValue)=>accumulator+currentValue.price,0)
    }
}

const laptop:CartItem={
    id:"1",
    name:"Dell",
    price:888
}

const mouse:CartItem={
    id:"2",
    name:"Lenovo",
    price:999
}

const cart=new ShoppingCart();
cart.addItem(laptop);
cart.displayItems();
cart.addItem(mouse)
cart.displayItems();
const totalPrice=cart.getTotalPrice();
console.log(totalPrice)