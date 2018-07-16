import React, { Component } from 'react';

class MovieInfo extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        const { movieData } = this.props;
        console.log(movieData)
        return (
            <div className="card-text-center">
                <div className="card-header font-weight-bold">Movie Info</div>
                <div className="card-body">
                    {movieData && movieData.name}
                </div>
            </div>
        );
    }
}