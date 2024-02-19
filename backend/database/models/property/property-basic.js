const mongoose = require('mongoose')

const propertyBasicSchema = new mongoose.Schema({
    type:String,
    price:Number,
    age:Number,
    description:String,
    negotiable:Boolean,
    owner:{type:mongoose.Types.ObjectId, ref:'user'},
    approved:Boolean,
    hasLoan:Boolean
})

const propertyBasicModel = mongoose.model('propertyBasic',propertyBasicSchema)

module.exports = propertyBasicModel