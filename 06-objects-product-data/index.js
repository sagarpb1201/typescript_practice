var product = {
    name: "Gaming Mouse",
    price: 800,
    inStock: true
};
var productWithNotes = {
    name: "Gaming Mouse",
    price: 999,
    inStock: false,
    notes: "Special edition with RGB lighting"
};
var customProduct = {
    name: "Gaming Mouse",
    price: 890,
    notes: "Special",
    brand: "TechCorp",
    year: 2024
};
var displayProduct = function (product) {
    return "Product:".concat(product.name, ", Price:$").concat(product.price, ", In Stocks:").concat(product.inStock ? "Yes" : "No").concat(product.notes ? ", ".concat(product.notes, ".") : ".");
};
console.log(displayProduct(product));
console.log(displayProduct(productWithNotes));
