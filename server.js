const express=require('express')
const mongoose=require('mongoose')
const BrandName=require('./model')
const cors=require('cors')
const app=express()
app.use(express.json())
app.use(cors({
  origin:'*'
}))
const PORT=5000
mongoose.connect('mongodb+srv://Maddirala:abcd123@cluster0.bvk8aa0.mongodb.net/Maddirala')
.then(()=>{
  console.log('mongo db connected successfully')
})
.catch((error)=>{
  console.log(error)
})
app.post('/hero',async(req,res)=>{
  try{
  const BrandName=req.body
   const newData=new BrandName(name)
    await newData.save()
    return res.json(await BrandName.find())
  }
  catch(err){
    res.status(200).send(err.message)
  }
})
app.get('/getallheroes',async(req,res)=>{
  try{
  const allData=await BrandName.find()
  return res.json(allData)
  }
  catch(err){
    console.log(err.message)
  }
})
app.delete('/delete/:id',async(req,res)=>{
await BrandName.FindByIdAndDelete(req.params.id)
return res.json(await BrandName.find())
})

app.listen(PORT,()=>{
  console.log('server running')
})