import express from 'express'

const app = express()

//  GET -> getting Data,
//  POST -> Sending data to server,
//  PUT -> Updating Data,
//  DELETE -> Deleting Data



app.get('/', (req, res) => {

    const a = 2;
    const b = 6;

    const minValue = Math.min(a, b)
    const maxValue = Math.max(a, b)

    const floor = Math.floor(1.73)
    const round = Math.round(1.53)
    const sqrt = Math.sqrt(9)
    const pow = Math.pow(3, 3)
    console.log(3 ^ 2)
    console.log(3 ^ 3)



    res.json({ message: "Server is up and running", minValue, maxValue, floor, round, sqrt, pow })
})


app.get('/user', (req, res) => {
    res.json({ "users": [{}, {}] })
})


// 127.0.0.1:5000
// localhost:5000
// localhost:3234
// localhost:4000

app.listen(5000)