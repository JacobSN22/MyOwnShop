import express from 'express'
import OrgController from '../controller/org-controller.js'
const OrgRouter = express.Router()
const Controller = new OrgController

OrgRouter.get('/org', (req, res) => { Controller.list(req, res) })
OrgRouter.get('/org/:id([0-9]*)', (req, res) => { Controller.details(req, res) })
OrgRouter.post('/org', (req, res) => { Controller.create(req, res) })
OrgRouter.put('/org/:id([0-9]*)', (req, res) => { Controller.update(req, res) })


export default OrgRouter