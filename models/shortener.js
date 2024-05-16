const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shortenerSchema = new Schema({
    originalUrl: {
        type: String,
        required: true
    }, 
    shortenedUrl: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Shortener = mongoose.model('Shortener', shortenerSchema);

module.exports = Shortener;