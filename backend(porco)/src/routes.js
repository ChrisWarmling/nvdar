"use strict"

const express = require('express')
const routes = express.Router()

const categorias = require('./controllers/categorias')
const dias = require('./controllers/dias')
const series = require('./controllers/series')
const exercicios = require('./controllers/exercicios')
const exerSeries = require('./controllers/exer_series')

routes.get('/categorias', categorias.get)
routes.get('/categorias/:id', categorias.getId)
routes.post('/categorias', categorias.post)
routes.put('/categorias/:id', categorias.put)
routes.delete('/categorias/:id', categorias.delete)

routes.get('/dias', dias.get)
routes.get('/dias/:id', dias.getId)
routes.post('/dias', dias.post)
routes.put('/dias/:id', dias.put)
routes.delete('/dias/:id', dias.delete)

routes.get('/series', series.get)
routes.get('/series/:id', series.getId)
routes.post('/series', series.post)
routes.put('/series/:id', series.put)
routes.delete('/series/:id', series.delete)

routes.get('/exercicios',exercicios.get)
routes.get('/exercicios/:id',exercicios.getId)
routes.post('/exercicios',exercicios.post)
routes.put('/exercicios/:id',exercicios.put)
routes.delete('/exercicios/:id',exercicios.delete)

routes.get('/exerseries',exerSeries.get)
routes.get('/exerseries/:id',exerSeries.getId)
routes.post('/exerseries',exerSeries.post)
routes.put('/exerseries/:id',exerSeries.put)
routes.delete('/exerseries/:id',exerSeries.delete)

module.exports = routes