const router = require('express').Router();
const Shortener = require('../models/shortener');

/* GET a page with alias. */
router.get('/:alias', async function (req, res, next) {
    const alias = req.params.alias;
    const url = await Shortener.findOne({ shortenedUrl: alias });
    if (url) {
        const originalUrl = url.originalUrl;
        res.redirect(originalUrl);
    } else {
        res.status(404).send('404 Not Found');
    }
});

/* GET home page. */
router.get('/', async function (req, res, next) {
    const urls = await Shortener.find({});
    res.locals.urls = urls;
    res.locals.domain = `${req.protocol}://${req.get('host')}/`;
    res.render('index', { title: 'Express' });
});

// A middleware to validate alias
let validator = function (req, res, next) {
    const regex = /^[a-zA-Z0-9_]{4, }$/;
    if (regex.test(req.body.aliasInput)) {
        next();
    } else {
        res.render('invalid');
    }
}

/* POST new url shortener from home page */
router.post('/', validator, async (req, res, next) => {
    const shortener = new Shortener({
        originalUrl: req.body.urlInput, 
        shortenedUrl: req.body.aliasInput
    });
    await shortener.save();
    res.redirect('/');
});

module.exports = router;
