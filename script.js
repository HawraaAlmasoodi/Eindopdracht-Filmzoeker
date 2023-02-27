
console.log(movies);

let linkImdb = imdbID => {
    return `https://www.imdb.com/title/${imdbID}`;

};

// creating a and img to add it later to li 
let addAnchorToListItemMovie = film => {
    let anchor = document.createElement("a");
    anchor.href = linkImdb(film.imdbID);
    anchor.setAttribute('target', '_blank');
    let imgListItemMovie = document.createElement("img");
    imgListItemMovie.src = film.Poster;
    anchor.appendChild(imgListItemMovie);
    return anchor;

};
// add movies to DOM ((creating li and adding it to ul and adding a and img to li))
let addMoviesToDom = films => {
    let availableFilmsUl = document.getElementById("availableFilms");
    let movieLiElements = films.map(movie => {
        let listItemMovie = document.createElement("li");
        listItemMovie.appendChild(addAnchorToListItemMovie(movie));
        return listItemMovie;
    });

    movieLiElements.forEach(element => {
        availableFilmsUl.appendChild(element);
    });
};

addMoviesToDom(movies);

// addEventListener to radio button to see which was clicked
document.addEventListener("DOMContentLoaded", function () {
    let btnsFilmFilter = document.querySelectorAll('input[name="film-filter"]');
    Array.from(btnsFilmFilter).forEach(btnFilmFilter => {
        btnFilmFilter.addEventListener("change", function () {
            console.log("You selected " + btnFilmFilter.id);
            handelOnChangeEvent(event);
        });
    });
});

// handelOnChangeEvent and switch statement
let handelOnChangeEvent = event => {
    console.log(event.target.value);
    switch (event.target.value) {
        case "latest-films":
            return filterLatestMovies();
            break;
        case "avengers-films":
            return filterMovies("Avengers");
            break;
        case "X-men-films":
            return filterMovies("X-Men");
            break;
        case "princess-films":
            return filterMovies("Princess");
            break;
        case "batman-films":
            return filterMovies("Batman");
            break;
        default:
            text = "Looking forward to exciting movies";

    };
};

// filter movies
let filterMovies = wordInMovieTitel => {
    let filteredMovies = movies.filter(movie => {
        return (movie.Title).includes(wordInMovieTitel);
    });
    const availableFilmsUl = document.getElementById("availableFilms");
    availableFilmsUl.innerHTML = "";
    addMoviesToDom(filteredMovies);

};

// filter latest movies
let filterLatestMovies = () => {
    let filteredLatestMovies = movies.filter(movie => {
        return movie.Year >= 2014;
    });
    let availableFilmsUl = document.getElementById("availableFilms");
    availableFilmsUl.innerHTML = "";
    addMoviesToDom(filteredLatestMovies);

};





