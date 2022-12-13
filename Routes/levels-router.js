import express from 'express'
import LevelController from '../controller/levels-controller.js'
const LevelRouter = express.Router()
const Controller = new LevelController

LevelRouter.get('/levels', (req, res) => { Controller.list(req, res) })
LevelRouter.get('/levels/:id([0-9]*)', (req, res) => { Controller.details(req, res) })
LevelRouter.post('/levels', (req, res) => { Controller.create(req, res) })
LevelRouter.put('/levels/:id([0-9]*)', (req, res) => { Controller.update(req, res) })


export default LevelRouter