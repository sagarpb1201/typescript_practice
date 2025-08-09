interface Payable{
    id:string;
    amount:number;
    timestamp:Date;
}

interface PayPalPayment extends Payable{
    paypalEmail:string;
}

const creditCardPayment:Payable={
    id:"1",
    amount:553,
    timestamp:new Date()
}

const payPalTransaction:PayPalPayment={
    id:"2",
    amount:999,
    timestamp:new Date(),
    paypalEmail:"test@gmail.com"
}

const processPayment=(payment:Payable):string=>{
    let message = `Processing payment ID: ${payment.id} for amount $${payment.amount}`;

    if('paypalEmail' in payment){
        message+=`, via PayPal account: ${payment.paypalEmail}`;
    }

    return message;
}

console.log(processPayment(creditCardPayment));
console.log(processPayment(payPalTransaction));