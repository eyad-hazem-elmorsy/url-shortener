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
    const regex = /^[a-zA-Z0-9_]+$/;
    if (req.body.aliasInput.length > 3 && regex.test(req.body.aliasInput)) {
        next();
    } else {
        res.status(400).render('invalid');
    }
}

// A middleware to check availability
let available = async function (req, res, next) {
    if (await Shortener.findOne({ shortenedUrl: req.body.aliasInput })) {
        res.status(400).render('not-available');
    } else {
        next();
    }
}

/* POST new url shortener from home page */
router.post('/', validator, available, async (req, res, next) => {
    const shortener = new Shortener({
        originalUrl: req.body.urlInput, 
        shortenedUrl: req.body.aliasInput
    });
    await shortener.save();
    res.redirect('/');
});

router.get('/:Id/delete', async (req, res, next) => {
    console.log(req.params.Id);
    await Shortener.findByIdAndDelete(req.params.Id);
    res.redirect('/');
});

module.exports = router;
