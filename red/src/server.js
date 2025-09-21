const express=require('express')
const mongoose=require('mongoose')
const app=express()
const PORT=5000
mongoose.connect('mongodb+srv://Maddirala:abcd123@cluster0.bvk8aa0.mongodb.net/Maddirala')
.then(()=>{
    console.log('mongo db connected successfully')
})
.catch((err)=>{
    console.log(err)
})
app.get('/',(req,res)=>{
    res.send('devra mungita nuvventa')
})
app.listen(PORT,()=>{
    console.log('server running')
})