const mongoose = require('mongoose');

const campSchema = new mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    description: String,
    author: {
           type: mongoose.Schema.Types.ObjectId,
           ref: "User"
        
    },
    username: {
        type: String,
        ref: "User"
     
    },
    comments: [ 
        {
            text: String,
            author: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
            username: {
                type: String,
                ref: "User"
             
            },
        }
    ]
})

module.exports = mongoose.model('Camp', campSchema);

