const express = require('express');
const connectDB = require('./config/db');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/products');
const dotenv = require('dotenv');
const cors = require('cors'); 

dotenv.config();

const app = express();

connectDB();


app.use(express.json());
app.use(cors());


app.use('/api/auth', authRoute);
app.use('/api/products', productRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
