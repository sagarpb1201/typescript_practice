"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ShoppingCart {
    items;
    constructor() {
        this.items = new Map();
    }
    addItem(cartItem) {
        if (this.items.has(cartItem.id)) {
            // this.items.set(cartIt)
            const item = this.items.get(cartItem.id);
            if (item != undefined) {
                console.log("inside add item", item);
                item.quantity += 1;
            }
        }
        else {
            this.items.set(cartItem.id, cartItem);
        }
    }
    displayItems() {
        console.log(this.items);
    }
    getItems() {
        return [...this.items.values()];
    }
    getTotalPrice() {
        // const items=[...this.items.values()]
        // const items=Array.from(this.items.values())
        // console.log("items",items)
        // return items.reduce((accumulator,currentValue)=>accumulator+currentValue.price,0)
        const items = this.items.values();
        let totalPrice = 0;
        for (const item of items) {
            totalPrice += item.price * item.quantity;
        }
        return totalPrice;
    }
    removeItem(id) {
        // this.items=this.items.filter(item=>{
        //     return item.id!=id;
        // })
        this.items.delete(id);
    }
    updateItemQuantity(id, newQuantity) {
        if (newQuantity < 0) {
            throw new Error('Cant set quantity below 0');
        }
        if (!this.items.has(id)) {
            throw new Error('Item does not exit');
        }
        if (newQuantity == 0) {
            this.removeItem(id);
            return;
        }
        const item = this.items.get(id);
        item.quantity = newQuantity;
    }
}
const laptop = {
    id: "1",
    name: "Dell",
    price: 888,
    quantity: 1
};
const mouse = {
    id: "2",
    name: "Lenovo",
    price: 999,
    quantity: 1
};
const cart = new ShoppingCart();
cart.addItem(laptop);
// cart.displayItems();
cart.addItem(mouse);
cart.addItem(mouse);
// cart.displayItems();
const totalPrice = cart.getTotalPrice();
console.log("The total price is:", totalPrice);
// cart.removeItem("2");
// cart.displayItems()
cart.updateItemQuantity('2', 55);
// cart.updateItemQuantity('1',-22)
cart.updateItemQuantity('1', 0);
console.log("Array of all the cart items", cart.getItems());
//# sourceMappingURL=index.js.map