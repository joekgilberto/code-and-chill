const Game = require('../models/games')

module.exports = {
    index,
    new: newGame
}

async function index(req,res,next){
    const results = await Game.find({})
    console.log(results)
    res.render('games/index',{title: 'All Games', games: results})
}

function newGame(req,res){
    res.render('games/new',{title: 'New Game', errorMsg:''})
}