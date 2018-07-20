import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { movieDetails } from '../MovieSearchContainer/MovieSearchActions';

export default class MovieDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { movieDetails } = this.props;
        return (
            <div className="w-75 mx-auto">
                <div className="text-center" >
                    <h1>{movieDetails.Title}</h1>
                    <Link to={'/'}>
                        <button type="button" className="btn btn-link"><strong>Back to Search Results</strong></button>
                    </Link>
                    {/* <br /> */}
                </div>
                <div className="row">
                    <div className="col-3" />
                    <div className="col-6 card p-0">
                        {movieDetails.Poster === 'N/A' ? (
                            <img className="card-img" src='https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/500x735.png' alt='placeholder' />
                        ) : (
                                <img className="card-img" src={movieDetails.Poster} alt="Bummer. No Poster Available." />)}
                    </div>
                    <div className="col-3" />
                </div>
                <div className="row">
                    <div className="col-12 card px-0 border-danger mt-3">
                        <div className="card-header alert-secondary text-dark">
                            {/*  */}
                            <div className="text-center"><h2><strong>Movie Details</strong></h2></div>
                            <div className="mx-auto text-center">
                                <span className="badge badge-pill badge-danger mx-2">{movieDetails.Runtime}</span>
                                <span className="badge badge-pill badge-danger mx-2">{movieDetails.Genre}</span>
                            </div>
                            {/* <Link to={'/'}>
                                <button type="button" className="btn btn-link">Back to search results</button>
                            </Link> */}
                        </div>
                        <div className="card-body pt-1">
                            <p className="mb-0 mt-1">
                                <strong>Director: </strong>
                                {movieDetails.Director}
                            </p>
                            <p className="my-0">
                                <strong>Actors: </strong>
                                {movieDetails.Actors}
                            </p>
                            <p className="my-0">
                                <strong>Writer: </strong>
                                {movieDetails.Writer}
                            </p>
                            <p className="my-0">
                                <strong>Metascore: </strong>
                                {movieDetails.Metascore}/100
                            </p>
                            <p className="my-0">
                                <strong>IMDB Rating: </strong>
                                {movieDetails.imdbRating}
                            </p>
                        </div>
                        <div className="text-center">
                            <Link to={'/'}>
                                <button type="button" className="btn btn-link text-center">Back to Search Results</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}