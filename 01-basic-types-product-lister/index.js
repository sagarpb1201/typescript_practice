var productName = "Super fast laptop";
var productPrice = 90000;
var inStock = true;
var discountCode = "test";
var message;
if (discountCode != null) {
    message = "The name of product is ".concat(productName, ", the price is ").concat(productPrice, ", it is in stock and the discount code is ").concat(discountCode);
}
else {
    message = "The name of product is ".concat(productName, ", the price is ").concat(productPrice, ", it is in stock.");
}
console.log(message);
