const {Router} = require("express")
const Route = Router()
const Data = require("../API/Data")

Route.get("/India",(req,res)=>{
     res.json(Data.India)
})
Route.get("/Hollywood",(req,res)=>{
     res.json(Data.Hollywood)
})
Route.get("/Fitness",(req,res)=>{
     res.json(Data.Fitness)
})
Route.get("/Technology",(req,res)=>{
     res.json(Data.Technology)
})
Route.get("/Food",(req,res)=>{
     res.json(Data.Food)
})

module.exports = Route