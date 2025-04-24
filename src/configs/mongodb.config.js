import { config } from 'dotenv';
import { MongoClient } from 'mongodb'
config();

const url = process.env.MONGODB_URI;
console.log(process.env.MONGODB_URI)

// Creating mongodb client instance
const client = new MongoClient(url);

export async function connectDb() {
    await client.connect();

    const db = client.db("backend-tutorial");

    const userCollection = db.collection('user');
    const productCollection = db.collection('product');


    const user = await userCollection.insertOne({ name: 'Samrat', age: 20, course: 'CSE' })

    console.log(user)
}
