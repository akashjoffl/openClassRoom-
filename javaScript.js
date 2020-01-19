class Movie {
    constructor (title, director, runtime, watched) {
        this.title = title;
        this.director = director;
        this.runtime = runtime;
        this.watched = watched;
    }
}

let firstMovie = new Movie ("Inception", "Nolan", 69, true);
let secondMovie = new Movie ("STM", "Rajiv Menon", 140, false);

console.log(firstMovie);
console.log(secondMovie);