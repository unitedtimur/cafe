const {Router} = require('express');
const router = Router();

router.get("/", (req, res) => {
    res.json({ message: "Example route here!" });
});

module.exports = router;