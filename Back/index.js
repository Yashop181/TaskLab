const express= require("express");
const app = express();
const mongoose= require("mongoose");
const cors= require("cors");
app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/spot");
const stuController = require("./controllers/StuController");
app.use(express.json());

app.post("/datasave",  stuController.stuSave);


app.get("/studisplay" ,stuController.stuDisplay);

app.listen(5000, ()=>{
    console.log("server is running on port : 5000");
});