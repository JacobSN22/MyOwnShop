import express from 'express'
import RoleController from '../controller/roles-controller.js'
const RoleRouter = express.Router()
const Controller = new RoleController

RoleRouter.get('/roles', (req, res) => { Controller.list(req, res) })
RoleRouter.get('/roles/:id([0-9]*)', (req, res) => { Controller.details(req, res) })
RoleRouter.post('/roles', (req, res) => { Controller.create(req, res) })
RoleRouter.put('/roles/:id([0-9]*)', (req, res) => { Controller.update(req, res) })


export default RoleRouter