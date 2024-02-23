const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({ 
  userID:Number,
  ppdID:Number
});

const idmodel = mongoose.model('idcounter', userSchema);

module.exports = idmodel;