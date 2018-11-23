const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const Product= require('../models/products');


router.post('/',(req, res, next) => {
    
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price

    });
    product.save().then(result => {
        console.log(result);
    })
    .catch(err => console.log(err));
    res.status(201).json({
        message: 'Product is posted',
        createdProduct: product
    });
});

router.get('/:prID',(req, res, next) => {
    const id = req.params.prID;
    if(id === 'sp'){
        res.status(200).json({
            message: 'SP Product is fetched'
        });
    }
    else{
        res.status(200).json({
            message: 'this Product is fetched',    
            id: id
        });
    }

});

router.patch('/:prID',(req, res, next) => {
    const id= req.params.prID;
    res.status(201).json({
        message: "Updated the " +id +" product." 
    });
});

router.delete('/:prID',(req, res, next) => {
    const id= req.params.prID;
    res.status(201).json({
        message: "Deleted the " +id +" product."
    });
});


module.exports = router;