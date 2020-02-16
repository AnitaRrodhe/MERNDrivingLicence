const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var testSchema = new Schema({
    id: Number,
    image: String,
    question: String,
    options: Array,
    answer: String
});

module.exports = mongoose.model('Test', testSchema, 'test');