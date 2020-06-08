const mongoose = require('mongoose');
let Schema = mongoose.Schema;


let citySchema = new Schema({
    city: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('City', citySchema);

