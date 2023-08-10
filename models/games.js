const mongoose = require('mongoose');
const games = require('../controllers/games');

const Schema = mongoose.Schema;

const gameSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    studio: {
        type: String,
        required: true,
    },
    releaseYear: {
        type: Date,
        default: function () {
            return new Date().getFullYear();
        },
        required: true,
    },
    edition: {
        type: String,
        enum: ["standard", "deluxe", "collectors"],
        required: true,
    },
    rating: {
        type: String,
        enum: ["E", "E10", "T", "M", "A", "RP"],
        required: true,
    },
},
    {
        timestamps: true,
    },
);

module.exports = mongoose.model("Game", gameSchema);