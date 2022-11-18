const mongoose = require('mongoose')


const OrderSchema = new mongoose.Schema({
    isPaid: Boolean,
    amount: Number,
    razorpay: {
      orderId: String,
      paymentId: String,
      signature: String, 
    },
  } );

module.exports = mongoose.model('Order', OrderSchema);