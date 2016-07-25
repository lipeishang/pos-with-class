const CartItem = require('./models/cart-item');
const ReceiptItem = require('./models/receipt-item');
const Receipt = require('./models/receipt');
const Item = require('./models/Item');
const Promotion = require('./models/Promotion');


function printReceipt(tags) {

    const cartItems = CartItem.buildCartItems(tags, Item.all());

    const receiptItems = ReceiptItem.buildReceiptItems(cartItems,Promotion.all());
    
    const receipt = new Receipt(receiptItems);

    const receiptText = receipt.buildText();

    console.log(receiptText);
}

exports.printReceipt = printReceipt;
