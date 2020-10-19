const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path")
const hbs = require("hbs");
const getWeather = require("./utils/getWeather");

const publicDir = path.join(__dirname,"../public");
const templatesDir = path.join(__dirname,"../templates/views");
const partialsDir = path.join(__dirname,"../templates/partials");



app.use(express.static(publicDir))
app.set("view engine","hbs")
app.set("views",templatesDir)

hbs.registerPartials(partialsDir)

app.get("/",(req,res)=>{
   
    res.render("index",{title:"Homepage",name:"Segun Flexible"})
})


app.get("/weather",(req,res)=>{
    if(!req.query.address){
        res.send({error: "You Must Provide An Address"});
        return
    }
getWeather(req.query.address,(err,data)=>{
    if(err){
      return res.send({error: err})  
    }
   return res.send({
    result:data
    
    })
})
    
})

app.get("*",(req,res)=>{
    res.render("404",{title:"404 - Not Found",name:"Segun 4040"})
})

app.listen(port,()=>console.log("App Started!!"))