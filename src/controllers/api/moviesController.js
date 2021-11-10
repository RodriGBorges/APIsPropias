const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;

const Movies = db.Movie;
const Genres = db.Genre;
const Actors = db.Actor;

const apiMovieController = {
    create: (req, res) => {
        Movies.create({

            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length,
            genre_id: req.body.genre_id

        })
        .then(movie => {
            res.json(movie)
        })
        .catch(err => {
            res.status(500).json({error: err})
        })
        
    },
    destroy: (req, res) => {

        Movies.findByPk(parseInt(req.params.id))
        .then(movie => {

            Movies.destroy({
                where: {id: parseInt(req.params.id)}
            })
            .then(response => {
                res.json(movie)
            })
            .catch(err => {
                res.status(500).json({error: err})
            })
        })

        .catch(err => {
            res.status(500).json({error: err})
        })
    },

}

module.exports = apiMovieController;


/* { 
    "title": "Matrix Reload",
    "rating": "12",
    "awards": "30",
    "release_date": "2009-10-12 12:00:00",
    "length": 150,
    "genre_id": 4
} */