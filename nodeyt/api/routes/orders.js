const express = require("express");
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message: 'order fetched.'
    });
});


router.post('/',(req,res,next)=>{

    const order = {
        prID: req.body.prID,
        quantity: req.body.quantity
    }
    res.status(201).json({
        message: 'order is created.',
        order: order
    });
});


router.get('/:orID',(req,res,next)=>{
    const id = req.params.orID
    res.status(200).json({
        message: 'order '+id +' is fetched.'
    });
});

router.delete('/:orID',(req,res,next)=>{
    const id = req.params.orID
    res.status(201).json({
        message: 'Order '+id +' is deleted.'
    });
});


module.exports = router;
