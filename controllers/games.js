const Game = require('../models/games');

module.exports = {
    index,
    new: newGame,
    create,
    show,
}

async function index(req,res,next){
    const results = await Game.find({})
    console.log(results)
    res.render('games/index',{title: 'All Games', games: results})
}

function newGame(req,res){
    res.render('games/new',{title: 'New Game', errorMsg:''})
}

async function create(req, res) {
    const gameData = { ...req.body };

    try {
        const createdGame = await Game.create(gameData);
        res.redirect("/games/" + createdGame._id);
    } catch (err) {
        console.log(err);
        res.render("games/new", { errorMsg: err.message });
    }
}

async function show(req, res, next) {
    try {
        const game = await Game.findById(req.params.id);
        console.log(game);

        res.render("games/show", {
            title: "Game Detail",
            game,
        });
    } catch (err) {
        console.log(err);
        next(Error(err));
    }
}