import express from "express"
import { router as SongRouter } from './Routes/song-router.js'
import dotenv from 'dotenv'
import InitRouter from '../NodeJS/Routes/init-router.js'
import UserRouter from '../NodeJS/Routes/user-router.js'
import OrgRouter from '../NodeJS/Routes/org-router.js'
import { router as AuthRouter } from '../NodeJS/Routes/authenticate-router.js'

dotenv.config();


const app = express()
const port = process.env.PORT || 3000;

// App settings to provide access to request body data
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Frontpage')
})

app.get('/about', (req, res) => {
    res.send('About us')
})

app.post('/song', (req, res) => {
    console.log(req.body);
})

app.get('/Work', (req, res) => {
    res.send('Our work');
})

app.get('/FindUs', (req, res) => {
    res.send('Find us');
})

app.get('/Products', (req, res) => {
    res.send('Our products');
})

app.get('/ProductDetails', (req, res) => {
    res.send('Product details');
})

app.get('/Contact', (req, res) => {
    res.send('Contact us');
})

app.use(SongRouter)
app.use(InitRouter)
app.use(UserRouter)
app.use(OrgRouter)
app.use(AuthRouter)

app.listen(port, () => {
    console.log(`Webserver running on ${port}`);
});