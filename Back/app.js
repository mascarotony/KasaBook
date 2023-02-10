//Utils
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const path = require('path')
const helmet = require('helmet')

//.env config
dotenv.config()

//App
const app = express()

//Routes Utils
const userRoutes = require('./routes/user')

//MongoDB database connect
mongoose
    .connect(
        'mongodb+srv://' +
            process.env.DB_USER +
            ':' +
            process.env.DB_PASSWORD +
            '@kasabook.uwcvdtb.mongodb.net/' +
            process.env.DB_NAME +
            '?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => {
        console.log('Connexion à MongoDB réussie !')
    })
    .catch(() => console.log('Connexion à MongoDB échouée !'))

//Request Headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
    )
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, PATCH, OPTIONS'
    )
    next()
})

//Res parse in JSON
app.use(express.json())

//Routes
app.use('/api', userRoutes)

//Helmet secure
app.use(
    helmet({
        crossOriginEmbedderPolicy: false,
    })
)

//App export
module.exports = app
