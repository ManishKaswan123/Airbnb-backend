require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const itemRoutes = require('./routes/itemRoutes');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
    origin: 'http://localhost:3000' , // Replace with your frontend URL
    optionsSuccessStatus: 200, // Some legacy browsers choke on 204
  };
  
app.use(cors(corsOptions));
app.use(express.json());
app.use('/api/user', userRoutes);
app.use('/api/items', itemRoutes);

mongoose.connect('mongodb+srv://manishkaswan88:LVWRMg2RFQePddQ1@cluster0.wkfy7.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
