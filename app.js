const express = require('express')

const mongoose  = require('mongoose')
const studRoute = require('./Route/studRoute')
const teacherRoute = require('./Route/teacherRoute')
const fieldRoute = require ('./Route/fieldRoute')
require('dotenv/config')

const app = express()


app.use(express.json())

app.get('/',(req,res)=>{
    res.send("this is home")
})

app.use('/api/teacher',teacherRoute)

app.use('/api/student',studRoute)

app.use('/api/field',fieldRoute)

app.listen(process.env.PORT)

async function demo(){
    try {
        const data = await mongoose.connect(process.env.DB)
        console.log(data.default.STATES.connected)
    } catch (error) {
        console.log(error.message)
    }
}
demo()