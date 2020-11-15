"use strict"

const express = require('express')
const routes = express.Router()

const categorias = require('./controllers/categorias')

routes.get('/categorias', categorias.get)
routes.get('/categorias/id', categorias.getId)
routes.post('/categorias', categorias.post)
routes.put('/categorias', categorias.put)
routes.delete('/categorias', categorias.delete)

module.exports = routes