const mongoose = require('mongoose');

const sdogSchema = mongoose.Schema({
    name: { type: String, required: true },
    breed: { type: String, required: true },
    gender: { type: String, required: true },
    age: { type: String, required: true },
    img: { type: String, required: true }
});

module.exports = mongoose.model('Small Dog', sdogSchema);