import express from 'express'

const app = express()

//  GET -> getting Data,
//  POST -> Sending data to server,
//  PUT -> Updating Data,
//  DELETE -> Deleting Data



app.get('/', (req, res) => {
    res.json({ "message": "Server is up and running" })
})


app.get('/user', (req, res) => {
    res.json({ "users": [{}, {}] })
})


// 127.0.0.1:5000
// localhost:5000
// localhost:3234
// localhost:4000

app.listen(5000)