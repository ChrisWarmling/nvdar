require('dotenv').config()
const port = 3333

const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./routes')
const server = require('http').Server(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use('/', routes)

server.listen(port, ()=>{console.log(`API rodando na porta: ${port}`)})