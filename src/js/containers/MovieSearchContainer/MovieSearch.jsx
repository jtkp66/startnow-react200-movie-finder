
import React from 'react';
import { Link } from 'react-router-dom';
import { updateSearch, addMovie, movieInfo } from './MovieSearchActions';

const axios = require('axios');

class MovieSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.getMovies = this.getMovies.bind(this);
        this.selectMovie = this.selectMovie.bind(this);
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.setState({ term: '' });
    }

    handleSearch(e) {
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateSearch(value));
    }
    getMovies() {
        const { dispatch, searchTerm } = this.props;
        const API_KEY = 'f4ed2f4b';
        // const url = `http://www.omdbapi.com/?apikey=${API_KEY}`
        const url = `https://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}&type=movie`;

        axios
            .get(url)
            .then((result) => {
                const list = result.data;

                if (list.Response === 'True') {
                    dispatch(addMovie(list.Search));
                } else {
                    alert('No Search Results');
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
    selectMovie(e) {
        const { dispatch } = this.props;

        const url = `https://www.omdbapi.com/?i=${event.target.id}&apikey=f4ed2f4b`;

        axios
            .get(url)
            .then((result) => {
                const movie = result.data;
                console.log(movie);
                dispatch(movieInfo(movie));
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        const { searchTerm, movieList } = this.props;
        return (
            <div className='container'>
                <div className='jumbotron mt-5 border border-danger'  >
                    <div className='head-container'>
                        <h1 className='page-title'>Movie Finder</h1>
                        <p className='page-description'>Powered by Hugs</p>
                    </div>
                </div>
                <hr />
                <hr />
                <form onSubmit={this.onFormSubmit} className="input-group mb-3 input-group-lg">
                    <input
                    type="text"
                    name="search"
                        onChange={this.handleSearch}
                        placeholder="Enter Movie Title"
                        className=" mb-5 bg-light border border-danger"
                        value={searchTerm}
                    />
                    <span className='input-group-btn'>
                        <button type="submit" className="btn btn-dark mb-5 border border-danger" onClick={this.getMovies}>Search</button>
                    </span>
                </form>
                
                <div className='row mx-0'>
                    {movieList.map(movie => (
                        <div key={movie.imdbID} className='col-4 card border-danger px-4'>
                            {movie.Poster === 'N/A' ? (
                                <img className='card-img-top p-3 bg-light text-dark border-danger' src='https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/500x735.png' alt='placeholder' />
                            ) : (<img className='card-img-top p-3 bg-light text-dark' src={movie.Poster} alt='placeholder' />)}
                            <div className='card-body bg-light text-center'>
                                <div>
                                    <h5>Title: <strong>{movie.Title}</strong></h5>
                                    <p>Year: <strong>{movie.Year}</strong></p>
                                </div>
                                <hr />
                                <a href={`/#/movie/${movie.imdbID}`}>
                                    <button id={movie.imdbID} onClick={this.selectMovie} className="btn btn-secondary btn-lg btn-block border border-danger">More Information</button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <div />
            </div>
        );
    }
}

export default MovieSearch;