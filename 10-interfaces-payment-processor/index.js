"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const creditCardPayment = {
    id: "1",
    amount: 553,
    timestamp: new Date()
};
const payPalTransaction = {
    id: "2",
    amount: 999,
    timestamp: new Date(),
    paypalEmail: "test@gmail.com"
};
const processPayment = (payment) => {
    let message = `Processing payment ID: ${payment.id} for amount $${payment.amount}`;
    if ('paypalEmail' in payment) {
        message += `, via PayPal account: ${payment.paypalEmail}`;
    }
    return message;
};
console.log(processPayment(creditCardPayment));
console.log(processPayment(payPalTransaction));
//# sourceMappingURL=index.js.map