import express from 'express'
import fs from 'fs'

const app = express()
const PORT = 5000

// Middleware -- 
app.use(express.json())


//  GET -> getting Data,
//  POST -> Sending data to server,
//  PUT/PATCH -> Updating Data,
//  DELETE -> Deleting Data


// 200 -> OK


// 401 -> Unauthorized
// 403 -> Forbidden
// 404 -> Not Found


// 500 -> Internal Server Error






app.get('/', (req, res) => {
    console.log('object')

    res.json({ message: "Server is up and running" })
})




app.get('/user', async (req, res) => {
    try {
        const users = JSON.parse(fs.readFileSync('data/user.json', 'utf-8'))

        res.json({ message: "All Users Fetched", users })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal Server Error" })
    }
})





app.post('/user/create', async (req, res) => {

    try {
        const body = req.body
        console.log(body)

        res.status(200).json({ message: "New User Created", user: body })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal Server Error" })
    }
})



// 127.0.0.1:5000
// localhost:5000
// localhost:3234
// localhost:4000

app.listen(PORT, () => {
    console.log(`\nServer is up & running on http://127.0.0.1:${PORT}`)
})



// GET, POST
// async-await
// try-catch