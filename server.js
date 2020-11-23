const express = require('express');
const dotenv = require('dotenv');

//Rpute files
const bootcamps = require('./routes/bootcamps');


//Load env variables
dotenv.config({ path: './config/config.env' });

const app = express();

//Mount routers
app.use('/api/v1/bootcamps', bootcamps);


const PORT = process.env.PORT || 5000;

//Need this to runn the server
app.listen(PORT, console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`));