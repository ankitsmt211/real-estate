const express = require('express')
const propertyModel = require('../database/models/property')
const router = express.Router()
const multer = require('multer');
const cors = require('cors');
const uploads = multer({ dest: 'uploads/' });


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/') 
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '.' + file.originalname.split('.').pop())
    }
  })
  
  const upload = multer({ storage: storage });
  router.use(cors());
  router.use((req, res, next) => {
    res.setHeader(
      "Content-Security-Policy",
      "default-src 'self' cdn.example.com;"
    );
    next();
  });

  

router.post ('/upload', upload.single('image'), (req, res) => {
    let url="http://localhost:8080/"+req.file.path
    res.json({url:url})
  });

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


module.exports = router