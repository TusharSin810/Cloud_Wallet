import express from 'express'
import {userModel} from './models'
import { Keypair } from '@solana/web3.js';
import jwt from 'jsonwebtoken'

const port = 3000;
const app = express();

app.post("/api/v1/signup", async (req,res) => {
    
    const username = req.body.username
    const password = req.body.password
    
    const keypair = new Keypair();

 
    await userModel.create({
        username,
        password,
        publickey: keypair.publicKey.toString(),
        privatekey: keypair.secretKey.toString(), 
    })
    res.json({
        message: "Sign up"
    })
})

app.post("/api/v1/signin", async (req,res) => {
    
    const username = req.body.username
    const password = req.body.password
   
    const user = await userModel.findOne({
        username:username,
        password: password
    })

    if(user){
        const token = jwt.sign({
            id: user
        })
    }else{
        res.status(403).json({
            message:"Incorrect Credentials"
        })
    }

    res.json({
        message: "Logged In"
    })
})

app.post("/api/v1/txn/sign", (req,res) => {
    res.json({
        message: "Transaction Signed"
    })
})

app.get("/api/v1/txn", (req,res) => {
    res.json({
        message: "Transaction"
    })
})

app.listen(port, () => {
    console.log(`Listening on Port ${port}`)
})