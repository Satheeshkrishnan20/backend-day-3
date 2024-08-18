import { log } from "console";
import express from "express"



const port=3000;
const app=express();

app.use(express.static("public"));

const fname=["ram","sam","rames","dinesh"]
const lname=["kumar","raj","kumaran","krishna"]



app.get("/",(req,res)=>{
    res.render("index.ejs")
})
app.post("/submit",(req,res)=>{

    const fnam=fname[Math.floor(Math.random()*fname.length)]
    const lnam=lname[Math.floor(Math.random()*lname.length)]
    
    res.render("index.ejs",{fnames:fnam,lnames:lnam})
})




app.listen(port,()=>{
    console.log("port",port);
})