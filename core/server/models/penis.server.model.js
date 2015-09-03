var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var penisSchema = new Schema({
    user: String,
    aMessage: String
});

module.exports = mongoose.model('Penis', penisSchema);