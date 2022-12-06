import express from 'express'
import UserController from '../controller/user-controller.js'
const UserRouter = express.Router()
const Controller = new UserController

UserRouter.get('/users', (req, res) => { Controller.list(req, res) })
UserRouter.get('/users/:id([0-9]*)', (req, res) => { Controller.details(req, res) })
UserRouter.post('/users', (req, res) => { Controller.create(req, res) })


export default UserRouter