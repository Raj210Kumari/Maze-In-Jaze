const mongoose = require("mongoose")

const roomSchema = mongoose.Schema({
    roomID:String,
    username1: String,
    userID1: String,
    username2: String,
    userID2: String,
    winner:String,
})
const RoomModel = mongoose.model("room",roomSchema)

module.exports={
    RoomModel
}