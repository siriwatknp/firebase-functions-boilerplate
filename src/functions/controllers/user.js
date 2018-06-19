import express from 'express'
import { service } from 'config/service'

const app = express()

app.get('/:id', (req, res) => {
  service.database()
    .ref(`/users/${req.params.id}`)
    .once('value')
    .then((snapshot) => snapshot.val())
    .then((result) => res.send(result))
    .catch((err) => res.send(err))
})

export default app
