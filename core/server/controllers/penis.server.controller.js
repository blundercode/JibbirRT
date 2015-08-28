var Penis = require('mongoose').model('Penis');


exports.getPenis = function (req, res) {
	Penis.find(function (err, penis) {
		if (err) res.status(500).send(err);
		else res.json(penis);
	});
};


exports.postPenis = function (req, res) {
	var penis = new Penis(req.body);
	penis.save(function (err) {
		if (err) res.send(err);
		else res.json(penis);
	});
};