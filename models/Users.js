const mongoose  = require('mongoose')

const UserSchema = mongoose.Schema({
    Name:{
      type:String,
      required:true
    },
    role:{
      type:String,
      require:true
    }
});

module.exports = mongoose.model("Blogs",UserSchema)
