const mongoose = require("mongoose");

const ContentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please add a title"],
    },
    description: {
        type: String,
        required: [true, "Please add a description"],
    },
    image: {
        type: String,
        required: [true, "Please add an image"],
    },
    rating: {
        type: Number,
        required: [true, "Please add a rating"],
    },
    genre: [
        {
            type: String,
            required: [true, "Please add a genre"],
        }
    ],
    votes: {
        type: Number,
        required: [true, "Please add a number of votes"],
    },
    cast : [
        {
            type: String,
            required: [true, "Please add a cast"],
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("content", ContentSchema);