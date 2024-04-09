import express, { json } from 'express'
import cors from 'cors'

import { conection } from "./config/database.js";
import { datesRouter } from './routes/dates.js';

const app = express()
app.use(json())
app.use(cors())
// middleware to disable the x-powered-by header
app.disable('x-powered-by')


try {
    await conection.authenticate()
    console.log('Connection has been established successfully.');
}catch (error) {
    console.error('Unable to connect to the database:', error);
}

app.get('/', (req, res) => {
    res.send('Server in http://localhost:1234')
})
app.use('/dates', datesRouter)

app.listen(1234, () => console.log('Server in http://localhost:1234'))