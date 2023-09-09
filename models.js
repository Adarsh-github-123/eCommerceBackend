const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
    {itemName: String,
    itemPrice: Number,}

)

const Item = mongoose.model("Items",itemSchema);

module.exports = Item;