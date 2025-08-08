function formatProduct(productName, price, stockStatus, discountCode) {
    return "The name of product is ".concat(productName, ", the price is ").concat(price, ", it is ").concat(stockStatus ? "in" : "not in", " stock").concat(discountCode != null ? " and has discount code." : ".");
}
var gamingMouse = formatProduct("Gaming Mouse", 499, true, "test");
var mechanicalKeyboard = formatProduct("Mechanical Keyboard", 599, false, null);
console.log(gamingMouse);
console.log(mechanicalKeyboard);
