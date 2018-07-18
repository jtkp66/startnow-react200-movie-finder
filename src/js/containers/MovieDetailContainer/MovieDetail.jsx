import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MovieDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { movieInfo } = this.props;
        return (
            <div className="w-75 mx-auto">
                <div className="text-center" >
                    <h1>{movieInfo.Title}</h1>
                    <Link to={'/'}>
                            <button type="button" className="btn btn-link"><strong>Back to search results</strong></button>
                        </Link>
                    {/* <br /> */}
                </div>
                <div className="row">
                    <div className="col-3" />
                    <div className="col-6 card p-0">
                        {movieInfo.Poster === 'N/A' ? (
                            <img className="card-img"
                                src='https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/500x735.png'
                                alt='placeholder' />
                        ) : (
                                <img className="card-img" src={movieInfo.Poster} alt="Bummer. No Poster Available." />
                            )}
                    </div>
                    <div className="col-3" />
                </div>
                <div className="row">
                    <div className="col-12 card px-0 border-danger mt-3">
                        <div className="card-header alert-secondary text-dark">
                            {/* <strong>Movie Details</strong> */}
                            <div className="text-center"><h2>Movie Details</h2></div>
                            <div className="mx-auto text-center">
                                <span className="badge badge-pill badge-danger mx-2">{movieInfo.Runtime}</span>
                                <span className="badge badge-pill badge-danger mx-2">{movieInfo.Genre}</span>
                            </div>
                            {/* <Link to={'/'}>
                                <button type="button" className="btn btn-link">Back to search results</button>
                            </Link> */}
                        </div>
                        <div className="card-body pt-1">
                        {/* <div className="text-center"><h3>Movie Details</h3></div>
                            <div className="mx-auto text-center">
                                <span className="badge badge-pill badge-danger mx-2">{movieInfo.Runtime}</span>
                                <span className="badge badge-pill badge-danger mx-2">{movieInfo.Genre}</span>
                            </div> */}
                            <p className="mb-0 mt-1">
                                <strong>Director: </strong>
                                {movieInfo.Director}
                            </p>
                            <p className="my-0">
                                <strong>Actors: </strong>
                                {movieInfo.Actors}
                            </p>
                            <p className="my-0">
                                <strong>Writer: </strong>
                                {movieInfo.Writer}
                            </p>
                            <p className="my-0">
                                {movieInfo.plot}
                            </p>
                            <p className="my-0">
                                <strong>Metascore: </strong>
                                {movieInfo.Metascore}/100
                            </p>
                            <p className="my-0">
                                <strong>IMDB Rating: </strong>
                                {movieInfo.imdbRating}
                            </p>
                        </div>
                        <div className="text-center">
                        <Link to={'/'}>
                            <button type="button" className="btn btn-link text-center">Back to search results</button>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}