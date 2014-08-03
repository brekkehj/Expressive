var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	req.parent.requireUser()(req, res, req.parent.requireOptions('title'), next);
}, function(req, res) {
	res.render('index', { title: 'Expressive' });
});

module.exports = router;
