let numberOfFilms = prompt('How much filma have u already seen?', 0);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastSeenFilm = prompt ('Last seen film?', 'film name');
let lastSeenFilmRate = prompt ('His Rate?', 'rate');

personalMovieDB.movies[lastSeenFilm] = lastSeenFilmRate;
console.log(personalMovieDB.count);
console.log(personalMovieDB.movies);
