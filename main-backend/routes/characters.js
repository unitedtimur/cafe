const {Router} = require('express');
const router = Router();
const fs = require('fs');
const path = require('path')

router.get("/", (req, res) => {
    fs.readFile(
        path.join(__dirname, '..', 'json-models', 'characters', 'characters.json'),
        'utf-8',
        (error, content) => {
            if(error) {
                throw error
            } else {
                res.send(JSON.parse((content)));
            }
        }
    );
});

router.get("/character/:id/info", (req, res) => {
    fs.readFile(
      path.join(__dirname, '..', 'json-models', 'characters', 'characters.json'),
        'utf-8',
        (error, content) => {
          if(error) {
              throw error
          } else {
              const characters = JSON.parse((content));
              const character = characters.find(c => c.id === req.params.id);
              res.send(character);
          }
        }
    );
});

module.exports = router;