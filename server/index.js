const express = require('express')
const sequelize = require('./utils/dbConnect')
const apartmentsRoute = require('./routes/apartments-route')

const app = express()
const PORT = 8000

app.use(express.json({extended: true}))
app.use('/api/apartments/', apartmentsRoute)

async function start() {
    try {
        await sequelize.authenticate()
        await sequelize.sync()

        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()