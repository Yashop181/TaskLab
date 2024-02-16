const mongoose = require("mongoose");

const StuSchema = new mongoose.Schema({
    email :String,
    password:String,
    city:String,
});

module.exports=mongoose.model("studetail", StuSchema)