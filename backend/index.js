const express = require('express');
const connectDB = require('./config/db');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/products');
const profileRoute = require('./routes/profile');
const usersRoute = require('./routes/users');
const dotenv = require('dotenv');
const cors = require('cors'); 

dotenv.config();

const app = express();

connectDB();


app.use(express.json());
app.use(cors());


app.use('/api/auth', authRoute);
app.use('/api/products', productRoute);
app.use('/api/profile', profileRoute)
app.use('/api/users', usersRoute)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
