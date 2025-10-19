const { Schema } = require("mongoose");

const UserSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  holdings : {
    type : [
      {
        name: { type: String, required: true },     // Stock name or symbol
        qty: { type: Number, required: true },      // Quantity purchased
        avg: { type: Number, required: true },      // Average purchase price
        price: { type: Number, required: true },    // Current price
        net: { type: String },                      // Net gain/loss (can be computed)
        day: { type: String }                       // Daily change (can be computed)
      }
    ], default: []
  }
});

module.exports = { UserSchema };
