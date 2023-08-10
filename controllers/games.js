const Game = require('../models/games');

module.exports = {
    index,
    new: newGame,
    create,
    show,
    delete: deleteOne,
    edit,
    // update
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

async function deleteOne(req,res,next){
    Game.findById(req.params.id).then(function(g){
        Game.deleteOne({_id: g._id}).then(function(){
            res.redirect(`/games`)
        })
        .catch(function (err) {
            console.log(err)
        })
    })
    .catch(function (err) {
        console.log(err)
    })
}

async function edit(req,res,next){
    const results = await Game.findById(req.params.id)
    console.log(results)
    res.render('games/edit',{title: 'Edit Games', game: results})
}