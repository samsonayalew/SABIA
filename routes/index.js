var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/news', function(req, res, next) {
  res.render('news', { title: 'Express' });
});

router.get('/upcoming-events', function(req, res, next) {
  res.render('upcoming-events', { title: 'Express' });
});

router.get('/previous-events', function(req, res, next) {
  res.render('previous-events', { title: 'Express' });
});

router.get('/products', function(req, res, next) {
  res.render('products', { title: 'Express' });
});

router.get('/pulses', function(req, res, next) {
  res.render('pulses', { title: 'Express' });
});

router.get('/saiba-tote-bags', function(req, res, next) {
  res.render('saiba-tote-bags', { title: 'Express' });
});

router.get('/facilities', function(req, res, next) {
  res.render('facilities', { title: 'Express' });
});

router.get('/certifications', function(req, res, next) {
  res.render('certifications', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

router.get('/contract-farming', function(req, res, next) {
  res.render('contract-farming', { title: 'Express' });
});

router.get('/farmers', function(req, res, next) {
  res.render('farmers', { title: 'Express' });
});

router.get('/contact_us', function(req, res, next) {
  res.render('contact_us', { title: 'Express' });
});

module.exports = router;
