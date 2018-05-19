import express from 'express'
import mongoose from 'mongoose'
import passport from 'passport'
import bodyParser from 'body-parser'
import routes from './routes'
try {
  const config = require('../config')
} catch (e) {}


const db = process.env.DBPATH || config.mongoDB.dbPath
mongoose.connect(db)

const app = express()
app.use(express.static(process.env.CLIENT_PATH))
app.use(passport.initialize())
app.use(bodyParser.json())
app.use('/', routes)

const HOST = process.env.HOST
const PORT = process.env.PORT || 8080

console.log(`Server running in ${process.env.NODE_ENV} mode`)

function runServer() {
  return new Promise((resolve, reject) => {
    app.listen(PORT, HOST, (err) => {
      if (err) {
        console.error(err)
        reject(err)
      }
      const host = HOST || 'localhost'
      console.log(`Listening on ${host}:${PORT}`)
    })
  })
}

if (require.main === module) {
  runServer()
}
