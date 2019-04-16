let mongoose = require('mongoose');
let Clients = require('./Clients');
let dbConfig = require('../db/config');


mongoose.connect(`${dbConfig.url}${dbConfig.dbName}`, {useNewUrlParser: true}, (err) => {
   if(err) throw err;
   console.log(`Successfully connected`)
});

let clients = new Clients[
    {
        _id: new mongoose.Types.ObjectId(),
        fullName: {
            firstName: 'Ivan',
            lastName: 'Petrov'
        },
        contacts: {
            email: 'vanya@gmail.com',
            phone: 80933902742
        },
        cash: 14582,
        averageCheck: 322,
        quantityOfItemsPurchased: 22,
        lastPurchasedDate: Date.now,
        rfmSegment: 111,
        segment: 'Vip',
        prevSegment: [{
            previousSegment: String,
            prevDate: {
                type: Date,
                default: Date.now
            }
        }]
    }
    ];

clients.save((err)=>{
    if(err) throw err;
    console.log(`Clients list saved successfully!!!`)
});

