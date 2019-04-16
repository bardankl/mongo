let mongoose = require('mongoose');
let clientsScheme = mongoose.Schema({
    clients: [{
        _id: mongoose.Types.ObjectId,
        fullName: {
            firstName: String,
            lastName: String
        },
        contacts: {
            email: String,
            phone: Number
        },
        cash: Number,
        averageCheck: Number,
        quantityOfItemsPurchased: Number,
        lastPurchasedDate: Date,
        rfmSegment: Number,
        segment: String,
        prevSegment: [{
            previousSegment: String,
            prevDate: {
                type: Date,
                default: Date.now
            }
        }]

    }]
});
let Clients = mongoose.model('Clients', clientsScheme);

module.exports = Clients;
