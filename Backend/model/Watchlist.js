const mongoose = require("mongoose");

const WatchlistSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
        required: true,
    },
    list: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "content",
        }
    ]
});

module.exports = mongoose.model("watchlist", WatchlistSchema);