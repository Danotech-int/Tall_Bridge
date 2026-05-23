const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    email: String,
    reference: String, // The unique ID Paystack gives us
    status: { type: String, default: 'pending' }, // 'pending' or 'success'
    amount: Number,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Transaction', TransactionSchema);