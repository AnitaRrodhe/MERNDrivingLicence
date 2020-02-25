const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * A module that allows communication with mongo on the collection Test
 * @module TestModel
 */


/**
 * testSchema schema
 * @class Test
 */
var testSchema = new Schema({
    id: Number,
    image: String,
    question: String,
    options: Array,
    answer: String
});


/** Export the collection schema with the name Test */
module.exports = mongoose.model('Test', testSchema, 'test');