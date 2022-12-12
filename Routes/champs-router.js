import express from 'express'
import ChampController from '../controller/champs-controller.js'
const ChampRouter = express.Router()
const Controller = new ChampController

ChampRouter.get('/champs', (req, res) => { Controller.list(req, res) })
ChampRouter.get('/champs/:id([0-9]*)', (req, res) => { Controller.details(req, res) })
ChampRouter.post('/champs', (req, res) => { Controller.create(req, res) })
ChampRouter.put('/champs/:id([0-9]*)', (req, res) => { Controller.update(req, res) })


export default ChampRouter