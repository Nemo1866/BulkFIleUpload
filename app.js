require("./database")
const express=require("express")
const router = require("./index")

const app=express()
app.use(express.json())
app.use("/",router)





app.listen(3000,()=>console.log("Connected to Port 3000"))