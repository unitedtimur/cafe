const {Router} = require('express');
const router = Router();
const fs = require('fs');
const path = require('path')

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
                    //const dish = dishes.find(d => d.ingredients === ingredientsArray);
                    console.log(dishes[0].ingredients === ingredientsArray)
                    // if(!dialog) {
                    //     res.send("Invalid dialog id");
                    // } else{
                    //     res.send(dialog);
                    // }
                }
            }
        );
    }catch (error){
        req.send(error)
    }
})

module.exports = router;