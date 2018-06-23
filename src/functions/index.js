import * as functions from "firebase-functions";
import express from 'express'
import cors from 'cors'
import userController from 'controllers/user'

const app = express()
app.use(cors({ origin: true }))
app.use('/hello', (req, res) => (
  res.send('Welcome to Firebase Cloud Functions')
))
app.use('/users', userController)

exports.api = functions.https.onRequest(app)

