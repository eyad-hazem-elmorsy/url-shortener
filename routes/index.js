const router = require('express').Router();
const Shortener = require('../models/shortener');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

/* POST new url shortener from home page */
router.post('/', async (req, res, next) => {
    const shortener = new Shortener({
        originalUrl: req.body.urlInput, 
        shortenedUrl: req.body.aliasInput
    });
    await shortener.save();
    res.redirect('/');
});

module.exports = router;
