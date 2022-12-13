import express from "express"
import dotenv from 'dotenv'
import { router as AuthRouter } from '../Opgave-MyOwnchoice-Shop/Routes/authenticate-router.js'
import InitRouter from '../Opgave-MyOwnchoice-Shop/Routes/init-router.js'
import ChampRouter from '../Opgave-MyOwnChoice-Shop/Routes/champs-router.js'
import LevelRouter from '../Opgave-MyOwnChoice-Shop/Routes/levels-router.js'
import RoleRouter from '../Opgave-MyOwnChoice-Shop/Routes/roles-router.js'
import ReviewRouter from '../Opgave-MyOwnChoice-Shop/Routes/reviews-router.js'


dotenv.config();


const app = express()
const port = process.env.PORT || 3000;

// App settings to provide access to request body data
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send(``)
})

app.use(InitRouter)
app.use(AuthRouter)
app.use(ChampRouter)
app.use(LevelRouter)
app.use(RoleRouter)
app.use(ReviewRouter)

app.listen(port, () => {
    console.log(`Webserver running on ${port}`);
});