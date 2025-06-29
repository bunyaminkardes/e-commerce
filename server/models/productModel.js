const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },
        description: { type: String },
        price: { type: Number, required: true, min: 0 },
        stock: { type: Number, default: 0, min: 0 },
        category: { type: String, required: true, trim: true, enum: ['spor', 'giyim', 'elektronik', 'kozmetik', 'kitap'], lowercase: true },
        images: [{ type: String }]
    }
);

module.exports = mongoose.model('Product', productSchema);