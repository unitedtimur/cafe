const {Router} = require('express');
const router = Router();

router.get("/character/{id}/info", (req, res) => {
    res.send(characters[1])
});

module.exports = router;