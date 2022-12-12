import express from 'express'
import AuthenticateController from '../controller/authenticate-controller.js'
import verifyToken from '../Middelware/verifytoken.js';
const router = express.Router()

const controller = new AuthenticateController();

router.post('/login', (req, res) => { controller.login(req, res)})

router.get('/protected', verifyToken, (req, res) => { controller.protected(req, res)})  

export { router }

