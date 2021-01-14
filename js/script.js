let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How much filma have u already seen?', 0);
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How much filma have u already seen?', 0);
    }
}

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const numberOfQuestions = 4;
let a,
    b;

function rememberFilms() {
    for (let i = 0; i < numberOfQuestions; i++) {
        a = prompt ('Last seen film?', '');
        b = prompt ('His Rate?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Too low count of films');
    } else if (personalMovieDB.count >=10 && personalMovieDB.count < 30) {
        alert("U kinoman");
    } else if (personalMovieDB.count > 50) {
        alert('Cool');
    } else {
        alert('error');
    }
}

detectPersonalLevel();

function showMyDb() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}

function writeGenres() {
    for (let i = 0; i < 3; i++) {
        let a = prompt (`Ваш любимый жанр под номером ${i+1}`, '');
        personalMovieDB.genres[i] = a;
    }
}