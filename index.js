import express from "express"
import router from "./routes/user.js"
import bodyParser from "body-parser"

/// chnaged file
const app=express()
app.use(bodyParser.json())
app.use("/user",router)

app.get("/",(req,res)=>{
    //console.log(req.body);
    res.send("response mil rha hai")
})

app.post("/",(req,res)=>{
    console.log(req.body);
    res.send("we got the data")
})



const port=8080
app.listen(port,(req,res)=>{
console.log(`server is running at ${port}`)
})