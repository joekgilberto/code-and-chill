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
        required: true,
    },
    edition: {
        type: String,
        enum: ['standard', 'deluxe', 'collectors'],
        required: true,
    },
    rating: {
        type: String,
        enum: ['e', 'e10', 't', 'm', 'a', 'rp'],
        required: true,
    },

    
})

module.exports = mongoose.model("Game", movieSchema);