const StuModel = require("../models/StuModel");



const stuSave=(req,res)=>
{

    const myData= new StuModel(req.body);
    myData.save().then(()=>{console.log("data Saved")});
}

const stuDisplay=(req,res)=>
{
    StuModel.find().then((data)=>{
        res.send(data);
    });
}

module.exports={

    stuSave,
    stuDisplay

    
}