const express = require('express');
const dotenv = require('dotenv');
//if we were to bring in custom logger we made --> const logger = require('./middleware/logger')
const morgan = require('morgan');

//Rpute files
const bootcamps = require('./routes/bootcamps');


//Load env variables
dotenv.config({ path: './config/config.env' });

const app = express();

// if we were to use the custom logger I built --> app.use(logger);
//Instead, usinng Dev logging Middleware (require Morgan). 
 if (process.env.NODE_ENV === 'development') { //Only want this to run if inn the dev environment
    app.use(morgan('dev'));
 }


//Mount routers
app.use('/api/v1/bootcamps', bootcamps);


const PORT = process.env.PORT || 5000;

//Need this to runn the server
app.listen(PORT, console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`));