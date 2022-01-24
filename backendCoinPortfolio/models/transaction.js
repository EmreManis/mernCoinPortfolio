const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  userId: { type: String, required: true },
  coin: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  date: { type: Date, required: true },
  fee: { type: Number, required: false },
  notes: { type: String, required: false },
});

// func validatedFind(){
// Can something like this method be implemented?
// Purpose is to get rid off all the Mongo related catch clauses and make a generic one
// }

module.exports = mongoose.model("Transaction", transactionSchema);
