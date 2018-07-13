import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovie } from '../actions/index';

class MovieSearchContainer extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' }; //initializing state. record the property 'term'

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        console.log(event.target.value);
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();
        //we need to fetch weather data
        this.props.fetchMovie(this.state.term)
        this.setState({ term: '' });
    }

    render() {
        return (
            <div className="container">
                <div className='jumbotron mt-5' >
                    <div className='head-container'>
                        <h1 className='page-title'>Movie Finder</h1>
                        <p className='page-description'>Powered by Hugs</p>
                    </div>
                </div>

                <form onSubmit={this.onFormSubmit} className="input-group">
                    <input
                        onChange={this.onInputChange}
                        placeholder="Enter Movie Title Here"
                        className="form-control mb-5"
                        value={this.props.term}
                    />
                    <span className='input-group-btn'>
                        <button type="submit" className="btn btn-secondary mb-5">Search</button>
                    </span>
                </form>

                <div>
                    <div className="row">
                        {/* <img
                            src={movie.data.Poster}
                            alt={`${movie.data.Title} Poster`}
                            className='movie-poster'
                        /> */}
                        <div className="col card text-center">Movie 1</div>
                        <div className="col card text-center">Movie 2</div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchMovie }, dispatch);
}

export default connect(null, mapDispatchToProps)(MovieSearchContainer);
