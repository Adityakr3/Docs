const express = require('express')
const cors = require('cors')

require("dotenv").config()
require('./model/db')
const app = express()
const PORT = process.env.port || 4444
app.use(cors())
app.use(express.json())

app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`);
})