const CartItem = require('./models/cart-item');
const ReceiptItem = require('./models/receipt-item');
const Receipt = require('./models/receipt');
const Item = require('./models/Item');
const Promotion = require('./models/Promotion');


function printReceipt(tags) {

    const cartItems = CartItem.buildCartItems(tags, Item.all());

    const receiptItems = ReceiptItem.buildReceiptItems(cartItems,Promotion.all());
    
    const receipt = Receipt.buildReceipts(receiptItems);

    const receiptText = receipt.buildText(receipt);

    console.log(receiptText);
}

exports.printReceipt = printReceipt;
