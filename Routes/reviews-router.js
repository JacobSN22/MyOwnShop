import express from 'express'
import ReviewController from '../controller/reviews-controller.js'
const ReviewRouter = express.Router()
const Controller = new ReviewController

ReviewRouter.get('/reviews', (req, res) => { Controller.list(req, res) })
ReviewRouter.get('/reviews/:id([0-9]*)', (req, res) => { Controller.details(req, res) })
ReviewRouter.post('/reviews', (req, res) => { Controller.create(req, res) })
ReviewRouter.put('/reviews/:id([0-9]*)', (req, res) => { Controller.update(req, res) })


export default ReviewRouter