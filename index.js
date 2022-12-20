import express from "express"
import dotenv from 'dotenv'
import { router as AuthRouter } from '../Opgave-MyOwnchoice-Shop/Routes/authenticate-router.js'
import InitRouter from '../Opgave-MyOwnchoice-Shop/Routes/init-router.js'
import ChampRouter from '../Opgave-MyOwnChoice-Shop/Routes/champs-router.js'
import LevelRouter from '../Opgave-MyOwnChoice-Shop/Routes/levels-router.js'
import RoleRouter from '../Opgave-MyOwnChoice-Shop/Routes/roles-router.js'
import ReviewRouter from '../Opgave-MyOwnChoice-Shop/Routes/reviews-router.js'
import DescriptionRouter from '../Opgave-MyOwnChoice-Shop/Routes/description-router.js'
import UserRouter from '../Opgave-MyOwnChoice-Shop/Routes/user-router.js'


dotenv.config();


const app = express()
const port = process.env.PORT || 3000;

// App settings to provide access to request body data
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send(`
    <head>
    <style>
    nav {text-align: center;}

    .dropbtn {
        background-color: #04AA6D;
        color: white;
        padding: 16px;
        font-size: 16px;
        border: none;
      }
      
      .dropdown {
        position: relative;
        display: inline-block;
      }
      
      .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f1f1f1;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
      }
      
      .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
      }
      
      .dropdown-content a:hover {background-color: #ddd;}
      
      .dropdown:hover .dropdown-content {display: block;}
      
      .dropdown:hover .dropbtn {background-color: #3e8e41;}

     </style>
    </head>

    <nav>
        <div class="dropdown">
            <button class="dropbtn">Name</button>
            <div class="dropdown-content">
                <a href="/champs" id="Low">From a to z</a>
                <a href="/champs" id="High">From z to a</a>
            </div>
        </div>
            
        <div class="dropdown">
            <button class="dropbtn">Role</button>
            <div class="dropdown-content">
                <a href="/roles">Mage</a>
                <a href="/roles">Tank</a>
                <a href="/roles">Support</a>
                <a href="/roles">Marksman</a>
                <a href="/roles">Fighter</a>
                <a href="/roles">Assassin</a>
            </div>
        </div>

        <div class="dropdown">
            <button class="dropbtn">Difficulty</button>
            <div class="dropdown-content">
                <a href="/levels">Low</a>
                <a href="/levels">Moderate</a>
                <a href="/levels">High</a>
            </div>
        </div>

        <div class="dropdown">
            <button class="dropbtn">Price</button>
            <div class="dropdown-content">
                <a href="/champs">From Low to High</a>
                <a href="/champs">From High to Low</a>
            </div>
        </div>
    </nav>`)
})

app.use(InitRouter)
app.use(AuthRouter)
app.use(ChampRouter)
app.use(LevelRouter)
app.use(RoleRouter)
app.use(ReviewRouter)
app.use(DescriptionRouter)
app.use(UserRouter)

app.listen(port, () => {
    console.log(`Webserver running on ${port}`);
});