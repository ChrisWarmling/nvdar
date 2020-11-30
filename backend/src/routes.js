"use strict"

const express = require('express')
const routes = express.Router()

const categorias = require('./controllers/categorias')
const treinos = require('./controllers/treinos')
const series = require('./controllers/series')
const exercicios = require('./controllers/exercicios')
const exerSeries = require('./controllers/exer_series')

routes.get('/categorias', categorias.get)
routes.get('/categorias/:id', categorias.getId)
routes.post('/categorias', categorias.post)
routes.put('/categorias/:id', categorias.put)
routes.delete('/categorias/:id', categorias.delete)

routes.get('/treinos', treinos.get)
routes.get('/treinos/:id', treinos.getId)
routes.post('/treinos', treinos.post)
routes.put('/treinos/:id', treinos.put)
routes.delete('/treinos/:id', treinos.delete)

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