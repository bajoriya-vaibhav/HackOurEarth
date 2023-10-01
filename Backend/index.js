import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import UserRouter from './components/user.js';
import DataRouter from './components/data.js';

mongoose.connect('mongodb://0.0.0.0:27017/');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json())
app.use('/users', UserRouter);
app.use('/data', DataRouter);
app.get('/', (req, res) => {
  res.send("App is working");
})

// Start the server 
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
