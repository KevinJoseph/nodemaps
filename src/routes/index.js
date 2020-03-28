const router = require('express').Router();


router.get('/', (req,res) => {
    res.render('index2');
});
router.get('/maps', (req,res) => {
    res.render('index');
});
module.exports = router;