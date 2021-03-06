const express = require('express')
const app = express()

const rowdy = require ('rowdy-logger')
const routesReport = rowdy.begin(app)
const pokemonRoutes = require('./routes/pokemonRoutes')
const userRoutes = require('./routes/userRoutes')

app.use(express.json())
app.use(require('cors')())

const PORT = process.env.port || 3001
app.listen(PORT, () => {
    console.log(`port running on ${PORT}`)
    routesReport.print()
})

app.use('/user', userRoutes)
app.use('/pokemon', pokemonRoutes)