import express from 'express'
import { UserModel } from '../models/user.model.js'

/**
 * Creating new user
 * method: POST
 * access: public
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
export async function CreateUser(req, res) {
    const { name, roll, course } = req.body

    // Validate params 
    if (!name || !roll || !course) {
        return res.status(403).json({ error: "Missing required parameters" })
    }


    // Creating user doc to database
    const user = await UserModel.create({ name, roll, course })

    // Sending success response to client
    res.status(200).json({ message: "User Created", user })
}

export async function GetAllUser(req, res) {

}

export async function GetUserById(req, res) {
    // userId = req.body.id
}

export async function UpdateUser(req, res) {

}

export async function DeleteUser(req, res) {

}