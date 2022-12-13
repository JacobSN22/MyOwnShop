import express from 'express'
import DescriptionController from '../controller/description-controller.js'
const DescriptionRouter = express.Router()
const Controller = new DescriptionController

DescriptionRouter.get('/descriptions', (req, res) => { Controller.list(req, res) })
DescriptionRouter.get('/descriptions/:id([0-9]*)', (req, res) => { Controller.details(req, res) })
DescriptionRouter.post('/descriptions', (req, res) => { Controller.create(req, res) })
DescriptionRouter.put('/descriptions/:id([0-9]*)', (req, res) => { Controller.update(req, res) })


export default DescriptionRouter