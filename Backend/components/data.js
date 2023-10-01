import express from 'express';
import mongoose from 'mongoose';

const ProfileSchema = new mongoose.Schema({
    bio: String,
    name:String,
    Mobile: Number,
    Email: String,
    location:String
})

//name and email fetced from other backend

const Data = mongoose.model('profile-info',ProfileSchema);
const DataRouter = express.Router();

DataRouter.use(express.json())

async function addData(obj) {
    try{
        const data = new Data(obj);
        await data.save();
      }
      catch(e){ 
        console.log(e.message);
        return false;
      }
      return true;
}
async function getData(name){
    let data=null;
    try{
      data = await Data.findOne({ name: name });
    } catch(e){
      console.log(e.message);
    }
    return data;
}
//data fns
DataRouter.post('/', async(req, res) => {
    const status = await addData(req.body);
    res.send(status);
})

DataRouter.get('/', async(req, res) => { // /?name=${name}
    const data = await getData(req.query.name);
    res.send(data);
})

DataRouter.delete('/', async(req, res) => { 
    const data = await Data.findOneAndDelete({ name: req.body.name });
    res.send(data ? true: false );
})

DataRouter.patch('/', async (req, res) => {
    const data = await Data.findOneAndUpdate({name: req.body.name},req.body);
    res.send(data ? true : false);
})

export default DataRouter;
