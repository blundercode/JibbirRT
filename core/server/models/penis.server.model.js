var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var penisSchema = new Schema({
    penisLength: Number,
    penisGirth: Number
});

module.exports = mongoose.model('Penis', penisSchema);