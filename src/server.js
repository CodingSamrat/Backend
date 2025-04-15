import express from 'express'
import { UserRouter } from './routes/user.route.js'
import { ProductRouter } from './routes/product.route.js'

const app = express()
const PORT = 5000

// Middleware -- 
app.use(express.json())

app.get('/api', async (req, res) => {
    res.json({ message: "Server is up and running" })
})

// http://127.0.0.1:5000/api/user
app.use('/api/user', UserRouter)

// http://127.0.0.1:5000/api/product
app.use('/api/produce', ProductRouter)


app.listen(PORT, () => {
    console.log(`\nServer is up & running on http://127.0.0.1:${PORT}`)
})