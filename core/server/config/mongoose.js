// MONGOOSE CONFIGURATION FILE
var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function () {
    var db = mongoose.connect(config.db);
    require('../models/user.server.model');
    require('../models/penis.server.model');
    return db;
};