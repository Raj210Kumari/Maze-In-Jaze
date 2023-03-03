const express=require("express")
const cors=require("cors")
const { connect } = require("./Config/db")
require("dotenv").config()

const app=express()
app.use(cors())
app.use(express.json())

app.listen(process.env.port, async()=>{
    try{
        await connect
        console.log("Connected to DB")
    }catch(err){
        console.log('err:', err)
    }
    console.log(`Server is running at PORT ${process.env.port}`)
})
/*
Number 2
 ans = 12
user 1=> 2+3+2
user 2=> 6+5

Backend:
auth:
    userName
    userID : random
gamepage:
    userNames 
center:
    userNames
    winner
Right : leaderboard (number of wins)
*/