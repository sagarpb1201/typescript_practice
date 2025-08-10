"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ShoppingCart {
    items;
    constructor() {
        this.items = [];
    }
    addItem(cartItem) {
        this.items.push(cartItem);
    }
    displayItems() {
        console.log(this.items);
    }
    getTotalPrice() {
        return this.items.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);
    }
}
const laptop = {
    id: "1",
    name: "Dell",
    price: 888
};
const mouse = {
    id: "2",
    name: "Lenovo",
    price: 999
};
const cart = new ShoppingCart();
cart.addItem(laptop);
cart.displayItems();
cart.addItem(mouse);
cart.displayItems();
const totalPrice = cart.getTotalPrice();
console.log(totalPrice);
//# sourceMappingURL=index.js.map