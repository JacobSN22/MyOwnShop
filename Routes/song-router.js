import express from 'express'

const router = express.Router();

router.get('/song', (req, res) => {
    console.log('Kalder /song med GET');
})

router.get('/song/:id([0-9]*)', (req, res) => {
    console.log('Detaljer: Kalder /song med GET')
}) 

router.post('/song', (req, res) => {
    console.log('Opret: Kalder /song med POST')
})

router.put('/song', (req, res) => {
    console.log('Opdater: Kalder /song med PUT')
})

router.delete('/song/:id([0-9]*)', (req, res) => {
    console.log('Slet: Kalder /song med DELETE')
})

export { router }
