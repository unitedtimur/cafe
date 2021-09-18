const {Emilia, Christian} = require('../models/characters');

const {Router} = require('express');
const router = Router();

router.get("/", (req, res) => {
    res.send(Christian);
});

module.exports = router;