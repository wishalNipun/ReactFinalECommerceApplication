const {Request,Response}=require("express");
const mongoose = require ("mongoose");
const {Item}=require('../models/Item')


const saveItem = async (req, res) => {

    const tempItem = new Item(
        {
            code: req.body.code,
            name: req.body.name,
            packsize: req.body.packsize,
            unitprice: req.body.unitprice,
            qtyhand: req.body.qtyhand,     
        }
    );

    await tempItem.save()
        .then((success) => {
            console.log(success)
            res.status(200).json({message: "Item Saved"})
        })
        .catch((err) => {
            res.status(500).json({message: err})
        })

        

}

module.exports={
    saveItem
};



