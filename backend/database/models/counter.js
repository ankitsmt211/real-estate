const mongoose = require('mongoose');

const id = new mongoose.Schema({ 
  userID:Number,
  ppdID:Number
});

const idmodel = mongoose.model('idcounter', id);

module.exports = idmodel;