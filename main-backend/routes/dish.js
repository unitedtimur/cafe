const {Router} = require('express');
const router = Router();
const fs = require('fs');
const path = require('path')
const lodash = require('lodash')

router.get("/:firstIngredientId/:secondIngredientId/:thirdIngredientId", (req, res) => {
    try {
        fs.readFile(
            path.join(__dirname, '..', 'json-models', 'food', 'dish.json'),
            'utf-8',
            (error, content) => {
                if(error) {
                    throw error
                } else {
                    const ingredientsArray = [req.params.firstIngredientId, req.params.secondIngredientId, req.params.thirdIngredientId];
                    const dishes = JSON.parse((content));
                    let isDifference = [];
                    for(let i in dishes) {
                        isDifference = lodash.difference(dishes[i].ingredients, ingredientsArray);
                        if(!isDifference.length) {
                            res.send(dishes[i].id);
                        }
                    }
                    res.send(null)
                }
            }
        );
    }catch (error){
        req.send(error)
    }
})

module.exports = router;