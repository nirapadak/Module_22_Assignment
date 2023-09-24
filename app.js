const {readdirSync} = require('fs');
const express = require('express')
const app = express()
const helmet = require('helmet');
const cors = require('cors');
const hpp = require('hpp');
const mongoose = require('mongoose');
// const multer = require('multer');
require('dotenv').config()
const morgan = require('morgan')
const rateLimit = require('express-rate-limit')


const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
	limit: 100,
	standardHeaders: 'draft-7', 
	legacyHeaders: false,
})

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(helmet())
app.use(hpp())
app.use(cors())
app.use(morgan('dev'))
// app.use(multer())
app.use(apiLimiter)



readdirSync('./src/routes').map((file) => app.use('/api/v1/', require(`./src/routes/${file}`)));


mongoose
  .connect(process.env.DATABASE_URl)
  .then(() => {
    console.log(`data base connecting ...`)
  })
  .catch(err => console.log(err))




module.exports = app