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

        // Sending data to a get method
        // Dynamic Route (req.params.id)
        // /user/update/:id
        // http://127.0.0.1:5000/user/update/782323


        // Query Parameter / Search Parameter -> (req.query) 
        // http://127.0.0.1:5000/user/update?id=23

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
        const { name, email, age } = req.body

        // console.log(req)
        console.log(name, email, age)

        res.status(200).json({ message: "New User Created", })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal Server Error" })
    }
})






app.put('/user/update/:id', async (req, res) => {

    try {
        // Getting User id from 'body'
        // const { name, email } = req.body

        // 'Search Params / Query'
        // http://127.0.0.1:5000/user/update?id=23
        // const { id } = req.query

        // Dynamic Route (req.params.id)
        // Getting User id from 'Params'
        const { id } = req.params


        res.status(200).json({ message: "User Updated", id })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal Server Error" })
    }
})



app.delete('/user/delete/:id', async (req, res) => {

    try {
        // Getting User id from 'body'
        // const { id } = req.body

        // 'Search Params / Query'
        // http://127.0.0.1:5000/user/update?id=23
        // const { id } = req.query

        // Dynamic Route (req.params.id)
        // Getting User id from 'Params'
        const { id } = req.params


        res.status(200).json({ message: "User Deleted", id })
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



// GET, POST, PUT, DELETE
// async-await
// try-catch


// .........................
// CURD Operation
// C -> Create
// U -> Update/Edit
// R -> Read/Get/Fetch
// D -> Delete



// ...
// Routes .................
// Get all user     (R)
// Get User By Id   (R)
// Create User      (C)
// Update User      (U)
// Delete User      (D)