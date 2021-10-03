const {Router} = require('express');
const router = Router();
const fs = require('fs');
const path = require('path')

router.get("/:dialogId", (req, res) => {
    try {
        fs.readFile(
            path.join(__dirname, '..', 'json-models', 'dialogs', 'dialogs.json'),
            'utf-8',
            (error, content) => {
                if(error) {
                    throw error
                } else {
                    const dialogs = JSON.parse((content));
                    const dialog = dialogs.find(d => d.dialogId === req.params.dialogId);
                    if(!dialog) {
                        res.send("Invalid dialog id");
                    } else{
                        res.send(dialog);
                    }
                }
            }
        );
    }catch (error){
        req.send(error)
    }
})

module.exports = router;