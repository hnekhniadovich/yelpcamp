const mongoose = require('mongoose');

const campSchema = new mongoose.Schema({
    name: String,
    price: String,
    image: String,
    description: String,
})

module.exports = mongoose.model('Camp', campSchema);
