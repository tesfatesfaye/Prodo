import express from 'express';
import mongoose from 'mongoose';
import cors from'cors';
import Model from './Models/Model.js';

const app=express();
const PORT=process.env.PORT ?? 3005
 app.use(express.json());
 app.use(cors());
 mongoose.set('strictQuery',false)
 mongoose.connect('mongodb://127.0.0.1:27017/tasks', {
    useNewUrlParser: true, 
	useUnifiedTopology: true 

 }).then(()=> console.log('Connected to MongoDB')).catch(console.error)


 app.get('/modelReq', async(req,res)=>{
    const modelReq=await Model.find();
    console.log(modelReq.length)
    res.json(modelReq)

 });

 app.listen(PORT, ()=>console.log("Server started on port 3005"))