var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var initialCart = ["Laptop", "Mouse", "Keyboard"];
var addToCart = function (currentCart, newItem) {
    return __spreadArray(__spreadArray([], currentCart, true), [newItem], false);
};
var displayCart = function (cart) {
    if (cart.length == 0) {
        return "Your cart is empty.";
    }
    else {
        var joinedArr = cart.join(", ");
        console.log("after joining", joinedArr);
        return "Your cart contains ".concat(cart);
    }
};
var result = addToCart(initialCart, "helipad");
console.log(displayCart(result));
console.log(displayCart([]));
