const {Emilia} = require('../models/character');

const {Router} = require('express');
const router = Router();

router.get("/", (req, res) => {
    res.json(Emilia.id);
});

module.exports = router;