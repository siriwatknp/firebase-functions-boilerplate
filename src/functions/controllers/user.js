import express from 'express'
import { adminService } from 'service'

const app = express()

app.get('/:id', (req, res) => {
  adminService.database()
    .ref(`/users/${req.params.id}`)
    .once('value')
    .then((snapshot) => snapshot.val())
    .then((result) => res.send(result))
    .catch((err) => res.send(err))
})

export default app
