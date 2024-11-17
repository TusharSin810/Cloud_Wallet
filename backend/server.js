import express from 'express'

const port = 3000;
const app = express();

app.post("/api/v1/signup", (req,res) => {
    res.json({
        message: "Sign up"
    })
})

app.post("/api/v1/signup", (req,res) => {
    res.json({
        message: "Sign up"
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