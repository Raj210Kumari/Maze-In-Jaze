const mongoose = require("mongoose")

const LeaderboardSchema = mongoose.Schema({
    userID: String,
    numberOfWins: String
})
const LeaderboardModel = mongoose.model("leaderboard",LeaderboardSchema)

module.exports={
    LeaderboardModel
}