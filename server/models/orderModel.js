const mongoose = require ("mongoose");

const orderSchema = new mongoose.Schema(
    {
        user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required:true},
        items: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Product',
                    required: true
                },
                quantity: {
                    type: Number,
                    required:true,
                    min:1
                }
            }
        ],
        total: {
            type: Number,
            required: true
        },
        shippingAddress: {
            fullName: String,
            address: String,
            city: String,
            postalCode: String,
            country: String
        },
        status: {
            type: String,
            enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
            default: 'pending'
        }
    }
);

module.exports = mongoose.model("Order", orderSchema);