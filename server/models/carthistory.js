import mongoose from 'mongoose';

// Define the CartHistory schema
const cartHistorySchema = new mongoose.Schema({
    userId: { type: String, required: true, ref: 'Profile' }, // Reference to user
    items: [
        {
            name: { type: String, required: true },
            price: { type: Number, required: true },
            technology: { type: String },
            warranty: { type: String },
            issues: { type: [String] }, // Array of issues
            totalPrice: { type: Number, required: true },
            quantity: { type: Number, required: true }, // Ensure quantity is accounted for
            estimatedTime: { type: String }
        }
    ],
    bookingTime: { type: Date, default: Date.now }, // Time when order was booked
    totalAmount: { type: Number, required: true }, // Total price of the cart
    paymentStatus: { type: String, enum: ['Pending', 'Paid'], default: 'Pending' }, // Payment status
}, {
    timestamps: true // Automatically adds createdAt and updatedAt
});

// Create and export the CartHistory model
export default mongoose.model('CartHistory', cartHistorySchema);
