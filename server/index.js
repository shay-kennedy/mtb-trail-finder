import express from 'express'
import mongoose from 'mongoose'
import passport from 'passport'
import bodyParser from 'body-parser'
import config from '../config'
import routes from './routes'


const db = process.env.DBPATH || config.mongoDB.dbPath
mongoose.connect(db)

const app = express()
app.use(express.static(process.env.CLIENT_PATH))
app.use(passport.initialize())
app.use(bodyParser.json())
app.use('/', routes)

const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || 8080

console.log(`Server running in ${process.env.NODE_ENV} mode`)

function runServer() {
  return new Promise((resolve, reject) => {
    app.listen(PORT, HOST, err => {
      if (err) {
        console.error(err)
        reject(err)
      }
      console.log(`Listening on ${HOST}:${PORT}`)
    })
  })
}

if (require.main === module) {
  runServer()
}
