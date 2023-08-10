const Game = require('../models/games')

modules.export = {
    index,
    new: newGame
}

async function index(req,res,next){
    const results = await Game.find({})
    console.log(results)
    res.render('index',{title: 'All Games', games: results})
}

function newGame(req,res){
    res.render('new',{title: 'New Game', errorMsg:''})
}