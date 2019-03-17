const mongoose = require('mongoose');

const campSchema = new mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    description: String,
})

module.exports = mongoose.model('Camp', campSchema);

