import express from 'express'

/**
 * Creating new user
 * method: POST
 * access: public
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
export async function CreateUser(req, res) {
    const body = req.body
    res.status(200).json({ message: "User Created", body })
}

export async function GetAllUser(req, res) {

}

export async function GetUserById(req, res) {

}

export async function UpdateUser(req, res) {

}

export async function DeleteUser(req, res) {

}