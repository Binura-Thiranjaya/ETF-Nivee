const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fakeData = require('./fakeData');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send("Hi there!");
    }
);

// • Insert a Movie
app.post('/movies/add', (req, res) => {
    const { title, year, rating,genre,director,actors } = req.body;
    const newMovie = {
        id: fakeData.length + 1,
        title,
        year,
        rating,
        genre,
        director,
        actors
    };
    fakeData.push(newMovie);
    res.send(newMovie);
});

// • Show all Movies
app.get('/movies', (req, res) => {
    res.send(fakeData.Movie);
    }
);

// • Find a Movie by MID
app.get('/movies/mid/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const movie = fakeData.Movie.find(movie => movie.MID === id);
    res.send(movie);
    }
);

// • Find Movies by Title
app.get('/movies/title/:name', (req, res) => {
    const name = req.params.name;
    const movie = fakeData.Movie.find(movie => movie.Title === name);
    res.send(movie);
    }
);

// • Find Movies by Year
app.get('/movies/year/:year', (req, res) => {
    const year = parseInt(req.params.year);
    const movie = fakeData.Movie.find(movie => movie.Year === year);
    res.send(movie);
    }
);

// • Find Movies where Metascore or rating is greater than a specified value• Find Movies by Genre
app.get('/movies/rating/:rating', (req, res) => {
    const rating = parseInt(req.params.rating);
    const movie = fakeData.Movie.find(movie => movie.Rating === rating);
    res.send(movie);
    }
);

// • Find Movies by Director
app.get('/movies/director/:director', (req, res) => {
    const director = req.params.director;
    const movie = fakeData.Movie.find(movie => movie.Director === director);
    res.send(movie);
    }
);

// • Find Movies by Actor
app.get('/movies/actor/:actor', (req, res) => {
    const actor = req.params.actor;
    const movie = fakeData.Movie.find(movie => movie.Actors === actor);
    res.send(movie);
    }
);

// • Update Movie by MID
app.put('/movies/update/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const movie = fakeData.Movie.find(movie => movie.MID === id);
    movie.Title = req.body.title;
    movie.Year = req.body.year;
    movie.Rating = req.body.rating;
    movie.Genre = req.body.genre;
    movie.Director = req.body.director;
    movie.Actors = req.body.actors;
    res.send(movie);
    }
);


// • Delete Movie by MID
app.delete('/movies/delete/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const movie = fakeData.Movie.find(movie => movie.MID === id);
    const index = fakeData.Movie.indexOf(movie);
    fakeData.Movie.splice(index, 1);
    res.send(movie);
    }
);

// • Delete Movie by Title
app.delete('/movies/delete/title/:name', (req, res) => {
    const name = req.params.name;
    const movie = fakeData.Movie.find(movie => movie.Title === name);
    const index = fakeData.Movie.indexOf(movie);
    fakeData.Movie.splice(index, 1);
    res.send(movie);
    }
);

app.listen(3000, () => {
    console.log('Server listening on port 3000');
    }
);

