const express = require('express')
const router = express.Router();
const Item = require('./models');

router.route('/getAllItems').get(
    async(req, res) => {
        try{
            const items = await Item.find({})
            res.status(200).json({
                message: items
            })
        }catch(err){
            console.error("There is an error💥💥");
            res.status(404).json({
                message: 'Error'
            })
        }
    }
);

router.route('/createItem').post(
    async(req, res) => {
        try{
            const newItem = new Item({
                itemName: "Xyz",
                itemPrice : 100
            });
    
            const saveItem = await newItem.save();
            res.status(200).json({
                message: "Success"
            })
        }catch(e){
            console.error("There is some error 💥💥");
            res.status(404).json({
                message: 'Error'
            })
        }


    }
)

module.exports = router;