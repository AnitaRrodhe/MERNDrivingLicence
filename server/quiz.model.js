const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var quizSchema = new Schema({
    id: Number
});

module.exports = mongoose.model('Quiz', quizSchema, 'quiz');