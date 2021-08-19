const express= require('express')
const router= express.Router()
const Order = require ('../model/order')


router.post('/upload', async(req,res)=>{

    const newOrder= new Order ({
        totalItems:req.body.totalItems,
        totalPrice: req.body.totalPrice,
        date: req.body.date,
        mod_liv: req.body.mod_liv,
        mod_payement: req.body.mod_payement
    })
    newOrder.save()
    res.redirect('/client');
})


router.delete("/:_id", (req, res) => {
    let { _id } = req.params
    Order.findByIdAndDelete({ _id })
        .then(() => res.send("Order has been deleted"))
        .catch(err => res.send(err))
  })



router.get('/display', async (req,res)=>{

    Order.find()
    .then(orders => res.status(200).json(orders))
    .catch(err => res.send(err))
})

router.get("/:description", (req, res) => {
    let { description } = req.params
    Order.find({ description })
    .then(search => res.status(200).json(search))
    .catch(err => res.send(err))
  })

module.exports=router