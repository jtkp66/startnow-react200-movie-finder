//This component doesn't have a need for state, it doesn't record any user interaction
// or re render. so you can make it just a functional component.
import React from 'react';
import MovieListItem from './movie_list_item';
//props is a list of videos from parent component
//they arive as an argument, an object called props(from index.js)
const MovieList = props => {
    const movieItems = props.movies.map(movie => {
        return (
            <MovieListItem
                onMovieSelect={props.onMovieSelect}
                key={movie.etag}
                movie={movie}
            />
        );
    });

    return (
        <ul className="col-md-4 list-group">
            {movieItems}
        </ul>
    );
};

export default MovieList;