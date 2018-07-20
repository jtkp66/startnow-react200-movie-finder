updateSearch, addMovie, movieDetails;

export function updateSearch(searchTerm) {
    return {
        type: 'UPDATE_SEARCH',
        payload: {searchTerm}
    };
}

export function addMovie(movie) {
    return {
        type: 'ADD_MOVIE',
        payload: movie
    };
}

export function movieDetails(movie) {
    return {
        type: 'MOVIE_DETAILS',
        payload: movie
    };
}