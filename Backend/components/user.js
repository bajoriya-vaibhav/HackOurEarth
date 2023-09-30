import express from 'express';
import mongoose from 'mongoose';
import env from 'dotenv';
import jwt from 'jsonwebtoken';

env.config()

const UserSchema = new mongoose.Schema({
    name: { type: String, unique: true },
    Email: String,
    password: String,
    token: String
})

const User = mongoose.model('users',UserSchema);
const UserRouter = express.Router();

UserRouter.use(express.json())

//user fns
async function addUser(userData){
  try{
    const user = new User(userData);
    await user.save();
  }
  catch(e){ 
    console.log(e.message);
    return false;
  }
  return true;
}

async function getUser(name){
  let user=null;
  try{
    user = await User.findOne({ name: name });
  } catch(e){
    console.log(e.message);
  }
  return user;
}



UserRouter.delete('/logout', async (req, res) => {
    const user = req.body;
    const status = await User.findOneAndUpdate({ name: user.name }, { token: null });
    res.send(status ? true : false); 
})

UserRouter.post('/login', async (req, res) => {
  const username = req.body.name;
  const user = await getUser(username);
  if (user) {
    console.log(user);
    const accessToken = jwt.sign({ name: user.name, Email:user.Email ,password: user.password }, process.env.ACCESS_TOKEN_SECRET);
    const status = await User.findOneAndUpdate({ name: user.name }, { token: accessToken });
    res.json(accessToken);
    return;
  }
  if(user && req.body.password !== user.password){
    console.log("Wrong password!")
    res.send(false);
    return;
  }
  if (user === null)
      console.log("Please signup")
  else res.send(null); // if false , wrong credentials if null, username doesnt exist.

});

UserRouter.post('/signup',async (req,res) => {
    const userData = req.body;
    const accessToken = jwt.sign({ name: userData.name, Email:userData.Email ,password: userData.password }, process.env.ACCESS_TOKEN_SECRET);
    userData.token = accessToken;
    const response = await addUser(userData)
    if (response) {
        console.log(`User with name ${userData.name} added to the database!`)
        res.json(accessToken);
    }
    else res.send(false);
})

export default UserRouter;
