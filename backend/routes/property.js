const express = require('express')
const propertyModel = require('../database/models/property')
const router = express.Router()
const dbFun = require('../database/dbFun')

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

router.post('/add-general/:propertyId', async(req,res)=>{
    const generalInfo = req.body
    const propertyId = req.params.propertyId

    try{
        let updatedProperty = await propertyModel.findByIdAndUpdate({_id:propertyId},{general:generalInfo},{returnDocument:'after'})

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

router.post('/add-location/:propertyId', async (req,res)=>{
    const locationInfo = req.body
    const propertyId = req.params.propertyId

    try{
        let updatedProperty = await propertyModel.findByIdAndUpdate({_id:propertyId},{location:locationInfo},{returnDocument:'after'})

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


router.post('/add-property',dbFun.authUser, async (req, res) => {
    const propertyData = req.body;

    let userId = req.user._id
    console.log(req.user)
    propertyData.owner=userId
    try {
        let newProperty = await propertyModel.create(propertyData);

        if (!newProperty) {
            res.status(400).json({ status: 'failure', message: 'Bad request' });
            return;
        }

        let propertyId = newProperty._id;
        res.status(200).json({ status: 'success', data: propertyId });
    } catch (error) {
        res.status(500).json({ status: 'failure', message: error.message });
    }
});




module.exports = router