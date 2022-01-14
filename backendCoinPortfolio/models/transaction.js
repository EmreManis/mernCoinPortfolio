const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  userId: { type: String, required: true },
  coin: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  date: { type: Date, required: true },
  fee: Number,
  notes: String,
});

module.exports = mongoose.model("Transaction", transactionSchema);
