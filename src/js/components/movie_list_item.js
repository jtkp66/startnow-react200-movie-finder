import React from 'react';

const MovieListItem = ({ movie }) => {
    //const imageUrl = movie

    return (
        <li className="list-group-item">
            <div className="movie-list-media">
                <div>
                    <img className="media-object" />
                </div>
                <div className="media-body">
                    <div className="media-heading">
                    </div>
                </div>
            </div>
        </li>
    )
}

export default MovieListItem;