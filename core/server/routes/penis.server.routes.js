// some general routes
var controller = require('../controllers/penis.server.controller');

module.exports = function (app) {
    app.route('/api/penises')
        .get(controller.getPenis)
        .post(controller.postPenis);

};