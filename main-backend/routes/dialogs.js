const {Router} = require('express');
const router = Router();
const fs = require('fs');
const path = require('path')

router.get("/christian/dialog/:id", (req, res) => {
    if(req.params.id) {
        fs.readFile(
            path.join(__dirname, '..', 'json-models', 'dialogs', 'Christian.json'),
            'utf-8',
            (error, content) => {
                if(error) {
                    throw error
                } else {
                    const dialogs = JSON.parse((content));
                    const dialog = dialogs.find(d => d.dialogId === req.params.id);
                    if(!dialog) {
                        res.send("Invalid dialog id");
                    } else{
                        res.send(dialog);
                    }
                }
            }
        );
    } else {
        res.send("The end of dialog");
    }
});

router.get("/emilia/dialog/:id", (req, res) => {
    if(req.params.id) {
        fs.readFile(
            path.join(__dirname, '..', 'json-models', 'dialogs', 'Christian.json'),
            'utf-8',
            (error, content) => {
                if(error) {
                    throw error
                } else {
                    const dialogs = JSON.parse((content));
                    const dialog = dialogs.find(d => d.dialogId === req.params.id);
                    if(!dialog) {
                        res.send("Invalid dialog id");
                    } else{
                        res.send(dialog);
                    }
                }
            }
        );
    }
});

router.get("/mike/dialog/:id", (req, res) => {
    if(req.params.id) {
        fs.readFile(
            path.join(__dirname, '..', 'json-models', 'dialogs', 'Christian.json'),
            'utf-8',
            (error, content) => {
                if(error) {
                    throw error
                } else {
                    const dialogs = JSON.parse((content));
                    const dialog = dialogs.find(d => d.dialogId === req.params.id);
                    if(!dialog) {
                        res.send("Invalid dialog id");
                    } else{
                        res.send(dialog);
                    }
                }
            }
        );
    }
});

module.exports = router;