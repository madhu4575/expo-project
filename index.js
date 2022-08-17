const express = require('express')
const app = express()
const configureDb = require('./config/database')
const cors = require('cors')
const router = require('./config/routes')
const port = 3055


//setup db
configureDb()
app.use(express.json())
app.use(cors())
app.use(router)

app.listen(port, () => {
    console.log('server is running on port',port)
})