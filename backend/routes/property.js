const express = require('express')
const propertyModel = require('../database/models/property')
const router = express.Router()

router.post('/add-basic', async (req,res)=>{
    const basic = req.body

    try{
        let updatedProperty = await propertyModel.create({basic:basic})
        
        if(!updatedProperty){
            res.status(400).json({status:'failure',message:'bad request'})
            return
        }

        let propertyId = updatedProperty._id
        res.status(200).json({status:'success',data:propertyId})
    }
    
    catch(error){
        res.status(500).json({status:'failure',message:error.message})
    }
})

router.post('/add-details/:propertyId', async(req,res)=>{
    const details = req.body
    const propertyId = req.params.propertyId

    try{
        let updatedProperty = await propertyModel.findByIdAndUpdate({_id:propertyId},{details:details},{returnDocument:'after'})

        if(!updatedProperty){
            res.status(400).json({status:'failure',message:'bad request'})
            return
        }

        let updatedPropertyId = updatedProperty._id
        res.status(200).json({status:'success',data:updatedPropertyId})
    }

    catch(error){
        res.status(500).json({status:'failure',message:error.message})
    }
})


module.exports = router